-- =============================================================
-- Ejemplos comentados de SQL CRUD sobre el esquema clientes-pedidos
-- Requisito: ejecutar antes templates/schema.sql
-- PostgreSQL 16+
-- =============================================================

-- 1. INSERT: crear registros. RETURNING muestra las filas creadas.
INSERT INTO clientes (nombre, email, telefono, ciudad)
VALUES ('Luis Gómez', 'luis.gomez@example.com', '555-0199', 'Sevilla')
RETURNING id, nombre, creado_en;

-- Inserción múltiple de varias filas en una sola sentencia
INSERT INTO productos (nombre, precio, stock) VALUES
    ('Auriculares bluetooth', 59.00,  40),
    ('Base portátil',         45.50,  18)
RETURNING id, nombre;

-- 2. SELECT: leer registros con filtros y orden
SELECT id, nombre, email, ciudad
FROM clientes
WHERE ciudad = 'Madrid'
ORDER BY nombre;

-- Rangos con BETWEEN (inclusivo en ambos extremos)
SELECT id, nombre, precio
FROM productos
WHERE precio BETWEEN 20 AND 100
ORDER BY precio DESC;

-- 3. UPDATE: modificar registros con un WHERE preciso.
--    RETURNING confirma qué filas cambiaron y sus valores nuevos.
UPDATE productos
SET stock = stock - 1
WHERE id = 1
RETURNING id, nombre, stock;

UPDATE pedidos
SET estado = 'entregado', total = 119.40
WHERE id = 1 AND cliente_id = 1
RETURNING id, estado, total;

-- 4. DELETE: eliminar registros. El detalle debe borrarse antes que
--    el pedido (o usar el CASCADE declarado en el esquema).
DELETE FROM detalle_pedido WHERE pedido_id = 3;   -- primero el detalle
DELETE FROM pedidos WHERE id = 3 AND estado = 'pendiente';

-- 5. DELETE seguro: nunca borrar un cliente con pedidos asociados.
DELETE FROM clientes
WHERE NOT EXISTS (
    SELECT 1 FROM pedidos WHERE pedidos.cliente_id = clientes.id
)
RETURNING id, email;

-- 6. Consulta de comprobación final: estado de la base tras los cambios
SELECT c.nombre, COUNT(p.id) AS num_pedidos
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nombre
ORDER BY num_pedidos DESC;