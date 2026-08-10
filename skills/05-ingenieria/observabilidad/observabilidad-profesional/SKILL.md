---
name: observabilidad-profesional
description: Observabilidad de producción: OpenTelemetry y tracing distribuido, APM, SLIs/SLOs con burn rate, correlación log-métrica-traza y RUM de frontend
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "observabilidad"
  nivel: profesional
  stack: "OpenTelemetry, APM, Prometheus, Grafana"
---

# Observabilidad — Nivel profesional full stack

## Qué hace este skill

Guía para operar la observabilidad como disciplina: trazabilidad distribuida con OpenTelemetry (spans, propagación W3C), instrumentación automática vs manual, APM para ver recorridos completo, SLOs con SLIs y alertas por burn rate, correlación log-métrica-traza y medición del frontend (RUM).

## Cuándo usarlo

- Hay varios servicios y una petición falla "en algún lugar" sin saber cuál.
- El equipo necesita compromisos de disponibilidad/latencia medibles (SLOs) con alertas antes de la violación.
- El stack de observabilidad debe ser estándar y vendor-neutral (OTel).

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Dos servicios (o uno con BD externa) para trazar end-to-end.
- Un backend de telemetría (OTel Collector + Prometheus/Grafana Stack o APM como Grafana Cloud/Datadog/Sentry).

## Workflow paso a paso

1. **OpenTelemetry Node**: instala `@opentelemetry/sdk-node` + instrumentaciones automáticas (http, express, pg, fetch). Con `SDK` inicializado al arrancar, capturas traces sin tocar código.
2. **Spans manuales donde importa**: envuelve módulos de negocio clave con `startSpan` (cobro, envío de email, query crítica); añade atributos (`orderId`, `amount`) y registra errores con `recordException`.
3. **Propagación W3C `traceparent`**: habilítala en el SDK; así el trace cruza servicios, gateways y clients HTTP; verifica con el collector que aparecen árboles de spans multi-servicio.
4. **Correlación log-métrica-traza**: en pino inyecta `trace_id`/`span_id` en cada log (pino-opentelemetry o resource a tarea); así desde un error vas al trace completo.
5. **SLIs y SLOs**: define el SLI de disponibilidad (solicitudes válidas / errores 5xx) y latencia (P95 <= 1 s); fija SLO 99.9% (11 min de error al año? no: 43 min; usa calculadoras) y presupuesto mensual; por surfacedo: burn rate alerting con ventanas 1 h/6 h/3 dias.
6. **Alertas burn rate**: alerta cuando el presupuesto se consume al 2x en 1 h o 14x en 6 h (ejemplo de Google SRE); configura con Prometheus `slo` rules o Sloth.
7. **APM**: con Grafana Cloud o equivalente revisa: errores por servicio, latencia por span, dependencias (BD, colas) y "slow traces"; responde a una alerta yendo del log/alert a la traza completa.
8. **RUM frontend**: instrumenta con OTel Web (`@opentelemetry/sdk-web` o `web-vitals` + spans del frontend) conectando el frontend al mismo trace (propaga el `traceparent` en las peticiones).
9. **Postmortems**: cada incidente: enlace a los traces y métricas del periodo, "5 whys", acciones con dueños; la meta es dejar el runbook actualizado.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `servicios` | Servicios a trazar | lista | sí | "api, worker, db" |
| `slis` | Métricas que forman el SLO | mapa | sí | "disponibilidad, latencia P95" |
| `slo_objetivo` | % objetivo | número | no | 99.9 |
| `backend_telemetria` | APM/OTel collector | texto | no | "Grafana Cloud" |
| `frontend_rum` | ¿Instrumentar frontend? | booleano | no | true |
| `rutas_criticas` | Flujos negocio clave | lista | no | "checkout, login" |

## Reglas y checklist

- [ ] OTel SDK con instrumentaciones automáticas al arranque
- [ ] Spans manuales en flujos de negocio clave con atributos
- [ ] Propagación W3C verificada (traces multi-servicio en el collector)
- [ ] Logs enriquecidos con trace_id/span_id
- [ ] SLI/SLO definidos por servicio crítico con presupuesto
- [ ] Alertas burn rate (1 h/6 h) probadas con fuego artificial
- [ ] APM revisado: errores + latencia por span y dependencias
- [ ] RUM conectado y propagando traceparen del frontend
- [ ] Postmortems con traces, métricas y acciones con dueños

## Ejemplos de prompts

- "Instrumenta mi API con OpenTelemetry: SDK + auto-instrumentaciones y spans de checkout"
- "Une los logs de pino con trace_id y span_id del trace activo"
- "Define SLI/SLO de mi API (disponibilidad y P95) y reglas de burn rate"
- "Conecta el frontend al trace con OTel Web y propaga el traceparent"
- "Prepara el postmortem del último 5xx masivo usando las traces de ese minuto"

## Plantillas y recursos

- [templates/setup-otel.js](templates/setup-otel.js) — arranque del SDK OTel con auto-instrumentaciones
- [templates/sli-slo-prometheus.yml](templates/sli-slo-prometheus.yml) — reglas SLO con burn rate para Prometheus
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel