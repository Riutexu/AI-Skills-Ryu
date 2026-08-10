---
name: orm-migraciones-profesional
description: Migraciones en producción con migrate deploy y zero-downtime, raw SQL híbrido, optimización con include/select y $extends, multi-tenancy, transacciones interactivas e intro a Drizzle y Knex.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "ORM y Migraciones"
  nivel: profesional
  stack: "Prisma ORM, Node.js, PostgreSQL 16, GitHub Actions, Drizzle ORM, Knex"
---

# ORM y Migraciones: nivel profesional

## Qué hace este skill

Aplica estrategias de migración y acceso a datos en producción: `migrate deploy` en CI/CD con patrones zero-downtime (expand-and-contract), SQL híbrido con `$queryRaw`, optimización con `include`/`select` y `$extends`, multi-tenancy (shared schema vs schema-per-tenant), transacciones interactivas e introducción a Drizzle y Knex como alternativas.

## Cuándo usarlo

- Cuando las migraciones llegan a producción y `migrate dev` ya no es aceptable.
- Cuando un despliegue no puede permitirse cortes por un cambio de esquema.
- Cuando una consulta concreta es demasiado costosa en Prisma y conviene SQL afinado.
- Cuando una aplicación sirve a varios clientes y hay que aislar sus datos.
- Cuando las operaciones multiconsulta deben ser atómicas con lógica intermedia.

## Requisitos previos

- Niveles `orm-migraciones-basico` y `orm-migraciones-avanzado` o equivalentes.
- Proyecto Prisma en producción con PostgreSQL y acceso a un entorno CI/CD.
- Conocimientos de Docker (para el servicio PostgreSQL del workflow) y de entornos staging.

## Workflow paso a paso

1. Consolida el schema en desarrollo y revisa el historial completo de migraciones.
2. Adopta `npx prisma migrate deploy` para producción: aplica el historial sin pedir confirmación.
3. Prohíbe `migrate dev` y `migrate reset` en entornos compartidos o de producción.
4. Aplica el patrón expand-and-contract para zero-downtime: añade columnas nullable, publica, backfillea, y recién entonces aplica el `NOT NULL`.
5. Configura el workflow CI (`templates/workflow-migracion.yml`) con `migrate status` antes de `deploy`.
6. Ejecuta el seeder solo en entornos de pruebas y nunca en producción.
7. Optimiza rutas con `include`/`select` mínimos y detecta N+1 con logs de query.
8. Extiende el cliente con `$extends` para reutilizar consultas frecuentes de forma tipada.
9. Usa `$queryRaw` con placeholders (prepared statements) cuando el plan de ejecución lo justifique.
10. Escribe transacciones interactivas con `$transaction(async (tx) => ...)` y timeout e isolationLevel explícitos.
11. Elige la estrategia de multi-tenancy: shared schema con `tenantId` o schema-per-tenant con `?schema=`.
12. Implementa el conector por tenant con caché de clientes (un pool por esquema).
13. Evalúa Drizzle o Knex como alternativas: proyección de tipos, migraciones y comunidad.
14. Documenta el runbook de rollback (restauración del backup o script reverso) y resuelve el checklist.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `estrategia_migracion` | Comando que aplica migraciones en el entorno | string | sí | `migrate deploy` |
| `modo_zero_downtime` | Patrón para cambios de esquema sin cortes | string | no | `expand-and-contract` |
| `estrategia_multitenancy` | Aislamiento entre clientes | string | no | `schema-per-tenant` |
| `modo_raw_sql` | Uso de SQL crudo en consultas concretas | string | no | `$queryRaw` |
| `nivel_aislamiento` | Aislamiento de las transacciones interactivas | string | no | `Serializable` |
| `timeout_transaccion` | Milisegundos máximos de una transacción | integer | no | `15000` |
| `orm_alternativo` | ORM a evaluar como alternativa | string | no | `drizzle` |
| `entorno_objetivo` | Entorno de aplicación del cambio | string | sí | `production` |

## Reglas y checklist

- [ ] `migrate dev` queda prohibido en entornos compartidos y en producción.
- [ ] `migrate deploy` forma parte del pipeline y se ejecuta antes del despliegue.
- [ ] Los cambios destructivos siguen expand-and-contract con pasos reversibles.
- [ ] El `migrate status` falla el pipeline si hay divergencia entre schema y base.
- [ ] El seeder nunca se ejecuta en producción.
- [ ] No quedan N+1 en rutas calientes (verificado con logs de query).
- [ ] `$queryRaw` usa placeholders, nunca interpolación directa de valores.
- [ ] Las transacciones interactivas declaran timeout y actualizan varias entidades atómicamente.
- [ ] La estrategia multi-tenant aísla los datos y limita el número de pools.
- [ ] La alternativa (Drizzle/Knex) se evaluó con un prototipo y documentación.

## Ejemplos de prompts

- "Prepara el workflow CI que verifique y aplique migraciones con migrate deploy."
- "Diseña el plan expand-and-contract para añadir una columna NOT NULL sin cortes."
- "Convierte esta consulta lenta a $queryRaw con placeholders y justifica el cambio."
- "Implementa multi-tenancy con schema por cliente y caché de clientes Prisma."
- "Compara Drizzle y Knex con Prisma para este proyecto y recomienda cuál adoptar."

## Plantillas y recursos

- [templates/workflow-migracion.yml](templates/workflow-migracion.yml) — pipeline CI con migrate status y migrate deploy.
- [templates/multitenant.js](templates/multitenant.js) — schema-per-tenant con un cliente Prisma por esquema.
- [templates/raw-sql-transacciones.js](templates/raw-sql-transacciones.js) — $queryRaw con placeholders y transacciones interactivas.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel profesional.