---
name: database-programming-profesional
description: Modelado de datos de producción con soft delete, timestamps y enums; migraciones avanzadas con Prisma; caching con Redis, connection pooling y solución de consultas N+1.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "Database Programming"
  nivel: profesional
  stack: "SQL, PostgreSQL 16, Prisma ORM, Redis, Node.js"
---

# Programación de bases de datos: nivel profesional

## Qué hace este skill

Aplica prácticas de producción al modelado y al acceso a datos: convenciones de esquema (soft delete, timestamps, enums), migraciones revisadas con Prisma, estrategia de índices validada con `EXPLAIN`, connection pooling, caching con Redis para consultas calientes y eliminación de las consultas N+1 con `include`/`select`. Incluye views y aliases para informes mantenibles.

## Cuándo usarlo

- Cuando el esquema pasa de desarrollo a producción y necesita convenciones auditables.
- Cuando la API responde lento por consultas N+1 o falta de índices.
- Cuando quieres cachear consultas calientes sin romper la consistencia.
- Cuando el pool de conexiones es cuello de botella (agotamiento de conexiones PostgreSQL).
- Cuando los informes frecuentes se repiten como SQL ad hoc en lugar de vistas.

## Requisitos previos

- Niveles `database-programming-basico` y `database-programming-avanzado` o equivalentes.
- PostgreSQL 16, Node.js 20+ y un proyecto Prisma en marcha.
- Docker disponible para Redis (o una instancia Redis local).
- Conocimientos básicos de deployment y variables de entorno.

## Workflow paso a paso

1. Audita el modelo actual y añade convenciones de producción: `creadoEn`, `actualizadoEn` (`@updatedAt`) y `borradoEn` nullable para soft delete.
2. Sustituye los strings de estado por enums del schema (`EstadoPedido`, `PerfilUsuario`) para dominios cerrados.
3. Decide la política de borrado por entidad: hard delete, soft delete con filtro explícito o desactivación lógica con `activo`.
4. Crea la migración con `npx prisma migrate dev` y revisa el SQL generado en `migration.sql` antes de aplicarlo.
5. Añade `@@index` estratégicos en el schema para los patrones de consulta calientes (cliente+fecha, estado+fecha).
6. Detecta consultas N+1 con logs de Prisma (`log: ['query']`) o con `EXPLAIN ANALYZE` en la base.
7. Elimina N+1 con `include`/`select` bien formados o consultas planas sin dejar de tipar el resultado.
8. Configura el pool: `PrismaClient({ connection_limit: X })` coherente con el límite de PgBouncer en modo transaction.
9. Cachea con Redis en modo cache-aside: clave por parámetros de la query, TTL definido e invalidación al escribir.
10. Crea views en PostgreSQL para los informes más repetidos y consúltalas con `$queryRaw` cuando aplique.
11. Usa alias en SQL y nombres descriptivos con `select` para resultados legibles sin renombrar columnas.
12. Valida la estrategia de índices con `EXPLAIN ANALYZE` (Index Scan en rutas calientes, no Seq Scan).
13. Prueba degradación: si Redis falla, la consulta debe caer a PostgreSQL sin romper el endpoint.
14. Ejecuta `resources/checklist.md` y documenta el resultado en el README del servicio.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `estrategia_borrado` | Política de borrado por entidad | string | no | `soft_delete` |
| `capa_cache` | Capa de caché para consultas calientes | string | no | `redis` |
| `ttl_cache` | Segundos de vida de las claves en caché | integer | no | `300` |
| `indices_estrategicos` | Columnas de los índices compuestos, separadas por coma | string | sí | `clienteId,creadoEn` |
| `limite_pool` | Límite de conexiones del pool de Prisma | integer | no | `10` |
| `modo_consulta` | Modo de lectura para evitar N+1 | string | no | `include` |
| `enums_necesarios` | Dominios cerrados que pasan a enum, separados por coma | string | sí | `estado_pedido,perfil_usuario` |
| `motor` | Motor de base de datos objetivo | string | no | `postgresql` |

## Reglas y checklist

- [ ] Timestamps (`createdAt`, `updatedAt`) y soft delete consistentes en las entidades auditables.
- [ ] Enums utilizados para todo dominio cerrado de estado o perfil.
- [ ] El SQL de cada migración fue revisado y es reversible en los pasos destructivos.
- [ ] Los índices existen solo donde el patrón de consulta lo justifica.
- [ ] No quedan consultas N+1: verificado por logs en una ruta de listado real.
- [ ] `include`/`select` usan las relaciones mínimas necesarias, sin sobrecargar payloads.
- [ ] El `connection_limit` del pool es coherente con la configuración del proxy (PgBouncer).
- [ ] Redis usa cache-aside con TTL y las escrituras invalidan las claves afectadas.
- [ ] Las views de informes están creadas y documentadas, sin duplicar lógica.
- [ ] `EXPLAIN ANALYZE` de rutas calientes no muestra Seq Scan sobre tablas grandes.

## Ejemplos de prompts

- "Añade soft delete y timestamps al esquema Prisma de pedidos junto con enums para el estado y prepara la migración."
- "Detecta las consultas N+1 de este endpoint y resuélvelas con include y select mínimos."
- "Diseña una estrategia de índices para el listado de pedidos por cliente y fecha y valídala con EXPLAIN ANALYZE."
- "Implementa cache-aside con Redis para la consulta del panel de ventas, con TTL e invalidación."
- "Crea una view para el informe mensual por departamento y consúltala con los alias adecuados."

## Plantillas y recursos

- [templates/schema-completo.prisma](templates/schema-completo.prisma) — esquema de producción con soft delete, timestamps, enums e índices.
- [templates/estrategia-indices.sql](templates/estrategia-indices.sql) — índices compuestos, parciales y GIN con verificación EXPLAIN.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel profesional.