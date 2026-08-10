-- =============================================================
-- Consultas avanzadas sobre el esquema clientes-pedidos
-- Joins, agrupaciones, transacciones y EXPLAIN
-- Requisito: ejecutar antes templates/schema.sql (nivel básico)
-- PostgreSQL 16+
-- =============================================================

-- 1. INNER JOIN: solo filas con coincidencia en ambas tablas
SELECT c.nombre, p.id AS pedido_id, p.estado, p.total
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
ORDER BY p.fecha_pedido DESC;

-- 2. LEFT JOIN + agregados: todos los clientes, incluso sin pedidos
SELECT c.nombre,
       COUNT(p.id)                  AS num_pedidos,
       COALESCE(SUM(p.total), 0.00) AS importe_total
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nombre
ORDER BY importe_total DESC;

-- 3. Doble join para recorrer la relación N:M a través de la tabla puente
SELECT c.nombre        AS cliente,
       pr.nombre       AS producto,
       dp.cantidad,
       dp.precio_unitario,
       (dp.cantidad * dp.precio_unitario) AS importe_linea
FROM detalle_pedido dp
JOIN pedidos   p  ON p.id  = dp.pedido_id
JOIN clientes  c  ON c.id  = p.cliente_id
JOIN productos pr ON pr.id = dp.producto_id;

-- 4. GROUP BY + HAVING: clientes recurrentes (2+ pedidos y 100+ en total)
SELECT p.cliente_id,
       COUNT(*)              AS num_pedidos,
       SUM(p.total)          AS total_acumulado
FROM pedidos p
GROUP BY p.cliente_id
HAVING COUNT(*) >= 2 AND SUM(p.total) > 100
ORDER BY total_acumulado DESC;

-- 5. Agregados con AVG y alias sobre el detalle
SELECT producto_id,
       COUNT(*)              AS veces_vendido,
       AVG(precio_unitario)  AS precio_medio,
       SUM(cantidad)         AS unidades_vendidas
FROM detalle_pedido
GROUP BY producto_id
ORDER BY unidades_vendidas DESC;

-- 6. Transacción ACID: crear pedido, insertar detalle y descontar stock.
--    Todo se confirma (o revierte) en bloque.
BEGIN;

WITH nuevo_pedido AS (
    INSERT INTO pedidos (cliente_id, fecha_pedido, estado, total)
    VALUES (1, CURRENT_DATE, 'pendiente', 89.90)
    RETURNING id
)
INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad, precio_unitario)
SELECT id, 1, 1, 89.90 FROM nuevo_pedido;

UPDATE productos SET stock = stock - 1 WHERE id = 1;

COMMIT;

-- 7. ROLLBACK: deshacer un cambio no confirmado
BEGIN;
UPDATE productos SET stock = stock + 100 WHERE id = 2;
SELECT id, stock FROM productos WHERE id = 2;   -- el incremento se ve aquí
ROLLBACK;                                        -- pero no se persiste
SELECT id, stock FROM productos WHERE id = 2;   -- stock original

-- 8. EXPLAIN básico: comparación antes y después del índice
EXPLAIN SELECT * FROM pedidos WHERE cliente_id = 2;

CREATE INDEX idx_pedidos_cliente ON pedidos (cliente_id);

EXPLAIN SELECT * FROM pedidos WHERE cliente_id = 2;