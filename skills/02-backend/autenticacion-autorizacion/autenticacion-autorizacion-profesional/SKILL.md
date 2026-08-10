---
name: autenticacion-autorizacion-profesional
description: Seguridad de identidad a nivel producción: SSO/OIDC federado, 2FA con TOTP, cookies seguras, auditoría de sesiones, rotación de secretos, zero trust y GDPR.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "autenticacion-autorizacion"
  nivel: profesional
  stack: "OIDC, TOTP (RFC 6238), OWASP, GDPR, Node.js"
---

# Identidad profesional: SSO, MFA y política de sesiones

## Qué hace este skill

Endurece la identidad digital de una organización: SSO federado con OpenID Connect, segundo factor con TOTP (RFC 6238), diseño de cookies de sesión seguras (httpOnly, Secure, SameSite), auditoría de sesiones y de IP con detección de anomalías, rotación periódica de secretos, modelo zero trust, cumplimiento GDPR (derecho al olvido, consentimiento) y mitigación de fuerza bruta con rate limiting en login. Alineado con los cheat sheets de OWASP.

## Cuándo usarlo

- Cuando la aplicación maneja datos sensibles y la autenticación local ya no es suficiente (SSO corporativo, MFA obligatorio).
- Cuando necesitas demostrar cumplimiento: auditoría de accesos, derecho al olvido y consentimiento explícito (GDPR).
- Cuando quieres endurecer sesiones existentes frente a robo de cookies, reuso de tokens y fuerza bruta.
- Cuando adoptas un modelo de seguridad por capas: zero trust, mínimo privilegio y rotación continua de secretos.

## Requisitos previos

- Niveles básico y avanzado de `autenticacion-autorizacion` (bcrypt, JWT, refresh tokens, RBAC).
- Comprender cookies HTTP, cabeceras (Set-Cookie, Authorization) y HTTPS/TLS.
- Nociones de OWASP Top 10 y de conceptos de cumplimiento (qué es un dato personal).
- Familiaridad con la configuración de un proveedor de identidad (Auth0, Keycloak, Google Workspace).

## Workflow paso a paso

1. Definir el modelo de confianza: el proveedor de identidad (IdP) autentica; tu aplicación solo autoriza después de validar el token de id del IdP (ISS, AUD, EXP, nonce).
2. Integrar SSO con OIDC authorization code + PKCE: redirigir al IdP, recibir el código en el servidor, intercambiarlo y validar el id_token antes de crear la sesión local.
3. Implementar MFA con TOTP: generar secreto aleatorio de 20 bytes, mostrarlo en QR (otpauth://), verificar el código de 6 dígitos con ventana (RFC 6238) y guardar el secreto cifrado.
4. Ofrecer códigos de respaldo de un solo uso (p. ej. 10 códigos) y forzar re-verificación del TOTP ante eventos de riesgo (nueva IP, navegador nuevo).
5. Rediseñar las cookies: `httpOnly`, `Secure` (solo HTTPS), `SameSite=Strict` donde aplique, `__Host-` como prefijo y `maxAge` limitado con rotación de sesión en login.
6. Implementar auditoría de sesiones: cada sesión tiene `id`, `creadaEn`, `ultimaActividad`, `ip`, `userAgent`; registrar y listar sesiones activas, permitir revocación selectiva.
7. Detectar anomalías: cambio de IP o userAgent fuera de ventana razonable dispara reautenticación; alertar sobre accesos simultáneos geográficamente incompatibles.
8. Aplicar rate limiting específico de login: fallos por cuenta y por IP con bloqueo progresivo (exponential backoff) y respuesta 429, sin diferenciar causa (evita enumeración).
9. Establecer rotación de secretos: los secretos de firma JWT y de cifrado tienen fecha de caducidad, se publican dos a la vez (doble firma/verificación) y se rotan sin cortar sesiones activas.
10. Adoptar principios zero trust y de mínimo privilegio: cada servicio autentica cada petición, scopes por acción, y nunca se confía en la red interna.
11. Cumplir GDPR: consentimiento explícito documentado, exportación de datos del usuario, derecho al olvido que elimina o anonimiza cuentas y datos personales, y retención mínima de logs con los identificadores necesarios.
12. Documentar todo en una política de sesiones escrita (duraciones, lockout, MFA, recuperación de cuenta) y en los ADRs del equipo.
13. Probar el sistema: simular robo de cookie, reuso de refresh, fuerza bruta, cambio de IP y baja de cuenta por derecho al olvido; verificar que cada evento se audita.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `proveedorIdentidad` | IdP para SSO OIDC | string | sí | `keycloak` |
| `prescripcion` | Scope solicitado al IdP | string | no | `openid profile email` |
| `diasTokensRespaldo` | Caducidad de los códigos de respaldo TOTP | number | no | `30` |
| `ventanaTOTP` | Tolerancia de ventanas del código TOTP | number | no | `1` |
| `nombreCookieSesion` | Nombre de la cookie de sesión segura | string | no | `__Host-sid` |
| `maxSesionesActivas` | Límite de sesiones simultáneas por usuario | number | no | `5` |
| `fallosAntesLockout` | Fallos de login antes del bloqueo temporal | number | no | `5` |
| `ventanaLockout` | Duración del bloqueo tras fallos repetidos | string | no | `15m` |
| `diasRotacionSecretos` | Caducidad de los secretos de firma | number | no | `90` |
| `diasRetencionAuditoria` | Retención de logs de auditoría | number | no | `90` |

## Reglas y checklist

- [ ] El login de SSO valida ISS, AUD, EXP y nonce del id_token antes de crear sesión.
- [ ] El intercambio del código OIDC ocurre solo en el servidor; nunca se exponen secretos al navegador.
- [ ] MFA TOTP implementado según RFC 6238 con secreto cifrado y códigos de respaldo de un solo uso.
- [ ] Eventos de riesgo (IP o dispositivo nuevo) exigen reautenticación completa (no solo token).
- [ ] Cookies de sesión con httpOnly, Secure, SameSite y prefijo `__Host-` donde sea posible; la sesión rota en login.
- [ ] Auditoría registra inicio, cierre, fallos y revocación de sesiones; el usuario puede listar y revocar las suyas.
- [ ] La IP y el userAgent se registran por sesión y las anomalías disparan alertas o reautenticación.
- [ ] Rate limiting de login por cuenta e IP con backoff y respuesta 429, sin filtro de causa.
- [ ] Los secretos rotan periódicamente con periodo de solapamiento; las sesiones activas no se cortan en la rotación.
- [ ] Zero trust: cada petición se autentica, autoriza y audita; mínimo privilegio por rol y scope.
- [ ] GDPR: consentimiento registrado, exportación de datos disponible y derecho al olvido implementado (borrado o anonimización).
- [ ] La política de sesiones está escrita y documentada (ADR) con duraciones, lockout y recuperación.

## Ejemplos de prompts

- "Integra SSO con Keycloak vía OIDC authorization code + PKCE, validando iss, aud, exp y nonce antes de crear la sesión."
- "Implementa 2FA con TOTP en Node.js: generación del secreto, QR, verificación con ventana RFC 6238 y códigos de respaldo."
- "Rediseña la cookie de sesión con httpOnly, Secure, SameSite=Strict y prefijo __Host-, con rotación de sesión en login."
- "Construye el registro de auditoría de sesiones: listar sesiones activas con IP y userAgent, revocación selectiva y alerta de anomalías."
- "Diseña la política de rotación de secretos JWT con solapamiento y sin cortar sesiones activas, y el rate limiting del login con backoff."
- "Implementa el derecho al olvido GDPR anonimizando o eliminando los datos personales de un usuario y sus registros."

## Plantillas y recursos

- `templates/totp.js` — módulo TOTP RFC 6238: generación de secreto, URI otpauth, verificación con ventana y códigos de respaldo.
- `templates/politica-sesiones.md` — política completa de sesiones seguras y rotación de secretos, lista para adaptar a tu proyecto.
- Checklist del nivel: `resources/checklist.md`.