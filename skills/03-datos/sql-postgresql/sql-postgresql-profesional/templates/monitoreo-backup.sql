-- =============================================================
-- Monitorización y estrategia de backups (nivel profesional)
-- La sección 6 y 7 son comandos de administración comentados:
-- se ejecutan en la shell, no en psql (indicado en cada caso).
-- PostgreSQL 16+
-- =============================================================

-- 1. Habilitar pg_stat_statements. Requiere editar postgresql.conf:
--      shared_preload_libraries = 'pg_stat_statements'
--    y reiniciar el servidor. Luego:
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- 2. Top 10 consultas por tiempo total de ejecución
SELECT calls,
       ROUND(total_exec_time / 1000, 2) AS total_ms,
       ROUND(mean_exec_time / 1000, 2)  AS media_ms,
       rows,
       LEFT(query, 80)                  AS query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;

-- 3. Estado de las sesiones y eventos de espera (detectar contención)
SELECT state,
       count(*)      AS sesiones,
       wait_event_type,
       wait_event
FROM pg_stat_activity
GROUP BY state, wait_event_type, wait_event
ORDER BY sesiones DESC;

-- 4. Tablas con más lecturas secuenciales: candidatas a índice
SELECT relname, seq_scan, seq_tup_read, idx_scan
FROM pg_stat_user_tables
ORDER BY seq_scan DESC
LIMIT 10;

-- 5. Bloqueos en espera (investigar antes de reiniciar nada)
SELECT pid, wait_event_type, wait_event, LEFT(query, 100) AS query
FROM pg_stat_activity
WHERE wait_event_type = 'Lock'
ORDER BY pid;

-- 6. BACKUPS LÓGICOS (ejecutar en la shell, no en psql)
--    pg_dump --dbname=postgresql://usuario:pass@localhost:5432/miapp --format=custom -f backup_custom.dump
--    pg_dump --dbname=postgresql://localhost:5432/miapp --format=plain -f backup_plain.sql
--    pg_dumpall > roles_y_globales.sql   -- roles, tablespaces y settings globales
--
--    RESTAURACIÓN:
--    pg_restore --dbname=miapp --clean --if-exists backup_custom.dump
--    psql -d miapp -f backup_plain.sql

-- 7. PITR (PoInt Time Recovery). Configuración en postgresql.conf:
--      wal_level = replica
--      archive_mode = on
--      archive_command = 'test ! -f /backups/wal/%f && cp %p /backups/wal/%f'
--    En Windows puede usarse:  archive_command = 'copy "%p" "C:\backups\wal\%f"'
--
--    Copia base inicial:
--      pg_basebackup --pgdata=C:\backups\base_backup --format=tar --wal-method=stream
--
--    Restauración a un punto en el tiempo:
--      1. Restaurar el backup base sobre el datadir vacío.
--      2. Copiar los WAL archivados a pg_wal (o configurar restore_command
--         en el archivo recovery.signal).
--      3. Indicar el punto: RECOVERY TARGET TIME en recovery.signal
--         (o usar el comando RESUME WAL en psql si se restaura en vivo).

-- 8. Verificar que el WAL avanza (archivo actual de la secuencia)
SELECT pg_walfile_name(pg_current_wal_lsn());

-- 9. Último backup base conocido del cluster (si se usa pg_rewind)
-- SELECT archived_count, last_archived_wal FROM pg_stat_archiver;