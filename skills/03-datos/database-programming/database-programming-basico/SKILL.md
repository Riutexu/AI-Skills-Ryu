---
name: database-programming-basico
description: Fundamentos de bases de datos relacionales: SQL CRUD, claves primarias y foráneas, tipos de dato comunes y normalización 1FN-2FN-3FN con ejemplos ejecutables en PostgreSQL.
license: MIT
compatibility: opencode
metadata:
  familia: "03-datos"
  tema: "Database Programming"
  nivel: basico
  stack: "SQL, PostgreSQL 16"
---

# Programación de bases de datos: nivel básico

## Qué hace este skill

Guía el diseño de una base de datos relacional normalizada y ejecuta el ciclo completo de SQL CRUD en PostgreSQL: `CREATE TABLE`, `INSERT`, `SELECT`, `UPDATE` y `DELETE`. Incluye las reglas de la normalización 1FN-2FN-3FN, claves primarias y foráneas, y tipos de dato comunes, con plantillas ejecutables y un esquema de ejemplo de clientes y pedidos.

## Cuándo usarlo

- Cuando necesitas crear el primer esquema de una aplicación (clientes, pedidos, productos) desde cero.
- Cuando quieres escribir consultas CRUD correctas y ordenadas en PostgreSQL.
- Cuando dudas si un diseño de tablas cumple la tercera forma normal.
- Cuando necesitas revisar o explicar el modelo de datos de un equipo junior.

## Requisitos previos

- PostgreSQL 16 o superior instalado localmente o en Docker.
- Conocimiento básico de cómo ejecutar sentencias en `psql` o en un cliente gráfico (pgAdmin, DBeaver).
- No se requiere experiencia previa en SQL: este nivel parte de cero.

## Workflow paso a paso

1. Define las entidades del dominio (clientes, pedidos, productos) y sus atributos esenciales.
2. Verifica la 1FN: todos los atributos son atómicos y no existen grupos repetidos dentro de una celda.
3. Verifica la 2FN: todo atributo no clave depende de la clave primaria completa, no de una parte de ella.
4. Verifica la 3FN: ningún atributo no clave depende de otro atributo no clave (sin dependencias transitivas).
5. Escribe `CREATE TABLE` con un `id SERIAL PRIMARY KEY` en cada entidad raíz.
6. Elige el tipo de dato correcto: `VARCHAR(n)`, `NUMERIC(p,s)`, `INTEGER`, `DATE`, `TIMESTAMPTZ`, `BOOLEAN`.
7. Declara las claves foráneas con `REFERENCES` y decide el comportamiento `ON DELETE` (CASCADE para el detalle, RESTRICT para datos maestros).
8. Añade restricciones `NOT NULL`, `UNIQUE`, `CHECK` y valores por defecto.
9. Carga datos de prueba con `INSERT` múltiple y verifica con `SELECT`.
10. Practica `UPDATE` con un `WHERE` preciso y confirma las filas modificadas con `RETURNING`.
11. Practica `DELETE` entendiendo el impacto sobre las claves foráneas.
12. Ejecuta `templates/schema.sql` completo en una base de datos limpia.
13. Resuelve el checklist de `resources/checklist.md` contra tu propio esquema.
14. Borra y recrea el esquema respetando el orden de dependencias (primero el detalle, después los maestros).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `motor` | Motor de base de datos objetivo | string | no | `postgresql` |
| `version_postgres` | Versión de PostgreSQL de los ejemplos | string | no | `16` |
| `entidades` | Entidades del dominio a modelar, separadas por coma | string | sí | `clientes,pedidos,productos` |
| `esquema_normalizado` | Forma normal objetivo del modelo | string | no | `3fn` |
| `tipo_id` | Estrategia de claves primarias | string | no | `serial` |
| `politica_on_delete` | Comportamiento de las claves foráneas al borrar | string | no | `cascade` |
| `datos_prueba` | Insertar datos de ejemplo al final del script | boolean | no | `true` |
| `idioma` | Idioma de comentarios y nombres generados | string | no | `es` |

## Reglas y checklist

- [ ] Cada tabla tiene una clave primaria única y estable.
- [ ] El modelo cumple 1FN: sin valores multivaluados ni grupos repetidos.
- [ ] El modelo cumple 2FN: sin dependencias parciales de la clave.
- [ ] El modelo cumple 3FN: sin dependencias transitivas.
- [ ] Las claves foráneas apuntan a claves primarias existentes.
- [ ] El `ON DELETE` está declarado explícitamente en cada relación.
- [ ] Los tipos de dato elegidos son los más adecuados para cada valor (`NUMERIC` para dinero).
- [ ] El esquema se ejecuta de principio a fin sin errores en PostgreSQL 16.
- [ ] Los datos de prueba respetan las restricciones (`CHECK`, `UNIQUE`).
- [ ] El script declara su estrategia de borrado (`DROP ... CASCADE`) en el orden correcto.

## Ejemplos de prompts

- "Crea un esquema 3FN para una tienda con proveedores, productos y compras, con datos de prueba."
- "Explica por qué este modelo no cumple la segunda forma normal y corrígelo."
- "Escribe una consulta SQL que liste los clientes y el importe total de sus pedidos."
- "Genera un script SQL con DROP en el orden de dependencias correcto para el esquema de clientes y pedidos."
- "Revisa este esquema y señala las claves foráneas y restricciones que faltan."

## Plantillas y recursos

- [templates/schema.sql](templates/schema.sql) — esquema completo clientes/pedidos/productos normalizado a 3FN con datos de prueba.
- [templates/crud-ejemplos.sql](templates/crud-ejemplos.sql) — sentencias comentadas de INSERT, SELECT, UPDATE y DELETE.
- [resources/checklist.md](resources/checklist.md) — checklist de verificación del nivel básico.