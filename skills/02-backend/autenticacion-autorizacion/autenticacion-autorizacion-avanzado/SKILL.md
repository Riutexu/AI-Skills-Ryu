---
name: autenticacion-autorizacion-avanzado
description: Autenticación con JWT HS256, access y refresh tokens con rotación, protección de rutas, RBAC con roles, y fundamentos de OAuth2/OIDC y NextAuth.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "autenticacion-autorizacion"
  nivel: avanzado
  stack: "Node.js, Express, jsonwebtoken, OAuth2, OIDC, NextAuth"
---

# Autenticación avanzada: JWT, tokens y RBAC

## Qué hace este skill

Te guía en la implementación de autenticación stateless con JWT firmado HS256: estructura del token (header, payload, firma), emisión de access tokens de corta vida y refresh tokens con rotación y revocación, middleware de protección de rutas, y autorización basada en roles (RBAC). Incluye los fundamentos de OAuth2/OpenID Connect (flujo authorization code con PKCE) y cómo integrar autenticación de terceros con NextAuth en Next.js.

## Cuándo usarlo

- Cuando tu API y tu frontend están separados y necesitas tokens en lugar de sesiones de servidor.
- Cuando necesitas escalar horizontalmente sin estado de sesión compartido.
- Cuando la app requiere roles diferenciados en las rutas (admin, editor, usuario).
- Cuando delegas el login a Google, GitHub u otros proveedores OAuth2/OIDC.

## Requisitos previos

- Nivel básico de `autenticacion-autorizacion` (bcrypt, sesiones, conceptos auth vs authz).
- Conocer Express, middlewares y el manejo de headers HTTP (`Authorization: Bearer`).
- Conocer async/await y el uso de variables de entorno.
- Conceptos de REST API y JSON.

## Workflow paso a paso

1. Instalar dependencias: `npm install jsonwebtoken` (y `@types/jsonwebtoken` en TypeScript).
2. Configurar secretos en `.env`: `JWT_ACCESS_SECRET` y `JWT_REFRESH_SECRET` distintos, con al menos 32 caracteres aleatorios cada uno.
3. Definir duraciones explícitas: access de 15 minutos (`15m`) y refresh de 7 días (`7d`).
4. Crear la función `firmarToken(usuarioId, rol)` que siembre un payload mínimo: `sub` (usuarioId), `rol` y `iat`, firmado HS256.
5. Crear la función `verificarToken(token, secreto)` que valide firma y expiración y devuelva el payload, lanzando error en ambos fallos.
6. En `POST /login`, tras verificar credenciales, emitir `{ accessToken, refreshToken }`; guardar el refresh en una tabla de refresh tokens (memoria o DB) con `usuarioId` y `expiraEn`.
7. Crear el middleware `autenticar`: leer `Authorization: Bearer <token>`, verificar el access token y adjuntar `req.usuario = payload` o responder 401.
8. Crear el endpoint `POST /refresh`: recibir el refresh token, verificar que existe y no está revocado, emitir un access nuevo y rotar el refresh (invalidar el anterior y emitir uno nuevo).
9. Implementar la revocación: `POST /logout` elimina el refresh token de la tabla; rotación obligatoria: un refresh reutilizado se detecta y revoca la cadena completa.
10. Crear el middleware `autorizar(...roles)` que comprueba `req.usuario.rol` y responde 403 si no coincide.
11. Aplicar los middlewares por ruta: `router.post('/', autenticar, autorizar('admin'), crear)`.
12. Documentar el flujo OAuth2/OIDC para logins de terceros: authorization code con PKCE (nunca client credentials en navegador), intercambio en el servidor y uso del token de id para crear sesión propia.
13. Si el frontend es Next.js, configurar NextAuth con un provider (Google/GitHub) y JWT strategy, protegiendo páginas con `getServerSession`.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `algoritmoFirma` | Algoritmo de firma de los JWT | string | sí | `HS256` |
| `secretoAccess` | Secreto para firmar access tokens | string | sí | `process.env.JWT_ACCESS_SECRET` |
| `secretoRefresh` | Secreto para firmar refresh tokens | string | sí | `process.env.JWT_REFRESH_SECRET` |
| `duracionAccess` | Vida del access token | string | sí | `15m` |
| `duracionRefresh` | Vida del refresh token | string | sí | `7d` |
| `rolesSistema` | Roles disponibles para RBAC | array | sí | `['admin', 'editor', 'usuario']` |
| `reclamacionRol` | Claim donde viaja el rol del usuario | string | no | `rol` |
| `reclamacionSub` | Claim con el identificador del usuario | string | no | `sub` |
| `rotacionRefresh` | Si el refresh rota en cada renovación | boolean | sí | `true` |
| `entornoProvider` | Entorno donde corre la app (controla sameSite/secure) | string | no | `production` |

## Reglas y checklist

- [ ] Los JWT usan un secreto distinto para access y refresh (al menos 32 bytes aleatorios).
- [ ] El payload de los tokens es mínimo (sub, rol, iat) y nunca contiene contraseñas ni datos sensibles.
- [ ] El access token es de corta vida (5-15 minutos). Las sesiones largas se mantienen con el refresh.
- [ ] El refresh token se almacena en el servidor con expiración y se revoca en logout.
- [ ] La rotación está activa: cada renovación invalida el refresh anterior.
- [ ] Rehusar un refresh revocado detecta el robo y revoca la cadena completa.
- [ ] `autenticar` responde 401 ante token ausente, inválido o expirado, sin filtrar detalles.
- [ ] Los roles se comprueban con middleware dedicado; un rol no autorizado responde 403.
- [ ] El refresh token nunca viaja en URLs ni en logs: solo por canal seguro (cookie httpOnly o cliente guardo en memoria).
- [ ] OAuth2 en navegador usa authorization code + PKCE, nunca client credentials ni refresh tokens en el cliente.
- [ ] No hay secretos hardcodeados: todo sale de variables de entorno.

## Ejemplos de prompts

- "Implementa login con JWT HS256 en Express: access token de 15 minutos y refresh de 7 días con rotación y revocación."
- "Crea los middlewares autenticar y autorizar para RBAC con roles admin, editor y usuario; 401 sin token, 403 sin rol."
- "Diseña el endpoint POST /refresh con rotación y detección de refresh tokens reutilizados."
- "Configura NextAuth en Next.js con un provider de Google y estrategia JWT protegiendo una ruta del dashboard."
- "Explica el flujo authorization code con PKCE para login con GitHub: ¿por qué no usar refresh tokens en el navegador?"

## Plantillas y recursos

- `templates/jwt-auth.js` — autenticación JWT completa: login, refresh con rotación, revocación y logout.
- `templates/rbac.js` — middlewares `autenticar` y `autorizar(...roles)` con RBAC.
- Checklist del nivel: `resources/checklist.md`.