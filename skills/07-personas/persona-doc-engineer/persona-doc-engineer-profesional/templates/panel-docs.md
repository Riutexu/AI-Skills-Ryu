# Panel de métricas de documentación — trimestral

| Métrica | Qué mide | Fuente | Valor | Meta |
|---|---|---|---|---|
| Búsquedas sin resultado | Gente que busca y no encuentra | Análitica de docs | 15% | < 10% |
| Tickets "cómo hago X" | Preguntas que la doc debería responder | Ticketing | 12/trim | < 5 |
| Tickets que citan docs | La doc sí ayuda | Ticketing | 8/trim | Subiendo |
| Tiempo de onboarding | Dev nuevo → primer PR | Medición propia | 3 semanas | < 2 |
| Doc contribuida en PRs | Cultura | Repos (git log) | 30% de PRs | > 50% |
| Docs huérfanas | Sin dueño ni revisión | Inventario | 4 | 0 |

## Análisis (una historia por dato)
- **Tickets "cómo hago X"**: 9 de 12 son del despliegue → la guía de despliegue falla (se reescribió en el roadmap).
- **Onboarding**: bajó de 3 a 3 semanas... sigue alto: el tutorial de primer proyecto está pendiente.

## Plan de acción
| Acción | Impacto esperado | Dueño | Fecha |
|---|---|---|---|
| Reescribir guía de despliegue en repo | -9 tickets | Ana | 2026-10-01 |
| Tutorial de primer proyecto | -1 semana onboarding | Luis | 2026-10-15 |
| Lint de enlaces en CI | Menos doc rota | Ana | 2026-09-20 |

## Regla
> Un trimestre sin medir el impacto de la doc es un trimestre sin saber si la doc sirve.