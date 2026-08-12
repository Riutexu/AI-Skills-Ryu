# Plan de incidente — primeros 10 minutos

> Regla de oro: primero aísla, después investiga. No borres evidencias.

## Minuto 0-1 · Aísla
- [ ] ¿Qué sistema está afectado? Anótalo.
- [ ] Desconecta de red / baja el servicio / bloquea la cuenta comprometida.
- [ ] NO apagues el sistema: se perderían evidencias.

## Minuto 1-3 · Documenta
- [ ] Qué viste (síntoma, alerta, mensaje exacto).
- [ ] Hora de inicio y hora de detección.
- [ ] Captura pantalla/logs del momento.

## Minuto 3-5 · Credenciales
- [ ] Cambia contraseñas de lo afectado.
- [ ] Revoca tokens/API keys expuestos.
- [ ] Corta sesiones activas.

## Minuto 5-8 · Comunica
- [ ] Avisa a quien corresponda (cliente, equipo, hosting).
- [ ] Crea canal de comunicación único para el incidente.

## Minuto 8-10 · Recupera
- [ ] Verifica el último backup bueno (anterior al incidente).
- [ ] Plan de restauración con hora prevista.
- [ ] Decide: restaurar ahora o investigar más (si hay riesgo de propagación, aísla más).

## Después (primeras 24h)
- [ ] Post-mortem: root cause, gaps, acciones con responsable y fecha.
- [ ] Mejora el playbook con lo aprendido.
