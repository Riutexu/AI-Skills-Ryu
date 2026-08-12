# Checklist — Seguridad defensiva nivel básico

## Servidor
- [ ] Actualizaciones de seguridad aplicadas (sin parches pendientes críticos)
- [ ] SSH: autenticación por llave, contraseña desactivada, root desactivado
- [ ] Firewall: denegado por defecto, solo puertos necesarios
- [ ] Apps con usuario propio, sin privilegios root
- [ ] Permisos de archivos sensibles correctos

## Datos
- [ ] Backup 3-2-1 configurado
- [ ] Restauración probada (verificada, no asumida)
- [ ] Copias fuera del sitio (otro medio/ubicación)

## Visibilidad
- [ ] Logs de autenticación y aplicación activos
- [ ] Revisión diaria de eventos (aunque sea 5 minutos)

## Secretos
- [ ] Ninguna clave en repositorios ni archivos versionados
- [ ] Variables de entorno / gestor de secretos en uso
- [ ] Secretos filtrados revocados inmediatamente

## Incidentes
- [ ] Plan de 10 minutos conocido y escrito
- [ ] Contactos de emergencia (hosting, equipo) a mano
