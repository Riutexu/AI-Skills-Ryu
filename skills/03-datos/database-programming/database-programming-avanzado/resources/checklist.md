# Checklist: database-programming-avanzado

## Joins y agrupaciones

- [ ] El `INNER JOIN` devuelve solo filas con coincidencia y lo verifiqué con conteos.
- [ ] El `LEFT JOIN` conserva las filas sin coincidencia y lo comprobé con clientes sin pedidos.
- [ ] `GROUP BY` solo contiene columnas agrupadas o funciones de agregado.
- [ ] Los filtros de grupos se hacen con `HAVING` y los de filas con `WHERE`.
- [ ] `COUNT`, `SUM` y `AVG` producen los totales esperados según el dataset.

## Transacciones ACID

- [ ] Entiendo los cuatro atributos: atomicidad, consistencia, aislamiento y durabilidad.
- [ ] Ejecuté `BEGIN` / `COMMIT` / `ROLLBACK` en psql sin errores.
- [ ] La creación del pedido, su detalle y el descuento de stock quedan en una sola transacción.
- [ ] Comprobé que `ROLLBACK` deja la base exactamente como estaba.

## Índices y EXPLAIN

- [ ] Ejecuté `EXPLAIN` antes y después de crear `idx_pedidos_cliente`.
- [ ] Detecté el cambio de `Seq Scan` a `Index Scan` en el plan.
- [ ] Creé índices solo sobre columnas usadas en `WHERE`, `JOIN` u `ORDER BY`.

## Prisma

- [ ] El schema define Cliente, Pedido, Producto y DetallePedido completos.
- [ ] La relación N:M usa tabla puente explícita con `@@id([pedidoId, productoId])`.
- [ ] `npx prisma migrate dev --name init` creó la base sin errores.
- [ ] El CRUD (create, findMany, update, delete) funciona contra la misma base.
- [ ] `npx prisma generate` se ejecutó tras el último cambio del schema.