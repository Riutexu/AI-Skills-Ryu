-- =============================================================
-- Schema de ejemplo: clientes, pedidos y productos (3FN)
-- PostgreSQL 16+
-- Normalización: 1FN (atributos atómicos), 2FN (sin dependencias
-- parciales), 3FN (sin dependencias transitivas).
-- =============================================================

-- 0. Limpieza en el orden de dependencias: primero el detalle,
--    después las tablas que dependen y al final los maestros.
DROP TABLE IF EXISTS detalle_pedido CASCADE;
DROP TABLE IF EXISTS pedidos CASCADE;
DROP TABLE IF EXISTS productos CASCADE;
DROP TABLE IF EXISTS clientes CASCADE;

-- 1. Entidad raíz: clientes
CREATE TABLE clientes (
    id          SERIAL PRIMARY KEY,          -- clave primaria autoincremental
    nombre      VARCHAR(100) NOT NULL,
    email       VARCHAR(150) NOT NULL UNIQUE,
    telefono    VARCHAR(20),
    ciudad      VARCHAR(80)  NOT NULL,
    creado_en   TIMESTAMPTZ  NOT NULL DEFAULT now()
);

-- 2. Entidad dependiente: pedidos (relación 1:N con clientes)
CREATE TABLE pedidos (
    id            SERIAL PRIMARY KEY,
    cliente_id    INTEGER NOT NULL REFERENCES clientes(id)
                          ON DELETE RESTRICT, -- un cliente con pedidos no se borra
    fecha_pedido  DATE NOT NULL DEFAULT CURRENT_DATE,
    estado        VARCHAR(20) NOT NULL DEFAULT 'pendiente'
                  CHECK (estado IN ('pendiente', 'pagado', 'enviado',
                                    'entregado', 'cancelado')),
    total         NUMERIC(10, 2) NOT NULL CHECK (total >= 0)
);

-- 3. Entidad raíz: productos
CREATE TABLE productos (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(120) NOT NULL,
    precio  NUMERIC(10, 2) NOT NULL CHECK (precio > 0),
    stock   INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0)
);

-- 4. Tabla puente: relación N:M entre pedidos y productos.
--    Almacena el precio unitario en el momento de la venta.
CREATE TABLE detalle_pedido (
    pedido_id       INTEGER NOT NULL REFERENCES pedidos(id)
                    ON DELETE CASCADE,        -- al borrar el pedido, su detalle
    producto_id     INTEGER NOT NULL REFERENCES productos(id)
                    ON DELETE RESTRICT,
    cantidad        INTEGER NOT NULL CHECK (cantidad > 0),
    precio_unitario NUMERIC(10, 2) NOT NULL,
    PRIMARY KEY (pedido_id, producto_id)      -- clave compuesta
);

-- 5. Datos de prueba
INSERT INTO clientes (nombre, email, telefono, ciudad) VALUES
    ('María López',  'maria.lopez@example.com',  '555-0101', 'Madrid'),
    ('Carlos Ruiz',  'carlos.ruiz@example.com',  '555-0102', 'Barcelona'),
    ('Ana Torres',   'ana.torres@example.com',   NULL,       'Valencia');

INSERT INTO productos (nombre, precio, stock) VALUES
    ('Teclado mecánico',     89.90, 25),
    ('Ratón inalámbrico',    29.50, 60),
    ('Monitor 24 pulgadas', 179.00, 12);

INSERT INTO pedidos (cliente_id, fecha_pedido, estado, total) VALUES
    (1, '2026-07-10', 'entregado', 119.40),
    (2, '2026-07-12', 'pendiente', 208.50),
    (3, '2026-07-15', 'enviado',    89.90);

INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad, precio_unitario) VALUES
    (1, 1, 1,  89.90),
    (1, 2, 1,  29.50),
    (2, 3, 1, 179.00),
    (2, 2, 1,  29.50),
    (3, 1, 1,  89.90);

-- 6. Verificación: pedidos por cliente (usa LEFT JOIN para incluir
--    a los clientes que aún no tienen pedidos)
SELECT c.nombre,
       COUNT(p.id)                  AS num_pedidos,
       COALESCE(SUM(p.total), 0.00) AS importe_total
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nombre
ORDER BY importe_total DESC;