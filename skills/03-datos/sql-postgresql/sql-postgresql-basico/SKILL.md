---
name: sql-postgresql-basico
description: Consultas esenciales de SQL en PostgreSQL: SELECT con WHERE, ORDER BY y LIMIT, INSERT/UPDATE/DELETE, operadores LIKE, IN y BETWEEN, alias y funciones mínimas con psql.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "SQL PostgreSQL"
  nivel: basico
  stack: "PostgreSQL 16, psql"
---

# SQL PostgreSQL: nivel básico

## Qué hace este skill

Enseña las consultas esenciales de SQL en PostgreSQL: `SELECT` con `WHERE`, `ORDER BY` y `LIMIT`, el ciclo `INSERT`/`UPDATE`/`DELETE`, operadores `LIKE`, `IN` y `BETWEEN`, alias con `AS` y funciones mínimas (`UPPER`, `COALESCE`). Incluye un dataset de ejemplo y consultas comentadas listas para ejecutar en `psql`.

## Cuándo usarlo

- Cuando necesitas escribir la primera consulta filtrada y ordenada sobre una tabla.
- Cuando quieres insertar, actualizar o borrar registros con seguridad y verificación.
- Cuando dudas entre `LIKE`, `IN` y `BETWEEN` para un filtro concreto.
- Cuando quieres conectar a una base con `psql` y explorarla sin herramientas gráficas.

## Requisitos previos

- PostgreSQL 16 o superior instalado y en ejecución.
- Conocer el comando `psql -U usuario -d base` para conectar.
- El dataset de ejemplo de `templates/dataset-ejemplo.sql` cargado en su base.

## Workflow paso a paso

1. Conecta con `psql -U tu_usuario -d tu_base` (o usa una herramienta gráfica si lo prefieres).
2. Carga el dataset: `\i templates/dataset-ejemplo.sql`.
3. Explora el esquema: `\d empleados` y `\d departamentos`.
4. Escribe un `SELECT * FROM empleados` y revisa las filas del dataset.
5. Añade `WHERE` con operadores de comparación (`=`, `>`, `>=`, `<>`).
6. Filtra por prefijos con `LIKE 'R%'` y entiende los comodines `%` y `_`.
7. Filtra por listas con `IN` y por rangos inclusivos con `BETWEEN`.
8. Ordena con `ORDER BY ... DESC` y limita el resultado con `LIMIT n`.
9. Renombra columnas en el resultado con alias (`AS`) por legibilidad.
10. Aplica funciones mínimas: `UPPER(columna)` y `COALESCE(columna, valor_default)`.
11. Inserta una fila nueva con `INSERT ... RETURNING` y confirma el resultado.
12. Actualiza con `UPDATE ... WHERE` preciso y verifica con `RETURNING`.
13. Borra con `DELETE ... WHERE` y comprueba que solo desaparece lo esperado.
14. Ejecuta `templates/consultas-basicas.sql` completo y resuelve el checklist.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `url_conexion` | Cadena de conexión a PostgreSQL | string | sí | `postgresql://usuario:pass@localhost:5432/mibase` |
| `tabla_principal` | Tabla objetivo de las consultas | string | sí | `empleados` |
| `condicion_where` | Predicado de filtrado principal | string | no | `salario >= 3000` |
| `orden_predeterminado` | Columna y dirección del ORDER BY | string | no | `salario DESC` |
| `limite` | Número máximo de filas del resultado | integer | no | `10` |
| `valor_por_defecto_null` | Valor de reemplazo con COALESCE | string | no | `'sin asignar'` |
| `datos_prueba` | Insertar el dataset de ejemplo | boolean | no | `true` |
| `idioma` | Idioma de las consultas y comentarios | string | no | `es` |

## Reglas y checklist

- [ ] Cada `UPDATE` y `DELETE` tiene un `WHERE` que limita el alcance.
- [ ] El `RETURNING` confirma las filas afectadas en cada escritura.
- [ ] `LIKE` se une con comodines correctos (`%` para cualquier secuencia, `_` para un carácter).
- [ ] `BETWEEN` se usa solo para rangos inclusivos numéricos o de fechas.
- [ ] Los alias (`AS`) se usan cuando el resultado pasa a otra herramienta.
- [ ] Las consultas devuelven exactamente las filas esperadas del dataset.
- [ ] `LIMIT` protege listados sin orden explícito.
- [ ] Ninguna sentencia modifica datos sin verificación previa del `WHERE`.

## Ejemplos de prompts

- "Escribe una consulta que liste los empleados de Ingeniería con salario mayor de 3000, ordenados por antigüedad."
- "Traduce este filtro a SQL: emails que contienen 'example' y salarios entre 2500 y 4000."
- "Corrige esta consulta: el UPDATE no debe tocar más filas de las necesarias."
- "Explica la diferencia entre LIKE, IN y BETWEEN con ejemplos sobre el dataset de empleados."

## Plantillas y recursos

- [templates/dataset-ejemplo.sql](templates/dataset-ejemplo.sql) — dataset de empleados y departamentos con datos de prueba.
- [templates/consultas-basicas.sql](templates/consultas-basicas.sql) — consultas esenciales comentadas paso a paso.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel básico.