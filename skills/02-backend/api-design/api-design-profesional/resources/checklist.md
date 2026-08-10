# Checklist profesional: diseño de APIs

## Contrato y diseño
- [ ] Contratos versionados y retrocompatibles documentados (OpenAPI 3 / GraphQL SDL)
- [ ] Decide explícitamente REST vs GraphQL según casos de uso y documenta la decisión (ADR)
- [ ] Paginación consistente (cursor de preferencia sobre offset para sets grandes)
- [ ] Errores con formato estándar (RFC 7807 problem details) en toda la API
- [ ] Idempotencia en mutaciones cuando aplique (claves/números de idempotencia)

## Evolución y operación
- [ ] Estrategia de versionado definida (URL / versiones por contrato: additive-first)
- [ ] Deprecaciones planificadas (cabeceras Sunset, fechas, documentación)
- [ ] Webhooks documentados (payload versionado, firmas, retries y backoff)
- [ ] Rate limiting y quotas por cliente definidos y monitorizados
- [ ] API gateway en producción (autenticación de borde, throttling, observabilidad)

## Seguridad y monitorización
- [ ] Autenticación en todos los endpoints (API keys / OAuth2) sin excepciones
- [ ] Sin datos sensibles en logs, errores o respuestas de depuración
- [ ] Latencia, errores (5xx/4xx) y SLAs monitorizados con alertas
- [ ] Pruebas de contrato (contract testing) en CI para consumidores y proveedor
- [ ] Documentación pública actualizada en cada release