-- =============================================================
-- Particionado por rango de fechas (nivel profesional)
-- PostgreSQL 16+
-- =============================================================

DROP TABLE IF EXISTS eventos CASCADE;

-- 1. Tabla particionada declarativa: la clave de partición (ocurrido_en)
--    debe formar parte de la clave primaria.
CREATE TABLE eventos (
    id          BIGSERIAL,
    tipo        VARCHAR(40) NOT NULL,
    ocurrido_en TIMESTAMPTZ NOT NULL,
    detalle     JSONB,
    PRIMARY KEY (id, ocurrido_en)
) PARTITION BY RANGE (ocurrido_en);

-- 2. Particiones mensuales: cada una cubre un rango [inicio, fin)
CREATE TABLE eventos_2026_06 PARTITION OF eventos
    FOR VALUES FROM ('2026-06-01') TO ('2026-07-01');
CREATE TABLE eventos_2026_07 PARTITION OF eventos
    FOR VALUES FROM ('2026-07-01') TO ('2026-08-01');
CREATE TABLE eventos_2026_08 PARTITION OF eventos
    FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');

-- 3. Índices sobre la tabla padre: se replican a todas las particiones
CREATE INDEX idx_eventos_ocurrido ON eventos (ocurrido_en);

-- 4. El router de particionado dirige cada fila a su partición
INSERT INTO eventos (tipo, ocurrido_en, detalle) VALUES
    ('login',  '2026-06-15 10:00:00+00', '{"origen": "web"}'),
    ('login',  '2026-07-02 09:30:00+00', '{"origen": "movil"}'),
    ('compra', '2026-08-05 12:45:00+00', '{"importe": 89.9}');

-- 5. Verificación: cada partición contiene sus filas
SELECT tableoid::regclass AS particion, count(*)
FROM eventos
GROUP BY 1
ORDER BY 1;

-- 6. Podado de particiones: el plan solo toca la partición necesaria
EXPLAIN
SELECT * FROM eventos
WHERE ocurrido_en >= '2026-07-01' AND ocurrido_en < '2026-08-01';

-- 7. Adjuntar una partición preexistente (práctica habitual para
--    incorporar tablas ya cargadas o evitar bloqueos largos)
CREATE TABLE eventos_2026_09 (LIKE eventos INCLUDING ALL);
ALTER TABLE eventos ATTACH PARTITION eventos_2026_09
    FOR VALUES FROM ('2026-09-01') TO ('2026-10-01');

-- 8. Nuevas filas ya caen en las particiones adjuntadas
INSERT INTO eventos (tipo, ocurrido_en, detalle)
VALUES ('compra', '2026-09-01 10:00:00+00', '{"importe": 45.0}');

SELECT tableoid::regclass AS particion, count(*)
FROM eventos
GROUP BY 1
ORDER BY 1;