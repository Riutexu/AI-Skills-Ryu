# Seguridad web JS

Endurecés la SPA contra XSS, CSRF, tokens expuestos y dependencias vulnerables.

**Stack:** CSP, fetch, storage seguro, npm audit · **Familia:** JavaScript y TypeScript (12-js-ts)

| Tema | Resumen | Niveles |
|---|---|---|
| **XSS y sanitización** | Prevenís XSS con escapes, sanitización y reglas estrictas de inserción al DOM. | [basico](/js-seguridad-xss-sanitizacion-basico/) · [avanzado](/js-seguridad-xss-sanitizacion-avanzado/) · [profesional](/js-seguridad-xss-sanitizacion-profesional/) |
| **CSP** | Implementás Content Security Policy con estrategias seguras de scripts, styles y conexiones. | [basico](/js-seguridad-csp-basico/) · [avanzado](/js-seguridad-csp-avanzado/) · [profesional](/js-seguridad-csp-profesional/) |
| **Autenticación en el cliente** | Manejás la sesión y las credenciales en el cliente sin exponer secretos. | [basico](/js-seguridad-autenticacion-cliente-basico/) · [avanzado](/js-seguridad-autenticacion-cliente-avanzado/) · [profesional](/js-seguridad-autenticacion-cliente-profesional/) |
| **Tokens y storage seguro** | Guardás y transmitís tokens con cookies httpOnly o memoria, nunca en localStorage. | [basico](/js-seguridad-tokens-storage-seguro-basico/) · [avanzado](/js-seguridad-tokens-storage-seguro-avanzado/) · [profesional](/js-seguridad-tokens-storage-seguro-profesional/) |
| **Dependencias y auditoría** | Auditás y mantenés dependencias sin vulnerabilidades conocidas ni supply chain riesgosa. | [basico](/js-seguridad-dependencias-auditoria-basico/) · [avanzado](/js-seguridad-dependencias-auditoria-avanzado/) · [profesional](/js-seguridad-dependencias-auditoria-profesional/) |
| **Inputs y validación** | Validás entradas en el cliente como primera línea y sin confiar en ellas como única. | [basico](/js-seguridad-inputs-validacion-basico/) · [avanzado](/js-seguridad-inputs-validacion-avanzado/) · [profesional](/js-seguridad-inputs-validacion-profesional/) |
| **CSRF en frontend** | Protegés las peticiones de estado contra CSRF con tokens, SameSite y doble envío. | [basico](/js-seguridad-csrf-frontend-basico/) · [avanzado](/js-seguridad-csrf-frontend-avanzado/) · [profesional](/js-seguridad-csrf-frontend-profesional/) |
| **Secrets del cliente** | Mantenés los secretos fuera del frontend: nada sensible debe viajar en el bundle. | [basico](/js-seguridad-secrets-cliente-basico/) · [avanzado](/js-seguridad-secrets-cliente-avanzado/) · [profesional](/js-seguridad-secrets-cliente-profesional/) |
| **Seguridad de APIs** | Consumís APIs de forma segura: HTTPS, autorización, rate limiting y respuestas verificadas. | [basico](/js-seguridad-seguridad-apis-basico/) · [avanzado](/js-seguridad-seguridad-apis-avanzado/) · [profesional](/js-seguridad-seguridad-apis-profesional/) |
| **Hardening del navegador** | Reducís la superficie de ataque con headers, iframes, referrers y políticas de privacidad. | [basico](/js-seguridad-hardening-navegador-basico/) · [avanzado](/js-seguridad-hardening-navegador-avanzado/) · [profesional](/js-seguridad-hardening-navegador-profesional/) |
| **Logs sin datos sensibles** | Mantenés los logs y el reporting libres de datos personales y credenciales. | [basico](/js-seguridad-logs-sin-datos-sensibles-basico/) · [avanzado](/js-seguridad-logs-sin-datos-sensibles-avanzado/) · [profesional](/js-seguridad-logs-sin-datos-sensibles-profesional/) |
| **Checklist de seguridad web** | Aplicás y mantenés un checklist de seguridad integral que se verifica en cada release. | [basico](/js-seguridad-checklist-seguridad-web-basico/) · [avanzado](/js-seguridad-checklist-seguridad-web-avanzado/) · [profesional](/js-seguridad-checklist-seguridad-web-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/12-js-ts.json](../../catalogos/12-js-ts.json).