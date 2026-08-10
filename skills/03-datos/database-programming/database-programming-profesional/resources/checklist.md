# Checklist: database-programming-profesional

## Modelado de producción

- [ ] `creadoEn` y `actualizadoEn` (`@updatedAt`) presentes en todas las entidades auditables.
- [ ] Soft delete implementado con `borradoEn` nullable (o desactivación con `activo` documentada).
- [ ] Los dominios cerrados son enums de Prisma, no strings sueltos.
- [ ] El SQL generado en `prisma/migrations/*/migration.sql` fue revisado antes de aplicarlo.
- [ ] Las migraciones destructivas tienen plan de reversión documentado.

## Rendimiento

- [ ] Las consultas N+1 fueron detectadas con logs o EXPLAIN ANALYZE.
- [ ] Las rutas de listado usan `include`/`select` con las relaciones mínimas.
- [ ] El `connection_limit` de Prisma es coherente con PgBouncer.
- [ ] Los índices estratégicos están declarados en el schema (`@@index`), no solo en SQL suelto.
- [ ] `EXPLAIN ANALYZE` de rutas calientes muestra Index Scan, sin Seq Scan masivo.

## Caching y consistencia

- [ ] Las consultas calientes usan cache-aside con Redis y TTL definido.
- [ ] Cada escritura invalida las claves de caché afectadas.
- [ ] Existe degradación controlada si Redis no responde.
- [ ] Las views de informes están creadas y se consultan con alias legibles.

## Verificación final

- [ ] Ejecuté `templates/schema-completo.prisma` con `prisma migrate dev` sin errores.
- [ ] Ejecuté `templates/estrategia-indices.sql` y comparé los planes antes y después.
- [ ] Documenté la estrategia de índices y caché en el README del servicio.