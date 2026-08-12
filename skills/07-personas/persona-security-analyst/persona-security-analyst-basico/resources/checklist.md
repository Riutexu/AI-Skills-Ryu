# Checklist de seguridad — nivel básico

## Código
- [ ] Entradas de usuario validadas y con límites (sin inyección)
- [ ] Contraseñas con hash moderno + salt (bcrypt/argon2)
- [ ] Cero secretos en código o repositorio
- [ ] Salidas escapadas antes de renderizar
- [ ] Sin `eval`/ejecución de entrada de usuario

## Web
- [ ] HTTPS activo con redirección HTTP→HTTPS
- [ ] Cabeceras: X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- [ ] Formularios con protección CSRF
- [ ] Errores que no filtran detalles internos

## Sesiones y cookies
- [ ] Cookies httpOnly + secure + sameSite
- [ ] Sesiones con expiración
- [ ] Sin datos sensibles en localStorage/clientes

## Servidor y dependencias
- [ ] Sistema actualizado
- [ ] Dependencias auditadas (CVEs conocidos)
- [ ] Puertos innecesarios cerrados
- [ ] Permisos de archivos correctos

## Reporte
- [ ] Riesgos en simple, con prioridad y remedio
- [ ] Plan de acción con fechas