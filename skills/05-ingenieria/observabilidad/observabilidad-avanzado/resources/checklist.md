# Checklist avanzado: Observabilidad

- [ ] pino con redact (authorization, password, cvv) y nivel por entorno
- [ ] Request id por petición (pino-http o x-request-id del gateway)
- [ ] Log de cada request: método, ruta, status, duración
- [ ] Error middleware con req.id y stack; sin internals al cliente
- [ ] Counter y histograma con rutas normalizadas
- [ ] /metrics sin datos de usuario y protegido
- [ ] Grafana conectado a Prometheus con dashboard básico
- [ ] Alertas de 5xx > 1% y latencia crítica configuradas