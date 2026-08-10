# Checklist básico: Ciberseguridad web

- [ ] HTTPS activo con redirección y HSTS en producción
- [ ] helmet() aplicado (X-Content-Type-Options, referrer-policy...)
- [ ] Todas las entradas validadas con tipos y límites de tamaño
- [ ] Body limitado (json/urlencoded) y timeouts configurados
- [ ] Contraseñas con bcrypt, cost >= 10, nunca planas
- [ ] Tokens CSRF en formularios (POST/PUT/DELETE)
- [ ] Cookies httpOnly + secure + sameSite configuradas
- [ ] Logs de seguridad sin datos personales
- [ ] Sin secretos hardcodeados (variables de entorno)