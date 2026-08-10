---
name: web-cybersecurity-avanzado
description: Implementa defensa en profundidad: OWASP Top 10, Content Security Policy, CORS, rate limiting, JWT seguro y gestión de secretos
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "web-cybersecurity"
  nivel: avanzado
  stack: "Node.js, helmet, JWT, CSP"
---

# Ciberseguridad web — Nivel avanzado

## Qué hace este skill

Guía para implementar defensa en profundidad en producción: OWASP Top 10 (XSS, CSRF, inyección SQL, IDOR, SSRF), Content Security Policy real, CORS correcto, rate limiting, JWT con buenas prácticas y gestión de secretos y dependencias.

## Cuándo usarlo

- La app maneja datos de usuarios y va a producción o ya está en ella.
- Necesitas una política CSP estricta o auditar un OWASP Top 10.
- Vas a implementar autenticación basada en JWT o endurecer CORS.

## Requisitos previos

- Nivel básico de este tema (helmet, bcrypt, validación).
- Conocimiento de cómo funcionan cookies, headers CORS y tokens.

## Workflow paso a paso

1. **XSS**: escapa salidas (`textContent`, template literals seguras), sanea con librería (DOMPurify si es HTML) y refuerza con CSP. Nunca `innerHTML` con entrada del usuario.
2. **CSP real**: define `Content-Security-Policy` con helment/`helmet.contentSecurityPolicy`: `default-src 'self'`, `script-src 'self'` + nonce/hash para inline, `object-src 'none'`, `base-uri 'self'`; prueba con report-only antes de activar.
3. **CORS correcto**: `cors({ origin: allowlist, credentials: true })`; jamás `origin: "*"` con cookies. Maneja preflight y errores.
4. **Inyección SQL**: exclusivamente SQL parametrizado o queries de ORM; nunca interpolación de cadenas. Revisa `$queryRaw`/literales si usas Prisma.
5. **IDOR/SSRF**: autoriza por recurso (`userId` de la sesión, no del body/params) y valida URLs/dominios que tu servidor vaya a fetchear.
6. **Rate limiting**: `express-rate-limit` o similar por IP y por usuario; en login usa ventanas cortas y bloqueos; añade cabecera `Retry-After`.
7. **JWT seguro**: firma HS256/RS256 con secret/privada en env, `exp` y `aud`/`iss`; no metas datos sensibles; validate en middleware; RFC 8725 como referencia.
8. **Secretos**: todo en variables de entorno (nunca en repo); rota valores comprometidos; en desarrollo usa `.env.example` documentado.
9. **Dependencias**: `npm audit` en CI, actualiza menores, revisa advisories; congela versiones críticas.
10. **Cabeceras finales**: `X-Frame-Options DENY`, `Referrer-Policy`, `Permissions-Policy`; verifica con securityheaders.com.
11. Documenta: políticas, allowlist de CORS y decisiones de JWT en el repo.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `oauth_sw` | ¿App con dominio propio? | texto | sí | "app.midominio.com" |
| `auth_método` | Sesiones/JWT/OAuth | lista | no | "JWT access + refresh" |
| `hosts_externos` | Dominios que cargan recursos | lista | no | cdn.midominio.com |
| `apis_thirdparty` | LLamadas del servidor a terceros | lista | no | "api.pagos.dev" |
| `usuarios_datos` | ¿Datos personales? | booleano | no | true |
| `reporte_csp` | ¿CSP en report-only? | booleano | no | true primero |

## Reglas y checklist

- [ ] OWASP Top 10 revisado explícitamente y por vulnerabilidad resuelta/documentada
- [ ] CSP activa o en report-only con sirena de fallos
- [ ] CORS con allowlist; nunca `*` con credenciales
- [ ] SQL parametrizado en el 100% de queries
- [ ] IDOR: autorización por recurso y sesión, no por input
- [ ] Rate limiting en auth y endpoints sensibles
- [ ] JWT con exp + aud/iss, sin datos sensibles
- [ ] Secretos solo en env; auditoría periódica con `npm audit`
- [ ] Cabeceras verificadas (securityheaders.com, MDN)

## Ejemplos de prompts

- "Configura una CSP estricta con nonce para mi app Express, primero en report-only"
- "Implementa rate limiting de 5 intentos por minuto en login con bloqueo"
- "Corrige los IDOR de mi API: autorización por sesión y no por params"
- "Revisa mis JWT contra RFC 8725 y señala riesgos"
- "Monta CORS con allowlist para múltiples dominios de clientes"

## Plantillas y recursos

- [templates/configuracion-segura.js](templates/configuracion-segura.js) — CSP + CORS + rate limit + JWT
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel