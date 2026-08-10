# Checklist — autenticacion-autorizacion-basico

## Registro

- [ ] `POST /registro` valida email válido, nombre y contraseña de mínimo 8 caracteres
- [ ] Email duplicado responde 409
- [ ] La contraseña se hashea con `bcrypt.hash(password, 12)` antes de guardarse
- [ ] El salt se genera automáticamente y queda embebido en el hash
- [ ] El hash NUNCA se devuelve en la respuesta al cliente
- [ ] La respuesta de registro incluye solo perfil público (id, email, nombre)

## Login

- [ ] `POST /login` busca por email y compara con `bcrypt.compare`
- [ ] Credenciales inválidas responden 401 con el mismo mensaje en ambos casos
- [ ] No se revela mediante el mensaje si el email existe o no
- [ ] Login exitoso crea sesión guardando `usuarioId` en `req.session`

## Sesión y cookies

- [ ] Cookie de sesión con `httpOnly: true`
- [ ] Cookie con `sameSite: 'lax'` y `secure: true` en producción
- [ ] El secreto de sesión viene de `process.env.SESSION_SECRET`
- [ ] `saveUninitialized: false` (no crear sesiones para visitantes anónimos)
- [ ] Tiempo de vida de sesión definido explícitamente

## Autorización de rutas

- [ ] Middleware `requiereAutenticacion` presente y usado en rutas privadas
- [ ] Sin sesión activa, la ruta protegida responde 401

## Logout

- [ ] `POST /logout` destruye la sesión en el servidor
- [ ] `res.clearCookie` elimina la cookie del cliente
- [ ] Tras logout, el acceso a `/perfil` responde 401

## Pruebas manuales

- [ ] `curl -X POST http://localhost:3000/registro -H "Content-Type: application/json" -d '{"email":"ana@ejemplo.com","nombre":"Ana","password":"clave-segura-1"}'` responde 201
- [ ] Repetir el registro con el mismo email responde 409
- [ ] `curl -c cookies.txt -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email":"ana@ejemplo.com","password":"clave-segura-1"}'` responde 200
- [ ] `curl -b cookies.txt http://localhost:3000/perfil` responde 200 con el perfil
- [ ] Login con contraseña incorrecta responde 401
- [ ] `curl -b cookies.txt -X POST http://localhost:3000/logout` seguido de `curl -b cookies.txt http://localhost:3000/perfil` responde 401