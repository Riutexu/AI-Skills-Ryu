# Checklist — autenticacion-autorizacion-profesional

## SSO / OIDC federado

- [ ] Login delegado a un IdP (Keycloak, Auth0, Google Workspace)
- [ ] Flujo authorization code + PKCE, intercambio solo en servidor
- [ ] id_token validado: `iss`, `aud`, `exp`, `nonce` y firma antes de crear sesión
- [ ] Scopes mínimos solicitados (`openid profile email`)
- [ ] Cierre de sesión federado (logout en el IdP) implementado

## MFA / TOTP (RFC 6238)

- [ ] Secreto de 20 bytes aleatorios generado y cifrado al guardar
- [ ] QR generado desde URI `otpauth://totp/...`
- [ ] Verificación con ventana de tolerancia (1 ventana por lado)
- [ ] Códigos de respaldo de un solo uso, hasheados y con caducidad
- [ ] MFA obligatorio para roles de privilegio alto
- [ ] Reautenticación completa ante evento de riesgo (IP o dispositivo nuevo)

## Almacenamiento seguro de tokens y cookies

- [ ] Cookies con httpOnly, Secure, SameSite y prefijo `__Host-` donde aplique
- [ ] Sesión rotada en login y periódicamente (anti session fixation)
- [ ] Access token de corta vida (max 10-15 minutos)
- [ ] Refresh token revocable, rotativo y nunca expuesto a JavaScript
- [ ] Tokens y secretos cifrados en reposo

## Auditoría de sesiones e IP

- [ ] Cada sesión registra creación, última actividad, IP y userAgent
- [ ] Listado y revocación selectiva de sesiones por el usuario
- [ ] Cierre global de sesión disponible
- [ ] Anomalías (cambio de IP/userAgent, reuso de refresh) detectadas y alertadas
- [ ] Retención de logs definida con anonimización posterior

## Rotación de secretos y zero trust

- [ ] Caducidad de secretos definida (p. ej. 90 días)
- [ ] Rotación con solapamiento: doble firma/verificación sin cortar sesiones
- [ ] Secretos inyectados por gestor de secretos, nunca en el repositorio
- [ ] Cada petición autenticada y autorizada independientemente (zero trust)
- [ ] Mínimo privilegio: scopes y roles con permisos restringidos

## Fuerza bruta y GDPR

- [ ] Rate limiting de login por cuenta e IP con bloqueo progresivo y 429
- [ ] Respuesta uniforme de error de credenciales (sin enumeración)
- [ ] Consentimiento explícito documentado
- [ ] Exportación de datos personales disponible
- [ ] Derecho al olvido probado: borrado o anonimización completa

## Verificación final

- [ ] Prueba de robo de cookie: sesión revocada por anomalía
- [ ] Prueba de reuso de refresh: cadena completa revocada
- [ ] Prueba de fuerza bruta: bloqueo temporal activado
- [ ] Prueba de derecho al olvido: sin datos personales residuales
- [ ] Política de sesiones documentada y revisada por el equipo