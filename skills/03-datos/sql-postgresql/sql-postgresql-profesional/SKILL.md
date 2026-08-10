---
name: sql-postgresql-profesional
description: Operación de PostgreSQL en producción: particionado, replicación streaming y failover, tuning con EXPLAIN ANALYZE, PL/pgSQL con triggers, backups pg_dump y PITR, monitorización.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "SQL PostgreSQL"
  nivel: profesional
  stack: "PostgreSQL 16, psql, PL/pgSQL, PgBouncer"
---

# SQL PostgreSQL: nivel profesional

## Qué hace este skill

Opera PostgreSQL a nivel de producción: particionado declarativo de tablas grandes, replicación streaming con planes de failover, tuning con `EXPLAIN ANALYZE` profundo y estadísticas, programación con PL/pgSQL (funciones y triggers), backups lógicos y PITR con WAL, monitorización con `pg_stat_statements` y pooling con PgBouncer. Incluye índices parciales y GIN aplicados a casos reales.

## Cuándo usarlo

- Cuando una tabla supera decenas de millones de filas y el mantenimiento se degrada.
- Cuando hay que garantizar recuperación ante desastre con RPO/RTO definidos.
- Cuando la base va lenta en producción y hay que medir antes de tocar nada.
- Cuando una regla de negocio debe aplicarse a nivel de base (triggers PL/pgSQL).
- Cuando el número de conexiones supera la capacidad del servidor y hay que hacer pooling.

## Requisitos previos

- Niveles `sql-postgresql-basico` y `sql-postgresql-avanzado` o equivalentes.
- PostgreSQL 16 instalado y experiencia administrando su configuración (`postgresql.conf`).
- Un entorno de pruebas (Docker o VM) para probar backups, replicación y failover.
- Conocimientos de red y de control de procesos (systemd o Docker).

## Workflow paso a paso

1. Activa las extensiones de observabilidad: `pg_stat_statements` y revisa `pg_stat_activity`.
2. Establece una política de backups: frecuencia, RPO (pérdida tolerable) y RTO (tiempo de restauración).
3. Configura el backup lógico con `pg_dump` (formato custom) y `pg_dumpall` para roles y globales.
4. Diseña PITR: `wal_level = replica`, `archive_mode = on` y un `archive_command` probado.
5. Ejecuta un `pg_basebackup` inicial y verifica que los WAL se archivan.
6. Particiona una tabla grande por rango de fechas y crea particiones mensuales.
7. Adjunta una partición preexistente (`ATTACH PARTITION`) y verifica el podado del plan.
8. Escribe una función PL/pgSQL que valide stock y un trigger `BEFORE INSERT` que la invoque.
9. Descuenta stock con un trigger `AFTER INSERT` y añade auditoría con otro trigger.
10. Interpreta `EXPLAIN (ANALYZE, BUFFERS, TIMING)` y usa `ANALYZE`/`VACUUM` para estadísticas frescas.
11. Configura la replicación streaming (slot de replicación) y practica un failover con `promote`.
12. Despliega PgBouncer en modo transaction y valida la caída de conexiones servidor.
13. Aplica índices parciales y GIN donde el EXPLAIN lo justifica.
14. Consulta `pg_stat_statements` para identificar las top queries y genera el runbook de backup y restore.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `metodo_particionado` | Método de particionado de la tabla grande | string | no | `range` |
| `clave_particion` | Columna que define el rango de particiones | string | sí | `ocurrido_en` |
| `metodo_backup` | Estrategia de backup principal | string | no | `pitr` |
| `rpo_objetivo` | Pérdida de datos máxima tolerable | string | no | `15 minutos` |
| `wal_level` | Nivel de WAL configurado en postgresql.conf | string | no | `replica` |
| `modo_pooling` | Modo de PgBouncer | string | no | `transaction` |
| `top_queries` | Número de consultas a revisar en pg_stat_statements | integer | no | `10` |
| `idioma` | Idioma de funciones, comentarios y runbook | string | no | `es` |

## Reglas y checklist

- [ ] Existe una política de backup documentada con RPO y RTO medibles.
- [ ] El backup lógico (`pg_dump`) se restaura en otro servidor al menos una vez al mes.
- [ ] PITR configurado: `wal_level`, `archive_mode` y `archive_command` verificados.
- [ ] La restauración con WAL se probó de principio a fin en un entorno de pruebas.
- [ ] La tabla particionada se consulta con podado: el EXPLAIN toca solo las particiones necesarias.
- [ ] Las funciones y triggers PL/pgSQL lanzan excepciones con mensajes claros.
- [ ] El failover de replicación se practicó con `promote` y los clientes reconectaron.
- [ ] PgBouncer limita el número de sesiones servidor y no degrada transacciones multi-sentencia.
- [ ] Los índices parciales/GIN están justificados por EXPLAIN y monitorizados con pg_stat_user_indexes.
- [ ] `pg_stat_statements` se revisa semanalmente para detectar regresiones.

## Ejemplos de prompts

- "Particiona esta tabla de eventos por rango de fechas y muéstrame el plan antes y después."
- "Escribe una función PL/pgSQL que valide el stock y los triggers asociados."
- "Configura PITR y redacta el runbook de restauración a un punto en el tiempo."
- "Analiza este EXPLAIN ANALYZE de una consulta de producción y propón los cambios."
- "Explica cómo escalar con replicación streaming + PgBouncer y cuándo conviene cada uno."

## Plantillas y recursos

- [templates/particionado.sql](templates/particionado.sql) — particionado por rango con ATTACH PARTITION y podado.
- [templates/plpgsql-triggers.sql](templates/plpgsql-triggers.sql) — funciones PL/pgSQL y triggers de validación, descuento y auditoría.
- [templates/monitoreo-backup.sql](templates/monitoreo-backup.sql) — pg_stat_statements, sesiones, backups pg_dump y PITR.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel profesional.