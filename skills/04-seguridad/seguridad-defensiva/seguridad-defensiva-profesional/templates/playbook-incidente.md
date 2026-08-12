# Playbook de respuesta a incidentes — genérico por fases

> Usa un playbook por tipo de incidente. Este es el esqueleto común.

## 1. Detección y clasificación
- [ ] Síntoma concreto y evidencia inicial
- [ ] Clasificación: phishing / ransomware / cuenta comprometida / exfiltración / DDoS / otra
- [ ] Severidad inicial (SEV1 crítico, SEV2 alto, SEV3 medio) y decisión de activar playbook
- [ ] Dueño del incidente nombrado en 15 minutos

## 2. Contención
- [ ] Aislar: host, cuenta, token, IP (según tipo)
- [ ] Preservar evidencias (imagen/volcado antes de tocar)
- [ ] Bloquear IoCs en firewall/proxy/DNS
- [ ] Confirmar que la contención se sostiene (reasolución)

## 3. Erradicación
- [ ] Identificar persistencia (cron, autostart, cuentas, WMI)
- [ ] Limpiar con evidencia de cada acción
- [ ] Rotar credenciales del perímetro afectado (todas las que pudieron verse)

## 4. Recuperación
- [ ] Restaurar desde backup anterior al incidente (verificado)
- [ ] Validar funcionalidad y seguridad (escaneo, reglas activas)
- [ ] Vigilancia reforzada 72h post-restauración

## 5. Post-incidente (24-72h)
- [ ] Línea de tiempo completa del incidente
- [ ] Root cause y gaps (qué detectó, qué no y por qué)
- [ ] Acciones con responsable y fecha límite
- [ ] Actualizar playbooks y reglas con lo aprendido
- [ ] Comunicar al negocio/clientes (si aplica)

## Roles
| Rol | Persona | Canal |
|---|---|---|
| Líder del incidente | | |
| Análisis técnico | | |
| Comunicaciones | | |
| Decisiones de negocio | | |