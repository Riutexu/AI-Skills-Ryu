# ORM y Migraciones

Ruta de aprendizaje de ORM con Prisma y gestión de migraciones de bases de datos: desde el primer modelo y CRUD hasta estrategias de producción como `migrate deploy`, zero-downtime, multi-tenancy, transacciones interactivas y SQL híbrido. Incluye una introducción a Drizzle y Knex como alternativas. Todos los templates son funcionales con Node.js, PostgreSQL y Prisma.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `orm-migraciones-basico` | Básico | Qué es un ORM y por qué usarlo, setup de Prisma (init y datasource), modelos simples y CRUD con Prisma Client (create, findUnique, findMany, update, delete) |
| `orm-migraciones-avanzado` | Avanzado | Relaciones 1:1, 1:N y N:M explícitas, historial de migraciones (migrate dev), seeders, nested writes, filtros complejos y paginación |
| `orm-migraciones-profesional` | Profesional | Migraciones en producción (migrate deploy, zero-downtime), raw SQL híbrido, optimización con include/select y $extends, multi-tenancy, transacciones interactivas y alternativas Drizzle/Knex |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| Alcance | Modelos simples y CRUD | Relaciones y seeders | Producción y multi-tenancy |
| Migraciones | Primera migración (init) | Historial con migrate dev | migrate deploy y zero-downtime |
| Consultas | create, findMany, update, delete | Nested writes y filtros | $queryRaw y $extends |
| Transacciones | — | — | Interactivas con $transaction |
| Entornos | Desarrollo local | Desarrollo + seed | CI/CD, staging y producción |
| Alternativas | — | — | Drizzle y Knex |

## Instalación

Copia el tema completo (o solo un nivel) en la biblioteca de skills de opencode:

```bash
# Por proyecto: la carpeta .opencode/skills del repositorio
cp -r "C:\Users\hecto\Downloads\skills\03-datos\orm-migraciones" .opencode/skills/

# Global para el usuario actual
cp -r "C:\Users\hecto\Downloads\skills\03-datos\orm-migraciones" "$HOME/.config/opencode/skills/"
```

En PowerShell usa `Copy-Item -Recurse` si el comando `cp` no está disponible.

## Ruta de aprendizaje

1. **`orm-migraciones-basico`** — configura Prisma, define el primer modelo y escribe el CRUD completo con el cliente generado.
2. **`orm-migraciones-avanzado`** — modela relaciones 1:1, 1:N y N:M, gestiona el historial de migraciones y carga datos con seeders.
3. **`orm-migraciones-profesional`** — automatiza migraciones en CI con `migrate deploy`, implementa multi-tenancy y transacciones interactivas, y conoce cuándo usar SQL híbrido.

## Referencias clave

- Prisma ORM Documentation: <https://www.prisma.io/docs>
- Prisma Migrations (guía oficial): <https://www.prisma.io/docs/orm/prisma-migrate>
- Prisma Client API Reference: <https://www.prisma.io/docs/orm/reference/prisma-client-reference>
- Drizzle ORM Documentation: <https://orm.drizzle.team/>
- Knex.js Query Builder: <https://knexjs.org/>
- Node.js Documentation: <https://nodejs.org/docs/latest/api/>