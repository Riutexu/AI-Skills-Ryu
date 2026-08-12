# Panel de métricas de calidad — mensual

| Métrica | Definición | Valor | Mes anterior | Meta |
|---|---|---|---|---|
| Escape rate | Bugs a producción / bugs totales | 18% | 22% | < 10% |
| SEV1/2 escapados | Críticos en producción | 2 | 3 | 0 |
| Cobertura útil | Tests que cazaron bugs / total tests | 4% | 3% | > 5% |
| Tiempo de release | Días de integración a producción | 6 | 8 | < 4 |
| Suite e2e | Duración / rotura | 40 min / 0 | 55 min / 2 | < 30 min |
| Deuda de pruebas | Tests rotos / sin dueño | 3 | 7 | 0 |

## Análisis (una historia por métrica)
- **Escape rate**: bajó porque los flujos de pago ahora pasan smoke en CI antes de release.
- **SEV1/2**: ambos fueron de la misma área (checkout): revisar estrategia de esa área (ver plan de acción).

## Plan de acción del mes
| Acción | Área | Dueño | Fecha |
|---|---|---|---|
| Añadir e2e del checkout con tarjeta rechazada | Pagos | Ana | 2026-09-05 |
| Revisar tests de integración rotos | Core | Luis | 2026-09-12 |

## Regla
> Un mes sin decisiones con datos es un mes sin QA.