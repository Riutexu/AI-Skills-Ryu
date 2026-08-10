---
name: sql-postgresql-avanzado
description: Joins múltiples, subconsultas, CTEs con WITH, vistas, transacciones con niveles de aislamiento, índices B-tree y lectura de EXPLAIN en PostgreSQL, con tipos JSONB.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "SQL PostgreSQL"
  nivel: avanzado
  stack: "PostgreSQL 16, psql, JSONB"
---

# SQL PostgreSQL: nivel avanzado

## Qué hace este skill

Profundiza en SQL sobre PostgreSQL: joins múltiples entre tres o más tablas, subconsultas escalares y correlacionadas, CTEs con `WITH` (incluida la variante recursiva), vistas, transacciones con niveles de aislamiento, índices B-tree con lectura de `EXPLAIN` y columnas/operadores del tipo `JSONB` con índices GIN.

## Cuándo usarlo

- Cuando una respuesta requiere combinar tres o más tablas en un mismo resultado.
- Cuando una consulta se vuelve ilegible y una CTE la simplifica.
- Cuando el mismo informe se repite y conviene encapsularlo en una vista.
- Cuando hay que entender por qué una consulta es lenta leyendo el plan de ejecución.
- Cuando los datos semiestructurados (JSONB) conviven con el modelo relacional.

## Requisitos previos

- Nivel `sql-postgresql-basico` superado o equivalente.
- El dataset de empleados y departamentos cargado (`templates/dataset-ejemplo.sql`).
- Paciencia para leer planes de ejecución y compararlos fila por fila.

## Workflow paso a paso

1. Ejecuta el dataset básico y crea la tabla complementaria `ventas` que incluye `templates/consultas-avanzadas.sql`.
2. Escribe un `INNER JOIN` de tres tablas y verifica el número de filas.
3. Introduce `LEFT JOIN` y observa cómo aparecen las filas sin coincidencia.
4. Escribe una subconsulta escalar en la lista de `SELECT` (comparar contra la media).
5. Filtra con `EXISTS` y `IN` sobre subconsultas y entiende cuándo usar cada uno.
6. Reescribe una consulta anidada como CTE con `WITH` y compara legibilidad.
7. Encadena dos CTEs, una referenciando a la anterior.
8. Crea una jerarquía con `WITH RECURSIVE` sobre un árbol de categorías.
9. Encapsula el informe recurrente en una vista (`CREATE VIEW`) y consúltala como tabla normal.
10. Ejecuta `BEGIN`, aplica cambios y elige nivel de aislamiento (`REPEATABLE READ`, `SERIALIZABLE`).
11. Interpreta `EXPLAIN`: diferencia `Seq Scan` de `Index Scan` y `Bitmap Heap Scan`.
12. Crea un índice B-tree y compara el plan antes y después.
13. Añade una columna `JSONB`, practica `->`, `->>`, `@>` y crea un índice GIN.
14. Ejecuta las tres plantillas completas y resuelve el checklist.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `tipo_join` | Join principal del análisis | string | no | `inner` |
| `nivel_aislamiento` | Nivel de aislamiento de las transacciones | string | no | `repeatable read` |
| `usa_cte` | Usar CTEs para organizar la consulta | boolean | no | `true` |
| `usa_vista` | Encapsular el resultado en una vista | boolean | no | `true` |
| `tipo_indice` | Tipo de índice a crear | string | no | `btree` |
| `columna_jsonb` | Nombre de la columna JSONB | string | no | `metadatos` |
| `limite_explain` | Tiempo en ANALYZE si se quiere medir | string | no | `all` |
| `idioma` | Idioma de las consultas y comentarios | string | no | `es` |

## Reglas y checklist

- [ ] Los joins múltiples devuelven el conteo de filas esperado (probado con agregados).
- [ ] Las subconsultas correlacionadas se evitan cuando una CTE es más clara.
- [ ] Las CTEs encadenadas mantienen un orden lógico de arriba hacia abajo.
- [ ] La vista está creada y responde como tabla normal en psql.
- [ ] Las transacciones terminan siempre en `COMMIT` o `ROLLBACK` explícito.
- [ ] El nivel de aislamiento está elegido según la tolerancia a lecturas fantasma.
- [ ] Antes de crear un índice se justifica con un `EXPLAIN` que muestra Seq Scan.
- [ ] Los índices GIN sobre JSONB se crean solo si se filtra con `@>`.
- [ ] Los planes de ejecución se leen: nodo, coste, filas y método de acceso.

## Ejemplos de prompts

- "Escribe una consulta con join múltiple para listar cada venta con empleado y departamento."
- "Simplifica esta consulta anidada usando CTEs y explica el cambio."
- "Crea una vista para el informe mensual de ventas y consulta los departamentos sin ventas."
- "Explica este plan de EXPLAIN ANALYZE y propón el índice que eliminaría el Seq Scan."
- "Muestra con JSONB cómo guardar metadatos variables por empleado y cómo filtrarlos con @>."

## Plantillas y recursos

- [templates/consultas-avanzadas.sql](templates/consultas-avanzadas.sql) — joins múltiples, subconsultas y transacciones.
- [templates/ctes-y-vistas.sql](templates/ctes-y-vistas.sql) — CTEs encadenadas, recursivas y vistas.
- [templates/indices-y-explain.sql](templates/indices-y-explain.sql) — índices B-tree, EXPLAIN y JSONB con GIN.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel avanzado.