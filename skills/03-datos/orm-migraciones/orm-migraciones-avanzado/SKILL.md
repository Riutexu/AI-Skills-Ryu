---
name: orm-migraciones-avanzado
description: Relaciones 1:1, 1:N y N:M explícitas en Prisma, historial de migraciones con migrate dev, seeders, nested writes, filtros complejos y paginación.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "ORM y Migraciones"
  nivel: avanzado
  stack: "Prisma ORM, Node.js, PostgreSQL 16"
---

# ORM y Migraciones: nivel avanzado

## Qué hace este skill

Modela relaciones reales en Prisma: 1:1 (Usuario-Perfil), 1:N (Usuario-Pedidos) y N:M explícitas con tabla puente. Gestiona el historial de migraciones con `migrate dev`, carga datos con seeders, y escribe consultas complejas: nested writes, filtros avanzados con `AND`/`OR`/`contains` y paginación por offset y cursor.

## Cuándo usarlo

- Cuando el modelo deja de ser una tabla suelta y aparecen relaciones entre entidades.
- Cuando necesitas crear un registro con todas sus dependencias en una sola operación.
- Cuando el historial de migraciones debe estar ordenado y reproducible en otros entornos.
- Cuando los listados crecen y necesitas paginación estable con cursor.
- Cuando quieres datos de prueba repetibles con un seeder.

## Requisitos previos

- Nivel `orm-migraciones-basico` superado o equivalente.
- Proyecto Node con Prisma y PostgreSQL 16 operativos.
- Un modelo relacional básico entendido (claves foráneas, tabla puente).

## Workflow paso a paso

1. Amplía el schema: añade `Perfil` (1:1 con `@unique` en la foránea) y `Pedido` (1:N con Usuario).
2. Modela la N:M explícita con `LineaPedido` y clave compuesta `@@id([pedidoId, productoId])`.
3. Ejecuta `npx prisma migrate dev --name agregar_relaciones` y revisa el SQL generado.
4. Entiende el historial: cada carpeta en `prisma/migrations/` es una migración ordenada.
5. Consulta el estado con `npx prisma migrate status` y aplícalo donde haga falta.
6. Escribe el seeder `prisma/seed.js` y regístralo en `package.json` bajo `"prisma": { "seed": ... }`.
7. Ordena el seeder: borra de las tablas hijas a las padres con `deleteMany`.
8. Carga productos antes de crear usuarios para poder referenciarlos.
9. Escribe un nested write: crear Usuario con Perfil, Pedido y Líneas en una sola llamada.
10. Lee con `include` de relaciones y con `select` limitado a los campos necesarios.
11. Combina filtros avanzados: `AND`, `OR`, `contains` con `mode: 'insensitive'` e `in`.
12. Implementa paginación con `take`/`skip` y, después, con `cursor` (estable ante inserciones).
13. Usa `aggregate` con `_count` y `_max` para totales sobre el modelo.
14. Ejecuta `templates/consultas-avanzadas.js` y resuelve el checklist.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `relacion_1n` | Modelo padre e hijo de la relación 1:N | string | sí | `Usuario:Pedido` |
| `relacion_nm` | Modelos de la relación N:M con tabla puente | string | no | `Pedido:Producto` |
| `tabla_puente` | Nombre del modelo intermedio | string | no | `LineaPedido` |
| `seeder_habilitado` | Registro del seeder en package.json | boolean | no | `true` |
| `clave_paginacion` | Tipo de paginación del listado | string | no | `cursor` |
| `filtro_principal` | Predicado principal de las consultas | string | no | `activo: true` |
| `contexto` | Entorno en el que se aplican los cambios | string | no | `development` |

## Reglas y checklist

- [ ] La relación 1:1 declara `@unique` en la columna foránea.
- [ ] La N:M explícita usa clave compuesta `@@id` y `@@index` en la foránea restante.
- [ ] Cada cambio del schema tiene su migración revisada en el historial.
- [ ] `npx prisma migrate status` refleja el estado real de la base.
- [ ] El seeder es idempotente: borra antes de insertar y se puede repetir.
- [ ] Los nested writes crean las dependencias en el orden correcto.
- [ ] Las lecturas con `include` cargan solo las relaciones necesarias.
- [ ] `cursor` se usa cuando `skip`/`take` no es estable con datos en crecimiento.
- [ ] El cliente regenerado (`prisma generate`) corresponde al schema actual.
- [ ] Todas las consultas cierran el cliente al terminar.

## Ejemplos de prompts

- "Añade las relaciones 1:1, 1:N y N:M al schema y genera la migración correspondiente."
- "Escribe un seeder idempotente con nested writes para usuarios, pedidos y líneas."
- "Resuelve este listado con paginación por cursor y filtros combinados."
- "Compara include y select: ¿qué consulta trae menos datos y sigue siendo correcta?"
- "Explica el historial de migraciones y el flujo que seguirías si el equipo trabaja en paralelo."

## Plantillas y recursos

- [templates/schema-relaciones.prisma](templates/schema-relaciones.prisma) — schema con relaciones 1:1, 1:N y N:M.
- [templates/seed.js](templates/seed.js) — seeder idempotente con nested writes.
- [templates/consultas-avanzadas.js](templates/consultas-avanzadas.js) — filtros, agregados y paginación.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel avanzado.