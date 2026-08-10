# Checklist básico: Observabilidad

- [ ] Entendidos los tres pilares (logs, métricas, traces)
- [ ] Logger centralizado con niveles y timestamp
- [ ] Mensajes con contexto (identificadores de petición)
- [ ] try/catch con stack y contexto; sin catch vacíos
- [ ] Sin secretos en logs (passwords, tokens, cvv)
- [ ] Nivel mínimo por entorno configurado (info en prod)
- [ ] Sin logs en bucles calientes
- [ ] Fallo real reproducido y localizado solo con logs