---
name: api-design-basico
description: Diseña APIs REST bien modeladas: recursos y colecciones, verbos HTTP con su semántica, códigos de estado 2xx/3xx/4xx/5xx y endpoints anidados.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "api-design"
  nivel: basico
  stack: "HTTP, REST, JSON"
---

# Diseño de APIs REST: fundamentos

## Qué hace este skill

Te enseña a modelar una API HTTP antes de escribir código: identificar recursos y colecciones, elegir el verbo correcto para cada operación, responder con el código de estado que refleja fielmente el resultado y estructurar endpoints anidados cuando existe relación entre recursos. Incluye una plantilla de tabla de diseño para los recursos usuario y pedido.

## Cuándo usarlo

- Antes de crear cualquier endpoint nuevo, para decidir su verbo, ruta y códigos de respuesta.
- Cuando estás diseñando la primera versión de una API y quieres definir todos los endpoints en una tabla.
- Cuando revisas una API existente y quieres verificar que usa bien los verbos y status codes.

## Requisitos previos

- Conocer los métodos HTTP básicos (GET, POST, PUT, DELETE, PATCH).
- Saber qué es una URL y la diferencia entre ruta y query string.
- Familiaridad con JSON (lo consumirás como respuesta típica).

## Workflow paso a paso

1. Identificar los sustantivos del dominio: cada sustantivo que el sistema gestiona es un recurso candidato (`usuario`, `pedido`, `producto`).
2. Clasificar cada recurso como colección (plural, conjunto de elementos) o singleton (un único elemento por contexto).
3. Elegir el nombre de la colección en plural y kebab-case para la ruta (`/usuarios`, `/pedidos`).
4. Asignar el verbo según la operación: GET para leer, POST para crear, PUT para reemplazar, PATCH para modificar parcialmente, DELETE para eliminar.
5. Definir rutas de colección (`POST /usuarios`, `GET /usuarios`) y rutas de elemento (`GET /usuarios/{id}`, `PUT /usuarios/{id}`, `DELETE /usuarios/{id}`).
6. Documentar para cada endpoint los códigos de estado posibles: 200/201/204 para éxito, 400/401/403/404/409/422 para errores, 5xx para fallos del servidor.
7. Modelar relaciones con endpoints anidados solo cuando el recurso hijo no tiene sentido sin el padre: `GET /pedidos/{id}/items`.
8. Marcar en la tabla si un endpoint es de lectura, escritura o búsqueda (query params), y si requiere autenticación.
9. Revisar cada verbo elegido contra su semántica: no abusar de GET para operaciones con efectos, no usar POST para leer.
10. Validar el diseño contra casos límite: ¿qué pasa si el recurso no existe (404), si el cliente manda datos inválidos (422 o 400), si no está autenticado (401) o no autorizado (403)?

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `recursos` | Sustantivos del dominio a modelar | array | sí | `['usuario', 'pedido', 'producto']` |
| `verboCrear` | Verbo para creación de recursos | string | no | `POST` |
| `verboReemplazar` | Verbo para reemplazo completo | string | no | `PUT` |
| `verboModificar` | Verbo para modificación parcial | string | no | `PATCH` |
| `codigoCreacion` | Status code al crear un recurso | number | no | `201` |
| `codigoSinContenido` | Status code para operaciones sin respuesta | number | no | `204` |
| `codigoNoEncontrado` | Status code cuando el recurso no existe | number | no | `404` |
| `estiloRutas` | Formato de nombres de ruta | string | no | `kebab-case` |

## Reglas y checklist

- [ ] Las colecciones se nombran en plural (`/usuarios`), los elementos llevan `/{id}`.
- [ ] GET nunca produce efectos secundarios; las operaciones de escritura usan POST, PUT, PATCH o DELETE.
- [ ] POST crea y responde 201 con la URL del nuevo recurso en `Location`.
- [ ] PUT reemplaza el recurso completo; PATCH modifica solo los campos enviados.
- [ ] DELETE responde 204 sin cuerpo, o 404 si el recurso no existe.
- [ ] Se usa 400 para peticiones malformadas y 422 para entidades semánticamente inválidas.
- [ ] 401 (no autenticado) y 403 (sin permisos) no se intercambian.
- [ ] Los endpoints anidados solo se usan cuando el hijo depende del padre (`/pedidos/{id}/items`, no `/usuarios/{id}/pedidos/items`).
- [ ] Las respuestas de éxito que devuelven un objeto usan 200; las creaciones usan 201.
- [ ] La tabla de diseño cubre todos los recursos con verbo, ruta, descripción y códigos.

## Ejemplos de prompts

- "Diseña la tabla de endpoints para los recursos usuario y pedido con sus códigos de estado."
- "¿Qué verbo y ruta usarías para cancelar un pedido? Justifica respecto a la semántica REST."
- "Revisa esta lista de endpoints y corrige los verbos o rutas que no sigan REST: GET /crearUsuario, POST /usuarios/info, DELETE /pedidos."
- "Modela los endpoints anidados de items dentro de un pedido con sus respuestas 200, 404 y 422."

## Plantillas y recursos

- `templates/diseno-endpoints.md` — tabla completa de diseño de endpoints para los recursos `usuario` y `pedido`.
- Checklist del nivel: `resources/checklist.md`.