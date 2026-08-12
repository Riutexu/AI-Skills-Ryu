# Seguridad web en PHP

La defensa del desarrollador PHP: entradas, sesiones, contraseñas, headers y auditorías.

**Stack:** PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF · **Familia:** PHP y ecosistema web (08-php)

| Tema | Resumen | Niveles |
|---|---|---|
| **Saneamiento de entradas** | Tratar toda entrada como hostil: filtrar, validar y sanear sin romper la funcionalidad. | [basico](/php-seguridad-sanitizacion-entradas-basico/) · [avanzado](/php-seguridad-sanitizacion-entradas-avanzado/) · [profesional](/php-seguridad-sanitizacion-entradas-profesional/) |
| **Inyección SQL** | Erradicar SQLi: prepared statements, escapes y defensa del acceso a datos. | [basico](/php-seguridad-sql-injection-basico/) · [avanzado](/php-seguridad-sql-injection-avanzado/) · [profesional](/php-seguridad-sql-injection-profesional/) |
| **XSS y CSP** | Erradicar XSS: escape por contexto, CSP estricto y políticas de salida. | [basico](/php-seguridad-xss-prevencion-basico/) · [avanzado](/php-seguridad-xss-prevencion-avanzado/) · [profesional](/php-seguridad-xss-prevencion-profesional/) |
| **CSRF y abuso de sesiones** | Proteger las acciones del usuario: tokens CSRF, SameSite y verificaciones de origen. | [basico](/php-seguridad-csrf-proteccion-basico/) · [avanzado](/php-seguridad-csrf-proteccion-avanzado/) · [profesional](/php-seguridad-csrf-proteccion-profesional/) |
| **Contraseñas con Argon2ID** | Almacenar contraseñas con el estándar moderno: Argon2ID, costes y políticas de rotación. | [basico](/php-seguridad-passwords-argon2-basico/) · [avanzado](/php-seguridad-passwords-argon2-avanzado/) · [profesional](/php-seguridad-passwords-argon2-profesional/) |
| **Endurecimiento de sesiones** | Sesiones que resisten: flags, rotación, fijación y almacenamiento seguro. | [basico](/php-seguridad-session-hardening-basico/) · [avanzado](/php-seguridad-session-hardening-avanzado/) · [profesional](/php-seguridad-session-hardening-profesional/) |
| **Subidas de archivos seguras** | Subidas sin sorpresas: validación real, almacenamiento aislado y ejecución impedida. | [basico](/php-seguridad-uploads-seguros-basico/) · [avanzado](/php-seguridad-uploads-seguros-avanzado/) · [profesional](/php-seguridad-uploads-seguros-profesional/) |
| **Cabeceras de seguridad** | Headers que defienden: CSP, HSTS, X-Frame, nosniff y la revisión periódica. | [basico](/php-seguridad-headers-seguridad-basico/) · [avanzado](/php-seguridad-headers-seguridad-avanzado/) · [profesional](/php-seguridad-headers-seguridad-profesional/) |
| **Dependencias y suministro** | Cadena de suministro: auditoría de dependencias, pinning y abastecimiento seguro. | [basico](/php-seguridad-dependencias-seguras-basico/) · [avanzado](/php-seguridad-dependencias-seguras-avanzado/) · [profesional](/php-seguridad-dependencias-seguras-profesional/) |
| **Secretos y configuración** | Secretos que nunca se filtran: variables de entorno, gestores y políticas de rotación. | [basico](/php-seguridad-secretos-configuracion-basico/) · [avanzado](/php-seguridad-secretos-configuracion-avanzado/) · [profesional](/php-seguridad-secretos-configuracion-profesional/) |
| **Auditoría y logs de seguridad** | Registrar lo que importa: eventos de acceso, cambios sensibles y alertas útiles. | [basico](/php-seguridad-auditoria-logs-seguridad-basico/) · [avanzado](/php-seguridad-auditoria-logs-seguridad-avanzado/) · [profesional](/php-seguridad-auditoria-logs-seguridad-profesional/) |
| **OWASP Top 10 aplicado** | Los diez riesgos críticos aplicados a tu código PHP concreto, uno por uno. | [basico](/php-seguridad-owasp-top10-php-basico/) · [avanzado](/php-seguridad-owasp-top10-php-avanzado/) · [profesional](/php-seguridad-owasp-top10-php-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/08-php.json](../../catalogos/08-php.json).