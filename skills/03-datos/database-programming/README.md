# Database Programming

Ruta de aprendizaje para programar bases de datos relacionales con PostgreSQL: diseño de esquemas normalizados, escritura de SQL ejecutable y acceso desde aplicaciones Node.js mediante Prisma ORM. Cubre desde los fundamentos del modelado relacional hasta esquemas de producción con soft delete, migraciones, índices estratégicos y caching, siempre con ejemplos reales y ejecutables.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `database-programming-basico` | Básico | Qué es una base de datos, SQL CRUD (CREATE TABLE, INSERT, SELECT, UPDATE, DELETE), claves primarias y foráneas, tipos de dato comunes, normalización 1FN-2FN-3FN |
| `database-programming-avanzado` | Avanzado | Joins INNER/LEFT, GROUP BY y HAVING, agregados COUNT/SUM/AVG, transacciones ACID, índices básicos, relaciones 1:N y N:M, primer modelo Prisma y CRUD |
| `database-programming-profesional` | Profesional | Modelado de producción (soft delete, timestamps, enums), migraciones avanzadas con Prisma, caching con Redis, connection pooling, consultas N+1, aliases y views |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| Motor de base de datos | PostgreSQL 16 | PostgreSQL 16 | PostgreSQL 16 + Redis |
| Modelado de datos | 1FN-2FN-3FN | Relaciones 1:N y N:M | Soft delete, timestamps, enums |
| Alcance de SQL | CRUD y restricciones | Joins, agregados, transacciones | Views, aliases, índices estratégicos |
| Transacciones | Conceptos ACID | BEGIN / COMMIT / ROLLBACK | Concurrencia y conflictos |
| ORM | Sin ORM | Prisma: primer modelo y CRUD | Prisma avanzado: include/select, migraciones |
| Rendimiento | Sin requisitos | Índices básicos | Pooling, caching Redis, eliminación de N+1 |

## Instalación

Copia el tema completo (o solo un nivel) en la biblioteca de skills de opencode:

```bash
# Por proyecto: la carpeta .opencode/skills del repositorio
cp -r "C:\Users\hecto\Downloads\skills\03-datos\database-programming" .opencode/skills/

# Global para el usuario actual
cp -r "C:\Users\hecto\Downloads\skills\03-datos\database-programming" "$HOME/.config/opencode/skills/"
```

En PowerShell usa `Copy-Item -Recurse` si el comando `cp` no está disponible.

## Ruta de aprendizaje

1. **`database-programming-basico`** — ejecuta `templates/schema.sql` (clientes, pedidos y productos a 3FN) y practica el CRUD completo sobre él.
2. **`database-programming-avanzado`** — domina joins, agrupaciones y transacciones, y conecta el esquema con tu primer modelo Prisma con relaciones N:M.
3. **`database-programming-profesional`** — aplica modelado de producción, elimina consultas N+1 con `include`/`select` y optimiza con pooling, índices y caching Redis.

## Referencias clave

- PostgreSQL Documentation (SQL y administración): <https://www.postgresql.org/docs/>
- Prisma ORM Documentation: <https://www.prisma.io/docs>
- SQLBolt (tutorial interactivo de SQL): <https://sqlbolt.com/>
- PG Exercises (ejercicios de SQL con verificación): <https://pgexercises.com/>
- PostgreSQL Wiki: <https://wiki.postgresql.org/>