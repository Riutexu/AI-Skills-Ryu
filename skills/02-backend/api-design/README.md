# API Design

Conjunto de skills para diseñar APIs HTTP con criterio: desde los conceptos REST fundamentales (recursos, colecciones, verbos, códigos de estado y endpoints anidados) hasta el diseño profesional con contratos OpenAPI, semántica de errores RFC 7807, versionado, webhooks, API gateways y decisiones REST vs GraphQL.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `api-design-basico` | Básico | Conceptos REST (recursos y colecciones), verbos HTTP y su semántica, códigos de estado 2xx/3xx/4xx/5xx, endpoints anidados |
| `api-design-avanzado` | Avanzado | Diseño RESTful coherente: plurales, versionado, paginación cursor vs offset, filtrado/orden, errores RFC 7807, documentación OpenAPI 3 |
| `api-design-profesional` | Profesional | REST vs GraphQL, contratos y retrocompatibilidad, webhooks y event-driven, API gateway, monitoreo, rate limiting/quotas, API keys y OAuth2 |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| Modelado de recursos | Colecciones y endpoints anidados simples | Plurals consistentes, `id` en rutas, versionado | Contratos versionados con retrocompatibilidad |
| Paginación | No existe (listas completas) | Offset y cursor, con metadatos | Strategy por recurso, cursors estables |
| Errores | Status codes correctos | RFC 7807 problem details | RFC 7807 + códigos de dominio + trace IDs |
| Documentación | Sin documentación formal | OpenAPI 3 completo | Contratos con SCIM/OpenAPI y tests de contrato |
| Integración | Un solo cliente síncrono | REST puro | Webhooks, event-driven, API gateway, quotas |

## Instalación

Copia la carpeta de cada skill a tu proyecto de opencode:

```powershell
# Por proyecto
Copy-Item -Recurse "02-backend\api-design\api-design-basico" ".opencode\skills\"

# Global (todos tus proyectos)
Copy-Item -Recurse "02-backend\api-design\*" "$HOME\.config\opencode\skills\"
```

Cada skill se activa automáticamente por su `description` cuando tu prompt trata de diseñar endpoints, contratos o integraciones HTTP.

## Ruta de aprendizaje

1. **Básico** — Aprende a modelar recursos y colecciones, elegir el verbo HTTP correcto y responder con el status code adecuado.
2. **Avanzado** — Diseña APIs coherentes de extremo a extremo: naming, versionado, paginación, filtros y contratos OpenAPI 3.
3. **Profesional** — Toma decisiones de arquitectura: cuándo GraphQL, versionado con retrocompatibilidad, webhooks seguros, gateway, monitoreo y seguridad.

Completa cada nivel en orden: el diseño profesional asume que dominas el contrato OpenAPI del nivel avanzado.

## Referencias clave

- Tesis de Fielding sobre REST (fuente original): https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
- RFC 7807 — Problem Details for HTTP APIs: https://www.rfc-editor.org/rfc/rfc7807
- OpenAPI Specification 3.1: https://spec.openapis.org/oas/v3.1.0
- Guía de diseño de APIs de Microsoft: https://github.com/microsoft/api-guidelines
- Referencia de la API de Stripe (ejemplo real de buen diseño): https://docs.stripe.com/api
- OWASP API Security Top 10: https://owasp.org/www-project-api-security/
- Shopper Info de GitHub REST API (documentación de versionado): https://docs.github.com/en/rest/overview/versions