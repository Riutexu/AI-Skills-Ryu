---
name: web-cybersecurity-basico
description: Endurece tu web desde el inicio: HTTPS, cabeceras de seguridad, sanitización de entradas, bcrypt y tokens CSRF en Node/Express
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "web-cybersecurity"
  nivel: basico
  stack: "Node.js, Express, bcrypt"
---

# Ciberseguridad web — Nivel básico

## Qué hace este skill

Guía para aplicar las medidas de seguridad mínimas obligatorias en cualquier web: HTTPS, cabeceras de seguridad, saneamiento de entradas del usuario, almacenamiento de contraseñas con bcrypt y protección básica de formularios con tokens CSRF.

## Cuándo usarlo

- Estás lanzando una web o API y quieres empezar con seguridad por defecto.
- Necesitas corregir una app que no valida entradas ni protege contraseñas.
- Tu checklist de seguridad mínima (headers, length limits, escapes) no existe todavía.

## Requisitos previos

- Node.js/Express básico (rutas, middlewares, JSON).
- Nociones de HTTP (métodos, cabeceras, cookies).

## Workflow paso a paso

1. **HTTPS siempre**: en producción configura certificados (Let's Encrypt) o usa la plataforma de tu hosting (Vercel/Netlify/Cloudflare lo hacen por defecto); redirige HTTP→HTTPS y usa HSTS.
2. **Cabeceras de seguridad** con `helmet` en Express: `app.use(helmet())` habilita X-Content-Type-Options, referrer-policy, etc. Ajusta a tu caso (CSP viene en el nivel avanzado).
3. **Sanea entradas**: valida y limita. Usa `express.json({ limit: "100kb" })`, valida con un esquema (Zod/express-validator) y escapa/neutraliza contenido no confiable antes de renderizarlo.
4. **Contraseñas con bcrypt**: `hash` con salt (cost 10-12) al registrar; `compare` al validar. Nunca guardes el hash sin salt ni uses MD5/SHA1.
5. **Tokens CSRF en formularios**: genera un token por sesión, inclúyelo en el formulario (campo oculto) y verifícalo en el POST; falla si no coincide.
6. **Cookies seguras**: `httpOnly`, `secure`, `sameSite: "lax"` en sesiones; no guardes datos sensibles en el cliente.
7. **Logs de seguridad**: registra logins fallidos, bloqueos y errores 5xx sin exponer datos personales.
8. **Máximos y límites**: timeouts en requests y límite de tamaño de body para evitar abusos.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `framework` | Servidor usado | texto | sí | "Express" |
| `auth_requerida` | ¿Hay login? | booleano | no | true |
| `formularios` | Endpoints que reciben formularios | lista | no | /registro, /contacto |
| `https_terminacion` | Dónde termina TLS | texto | no | "Cloudflare" |
| `cookies` | ¿Usas sesiones/persistencia? | booleano | no | true |
| `nivel_usuario` | Nivel del solicitante | texto | no | "básico" |

## Reglas y checklist

- [ ] HTTPS activo y redirección HTTP→HTTPS (HSTS)
- [ ] `helmet()` aplicado con opciones documentadas
- [ ] Todas las entradas validadas y con límites de tamaño
- [ ] Contraseñas con bcrypt (cost >= 10), nunca planas ni MD5
- [ ] Tokens CSRF en formularios mutantes
- [ ] Cookies httpOnly + secure + sameSite
- [ ] Sin secretos en el código (usa variables de entorno)

## Ejemplos de prompts

- "Endurece mi API Express con helmet, límites de body y validación de entradas"
- "Implementa registro/login con bcrypt y tokens CSRF"
- "Revisa mi app y dime qué faltas básicas de seguridad tiene"
- "Configurant HSTS y redirección HTTPS en mi hosting"

## Plantillas y recursos

- [templates/servidor-seguro.js](templates/servidor-seguro.js) — Express endurecido con helmet + bcrypt + CSRF
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel