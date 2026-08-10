# Checklist — node-api-rest-profesional

## Arquitectura por dominios

- [ ] Cada dominio tiene `controller`, `service` y `repository` en `src/modulos/<dominio>/`
- [ ] El controller solo traduce HTTP: lee `req`, llama al service y construye `res`
- [ ] El service contiene reglas de negocio y no sabe nada de Express
- [ ] El repository expone una interfaz (`findAll`, `findById`, `create`, `update`, `delete`)
- [ ] Cambiar de persistencia en memoria a PostgreSQL no toca service ni controller

## Idempotencia y caching

- [ ] PUT maneja `If-Match` con el ETag y responde 412 si el recurso cambió
- [ ] GET individual responde con cabecera `ETag` calculada del cuerpo
- [ ] GET individual con `If-None-Match` correcto responde 304 sin cuerpo
- [ ] Aplicar el mismo PUT dos veces produce el mismo estado final del recurso

## Rate limiting

- [ ] Limiter por IP configurado con ventana y máximo explícitos
- [ ] El limiter se registra antes del parseo de body
- [ ] Exceder el límite responde 429 con formato de error uniforme
- [ ] Incluye cabeceras `RateLimit-*` o `Retry-After`

## Documentación OpenAPI

- [ ] Comentarios JSDoc con `@swagger` en los handlers de cada dominio
- [ ] Especificación generada con swagger-jsdoc y validada (no solo renderizada)
- [ ] UI accesible en `/api-docs` y servidores de ejemplo definidos
- [ ] Esquemas de entrada y salida referenciados con `$ref` (sin duplicación)

## Pruebas de integración

- [ ] Suite corre contra la app real con `supertest` (sin abrir puerto)
- [ ] Cobertura de al menos: 200 listar, 201 crear, 400 validación, 404, 412 con If-Match obsoleto, 429 y 304
- [ ] Las pruebas usan datos aislados (memoria limpia por test)

## Docker y operación

- [ ] Dockerfile multi-etapa: `npm ci --omit=dev` en la imagen final
- [ ] Imagen final sin `.env`, sin archivos de desarrollo y con usuario sin privilegios
- [ ] `HEALTHCHECK` definido en el Dockerfile
- [ ] `/health` distingue 200 (viva) de 503 (dependencia caída)
- [ ] Parámetros operativos (puerto, límites, CORS) vienen de variables de entorno

## Verificación final

- [ ] `docker build` completo sin errores y `docker run` sirve `/api-docs` y `/health`
- [ ] `npm test` pasa en local con la suite de integración completa