---
name: api-design-avanzado
description: Diseño RESTful coherente: plurales y versionado, paginación cursor vs offset, filtrado y orden, errores RFC 7807 y contratos OpenAPI 3 completos.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "api-design"
  nivel: avanzado
  stack: "REST, OpenAPI 3, RFC 7807, JSON"
---

# Diseño RESTful avanzado: contrato y coherencia

## Qué hace este skill

Establece las convenciones que hacen consistente una API de tamaño real: naming y plurales uniformes, versionado explícito, paginación con cursor u offset según el caso, filtrado y ordenación con query params estandarizados, errores estructurados según RFC 7807 (problem details) y contrato completo en OpenAPI 3.1 servido como única fuente de verdad.

## Cuándo usarlo

- Cuando la API pasa a ser consumida por varios equipos y necesita convenciones escritas.
- Cuando las listas crecen y la paginación offset ya no escala (paginación por cursor).
- Cuando los clientes necesitan interpretar errores de forma programática (no textos sueltos).
- Cuando quieres generar clientes y documentación a partir de un único archivo OpenAPI.

## Requisitos previos

- Dominar el nivel básico de `api-design`: verbos, rutas, códigos de estado y endpoints anidados.
- Conocer JSON y los query params básicos.
- Haber visto OpenAPI (aunque sea informalmente) y la diferencia entre path, query y body.

## Workflow paso a paso

1. Definir convenciones de naming por escrito: plurales, kebab-case, `:id` como path param, fechas en ISO 8601, moneda e ids en formato UUID.
2. Elegir la estrategia de versionado: prefijo de URL (`/api/v1`) para cambios rupturistas; versionado de cabecera (custom) o de media type para ajustes menores.
3. Diseñar la paginación: offset + limit para conjuntos pequeños y estables; cursor para conjuntos grandes o de alta escritura (los items se mueven entre páginas).
4. Convenir los query params de filtrado y orden: campos fijos por recurso, `?precioMin=&precioMax=`, `sort=nombre:asc` con lista blanca de campos.
5. Estandarizar el error HTTP según RFC 7807: `type`, `title`, `status`, `detail`, `instance` y miembros opcionales de dominio.
6. Escribir el contrato OpenAPI 3 completo: `paths`, `components.schemas`, `parameters` reutilizables y `securitySchemes`.
7. Referenciar con `$ref` todos los esquemas reutilizados para evitar duplicación.
8. Derivar la validación del servidor desde los esquemas del contrato (Zod desde JSON Schema o validación directa).
9. Validar el archivo OpenAPI con un linter de contrato (redocly o spectral) en CI.
10. Verificar la coherencia del contrato: cada endpoint definido una sola vez, sin verbos repetidos en rutas y con todas las respuestas documentadas.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `estrategiaVersionado` | Mecanismo de versionado | string | sí | `prefijo-url` |
| `versionActual` | Versión vigente de la API | string | sí | `v1` |
| `estrategiaPaginacion` | Paginación por recurso | string | sí | `cursor` |
| `tamanioPagina` | Tamaño de página por defecto | number | no | `25` |
| `maximoPagina` | Límite duro de tamaño de página | number | no | `100` |
| `camposFiltrables` | Campos permitidos en filtros por recurso | array | no | `['estado', 'precioMin', 'precioMax']` |
| `camposOrdenables` | Campos permitidos en `sort` | array | no | `['fecha', 'total']` |
| `formatoId` | Formato de identificadores | string | no | `uuid` |
| `espacioErrorType` | URL base de los `type` de RFC 7807 | string | no | `https://api.midominio.com/errores` |
| `versionContrato` | Versión del archivo OpenAPI | string | sí | `3.1.0` |

## Reglas y checklist

- [ ] Los nombres son uniformes: plurales consistentes, kebab-case, path params en `:id` o `{id}`.
- [ ] La versión actual está disponible en `/api/v1` y el comportamiento de una versión nunca cambia sin anuncio.
- [ ] Cursor pagination cuando los datos cambian con frecuencia; offset solo en conjuntos estables.
- [ ] Las respuestas paginadas incluyen metadatos: `data`, `nextCursor` o `total`, `page`, `limit`.
- [ ] Filtros y orden usan query params con lista blanca por recurso; `sort` nunca acepta campos arbitrarios.
- [ ] Todo error operacional sigue RFC 7807 con `type`, `title`, `status`, `detail` e `instance`.
- [ ] Los errores de validación incluyen miembros de dominio (p. ej. `errors` con campo y mensaje).
- [ ] El contrato OpenAPI documenta todas las rutas con sus respuestas 2xx y errores relevantes.
- [ ] Los esquemas se reutilizan con `$ref` y el contrato pasa un linter (spectral/redocly) en CI.
- [ ] El servidor valida entradas usando los mismos esquemas del contrato.

## Ejemplos de prompts

- "Escribe el contrato OpenAPI 3 para el recurso pedido con paginación cursor y errores RFC 7807."
- "Define las convenciones de naming, filtrado y orden para una API de comercio, con ejemplos de query params."
- "Compara paginación offset vs cursor para el recurso transacciones: ¿cuándo usar cada una y qué metadatos devolver?"
- "Diseña la estrategia de versionado: ¿qué debe hacer una API ante un cambio rupturista en v1 y cómo comunicarlo?"
- "Convierte los errores de esta API al formato RFC 7807 manteniendo compatibilidad con clientes antiguos."

## Plantillas y recursos

- `templates/openapi.yaml` — contrato OpenAPI 3.1 completo de ejemplo (recursos usuario y pedido) con paginación, filtros, errores y seguridad.
- Checklist del nivel: `resources/checklist.md`.