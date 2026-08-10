-- =============================================================
-- Consultas básicas comentadas (nivel básico)
-- Requisito: ejecutar antes templates/dataset-ejemplo.sql
-- PostgreSQL 16+
-- =============================================================

-- 1. Leer todas las columnas de la tabla
SELECT * FROM empleados;

-- 2. WHERE con operadores de comparación
SELECT nombre, apellido, salario
FROM empleados
WHERE salario >= 3000;

-- 3. LIKE con comodines: % = cualquier secuencia, _ = un carácter
SELECT nombre, apellido, email
FROM empleados
WHERE apellido LIKE 'R%';          -- apellidos que empiezan por R

SELECT nombre, apellido
FROM empleados
WHERE email LIKE '%example.com';   -- termina en example.com

-- 4. IN con lista de valores
SELECT nombre, apellido, departamento_id
FROM empleados
WHERE departamento_id IN (1, 2);   -- Ventas e Ingeniería

-- 5. BETWEEN: rango inclusivo (incluye los extremos)
SELECT nombre, apellido, salario
FROM empleados
WHERE salario BETWEEN 2500 AND 3600;

-- 6. ORDER BY y LIMIT: ranking de salarios
SELECT nombre, apellido, salario
FROM empleados
ORDER BY salario DESC
LIMIT 3;

-- 7. Alias con AS: nombres legibles para el resultado
SELECT nombre AS nombre_empleado,
       salario AS sueldo_bruto
FROM empleados;

-- 8. Funciones mínimas: UPPER y COALESCE
SELECT nombre, UPPER(email) AS email_mayusculas
FROM empleados;

SELECT nombre,
       COALESCE(departamento_id, 0) AS depto_sin_asignar
FROM empleados;

-- 9. INSERT con RETURNING: confirma la fila creada
INSERT INTO empleados (nombre, apellido, email, salario, departamento_id, fecha_ingreso)
VALUES ('Pedro', 'Sanz', 'pedro.sanz@example.com', 3000.00, 1, '2026-08-01')
RETURNING id, nombre, apellido;

-- 10. UPDATE con WHERE preciso y verificación
UPDATE empleados
SET salario = salario * 1.05
WHERE departamento_id = 2
RETURNING id, apellido, salario;

-- 11. DELETE con WHERE preciso y verificación
DELETE FROM empleados
WHERE email = 'pedro.sanz@example.com'
RETURNING id, email;

-- 12. Comprobación final del estado de los datos
SELECT d.nombre AS departamento,
       COUNT(e.id) AS num_empleados,
       ROUND(AVG(e.salario), 2) AS salario_medio
FROM departamentos d
LEFT JOIN empleados e ON e.departamento_id = d.id
GROUP BY d.id, d.nombre
ORDER BY salario_medio DESC;