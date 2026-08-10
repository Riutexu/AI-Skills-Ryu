-- =============================================================
-- Estrategia de índices para producción
-- Asume el esquema con soft delete (columna borrado_en) del nivel
-- profesional y las tablas clientes/pedidos/productos.
-- PostgreSQL 16+
-- =============================================================

-- 0. Diagnóstico previo: tablas con más lecturas secuenciales
--    (candidatas a índice). Ejecutarlo ANTES de crear índices.
SELECT relname, seq_scan, seq_tup_read, idx_scan
FROM pg_stat_user_tables
ORDER BY seq_scan DESC
LIMIT 10;

-- 1. Índice compuesto para el filtro más habitual:
--    pedidos de un cliente a partir de una fecha.
CREATE INDEX CONCURRENTLY idx_pedidos_cliente_fecha
    ON pedidos (cliente_id, fecha_pedido DESC);

-- 2. Índice parcial: solo los pedidos activos (soft delete),
--    cubre las rutas de panel sin pagar por las filas borradas.
CREATE INDEX CONCURRENTLY idx_pedidos_estado_activo
    ON pedidos (estado, fecha_pedido DESC)
    WHERE borrado_en IS NULL;

-- 3. Índice parcial para catálogo activo, filtrado por ciudad.
CREATE INDEX CONCURRENTLY idx_clientes_ciudad_activos
    ON clientes (ciudad)
    WHERE borrado_en IS NULL;

-- 4. Búsquedas tipo LIKE '%texto%' con pg_trgm + GIN.
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX CONCURRENTLY idx_productos_nombre_trgm
    ON productos USING GIN (nombre gin_trgm_ops);

-- 5. Verificación de la ruta caliente: debe salir Index Scan
--    o Bitmap Index Scan, nunca Seq Scan sobre tabla grande.
EXPLAIN (ANALYZE, BUFFERS, TIMING)
SELECT id, numero, total, estado
FROM pedidos
WHERE cliente_id = 42
  AND fecha_pedido >= '2026-01-01'
  AND borrado_en IS NULL
ORDER BY fecha_pedido DESC;

-- 6. Seguimiento del uso real de los índices creados.
SELECT indexrelname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
WHERE relname IN ('pedidos', 'clientes', 'productos')
ORDER BY idx_scan DESC;

-- 7. Limpieza de índices no utilizados (verificar antes en staging).
-- DROP INDEX CONCURRENTLY idx_infrautilizado;