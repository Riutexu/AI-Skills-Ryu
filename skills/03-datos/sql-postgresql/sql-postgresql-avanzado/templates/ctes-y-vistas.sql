-- =============================================================
-- CTEs (WITH) y vistas (nivel avanzado)
-- Requisito: ejecutar antes dataset-ejemplo.sql
-- PostgreSQL 16+
-- =============================================================

-- 1. CTE simple: legibilidad y reutilización de un bloque
WITH ventas_mensuales AS (
    SELECT empleado_id, SUM(importe) AS total
    FROM ventas
    WHERE fecha >= '2026-07-01'
    GROUP BY empleado_id
)
SELECT e.nombre, e.apellido, vm.total
FROM ventas_mensuales vm
JOIN empleados e ON e.id = vm.empleado_id
WHERE vm.total > 1000
ORDER BY vm.total DESC;

-- 2. CTEs encadenadas: la segunda referencia a la primera
WITH top_ventas AS (
    SELECT empleado_id, SUM(importe) AS total
    FROM ventas
    GROUP BY empleado_id
    ORDER BY total DESC
    LIMIT 2
),
detalle_top AS (
    SELECT e.nombre, e.apellido, tv.total
    FROM top_ventas tv
    JOIN empleados e ON e.id = tv.empleado_id
)
SELECT * FROM detalle_top;

-- 3. CTE recursiva: jerarquía de categorías de productos
DROP TABLE IF EXISTS categorias CASCADE;
CREATE TABLE categorias (
    id       SERIAL PRIMARY KEY,
    nombre   VARCHAR(60) NOT NULL,
    padre_id INTEGER REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, padre_id) VALUES
    ('Electrónica', NULL),
    ('Informática', 1),
    ('Periféricos', 2),
    ('Monitores',   2),
    ('Audio',       1);

WITH RECURSIVE arbol AS (
    -- ancla: raíces de la jerarquía
    SELECT id, nombre, padre_id, 0 AS nivel, nombre AS ruta
    FROM categorias
    WHERE padre_id IS NULL
    UNION ALL
    -- paso recursivo: hijos del nivel anterior
    SELECT c.id, c.nombre, c.padre_id,
           arbol.nivel + 1,
           arbol.ruta || ' > ' || c.nombre
    FROM categorias c
    JOIN arbol ON c.padre_id = arbol.id
)
SELECT ruta, nivel FROM arbol ORDER BY ruta;

-- 4. Vista: encapsular el informe recurrente de ventas por empleado
CREATE OR REPLACE VIEW v_reporte_ventas AS
SELECT d.nombre                  AS departamento,
       e.nombre || ' ' || e.apellido AS empleado,
       COUNT(v.id)               AS num_ventas,
       COALESCE(SUM(v.importe), 0) AS importe_total
FROM empleados e
JOIN departamentos d ON d.id = e.departamento_id
LEFT JOIN ventas v   ON v.empleado_id = e.id
GROUP BY d.nombre, e.id;

-- 5. La vista se consulta como una tabla normal y con filtros propios
SELECT * FROM v_reporte_ventas
ORDER BY importe_total DESC;

SELECT * FROM v_reporte_ventas
WHERE num_ventas = 0;   -- empleados sin ventas