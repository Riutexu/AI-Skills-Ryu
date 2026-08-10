# SQL PostgreSQL

Ruta de aprendizaje de SQL aplicado a PostgreSQL, desde las consultas esenciales hasta la operación de bases de datos en producción. Incluye un dataset de ejemplo reutilizable, consultas comentadas, CTEs, vistas, transacciones, índices, particionado, PL/pgSQL y estrategias de backup y monitorización. Todo el contenido es SQL real, ejecutable en PostgreSQL 16.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `sql-postgresql-basico` | Básico | SELECT con WHERE/ORDER BY/LIMIT, INSERT/UPDATE/DELETE, operadores LIKE/IN/BETWEEN, alias, funciones UPPER/COALESCE y uso de psql |
| `sql-postgresql-avanzado` | Avanzado | Joins múltiples, subconsultas, CTEs (WITH), vistas, transacciones y aislamiento, índices B-tree, EXPLAIN básico y tipos JSONB |
| `sql-postgresql-profesional` | Profesional | Particionado, replicación streaming y failover, tuning con EXPLAIN ANALYZE, PL/pgSQL con funciones y triggers, backups pg_dump y PITR, pg_stat_statements y pgbouncer |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| Motor | PostgreSQL 16 | PostgreSQL 16 | PostgreSQL 16 + PgBouncer |
| Consultas | Filtros, orden y CRUD | Joins, subconsultas, CTEs | Tuning con EXPLAIN ANALYZE |
| Estructuras | Tablas simples | Vistas y JSONB | Particionado y replicación |
| Programación | Sin programación | Sin programación | PL/pgSQL: funciones y triggers |
| Operación | psql básico | psql avanzado | Backups PITR, pg_stat_statements |
| Aislamiento | Conceptos | Niveles de aislamiento | Concurrencia real y failover |

## Instalación

Copia el tema completo (o solo un nivel) en la biblioteca de skills de opencode:

```bash
# Por proyecto: la carpeta .opencode/skills del repositorio
cp -r "C:\Users\hecto\Downloads\skills\03-datos\sql-postgresql" .opencode/skills/

# Global para el usuario actual
cp -r "C:\Users\hecto\Downloads\skills\03-datos\sql-postgresql" "$HOME/.config/opencode/skills/"
```

En PowerShell usa `Copy-Item -Recurse` si el comando `cp` no está disponible.

## Ruta de aprendizaje

1. **`sql-postgresql-basico`** — ejecuta el dataset de empleados y departamentos y practica las consultas esenciales sobre él.
2. **`sql-postgresql-avanzado`** — domina joins múltiples, subconsultas y CTEs, y entiende índices y EXPLAIN con un plan real.
3. **`sql-postgresql-profesional`** — opera PostgreSQL: particiona tablas, escribe funciones en PL/pgSQL, configura backups PITR y monitoriza consultas.

## Referencias clave

- PostgreSQL Documentation: <https://www.postgresql.org/docs/>
- PG Exercises (ejercicios de SQL con verificación): <https://pgexercises.com/>
- SQLBolt (tutorial interactivo de SQL): <https://sqlbolt.com/>
- PostgreSQL Wiki: <https://wiki.postgresql.org/>
- PgBouncer Documentation: <https://www.pgbouncer.org/>
- Guía de EXPLAIN de PostgreSQL: <https://www.postgresql.org/docs/current/using-explain.html>