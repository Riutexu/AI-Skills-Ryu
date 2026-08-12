---
name: seguridad-defensiva-avanzado
description: Defensa en profundidad con estándares reales: NIST CSF 2.0 (6 funciones), técnicas D3FEND para detección, SIEM básico y monitorización de eventos
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-defensiva"
  nivel: avanzado
  stack: "NIST CSF 2.0, D3FEND, Elastic, Wazuh, Grafana, fail2ban"
---

# Seguridad defensiva — Nivel avanzado

## Qué hace este skill

Sube tu defensa de "buena higiene" a "programa estructurado": organiza tu trabajo con el **NIST Cybersecurity Framework 2.0** (Govern, Identify, Protect, Detect, Respond, Recover), mapea tus controles con técnicas **D3FEND** y levanta monitorización centralizada con alertas útiles.

## Cuándo usarlo

- Necesitas justificar y organizar tu seguridad ante clientes, auditorías o tu propio criterio.
- Tienes varios servidores/apps y no ves lo que pasa; quieres una vista central.
- Quieres pasar de "esperar a que algo falle" a detección proactiva.

## Requisitos previos

- Nivel básico de este tema aplicado (hardening y backups).
- Al menos un servidor donde montar monitorización (o usar el servicio del hosting).
- Nociones de logs y regex.

## Workflow paso a paso

1. **Diagnóstico NIST CSF 2.0**: evalúa tus funciones actuales (G, I, P, D, R, R) y marca huecos. Salida: matriz con prioridades.
2. **Protect**: revisa lo básico y añade endurecimiento documentado: configuraciones por servicio, parches automáticos controlados, segmentación de red mínima (LAN vs DMZ vs public).
3. **Detect — monitorización central**: instala un stack simple (Wazuh o Elastic + Filebeat) que recoja logs de los servidores en un punto único; define qué es un evento relevante (login fallido, sudo, cambios de archivos críticos).
4. **Detect — reglas accionables**: fail2ban para SSH/web, alertas de integridad de archivos (Wazuh FIM), alertas de nuevas cuentas y servicios. Cada alerta debe terminar en un acción clara, no en ruido.
5. **D3FEND como vocabulario**: mapea cada control de detección con técnicas D3FEND (ej. "Log Analysis" → "Network Traffic Analysis" para detectar exfiltración). Esto hace tu defensa comparable y mejorable.
6. **Respond**: playbook de incidente con roles, canal de comunicación y plantillas de registro; simula un incidente (ej. login forzado al honeypot) para probar las alertas.
7. **Recover y Gobernanza**: procedimiento de restauración con RTO/RPO definidos; documenta políticas (accesos, contraseñas, retención de logs) y revísalas cada trimestre.

## Las 6 funciones NIST CSF 2.0

| Función | Pregunta clave | Entregable de este skill |
|---|---|---|
| **Govern** | ¿Quién decide y cómo? | Políticas y dueños de la seguridad |
| **Identify** | ¿Qué tengo y qué importa? | Inventario de activos y prioridades |
| **Protect** | ¿Cómo reduzco el impacto? | Hardening, segmentación, backups |
| **Detect** | ¿Cómo me entero a tiempo? | Monitorización + alertas accionables |
| **Respond** | ¿Qué hago cuando pasa? | Playbook de incidentes |
| **Recover** | ¿Cómo vuelvo a operar? | RTO/RPO y restauración probada |

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `servidores` | Inventario de activos | lista | sí | "web1, api1, db1" |
| `stack_monitorizacion` | Herramienta elegida | texto | no | "Wazuh" |
| `funciones_csf` | Funciones a trabajar | lista | no | "Detect, Respond" |
| `rto` | Tiempo objetivo de recuperación | texto | no | "4h" |
| `rpo` | Pérdida de datos aceptable | texto | no | "1h" |
| `playbook` | ¿Existe playbook? | booleano | no | false |

## Reglas y checklist

- [ ] Matriz NIST CSF 2.0 con huecos y prioridades
- [ ] Logs centralizados de todos los servidores
- [ ] Alertas accionables (cada una con respuesta definida)
- [ ] Detecciones mapeadas a técnicas D3FEND
- [ ] Playbook de incidentes probado con simulación
- [ ] RTO/RPO definidos y restauración verificada
- [ ] Políticas documentadas con dueño y revisión

## Ejemplos de prompts

- "Hazme el diagnóstico NIST CSF 2.0 de mi infraestructura y prioriza los huecos"
- "Monta monitorización central con Wazuh y reglas que no sean ruido"
- "Mapea mis controles de detección con D3FEND y dime qué me falta"
- "Simula un incidente de login forzado y prueba que mis alertas funcionen"

## Plantillas y recursos

- [templates/diagnostico-csf.md](templates/diagnostico-csf.md) — matriz de autoevaluación NIST CSF 2.0
- [templates/alertas-wazuh.yml](templates/alertas-wazuh.yml) — reglas de alerta accionables
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
- [resources/mapeo-d3fend.md](resources/mapeo-d3fend.md) — tabla de controles → técnicas D3FEND
