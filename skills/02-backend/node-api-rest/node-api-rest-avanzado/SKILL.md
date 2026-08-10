---
name: node-api-rest-avanzado
description: APIs REST de Express con arquitectura modular: middlewares, validación con Zod, manejo centralizado de errores, paginación, filtros, orden y versionado de rutas.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "node-api-rest"
  nivel: avanzado
  stack: "Node.js, Express, Zod, dotenv"
---

# API REST avanzada: modularidad, validación y errores

## Qué hace este skill

Evoluciona una API REST básica hacia una base de código profesional: separación de rutas, controladores y middlewares, validación de entradas declarativa con Zod, manejo centralizado de errores con una clase `AppError` y un error handler final, paginación, filtros y ordenación en las listas, versionado de rutas (`/api/v1`) y configuración por variables de entorno.

## Cuándo usarlo

- Cuando el `server.js` monolítico empieza a crecer y cuesta mantenerlo.
- Cuando quieres validar entradas de forma declarativa y reutilizable en lugar de condicionales repetidos.
- Cuando necesitas respuestas de error consistentes (mismo formato en 400, 404 y 500).
- Cuando la API requiere listas paginadas, filtros por campo y ordenación.

## Requisitos previos

- Haber completado el nivel básico (`node-api-rest-basico`) o dominar Express básico.
- Node.js 18+ y npm.
- Conocimiento de middlewares en Express (qué es `next()` y cómo se encadena).
- Conceptos de validación y de `JSON Web Tokens` a nivel conceptual (solo para el auth placeholder).

## Workflow paso a paso

1. Instalar dependencias: `npm install express zod cors dotenv` y como devDependencies `nodemon`, `supertest` y `jest` si planeas testear.
2. Crear la estructura de carpetas: `src/` con `app.js`, `server.js`, `routes/`, `controllers/`, `middlewares/`, `config/`.
3. Crear `src/config/env.js` para cargar y validar `dotenv` y centralizar la configuración (puerto, límites, versión de la API).
4. Mover cada grupo de rutas a `src/routes/productos.js` usando `express.Router()`.
5. Extraer la lógica de negocio a controladores en `src/controllers/productosController.js`.
6. Definir esquemas Zod en `src/schemas/productoSchema.js` para el cuerpo de POST y PUT (validar también parámetros de ruta y query).
7. Crear el middleware genérico `validate.js` que reciba un esquema y que, ante un error de Zod, delegue en el error handler con status 400.
8. Crear la clase `AppError` (status, código interno, mensaje y `isOperational`) y el error handler final en `src/middlewares/errorHandler.js` con formato de error único.
9. Agregar middlewares globales en `app.js`: `cors()`, logging de peticiones, `express.json()` y el error handler al final de la cadena.
10. Implementar paginación, filtros y orden con parámetros de query (`page`, `limit`, `sort`, filtros por campo) y devolver metadatos (`total`, `page`, `limit`) junto a `data`.
11. Montar las rutas con prefijo de versión: `app.use('/api/v1', rutas)`.
12. Crear un middleware de autenticación placeholder que proteja rutas sensibles y responda 401 sin token.
13. Ejecutar `npm run dev` y probar cada endpoint, incluyendo errores de validación, 404 y 500.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `versionApi` | Prefijo de versionado de rutas | string | sí | `v1` |
| `esquemaValidacion` | Esquema Zod para validar entradas | object | sí | `productoSchema` |
| `nivelLog` | Nivel de logging de peticiones | string | no | `dev` (morgan) |
| `paginaDefecto` | Página inicial cuando no se envía `page` | number | no | `1` |
| `limiteDefecto` | Máximo de items por página | number | no | `20` |
| `maximoLimite` | Tope duro de items por página | number | no | `100` |
| `camposOrdenables` | Campos permitidos para ordenar | array | no | `['id', 'nombre', 'precio']` |
| `formatoError` | Estructura unificada de respuestas de error | string | sí | `{ "error": { "codigo", "mensaje" } }` |
| `tokenValido` | Token esperado por el auth placeholder | string | sí | `Bearer secret-demo` |

## Reglas y checklist

- [ ] Todas las entradas (body, params, query) se validan con esquemas Zod, nunca con condicionales sueltos.
- [ ] Los errores de validación devuelven 400 con el detalle de Zod normalizado.
- [ ] Existe una única clase `AppError` para errores operacionales (400, 401, 404, 409...).
- [ ] El error handler es el último middleware registrado en `app.js` y nunca lanza excepciones.
- [ ] Las respuestas de error tienen siempre el mismo formato JSON.
- [ ] La paginación respeta límites: `page >= 1` e `limit <= maximoLimite`.
- [ ] La lista paginada incluye `total`, `page` y `limit` además de `data`.
- [ ] El orden solo acepta campos de `camposOrdenables` (evita inyección de ordenación).
- [ ] Las rutas están versionadas bajo `/api/v1`.
- [ ] Ninguna variable sensible (tokens, secretos) está hardcodeada: todo sale de `.env`.
- [ ] Las rutas protegidas usan el middleware de auth placeholder y responden 401 sin credenciales.

## Ejemplos de prompts

- "Refactoriza esta API Express monolítica en módulos: routes, controllers, schemas Zod y middlewares, con rutas versionadas en /api/v1."
- "Crea un middleware validate.js genérico que valide body, params y query con Zod y delegue los errores al error handler."
- "Implementa el error handler centralizado con la clase AppError: 400, 401, 404, 409 y 500 en un formato uniforme."
- "Agrega a GET /productos paginación con page/limit, filtros por precio mínimo y máximo y orden por nombre con límites seguros."
- "Protege la ruta POST /productos con un middleware de autenticación placeholder que responda 401 sin un token Bearer."

## Plantillas y recursos

- `templates/app.js` — app modular: middlewares globales, versionado y montado de rutas.
- `templates/middlewares/validate.js` — middleware genérico de validación con Zod.
- `templates/middlewares/errorHandler.js` — clase `AppError` y error handler final.
- Checklist del nivel: `resources/checklist.md`.