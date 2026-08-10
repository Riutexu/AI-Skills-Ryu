# Autenticación y Autorización

Conjunto de skills progresivos para asegurar aplicaciones web y APIs: desde la autenticación de sesión clásica con bcrypt y cookies httpOnly, pasando por JWT con access/refresh tokens y RBAC, hasta el nivel profesional con SSO/OIDC federado, 2FA/TOTP, políticas de sesión endurecidas, auditoría, rotación de secretos y cumplimiento GDPR. Aplicable a Node.js (Express/Fastify) y Next.js (NextAuth).

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `autenticacion-autorizacion-basico` | Básico | Diferencia autenticación vs autorización, hashing de contraseñas con bcrypt (hash + salt), sesiones con cookies httpOnly, flujo registro/login/logout |
| `autenticacion-autorizacion-avanzado` | Avanzado | JWT (estructura, firma HS256), access + refresh tokens con rotación y revocación, OAuth2 y OpenID Connect (authorization code, PKCE), NextAuth, protección de rutas y RBAC con roles |
| `autenticacion-autorizacion-profesional` | Profesional | SSO/OIDC federado, 2FA/MFA con TOTP, almacenamiento seguro de tokens (httpOnly, Secure, SameSite), auditoría de sesiones e IP, secret rotation, zero trust, GDPR y rate limiting en login |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| Mecanismo central | Sesiones con cookie httpOnly | JWT (access + refresh) | SSO/OIDC federado + JWT cortos |
| Contraseñas | bcrypt con salt automático | Argon2/bcrypt con verificación segura | Argon2id, hashes rotados en brechas |
| Factor adicional | Ninguno | 2FA opcional (email/TOTP) | MFA obligatorio: TOTP, respaldo y recuperación |
| Tokens de sesión | Cookie de sesión opaca | JWT firmado HS256 con rotación | Tokens en cookies httpOnly+Secure+SameSite, cifrado en reposo |
| Autorización | Rutas protegidas por login | RBAC con roles y middlewares | RBAC + ABAC, principio de mínimo privilegio, zero trust |
| Cumplimiento | Privacidad en logs | Cierre de sesión por servidor | GDPR (derecho al olvido, consentimiento), auditoría, secret rotation |

## Instalación

Copia la carpeta de cada skill a tu proyecto de opencode:

```powershell
# Por proyecto
Copy-Item -Recurse "02-backend\autenticacion-autorizacion\autenticacion-autorizacion-basico" ".opencode\skills\"

# Global (todos tus proyectos)
Copy-Item -Recurse "02-backend\autenticacion-autorizacion\*" "$HOME\.config\opencode\skills\"
```

Cada skill se activa automáticamente por su `description` cuando tu prompt trata de login, registro, sesiones, tokens, roles o seguridad.

## Ruta de aprendizaje

1. **Básico** — Implementa registro, login y logout con bcrypt y sesiones de cookie httpOnly. Entiende la diferencia entre autenticación (quién eres) y autorización (qué puedes hacer).
2. **Avanzado** — Migra a JWT con access y refresh tokens, protege rutas con middlewares y aplica RBAC con roles. Comprende OAuth2 y OIDC para delegar identidad a terceros.
3. **Profesional** — Endurece la arquitectura: SSO federado, 2FA con TOTP, cookies seguras, auditoría de sesiones, rotación de secretos, zero trust y cumplimiento GDPR.

Completa los niveles en orden: cada uno asume los conceptos del anterior.

## Referencias clave

- OWASP Authentication Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- OWASP Session Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- OWASP Password Storage Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
- jwt.io (depurador de tokens JWT): https://jwt.io/
- RFC 6749 — The OAuth 2.0 Authorization Framework: https://datatracker.ietf.org/doc/html/rfc6749
- OpenID Connect (OIDC): https://openid.net/connect/
- RFC 6238 — TOTP: Time-Based One-Time Password: https://datatracker.ietf.org/doc/html/rfc6238
- NextAuth.js (Auth.js): https://authjs.dev/
- bcrypt (npm): https://www.npmjs.com/package/bcrypt