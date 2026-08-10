# Checklist: orm-migraciones-avanzado

## Relaciones

- [ ] La relación 1:1 (Usuario-Perfil) declara `@unique` en `usuarioId`.
- [ ] La relación 1:N (Usuario-Pedido) tiene la foránea en el modelo hijo.
- [ ] La N:M explícita usa `LineaPedido` con clave compuesta `@@id([pedidoId, productoId])`.
- [ ] `@@index` cubre las foráneas consultadas con más frecuencia.

## Migraciones

- [ ] `npx prisma migrate dev --name agregar_relaciones` generó la migración.
- [ ] Revisé el SQL generado: tablas, foráneas e índices correctos.
- [ ] El historial en `prisma/migrations/` está ordenado por fecha.
- [ ] `npx prisma migrate status` coincide con el estado real de la base.

## Seeders

- [ ] El seeder borra en el orden hijas->padres antes de insertar.
- [ ] Los productos se crean antes que las líneas que los referencian.
- [ ] El nested write agrupa usuario, perfil, pedido y líneas en una sola operación.
- [ ] `npx prisma db seed` se puede ejecutar dos veces sin errores.

## Consultas avanzadas

- [ ] `include` trae las relaciones sin consultas N+1.
- [ ] Los filtros combinan `AND`/`OR` y `contains` con `mode: 'insensitive'`.
- [ ] `in`/`notIn` funcionan sobre campos únicos y no únicos.
- [ ] La paginación con cursor no repite ni salta registros.
- [ ] Los agregados (`_count`, `_max`) devuelven valores verificables contra psql.