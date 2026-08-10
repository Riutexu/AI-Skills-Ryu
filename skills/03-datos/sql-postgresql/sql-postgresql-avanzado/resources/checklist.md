# Checklist: sql-postgresql-avanzado

## Joins y subconsultas

- [ ] El INNER JOIN de tres tablas devuelve el número de filas esperado.
- [ ] El LEFT JOIN incluye empleados sin ventas y lo comprobé con COUNT.
- [ ] La subconsulta escalar compara contra la media sin errores.
- [ ] Entiendo la diferencia entre EXISTS y IN y cuándo usar cada uno.
- [ ] `NOT EXISTS` responde consultas de negocio (departamentos sin altos salarios).

## CTEs y vistas

- [ ] La CTE simplifica una consulta anidada y es legible de arriba hacia abajo.
- [ ] Las CTEs encadenadas se ejecutan sin errores.
- [ ] La CTE recursiva muestra la jerarquía completa de categorías.
- [ ] La vista `v_reporte_ventas` se consulta con filtros propios.
- [ ] Sé que una vista simple no almacena datos (a diferencia de una MATERIALIZED VIEW).

## Transacciones y aislamiento

- [ ] Ejecuté transacciones con COMMIT y ROLLBACK sin errores.
- [ ] Reproduje una lectura fantasma y la resolví cambiando el nivel de aislamiento.
- [ ] Documenté qué nivel de aislamiento usa mi aplicación y por qué.

## Índices y EXPLAIN

- [ ] Comparé EXPLAIN antes y después del índice B-tree.
- [ ] Identifico en un plan: método de acceso, coste estimado y filas.
- [ ] El índice GIN acelera el filtro `@>` sobre JSONB.
- [ ] Uso `->>` para texto y `->` para JSONB sin mezclarlos.

## Verificación final

- [ ] `consultas-avanzadas.sql`, `ctes-y-vistas.sql` e `indices-y-explain.sql` ejecutados completos.
- [ ] Puedo explicar cualquier plan de EXPLAIN de las plantillas con mis palabras.