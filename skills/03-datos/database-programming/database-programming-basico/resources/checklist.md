# Checklist: database-programming-basico

## Modelado y normalización

- [ ] Identifiqué las entidades centrales del dominio (clientes, pedidos, productos).
- [ ] El modelo cumple 1FN: atributos atómicos, sin listas ni grupos repetidos en una celda.
- [ ] El modelo cumple 2FN: eliminadas las dependencias parciales de la clave.
- [ ] El modelo cumple 3FN: eliminadas las dependencias transitivas.
- [ ] Cada tabla define una clave primaria explícita y estable.

## SQL CRUD

- [ ] `CREATE TABLE` ejecuta sin errores en PostgreSQL 16.
- [ ] Cada clave foránea usa `REFERENCES` y declara su `ON DELETE`.
- [ ] `INSERT` carga los datos de prueba y usa `RETURNING` para confirmar.
- [ ] `SELECT` combina `WHERE`, `ORDER BY` y `LIMIT` correctamente.
- [ ] `UPDATE` usa un `WHERE` preciso y confirma las filas afectadas.
- [ ] `DELETE` respeta el orden de dependencias entre tablas.

## Tipos y restricciones

- [ ] `NUMERIC` para dinero, `TIMESTAMPTZ` para fechas con zona horaria.
- [ ] Se usan `NOT NULL`, `UNIQUE` y `CHECK` donde corresponden.
- [ ] Los datos de prueba no violan ninguna restricción.

## Verificación final

- [ ] Ejecuté `templates/schema.sql` de principio a fin sin errores.
- [ ] Ejecuté `templates/crud-ejemplos.sql` y revisé cada resultado esperado.
- [ ] Explicaría en una frase por qué este esquema cumple 3FN.