---
name: node-api-rest-profesional
description: APIs REST de producción en Fastify o Express: arquitectura por dominios, idempotencia, rate limiting, OpenAPI/Swagger, ETag, pruebas de integración, Docker y health checks.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "node-api-rest"
  nivel: profesional
  stack: "Node.js, Fastify, Express, swagger-jsdoc, supertest, Docker"
---

# API REST profesional: escala, contrato y despliegue

## Qué hace este skill

Lleva la API a estándares de producción: arquitectura por dominios (controllers, services, repositories), idempotencia en PUT, rate limiting, documentación OpenAPI generada con swagger-jsdoc y servida en `/api-docs`, caching con ETag/304, pruebas de integración con supertest, Dockerización multi-etapa y endpoints de health check con dependencias.

## Cuándo usarlo

- Cuando la API será consumida por terceros y necesita un contrato documentado (OpenAPI).
- Cuando el equipo crece y el código debe organizarse por dominios de negocio, no por tecnología.
- Cuando necesitas garantías operativas: límites de peticiones, health checks, caching y despliegue repetible.
- Cuando quieres migrar de Express a Fastify o elegir el framework adecuado al perfil de carga.

## Requisitos previos

- Haber completado los niveles básico y avanzado de `node-api-rest`.
- Conocer middlewares, validación Zod y manejo de errores en Express.
- Nociones de Docker (imágenes, puertos, capas) y de tests (jest o vitest).
- Conocer HTTP: cabeceras `ETag`, `If-None-Match`, `If-Match` y el significado de 304.

## Workflow paso a paso

1. Elegir framework según el perfil: Fastify para alta concurrencia y payloads pequeños; Express para ecosistema más amplio y familiaridad del equipo.
2. Organizar el código por dominios: cada dominio tiene `controller`, `service` y `repository`: `src/modulos/productos/`.
3. Implementar el repositorio con una interfaz (métodos `findAll`, `findById`, `create`, `update`, `delete`) y una implementación en memoria lista para reemplazar por base de datos.
4. Poner la lógica de negocio (reglas, cálculos) en el service y dejar al controller solo para traducir HTTP <-> servicio.
5. Implementar idempotencia para PUT: validar `If-Match` con el ETag del recurso y responder 412 si el cliente trabaja sobre una versión obsoleta.
6. Configurar rate limiting por IP con `express-rate-limit` (o `@fastify/rate-limit`), con ventana, máximo y mensaje 429 uniforme.
7. Documentar la API con comentarios JSDoc sobre los handlers y generar OpenAPI con `swagger-jsdoc`, sirviendo la UI de Swagger en `/api-docs`.
8. Agregar cabeceras `ETag` (hash del cuerpo) en las respuestas y soportar `If-None-Match` para responder 304 sin cuerpo.
9. Escribir pruebas de integración con `supertest` contra la app real (no contra el listener): validar status, cuerpo, cabeceras y 304.
10. Dockerizar con Dockerfile multi-etapa (build con dependencias de desarrollo, runtime only con `npm ci --omit=dev`).
11. Agregar health check completo en `/health` que reporte estado de dependencias (DB, cache) con su propio status y código 200 o 503.
12. Configurar variables de entorno para todo: puerto, límites, orígenes CORS, secretos de logs.
13. Correr la suite de integración completa y verificar el despliegue local con Docker Compose si hay dependencias.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `framework` | Framework HTTP del proyecto | string | sí | `fastify` |
| `dominios` | Lista de dominios de negocio a modularizar | array | sí | `['productos', 'pedidos', 'usuarios']` |
| `ventanaRateLimit` | Ventana de tiempo del rate limit | string | sí | `15m` |
| `maximoPeticiones` | Máximo de peticiones por ventana e IP | number | sí | `100` |
| `mensaje429` | Respuesta JSON al exceder el límite | string | no | `'Demasiadas peticiones, reintenta más tarde'` |
| `tituloOpenAPI` | Título del contrato OpenAPI | string | sí | `'API de Comercio'` |
| `versionOpenAPI` | Versión del contrato | string | no | `1.0.0` |
| `imagenBase` | Imagen base de Docker | string | no | `node:22-alpine` |
| `puertoContenedor` | Puerto expuesto en el contenedor | number | no | `3000` |
| `tiempoHealth` | Timeout en ms para verificar dependencias | number | no | `2000` |

## Reglas y checklist

- [ ] Un dominio por carpeta: `controller` solo traduce HTTP, `service` contiene reglas de negocio, `repository` abstrae el almacenamiento.
- [ ] Los repositorios se implementan tras una interfaz para poder cambiar la persistencia sin tocar la lógica.
- [ ] PUT es idempotente y verifica `If-Match`/ETag: responde 412 ante versiones obsoletas y 204/200 tras aplicar la actualización dos veces con el mismo resultado.
- [ ] El rate limit aplica antes del parseo de body y responde 429 con formato de error uniforme.
- [ ] Toda la API está documentada en OpenAPI y la especificación se sirve en una ruta accesible.
- [ ] Las respuestas individuales incluyen `ETag` calculado del cuerpo; las revalidaciones con `If-None-Match` responden 304.
- [ ] La suite de integración corre contra `app` (no contra el puerto) con supertest y cubre 200, 201, 400, 404, 412, 429 y 304.
- [ ] El health check distingue "viva" (200) de "no lista" (503) según el estado real de las dependencias.
- [ ] El Dockerfile es multi-etapa y no copia `node_modules` ni archivos de entorno hacia la imagen final.
- [ ] Todos los parámetros operativos salen de variables de entorno con valores por defecto seguros.

## Ejemplos de prompts

- "Organiza esta API en dominios: crea la carpeta src/modulos/productos con controller, service y repository siguiendo el patrón del template."
- "Implementa idempotencia en PUT /productos/:id usando If-Match y ETag; responde 412 cuando el recurso cambió desde la última lectura."
- "Configura rate limiting por IP con express-rate-limit, ventana de 15 minutos y un máximo de 100 peticiones respondiendo 429."
- "Genera la especificación OpenAPI con swagger-jsdoc a partir de los comentarios JSDoc de los handlers y súbela en /api-docs."
- "Escribe un Dockerfile multi-etapa para esta API y un health check que reporte el estado de las dependencias con 200 o 503."
- "Escribe pruebas de integración con supertest que cubran el flujo completo de un producto: crear, listar, actualizar con If-Match y eliminar."

## Plantillas y recursos

- `templates/swagger.js` — configuración de swagger-jsdoc con esquemas OpenAPI 3 reutilizados por la validación.
- `templates/rateLimit.js` — rate limiter por IP para Express y alternativa para Fastify.
- `templates/Dockerfile` — build multi-etapa con imagen `node:22-alpine` y usuario sin privilegios.
- Checklist del nivel: `resources/checklist.md`.