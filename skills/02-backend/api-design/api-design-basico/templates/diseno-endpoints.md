# Diseño de endpoints — Recursos `usuario` y `pedido`

Tabla de referencia para modelar una API REST de comercio. Úsala como plantilla:
reemplaza los recursos y completa las filas vacías de tu dominio.

## Convenciones

- Colecciones en plural y kebab-case. Elementos con `/:id`.
- Endpoints anidados solo para recursos dependientes del padre (`pedido` -> `item`).
- JSON como formato de intercambio, `Content-Type: application/json`.
- Errores con cuerpo JSON `{ "error": { "mensaje": "..." } }` (nivel avanzado: RFC 7807).

## Recurso: usuario

| Verbo | Ruta | Descripción | Códigos de éxito | Errores típicos |
| --- | --- | --- | --- | --- |
| POST | `/usuarios` | Crear un usuario | 201 | 400 (malformado), 409 (email duplicado), 422 (semántica inválida) |
| GET | `/usuarios` | Listar usuarios | 200 | 401 (no autenticado) |
| GET | `/usuarios/:id` | Obtener un usuario | 200 | 401, 404 (no existe) |
| GET | `/usuarios/:id/pedidos` | Pedidos de un usuario | 200 | 401, 404 |
| PUT | `/usuarios/:id` | Reemplazar un usuario completo | 200 | 400, 401, 403, 404, 422 |
| PATCH | `/usuarios/:id` | Actualizar campos parciales (email, nombre) | 200 | 400, 401, 403, 404, 409 |
| DELETE | `/usuarios/:id` | Eliminar un usuario | 204 | 401, 403 (no puedes borrarte ni borrar a otros), 404 |

## Recurso: pedido (depende de usuario)

| Verbo | Ruta | Descripción | Códigos de éxito | Errores típicos |
| --- | --- | --- | --- | --- |
| POST | `/pedidos` | Crear un pedido (referencia `usuarioId` en el cuerpo) | 201 | 400, 401, 404 (usuario), 422 |
| GET | `/pedidos` | Listar pedidos (con filtros por query: `estado`, `usuarioId`) | 200 | 401 |
| GET | `/pedidos/:id` | Obtener un pedido | 200 | 401, 404 |
| PATCH | `/pedidos/:id` | Actualizar estado (pendiente -> pagado -> enviado) | 200 | 400, 401, 403, 404, 409 (transición no permitida) |
| DELETE | `/pedidos/:id` | Cancelar un pedido (solo en estado pendiente) | 204 | 400, 401, 403, 404, 409 |
| GET | `/pedidos/:id/items` | Listar las líneas de un pedido | 200 | 401, 404 |
| POST | `/pedidos/:id/items` | Añadir un item al pedido | 201 | 400, 401, 403, 404, 409 (pedido cerrado) |
| DELETE | `/pedidos/:id/items/:itemId` | Quitar un item del pedido | 204 | 401, 403, 404, 409 |

## Códigos de estado utilizados

| Código | Significado | Cuándo usarlo |
| --- | --- | --- |
| 200 | OK | Lecturas y escrituras que devuelven el recurso |
| 201 | Created | Creación; incluir cabecera `Location` con la URL del recurso |
| 204 | No Content | Eliminación y escrituras sin cuerpo de respuesta |
| 400 | Bad Request | JSON malformado, campos con tipos incorrectos |
| 401 | Unauthorized | Falta autenticación o credenciales inválidas |
| 403 | Forbidden | Autenticado pero sin permiso para la operación |
| 404 | Not Found | Recurso o elemento inexistente |
| 409 | Conflict | Estado actual impide la operación (duplicado, transición inválida) |
| 422 | Unprocessable Entity | Datos válidos en formato pero inválidos en semántica de negocio |
| 500 | Internal Server Error | Fallo inesperado del servidor |

## Regla de oro

El cliente debe poder deducir el resultado de una operación solo con el status code
y, en caso de error, entender la causa leyendo el cuerpo JSON del error.