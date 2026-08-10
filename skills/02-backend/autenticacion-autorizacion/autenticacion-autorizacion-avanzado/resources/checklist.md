# Checklist — autenticacion-autorizacion-avanzado

## JWT: firma y estructura

- [ ] Tokens firmados HS256 con secretos distintos para access y refresh
- [ ] Secretos con al menos 32 caracteres aleatorios y solo en variables de entorno
- [ ] Payload mínimo: `sub`, `rol` y `iat`; sin contraseñas ni datos sensibles
- [ ] `verificarToken` valida firma Y expiración, y solo acepta el algoritmo declarado

## Access y refresh tokens

- [ ] Access token de corta vida (5-15 minutos)
- [ ] Refresh token de larga vida (7 días) guardado en el servidor con expiración
- [ ] `POST /refresh` emite access nuevo y rota el refresh (el anterior deja de servir)
- [ ] Refresh reutilizado detecta robo y revoca toda la cadena del usuario
- [ ] `POST /logout` revoca el refresh token del usuario
- [ ] El refresh nunca viaja en URLs, logs ni almacenamiento inseguro

## Protección de rutas y RBAC

- [ ] Middleware `autenticar` presente: 401 sin token o con token inválido/expirado
- [ ] `req.usuario` adjuntado por el middleware a las rutas protegidas
- [ ] Middleware `autorizar(...roles)` presente: 403 cuando el rol no está permitido
- [ ] Rutas de ejemplo protegidas con combinaciones autenticar + autorizar
- [ ] Autorización por recurso (propietario o admin) implementada donde aplica

## OAuth2 / OpenID Connect

- [ ] Se entiende la diferencia entre authorization code y client credentials
- [ ] Flujo de navegador con PKCE documentado (nunca refresh tokens en el cliente)
- [ ] El intercambio del código se hace siempre en el servidor
- [ ] Token de id validado (iss, aud, exp) antes de crear sesión local

## NextAuth (si aplica)

- [ ] Provider de Google/GitHub configurado con JWT strategy
- [ ] Páginas protegidas usan `getServerSession` y redirigen a login
- [ ] Callbacks ajustados para exponer rol/permisos en la sesión

## Verificación final

- [ ] Cadena completa probada: login -> acceso a ruta protegida -> refresh -> logout
- [ ] Acceso a ruta protegida con token expirado responde 401
- [ ] Rol sin permiso responde 403
- [ ] Refresh rotado y reutilizado dispara la revocación de la cadena