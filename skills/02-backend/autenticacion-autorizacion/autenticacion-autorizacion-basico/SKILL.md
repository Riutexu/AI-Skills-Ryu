---
name: autenticacion-autorizacion-basico
description: Implementa autenticación básica en Node.js: bcrypt para contraseñas (hash + salt), sesiones con cookies httpOnly y flujos de registro, login y logout.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "autenticacion-autorizacion"
  nivel: basico
  stack: "Node.js, Express, express-session, bcrypt"
---

# Autenticación básica: bcrypt y sesiones con cookies

## Qué hace este skill

Te guía para implementar el ciclo completo de autenticación por sesión en una app Node.js/Express: registro de usuarios con contraseñas hasheadas con bcrypt (hash + salt automático), login con verificación segura, sesiones de servidor almacenadas en cookies httpOnly, y logout. También aclara la diferencia entre autenticación (quién eres) y autorización (qué puedes hacer), y cómo proteger rutas con un middleware.

## Cuándo usarlo

- Cuando empiezas un proyecto web y necesitas registro, login y logout sin depender de servicios externos.
- Cuando quieres una alternativa simple y robusta a JWT para aplicaciones con sesión clásica (server-side sessions).
- Cuando necesitas subir contraseñas seguras (bcrypt con salt) sin implementar criptografía a mano.

## Requisitos previos

- Node.js 18+ y npm.
- Nivel básico de Express (routing y middlewares) — ver `node-api-rest-basico`.
- Conocer cookies, HTTP y el cuerpo JSON de las peticiones.
- Tener claro el concepto de hash: "transformación de un solo sentido, no reversible".

## Workflow paso a paso

1. Instalar dependencias: `npm install express express-session bcrypt`.
2. Crear el almacén de usuarios en memoria (array de objetos) con `id`, `email`, `nombre` y `passwordHash`.
3. Configurar `express.json()` y el middleware de sesión `express-session` con `httpOnly: true`, `sameSite: 'lax'`, `secret` desde variable de entorno y `saveUninitialized: false`.
4. Crear el endpoint `POST /registro`: validar email y contraseña (longitud mínima 8), verificar que el email no exista.
5. Generar el hash con bcrypt: `const passwordHash = await bcrypt.hash(password, 12);` — el salt se incluye automáticamente en el hash; nunca se guarda el texto plano.
6. Guardar el usuario y responder 201 con el perfil público (sin el hash).
7. Crear el endpoint `POST /login`: buscar por email y comparar con `await bcrypt.compare(password, usuario.passwordHash)`.
8. Si la comparación falla, responder 401 genérico ("credenciales inválidas") sin revelar si el email existe.
9. Si es correcta, guardar el `usuarioId` en `req.session` y responder 200 con el perfil.
10. Crear el middleware `requiereAutenticacion`: verificar `req.session.usuarioId` y responder 401 si no hay sesión.
11. Proteger una ruta privada (`GET /perfil`) con el middleware y devolver los datos del usuario autenticado.
12. Crear el endpoint `POST /logout`: destruir la sesión con `req.session.destroy()` y limpiar la cookie con `res.clearCookie`.
13. Probar el flujo completo con curl: registrar, login, acceder a `/perfil` con la cookie, y verificar 401 tras logout.
14. Revisar los casos límite: email duplicado (409), contraseña corta (400) y reintento de login con contraseña incorrecta (401).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `algoritmoHash` | Algoritmo de hashing de contraseñas | string | sí | `bcrypt` |
| `factorCoste` | Coste/factor de trabajo de bcrypt | number | no | `12` |
| `longitudMinimaPassword` | Mínimo de caracteres de la contraseña | number | no | `8` |
| `nombreCookieSesion` | Nombre de la cookie de sesión | string | no | `sid` |
| `httpOnlyCookie` | Cookie inaccesible desde JavaScript | boolean | sí | `true` |
| `sameSiteCookie` | Política SameSite de la cookie | string | no | `lax` |
| `tiempoVidaSesion` | TTL de la sesión en milisegundos | number | no | `3600000` |
| `secretoSesion` | Secreto para firmar la cookie de sesión | string | sí | `process.env.SESSION_SECRET` |
| `claveSesion` | Campo de la sesión que guarda el usuario | string | no | `usuarioId` |

## Reglas y checklist

- [ ] Las contraseñas se guardan SIEMPRE como hash bcrypt con salt automático (factor 10-12), nunca en texto plano.
- [ ] La comparación usa `bcrypt.compare`, nunca comparar cadenas directamente.
- [ ] El hash nunca se incluye en las respuestas al cliente.
- [ ] Login fallido responde el mismo mensaje (401) exista o no el email para evitar enumeración de usuarios.
- [ ] La cookie de sesión es `httpOnly` (no legible desde JavaScript) y `sameSite: 'lax'`.
- [ ] El secreto de sesión se lee de variable de entorno, no se hardcodea.
- [ ] Las rutas protegidas pasan por el middleware `requiereAutenticacion` y responden 401 sin sesión.
- [ ] Logout destruye la sesión en el servidor y limpia la cookie en el cliente.
- [ ] Registro valida email y fortaleza mínima de contraseña antes de hashear.
- [ ] Email duplicado responde 409 y los errores de validación responden 400.

## Ejemplos de prompts

- "Crea el registro y login con bcrypt y express-session en Express: hashea la contraseña con factor 12 y usa cookies httpOnly."
- "Implementa el middleware requiereAutenticacion que responda 401 si no existe sesión activa."
- "Explica por qué el login debe devolver el mismo error cuando el email no existe o la contraseña es incorrecta."
- "Añade logout seguro que destruya la sesión del servidor y borre la cookie en el cliente."
- "Protege la ruta GET /perfil y devuelve los datos del usuario de la sesión."

## Plantillas y recursos

- `templates/auth.js` — implementación completa de registro, login, logout y middleware de sesión con bcrypt y express-session.
- Checklist del nivel: `resources/checklist.md`.