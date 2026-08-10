# Observabilidad

Skills para entender qué pasa en producción: desde logs bien estructurados con pino hasta tracing distribuido con OpenTelemetry, métricas Prometheus, SLIs/SLOs y alertas basadas en burn rate.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [observabilidad-basico](observabilidad-basico/SKILL.md) | Básico | Qué es (logs/métricas/traces), logging útil y manejo de errores |
| [observabilidad-avanzado](observabilidad-avanzado/SKILL.md) | Avanzado | Logging estructurado JSON (pino), request id, métricas Prometheus y Grafana |
| [observabilidad-profesional](observabilidad-profesional/SKILL.md) | Profesional | OpenTelemetry, tracing distribuido, APM, SLIs/SLOs, burn rate y RUM |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `stack` | Node/Express | Node + Prometheus | Multi-servicio + OTel |
| `instrumentos` | console | pino, métricas | OTel, APM, RUM |
| `objetivo` | Depurar sin dolor | Alertar de fallos | Cumplir SLOs |
| `equipo` | Individual | Equipo de dev | Equipos + SRE |

## Instalación

```
xcopy observabilidad C:\Users\%USERNAME%\.config\opencode\skills\observabilidad /E /I
```

## Ruta de aprendizaje

1. **Básico**: logs útiles y errores bien manejados.
2. **Avanzado**: JSON estructurado, request ids y dashboards.
3. **Profesional**: traces distribuidos y SLOs con alertas.

## Referencias clave

- [OpenTelemetry](https://opentelemetry.io/docs/)
- [pino](https://github.com/pinojs/pino)
- [Prometheus](https://prometheus.io/docs/introduction/overview/)
- [Grafana](https://grafana.com/docs/)
- [Sloth: SLOs (burn rate)](https://sloth.sloc.io/)