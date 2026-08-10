# Checklist profesional: Observabilidad

- [ ] OTel SDK con auto-instrumentaciones (http, express, pg)
- [ ] Spans manuales en flujos clave con atributos y errores
- [ ] Propagación W3C habilitada y verificada multi-servicio
- [ ] logs enriquecidos con trace_id/span_id
- [ ] SLI + SLO definidos (disponibilidad y latencia P95)
- [ ] Presupuesto de SLO calculado y documentado
- [ ] Alertas burn rate (1 h, 6 h) probadas con fuego controlado
- [ ] APM revisando errores/latencia por span y dependencias
- [ ] RUM con traceparent propagado desde el frontend
- [ ] Postmortems con traces, métricas y acciones con dueños