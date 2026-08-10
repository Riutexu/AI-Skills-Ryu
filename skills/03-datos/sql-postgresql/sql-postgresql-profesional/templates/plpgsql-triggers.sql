-- =============================================================
-- Funciones PL/pgSQL y triggers (nivel profesional)
-- Ejemplo: validar y descontar stock en el esquema clientes-pedidos
-- Requisito: cargar el esquema clientes_pedidos de database-programming
-- PostgreSQL 16+
-- =============================================================

-- 1. Función de validación: bloquea líneas sin stock suficiente.
--    FOR UPDATE evita que dos pedidos lean el mismo stock a la vez.
CREATE OR REPLACE FUNCTION f_validar_stock()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
    stock_actual INTEGER;
BEGIN
    SELECT stock INTO stock_actual
    FROM productos
    WHERE id = NEW.producto_id
    FOR UPDATE;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'El producto % no existe', NEW.producto_id;
    END IF;

    IF stock_actual < NEW.cantidad THEN
        RAISE EXCEPTION 'Stock insuficiente para el producto % (disponible: %)',
            NEW.producto_id, stock_actual;
    END IF;

    RETURN NEW;
END;
$$;

-- 2. Trigger BEFORE INSERT: la validación corre antes de insertar
DROP TRIGGER IF EXISTS trg_validar_stock ON detalle_pedido;
CREATE TRIGGER trg_validar_stock
    BEFORE INSERT ON detalle_pedido
    FOR EACH ROW
    EXECUTE FUNCTION f_validar_stock();

-- 3. Trigger AFTER INSERT: descuenta el stock al confirmar la línea
CREATE OR REPLACE FUNCTION f_descontar_stock()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE productos
    SET stock = stock - NEW.cantidad
    WHERE id = NEW.producto_id;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_descontar_stock ON detalle_pedido;
CREATE TRIGGER trg_descontar_stock
    AFTER INSERT ON detalle_pedido
    FOR EACH ROW
    EXECUTE FUNCTION f_descontar_stock();

-- 4. Prueba: un pedido y una línea válida (descuenta 2 unidades)
INSERT INTO pedidos (cliente_id, fecha_pedido, estado, total)
VALUES (1, CURRENT_DATE, 'pendiente', 0.00)
RETURNING id;

INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad, precio_unitario)
VALUES ((SELECT max(id) FROM pedidos), 1, 2, 89.90);

SELECT id, nombre, stock FROM productos WHERE id = 1;

-- 5. Prueba negativa: cantidad imposible -> excepción con mensaje claro
INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad, precio_unitario)
VALUES ((SELECT max(id) FROM pedidos), 1, 9999, 89.90);

-- 6. Auditoría de cambios de stock con trigger AFTER UPDATE
CREATE TABLE IF NOT EXISTS auditoria_stock (
    id            BIGSERIAL PRIMARY KEY,
    producto_id   INTEGER NOT NULL,
    stock_antes   INTEGER NOT NULL,
    stock_despues INTEGER NOT NULL,
    creado_en     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION f_auditar_stock()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO auditoria_stock (producto_id, stock_antes, stock_despues)
    VALUES (NEW.id, OLD.stock, NEW.stock);
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_auditar_stock ON productos;
CREATE TRIGGER trg_auditar_stock
    AFTER UPDATE OF stock ON productos
    FOR EACH ROW
    EXECUTE FUNCTION f_auditar_stock();

-- 7. Cualquier cambio de stock queda registrado
UPDATE productos SET stock = 30 WHERE id = 1;
SELECT * FROM auditoria_stock ORDER BY id DESC;