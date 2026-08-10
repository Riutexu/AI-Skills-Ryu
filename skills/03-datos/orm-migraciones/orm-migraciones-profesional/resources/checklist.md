# Checklist: orm-migraciones-profesional

## Migraciones en producción

- [ ] `migrate deploy` está en el pipeline y se ejecuta antes del despliegue.
- [ ] `migrate status` falla el pipeline ante divergencias entre schema y base.
- [ ] `migrate dev` y `migrate reset` prohibidos en entornos compartidos.
- [ ] El patrón expand-and-contract documentado para cambios destructivos.
- [ ] El seeder solo se ejecuta en entornos de pruebas.

## SQL híbrido y optimización

- [ ] `$queryRaw` usa placeholders (prepared statements), nunca interpolación.
- [ ] `$executeRaw` corrige datos masivos sin round-trips.
- [ ] Los nombres de tabla en SQL crudo se verificaron contra los `@@map`.
- [ ] N+1 eliminados en rutas calientes con `include`/`select` mínimos.
- [ ] Consultas frecuentes encapsuladas con `$extends` de forma tipada.

## Transacciones interactivas

- [ ] `$transaction(async (tx) => ...)` agrupa pasos atómicos con lógica propia.
- [ ] Timeout e `isolationLevel` declarados en cada transacción crítica.
- [ ] Un fallo interno revierte todas las escrituras de la transacción.
- [ ] `findUniqueOrThrow` y `update` se usan dentro del contexto `tx`.

## Multi-tenancy

- [ ] La estrategia compartida vs schema-per-tenant está justificada y documentada.
- [ ] Los esquemas de tenant existen y reciben migraciones con `migrate deploy`.
- [ ] Las consultas entre tenants devuelven 0 resultados (aislamiento probado).
- [ ] La caché de clientes limita los pools abiertos por esquema.

## Evaluación de alternativas

- [ ] Drizzle y Knex se compararon con Prisma (tipos, migraciones, rendimiento).
- [ ] Existe un prototipo funcional con la alternativa elegida.
- [ ] El runbook de rollback (backup o script reverso) está documentado y probado.