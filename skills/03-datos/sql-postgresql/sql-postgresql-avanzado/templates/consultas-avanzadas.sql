-- =============================================================
-- Joins múltiples y subconsultas (nivel avanzado)
-- Requisito: ejecutar antes dataset-ejemplo.sql
-- PostgreSQL 16+
-- =============================================================

-- Tabla complementaria: ventas por empleado
DROP TABLE IF EXISTS ventas CASCADE;
CREATE TABLE ventas (
    id          SERIAL PRIMARY KEY,
    empleado_id INTEGER NOT NULL REFERENCES empleados(id),
    importe     NUMERIC(10, 2) NOT NULL CHECK (importe > 0),
    fecha       DATE NOT NULL
);

INSERT INTO ventas (empleado_id, importe, fecha) VALUES
    (1, 1500.00, '2026-07-01'),
    (1,  800.00, '2026-07-15'),
    (4, 2100.00, '2026-07-03'),
    (2,  990.00, '2026-07-10');

-- 1. INNER JOIN de tres tablas: venta -> empleado -> departamento
SELECT e.nombre, e.apellido, d.nombre AS departamento, v.importe, v.fecha
FROM ventas v
JOIN empleados e     ON e.id = v.empleado_id
JOIN departamentos d ON d.id = e.departamento_id
ORDER BY v.fecha;

-- 2. LEFT JOIN: cada empleado aparece aunque no tenga ventas
SELECT e.nombre, e.apellido, COUNT(v.id) AS num_ventas
FROM empleados e
LEFT JOIN ventas v ON v.empleado_id = e.id
GROUP BY e.id, e.nombre, e.apellido
ORDER BY num_ventas DESC;

-- 3. Subconsulta escalar: salario frente a la media del equipo
SELECT e.nombre, e.apellido, e.salario,
       ROUND((SELECT AVG(salario) FROM empleados), 2) AS media_empresa,
       (e.salario - (SELECT AVG(salario) FROM empleados)) AS diferencia
FROM empleados e
ORDER BY diferencia DESC;

-- 4. EXISTS: empleados con al menos una venta superior a 1000
SELECT e.nombre, e.apellido
FROM empleados e
WHERE EXISTS (
    SELECT 1 FROM ventas v
    WHERE v.empleado_id = e.id AND v.importe > 1000
);

-- 5. NOT EXISTS: departamentos sin empleados por encima de 3000
SELECT d.nombre AS departamento
FROM departamentos d
WHERE NOT EXISTS (
    SELECT 1 FROM empleados e
    WHERE e.departamento_id = d.id AND e.salario > 3000
);