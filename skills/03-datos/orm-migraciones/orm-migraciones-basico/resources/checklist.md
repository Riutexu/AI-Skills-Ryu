# Checklist: orm-migraciones-basico

## Puesta en marcha

- [ ] `npm i prisma @prisma/client` instalado en el proyecto.
- [ ] `npx prisma init` generó `prisma/schema.prisma` y `.env`.
- [ ] El `datasource` usa `provider = "postgresql"` y `url = env("DATABASE_URL")`.
- [ ] `DATABASE_URL` apunta a una base PostgreSQL accesible.

## Modelo y migración inicial

- [ ] El modelo `Usuario` tiene `@id` y un campo `@unique`.
- [ ] `npx prisma migrate dev --name init` creó la base y la tabla.
- [ ] Revisé el SQL de la migración inicial en `prisma/migrations/`.
- [ ] `npx prisma generate` se ejecutó después del schema.

## CRUD

- [ ] `create` y `createMany` insertan y devuelven los valores correctos.
- [ ] `findUnique` funciona con el campo único y falla con otros campos.
- [ ] `findMany` combina `where`, `orderBy` y `take`.
- [ ] `update` y `updateMany` devuelven los registros modificados.
- [ ] El error `P2025` se captura y se maneja con un mensaje propio.
- [ ] `$disconnect()` se ejecuta siempre al terminar.

## Verificación final

- [ ] Ejecuté `node templates/crud-basico.js` sin errores.
- [ ] Conecté a la base desde psql y confirmé las filas creadas por Prisma.