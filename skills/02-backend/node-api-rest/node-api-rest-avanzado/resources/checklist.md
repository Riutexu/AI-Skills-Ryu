# Checklist — node-api-rest-avanzado

## Estructura y configuración

- [ ] Estructura `src/` con `app.js`, `server.js`, `config/`, `routes/`, `controllers/`, `schemas/`, `middlewares/`
- [ ] `dotenv` cargado y configuración centralizada en `src/config/env.js`
- [ ] Sin secretos hardcodeados: todo desde variables de entorno
- [ ] `app.js` exporta `crearApp()` y `server.js` solo arranca el listener

## Validación con Zod

- [ ] Esquema Zod para body de creación (POST) y actualización (PUT)
- [ ] Esquema Zod para parámetros de ruta (`:id` numérico)
- [ ] Esquema Zod para query de paginación y filtros
- [ ] Middleware `validate()` genérico reutilizado en todas las rutas
- [ ] Error de validación responde 400 con detalle normalizado (campo + mensaje)

## Manejo de errores

- [ ] Clase `AppError` usada en controladores para 400/401/404/409
- [ ] Error handler registrado como último middleware en `app.js`
- [ ] Error handler responde al menos 400, 401, 404 y 500 con formato uniforme
- [ ] Errores no operacionales se registran con `console.error` y responden 500 genérico
- [ ] El 404 de rutas inexistentes también usa el formato de error único

## Middlewares y seguridad básica

- [ ] CORS configurado con orígenes explícitos desde `.env`
- [ ] Logging de peticiones con método, ruta, status y duración
- [ ] Middleware de auth placeholder protege rutas sensibles (401 sin token)

## Paginación, filtros y versión

- [ ] Respuesta paginada incluye `data`, `total`, `page` y `limit`
- [ ] `limit` respeta el tope de `maximoLimite` (p. ej. 100)
- [ ] Ordenación acepta solo campos de una lista blanca
- [ ] Filtros por rango (precio mín/máx) implementados con query params
- [ ] Todas las rutas montadas bajo `/api/v1`

## Verificación final

- [ ] `POST` inválido devuelve 400 con mismo formato que el 404
- [ ] Página `page=999` devuelve lista vacía sin error
- [ ] `limit=10000` se recorta al máximo permitido
- [ ] Ruta protegida sin token responde 401