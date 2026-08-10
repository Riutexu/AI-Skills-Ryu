# Node API REST

Conjunto de skills progresivos para construir APIs REST en Node.js. Empieza con Express puro y datos en memoria, evoluciona hacia una API modular con validación, manejo centralizado de errores, paginación y versionado, y termina con una API a escala de producción: arquitectura por dominios, rate limiting, OpenAPI, ETags, pruebas de integración, Docker y health checks.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `node-api-rest-basico` | Básico | Conceptos REST, Express, routing GET/POST/PUT/DELETE, parámetros de ruta y query, respuestas JSON y códigos de estado |
| `node-api-rest-avanzado` | Avanzado | Middlewares (CORS, logging, auth placeholder), validación con Zod, error handler centralizado, paginación/filtros/orden, versionado de rutas y variables de entorno |
| `node-api-rest-profesional` | Profesional | Fastify o Express a escala, arquitectura por dominios, idempotencia, rate limiting, OpenAPI/Swagger, ETag/304, pruebas de integración, Docker y health checks |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| Framework | Express (routing directo) | Express modular | Express o Fastify según perfil |
| Validación | Manual con condicionales | Zod schemas | Zod + Schemas OpenAPI compartidos |
| Errores | 404/400 inline | Error handler con `AppError` | Error handler + logs estructurados + trace IDs |
| Persistencia | Array en memoria | Array o mock de repositorio | Repositorios por dominio, listos para base de datos |
| Documentación | Manual (rutas en README) | Estructura documentable | OpenAPI/Swagger servido en `/api/docs` |
| Operaciones | Sin deploy | `.env` y configuración | Dockerfile, health checks, rate limiting |

## Instalación

Copia la carpeta de cada skill a tu proyecto de opencode:

```powershell
# Por proyecto
Copy-Item -Recurse "02-backend\node-api-rest\node-api-rest-basico" ".opencode\skills\"

# Global (todos tus proyectos)
Copy-Item -Recurse "02-backend\node-api-rest\*" "$HOME\.config\opencode\skills\"
```

Para instalar los tres niveles de una vez, copia las tres carpetas `node-api-rest-*`. Cada skill se activa automáticamente por su `description` cuando el tema coincide con tu prompt.

## Ruta de aprendizaje

1. **Básico** — Construye tu primera API REST con Express y datos en memoria. Domina los verbos HTTP, parámetros y códigos de estado.
2. **Avanzado** — Refactoriza hacia una estructura modular: middlewares, validación con Zod, error handler centralizado, paginación, filtros y versionado.
3. **Profesional** — Escala el proyecto: arquitectura por dominios, idempotencia, rate limiting, OpenAPI/Swagger, caching con ETag, pruebas de integración y despliegue con Docker.

Se recomienda completar cada nivel en orden: cada uno presupone los conceptos del anterior.

## Referencias clave

- Documentación oficial de Express: https://expressjs.com/es/
- Documentación oficial de Fastify: https://www.fastify.dev/
- Documentación de Node.js (módulo HTTP): https://nodejs.org/docs/latest/api/http.html
- Zod (validación de esquemas): https://zod.dev/
- OpenAPI Specification 3.1: https://spec.openapis.org/oas/v3.1.0
- swagger-jsdoc (generación de OpenAPI desde comentarios JSDoc): https://github.com/Surnet/swagger-jsdoc
- Imagen oficial de Node en Docker Hub: https://hub.docker.com/_/node
- MDN Web Docs — Códigos de estado HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status