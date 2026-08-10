# Checklist: sql-postgresql-basico

## Lectura de datos (SELECT)

- [ ] Ejecuté `SELECT *` y luego versiones con columnas concretas.
- [ ] Usé `WHERE` con operadores de comparación (`=`, `>`, `>=`, `<>`).
- [ ] Filtros con `LIKE` usan los comodines `%` y `_` correctamente.
- [ ] `IN` filtra por lista de valores y `BETWEEN` por rango inclusivo.
- [ ] `ORDER BY` y `LIMIT` combinan sin filas desordenadas.

## Escritura de datos

- [ ] `INSERT ... RETURNING` confirma la fila creada y su id.
- [ ] `UPDATE` tiene `WHERE` que limita las filas afectadas.
- [ ] `DELETE` tiene `WHERE` y `RETURNING` para verificar.
- [ ] Comprobé que los cambios persisten al reconectar la sesión.

## Funciones y alias

- [ ] `UPPER`, `LOWER` y `COALESCE` aplicadas sin errores.
- [ ] Alias con `AS` aplicados en las consultas de salida.
- [ ] Sé cuándo usar `COALESCE` para valores NULL.

## Verificación final

- [ ] `templates/dataset-ejemplo.sql` cargado sin errores.
- [ ] `templates/consultas-basicas.sql` ejecutado completo y revisado línea a línea.