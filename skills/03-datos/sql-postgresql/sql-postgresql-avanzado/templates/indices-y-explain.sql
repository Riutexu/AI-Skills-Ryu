-- =============================================================
-- Índices B-tree, EXPLAIN y JSONB (nivel avanzado)
-- Requisito: ejecutar antes dataset-ejemplo.sql
-- PostgreSQL 16+
-- =============================================================

-- 1. Plan sin índice: casi seguro Seq Scan sobre empleados
EXPLAIN SELECT * FROM empleados WHERE apellido = 'Ruiz';

-- 2. Crear índice B-tree (es el tipo por defecto de CREATE INDEX)
CREATE INDEX idx_empleados_apellido ON empleados (apellido);

-- 3. Plan con índice: ahora Index Scan
EXPLAIN SELECT * FROM empleados WHERE apellido = 'Ruiz';

-- 4. EXPLAIN ANALYZE con buffers: costes reales y filas efectivas
EXPLAIN (ANALYZE, BUFFERS, TIMING)
SELECT e.apellido, COUNT(v.id)
FROM empleados e
LEFT JOIN ventas v ON v.empleado_id = e.id
WHERE e.salario > 2800
GROUP BY e.id, e.apellido;

-- 5. Índice compuesto para el filtro habitual por empleado y fecha
CREATE INDEX idx_ventas_empleado_fecha ON ventas (empleado_id, fecha DESC);

EXPLAIN ANALYZE
SELECT * FROM ventas
WHERE empleado_id = 1 AND fecha >= '2026-07-01';

-- 6. JSONB: columna, operadores e índice GIN
ALTER TABLE empleados ADD COLUMN metadatos JSONB DEFAULT '{}';

UPDATE empleados SET metadatos = '{"dispositivo": "portatil", "es_remoto": true}'  WHERE id = 1;
UPDATE empleados SET metadatos = '{"dispositivo": "sobremesa", "es_remoto": false}' WHERE id = 2;
UPDATE empleados SET metadatos = '{"dispositivo": "portatil", "es_remoto": true}'  WHERE id = 4;

-- -> extrae como JSONB, ->> extrae como texto
SELECT nombre, metadatos->>'dispositivo' AS dispositivo
FROM empleados
WHERE metadatos @> '{"es_remoto": true}';

-- Índice GIN para acelerar las búsquedas con @> e ? 
CREATE INDEX idx_empleados_metadatos_gin ON empleados USING GIN (metadatos);

-- El plan debe usar Bitmap Index Scan sobre el GIN
EXPLAIN SELECT * FROM empleados WHERE metadatos @> '{"es_remoto": true}';

-- 7. Consulta JSONB con múltiples condiciones
SELECT nombre, metadatos
FROM empleados
WHERE metadatos @> '{"dispositivo": "portatil"}'
  AND metadatos ->> 'es_remoto' = 'true';