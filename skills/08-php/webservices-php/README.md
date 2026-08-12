# Servicios web y APIs en PHP

APIs bien diseñadas con PHP puro: contratos JSON, versionado, rate limiting, webhooks y observabilidad.

**Stack:** PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis · **Familia:** PHP y ecosistema web (08-php)

| Tema | Resumen | Niveles |
|---|---|---|
| **Contratos JSON y respuestas** | Respuestas JSON coherentes como contrato: envelopes, errores, paginación y código correcto. | [basico](/webservices-php-contratos-json-basico/) · [avanzado](/webservices-php-contratos-json-avanzado/) · [profesional](/webservices-php-contratos-json-profesional/) |
| **cURL y clientes HTTP** | Consumir APIs de forma robusta: cURL, timeouts, retries, manejo de errores y fakes de test. | [basico](/webservices-php-cliente-curl-http-basico/) · [avanzado](/webservices-php-cliente-curl-http-avanzado/) · [profesional](/webservices-php-cliente-curl-http-profesional/) |
| **Webhooks y callbacks** | Integraciones que avisan: exponer webhooks, verificar firmas, reintentar y entregar de forma idempotente. | [basico](/webservices-php-webhooks-callbacks-basico/) · [avanzado](/webservices-php-webhooks-callbacks-avanzado/) · [profesional](/webservices-php-webhooks-callbacks-profesional/) |
| **Rate limiting y throttling** | Proteger APIs de abuso: límites por clave, ventanas, colas y respuestas 429 correctas. | [basico](/webservices-php-rate-limiting-php-basico/) · [avanzado](/webservices-php-rate-limiting-php-avanzado/) · [profesional](/webservices-php-rate-limiting-php-profesional/) |
| **JWT y autenticación de API** | Autenticación sin estado bien hecha: tokens firmados, expiración, refresh y revocación cuando toca. | [basico](/webservices-php-jwt-auth-api-basico/) · [avanzado](/webservices-php-jwt-auth-api-avanzado/) · [profesional](/webservices-php-jwt-auth-api-profesional/) |
| **PHP asíncrono: Fiber y Swoole** | Operaciones concurrentes en PHP moderno: Fibers, Swoole/ReactPHP y el modelo correcto según el caso. | [basico](/webservices-php-php-asincrono-basico/) · [avanzado](/webservices-php-php-asincrono-avanzado/) · [profesional](/webservices-php-php-asincrono-profesional/) |
| **Rendimiento de APIs** | APIs rápidas: latencia medida, caché por capa, payloads ligeros y presupuestos de p99. | [basico](/webservices-php-api-performance-basico/) · [avanzado](/webservices-php-api-performance-avanzado/) · [profesional](/webservices-php-api-performance-profesional/) |
| **Observabilidad de APIs** | Saber qué pasa: logs estructurados, métricas, tracing y dashboards de negocio. | [basico](/webservices-php-observabilidad-api-basico/) · [avanzado](/webservices-php-observabilidad-api-avanzado/) · [profesional](/webservices-php-observabilidad-api-profesional/) |
| **OpenAPI y documentación** | API documentada de verdad: esquemas OpenAPI, generación de clientes y pruebas de contrato. | [basico](/webservices-php-documentacion-openapi-basico/) · [avanzado](/webservices-php-documentacion-openapi-avanzado/) · [profesional](/webservices-php-documentacion-openapi-profesional/) |
| **Versionado de APIs** | Evolucionar sin romper clientes: versionado por URL/header, deprecaciones y estrategias de transición. | [basico](/webservices-php-versionado-api-basico/) · [avanzado](/webservices-php-versionado-api-avanzado/) · [profesional](/webservices-php-versionado-api-profesional/) |
| **Caché HTTP y headers** | Caché correcta por headers: Cache-Control, ETag, stale-while-revalidate y CDN. | [basico](/webservices-php-cache-http-headers-basico/) · [avanzado](/webservices-php-cache-http-headers-avanzado/) · [profesional](/webservices-php-cache-http-headers-profesional/) |
| **Testing de APIs** | Pruebas de API de verdad: happy paths, errores, contratos y fuzzing controlado. | [basico](/webservices-php-testing-api-php-basico/) · [avanzado](/webservices-php-testing-api-php-avanzado/) · [profesional](/webservices-php-testing-api-php-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/08-php.json](../../catalogos/08-php.json).