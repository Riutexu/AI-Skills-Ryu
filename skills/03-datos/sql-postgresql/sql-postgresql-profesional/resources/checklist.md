# Checklist: sql-postgresql-profesional

## Particionado

- [ ] La tabla particionada tiene la clave de partición dentro de la PRIMARY KEY.
- [ ] Las particiones mensuales cubren rangos contiguos sin solaparse.
- [ ] `ATTACH PARTITION` incorpora la partición preexistente sin errores.
- [ ] El EXPLAIN confirma el podado: solo se accede a las particiones necesarias.
- [ ] El índice de la tabla padre se replica a las particiones.

## PL/pgSQL y triggers

- [ ] La función de validación lanza excepciones con mensajes claros.
- [ ] El trigger BEFORE bloquea la línea sin stock suficiente.
- [ ] El trigger AFTER descuenta el stock correctamente.
- [ ] La auditoría registra cada cambio de stock con valores anteriores y nuevos.
- [ ] Comprendo la diferencia entre BEFORE y AFTER y entre FOR EACH ROW y FOR EACH STATEMENT.

## Backups y PITR

- [ ] `pg_dump` en formato custom funciona y se restaura con `pg_restore --clean`.
- [ ] `pg_dumpall` preserva roles y configuración global.
- [ ] `wal_level = replica` y `archive_mode = on` están activos.
- [ ] El `archive_command` copia WALs y el archivo avanza (verificado con `pg_stat_archiver`).
- [ ] Ejecuté `pg_basebackup` al menos una vez y documenté la restauración.

## Monitorización y tolerancia a fallos

- [ ] `pg_stat_statements` identifica las top 10 consultas por tiempo.
- [ ] Identifiqué tablas con alto `seq_scan` y decidí si necesitan índice.
- [ ] Detecté bloqueos en espera con `wait_event_type = 'Lock'`.
- [ ] Probé un failover con replicación streaming y los clientes reconectaron.
- [ ] Redacté un runbook con RPO y RTO medibles y probado al menos una vez.