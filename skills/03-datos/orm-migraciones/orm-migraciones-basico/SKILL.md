---
name: orm-migraciones-basico
description: Qué es un ORM y por qué usarlo, setup de Prisma (init y datasource), modelos simples y CRUD con Prisma Client: create, findUnique, findMany, update y delete.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "ORM y Migraciones"
  nivel: basico
  stack: "Prisma ORM, Node.js, PostgreSQL 16"
---

# ORM y Migraciones: nivel básico

## Qué hace este skill

Explica qué es un ORM y por qué usarlo, y guía la puesta en marcha completa de Prisma: `prisma init`, configuración del `datasource`, definición de un modelo simple y CRUD real con Prisma Client (`create`, `findMany`, `findUnique`, `update`, `delete`). Incluye una plantilla de schema y un script Node funcional contra PostgreSQL.

## Cuándo usarlo

- Cuando empiezas un proyecto nuevo y quieres acceso tipado a la base de datos sin escribir SQL crudo.
- Cuando necesitas explicar la diferencia entre escribir SQL a mano y usar un ORM.
- Cuando el esquema de la aplicación debe evolucionar con migraciones desde el primer día.
- Cuando quieres pasar de sentencias SQL sueltas a un cliente de base de datos estructurado.

## Requisitos previos

- Node.js 20+ y npm instalados.
- PostgreSQL 16 accesible con credenciales (para `DATABASE_URL`).
- Conocimientos básicos de JavaScript o TypeScript y de un modelo relacional simple.

## Workflow paso a paso

1. Crea el proyecto: `npm init -y` e instala las dependencias con `npm i prisma @prisma/client`.
2. Ejecuta `npx prisma init` para generar `prisma/schema.prisma` y el archivo `.env`.
3. Configura el `datasource` con `provider = "postgresql"` y `url = env("DATABASE_URL")`.
4. Define `DATABASE_URL` en `.env` apuntando a tu PostgreSQL local.
5. Escribe el primer modelo simple (`Usuario`) con `id`, `email` único, `nombre`, `activo` y `creadoEn`.
6. Ejecuta `npx prisma migrate dev --name init`: crea la base, la tabla y el historial de migraciones.
7. Revisa el SQL generado en `prisma/migrations/<fecha>_init/migration.sql`.
8. Genera el cliente con `npx prisma generate` antes de importarlo en el código.
9. Instancia `PrismaClient` una sola vez en tu aplicación y reutilízalo.
10. Escribe el `create` y el `createMany` y verifica las filas con `SELECT`.
11. Lee con `findUnique` (requiere campo único) y `findMany` con `where`, `orderBy` y `take`.
12. Actualiza con `update` (campo único) y con `updateMany` (cualquier filtro).
13. Borra con `delete` y captura el error `P2025` cuando el registro no existe.
14. Cierra el cliente con `$disconnect` al terminar y resuelve el checklist.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `lenguaje` | Lenguaje del proyecto cliente | string | no | `javascript` |
| `motor` | Motor de base de datos del datasource | string | no | `postgresql` |
| `url_conexion` | Cadena de conexión en DATABASE_URL | string | sí | `postgresql://user:pass@localhost:5432/app` |
| `modelo_inicial` | Nombre del primer modelo | string | sí | `Usuario` |
| `campo_unico` | Campo único usado en findUnique/update | string | no | `email` |
| `base_datos` | Nombre de la base de datos objetivo | string | sí | `miapp` |
| `entorno` | Entorno objetivo de la migración | string | no | `development` |

## Reglas y checklist

- [ ] `npx prisma init` generó schema.prisma y `.env`.
- [ ] El `datasource` apunta a PostgreSQL con `env("DATABASE_URL")`.
- [ ] El primer modelo tiene `@id` y al menos un campo con `@unique`.
- [ ] `npx prisma migrate dev --name init` aplicó la primera migración.
- [ ] El SQL de la migración fue revisado antes de darla por buena.
- [ ] `npx prisma generate` se ejecutó tras cada cambio del schema.
- [ ] `PrismaClient` se instancia una sola vez y se reutiliza.
- [ ] `findUnique` se usa solo con campos únicos.
- [ ] El error `P2025` se maneja explícitamente en `delete` y `update`.
- [ ] Todas las operaciones cierran el cliente con `$disconnect`.

## Ejemplos de prompts

- "Configura Prisma en este proyecto nuevo contra PostgreSQL y define el modelo inicial de usuarios."
- "Escribe el CRUD completo de Usuario con manejo del error P2025."
- "Explica por qué el ORM es útil aquí y cuándo convendría SQL crudo."
- "Genera una migración inicial y muéstrame el SQL que crea la tabla."
- "Convierte estas consultas SQL en llamadas de Prisma Client."

## Plantillas y recursos

- [templates/schema.prisma](templates/schema.prisma) — primer modelo Prisma con datasource PostgreSQL.
- [templates/crud-basico.js](templates/crud-basico.js) — script Node con CRUD completo y manejo de errores.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel básico.