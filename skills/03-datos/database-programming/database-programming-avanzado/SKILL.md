---
name: database-programming-avanzado
description: Joins INNER/LEFT, agrupaciones con GROUP BY y HAVING, agregados COUNT/SUM/AVG, transacciones ACID, índices básicos, relaciones 1:N y N:M y primer modelo Prisma con CRUD.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "Database Programming"
  nivel: avanzado
  stack: "SQL, PostgreSQL 16, Prisma ORM, Node.js"
---

# Programación de bases de datos: nivel avanzado

## Qué hace este skill

Lleva el modelado y las consultas un paso más allá: joins INNER/LEFT, agrupaciones con `GROUP BY` y `HAVING`, agregados, transacciones ACID y primeros índices. Además modela relaciones 1:N y N:M y conecta el esquema con Prisma: primer modelo, migración inicial y CRUD desde Node.js.

## Cuándo usarlo

- Cuando necesitas unir varias tablas para responder preguntas de negocio (informes, listados, totales).
- Cuando quieres agrupar datos y filtrar grupos con seguridad (no solo filas).
- Cuando una operación debe quedar atómica: crear un pedido y descontar stock en bloque.
- Cuando el primer modelo debe reflejar relaciones reales 1:N y N:M en Prisma.
- Cuando notas que una consulta lenta filtra por columnas sin índice.

## Requisitos previos

- Nivel `database-programming-basico` superado o conocimientos equivalentes (CRUD, 3FN).
- PostgreSQL 16 y `psql` operativos.
- Node.js 20+ y npm instalados para la parte de Prisma.
- Familiaridad básica con TypeScript o JavaScript.

## Workflow paso a paso

1. Revisa el esquema normalizado del nivel básico e identifica las relaciones 1:N (clientes → pedidos) y N:M (pedidos ↔ productos).
2. Escribe un `INNER JOIN` para filas que existen en ambas tablas y verifica el número de filas resultante.
3. Escribe un `LEFT JOIN` para conservar filas sin coincidencia (clientes sin pedidos).
4. Agrupa con `GROUP BY` y filtra grupos con `HAVING` (nunca en `WHERE` para agregados).
5. Combina agregados `COUNT`, `SUM` y `AVG` con alias legibles.
6. Comprende ACID y ejecuta una transacción `BEGIN` / `COMMIT` / `ROLLBACK` en psql.
7. Escribe una transacción que cree un pedido, inserte su detalle y descuente stock de forma atómica.
8. Analiza un plan con `EXPLAIN` y crea un índice B-tree sobre la columna filtrada con más frecuencia.
9. Crea `templates/schema.prisma` con los cuatro modelos (Cliente, Pedido, Producto, DetallePedido) y sus relaciones.
10. Define la relación N:M explícita con tabla puente (`@@id([pedidoId, productoId])`).
11. Ejecuta `npx prisma migrate dev --name init` para generar la base y el historial de migraciones.
12. Escribe el CRUD en Node.js: `create`, `findMany` con filtros, `update` y `delete` con el cliente generado.
13. Verifica que los datos creados por Prisma sean consultables desde SQL y viceversa.
14. Resuelve `resources/checklist.md` y ejecuta `templates/consultas-avanzadas.sql` completo.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `tipo_join` | Tipo de join principal del informe | string | no | `left` |
| `columna_agrupacion` | Columna sobre la que agrupar | string | sí | `cliente_id` |
| `condicion_having` | Filtro de grupos sobre agregados | string | no | `COUNT(*) >= 2` |
| `transaccion_requerida` | La operación requiere atomicidad | boolean | no | `true` |
| `tabla_puente` | Tabla intermedia para relaciones N:M | string | no | `detalle_pedido` |
| `columna_indice` | Columna a indexar según el plan de ejecución | string | no | `cliente_id` |
| `modelo_prisma` | Modelo principal a crear en Prisma | string | sí | `Pedido` |
| `motores_extra` | Tecnologías adicionales del proyecto | string | no | `node, prisma` |

## Reglas y checklist

- [ ] Los joins devuelven exactamente el número de filas esperado (INNER vs LEFT probado).
- [ ] `GROUP BY` solo incluye columnas agrupadas o funciones de agregado.
- [ ] `HAVING` se usa para filtrar grupos y `WHERE` para filtrar filas.
- [ ] Las transacciones siempre terminan en `COMMIT` o `ROLLBACK` explícito.
- [ ] El descuento de stock y la creación del pedido ocurren en la misma transacción.
- [ ] Las consultas calientes tienen un índice B-tree creado y verificado con `EXPLAIN`.
- [ ] El modelo N:M en Prisma usa tabla puente explícita con clave compuesta.
- [ ] Los nombres de modelos son PascalCase y los campos camelCase.
- [ ] `npx prisma generate` se ejecutó después de cualquier cambio en el schema.
- [ ] El cliente Prisma y el SQL manual acceden a los mismos datos sin divergencias.

## Ejemplos de prompts

- "Dado este esquema, escribe un INNER JOIN y un LEFT JOIN para el informe de pedidos del último mes."
- "Agrupa los pedidos por cliente, filtra con HAVING los que superen 500 euros y ordena por importe total."
- "Escribe una transacción que cree un pedido y descuente el stock de cada producto de forma atómica."
- "Crea el modelo Prisma con relaciones N:M explícitas y el CRUD completo para pedidos."
- "Analiza con EXPLAIN por qué esta consulta es lenta y propón el índice adecuado."

## Plantillas y recursos

- [templates/schema.prisma](templates/schema.prisma) — modelo Prisma con relaciones 1:N y N:M explícita.
- [templates/consultas-avanzadas.sql](templates/consultas-avanzadas.sql) — joins, agrupaciones, transacciones y EXPLAIN de ejemplo.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel avanzado.