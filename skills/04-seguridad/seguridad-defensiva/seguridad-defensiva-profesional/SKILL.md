---
name: seguridad-defensiva-profesional
description: Operación de blue team y SOC: threat hunting, response a incidentes en producción, inteligencia de amenazas (CTI), IR playbooks y mejora continua medida
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-defensiva"
  nivel: profesional
  stack: "Elastic, Wazuh, MISP, Sigma, Velociraptor, SOAR"
---

# Seguridad defensiva — Nivel profesional

## Qué hace este skill

Lleva la defensa al nivel de operación de **blue team**: detección basada en hipótesis (threat hunting), respuesta a incidentes reales con playbooks, consumo de inteligencia de amenazas (CTI), detección mediante reglas Sigma y métricas que demuestran mejora.

## Cuándo usarlo

- Estás (o quieres estar) en un equipo SOC/blue team o te toca defender producción de verdad.
- Hay un incidente en curso o recurrente y necesitas proceso, no parches.
- Necesitas demostrar con métricas que tu defensa mejora (para tu jefe o tu cliente).

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Monitorización central funcionando y reglas accionables.
- Manejo de Linux, logs y al menos un SIEM.

## Workflow paso a paso

1. **Hunting por hipótesis**: define 1-3 hipótesis por campaña (ej. "¿alguien usó la técnica X en los últimos 30 días?"), conviértelas en consultas del SIEM o reglas Sigma, búscalas sobre logs históricos y documenta resultado (confirmado / descartado / requiere más datos).
2. **Ingesta de CTI**: consume feeds (MISP, OpenCTI, vendor) con *contexto*, no ruido; correlaciona IoCs con tu telemetría (hashes, dominios, IPs) y prioriza por relevancia a tu negocio.
3. **Playbooks de IR**: playbooks por tipo de incidente (phishing, ransomware, compromiso de cuenta, exfiltración) con pasos, herramientas, responsables y criterios de cierre. Automatiza con SOAR lo repetitivo (enriquecer IoC, bloquear en firewall, abrir ticket).
4. **Respuesta en producción**: contención (aislar host, revocar tokens), erradicación (limpiar persistencia), recuperación (restaurar desde backups verificados), y análisis post-incidente (root cause, gaps, acciones).
5. **Detección que no engaña**: mide falsos positivos/negativos; cada regla debe tener dueño, caso de uso y revisión periódica; evita alertas que nadie lee.
6. **Métricas de mejora**: MTTR (tiempo medio de respuesta), volumen de alertas revisadas, detección de técnicas ATT&CK probadas por el red team (ejercicios conjuntos). Presenta el progreso cada mes.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `incidente` | ¿Incidente en curso? | booleano | no | true |
| `tipo_incidente` | Clasificación | texto | no | "phishing" |
| `telemetria` | Fuentes de datos disponibles | lista | sí | "auth.log, dns, proxy" |
| `fuentes_cti` | Feeds de inteligencia | lista | no | "MISP, abuse.ch" |
| `hipotesis` | Hipótesis de hunting | lista | no | "T1078 uso de cuentas" |
| `sla_metrica` | Métricas a reportar | lista | no | "MTTR, alertas revisadas" |

## Reglas y checklist

- [ ] Hunting por hipótesis con resultado documentado
- [ ] CTI correlacionada con telemetría propia y priorizada
- [ ] Playbooks de IR para los incidentes más probables
- [ ] Contención/erradicación/recuperación ejecutadas con registro
- [ ] Reglas de detección con dueño y sin ruido (FP bajo)
- [ ] Métricas de defensa reportadas (MTTR, cobertura ATT&CK)
- [ ] Post-incidente con acciones concretas asignadas
- [ ] Ejercicios conjuntos con red team para validar detección

## Ejemplos de prompts

- "Arma 3 hipótesis de threat hunting para mi red y las consultas para mi SIEM"
- "Escribe el playbook de respuesta a phishing completo, con responsables y criterios de cierre"
- "Correlaciona estos IoCs del feed con mi telemetría y dime si me afectan"
- "Post-mortem del incidente de ayer: root cause, gaps y acciones"

## Plantillas y recursos

- [templates/playbook-incidente.md](templates/playbook-incidente.md) — playbook de respuesta genérico por fases
- [templates/hunting-sigma.yml](templates/hunting-sigma.yml) — regla Sigma de ejemplo para hunting
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
- [resources/metricas-soc.md](resources/metricas-soc.md) — métricas de defensa y cómo medirlas
