# Métricas de SOC — cómo medir que la defensa mejora

## Métricas básicas (mensuales)
| Métrica | Definición | Fórmula | Objetivo sano |
|---|---|---|---|
| MTTR | Tiempo medio hasta resolución | Σ(tiempo detección→cierre) / nº incidentes | Reducir mes a mes |
| MTTA | Tiempo medio hasta asignación | Σ(detección→asignación) / nº alertas | < 30 min |
| Alertas revisadas | % sin vencer SLA | revisadas / total | > 95% |
| Falsos positivos | % de alertas sin acción | FP / total alertas | < 20% |
| Cobertura ATT&CK | Técnicas detectables / relevantes | (detectables ∩ relevantes) / relevantes | Crecer |

## Métricas que importan de verdad
- **Detección vs red team**: % de técnicas del ejercicio que tu SIEM alertó. Es la única métrica que valida tu detección.
- **Reincidencia**: incidentes repetidos por misma causa = proceso roto.
- **Tiempo de detección (dwell time)**: entre compromiso real y detección. Cae cuando hunting funciona.

## Cómo presentarlas
1. Tendencia (no valores absolutos): "MTTR bajó de 6h a 2h en 3 meses".
2. Una historia por métrica: qué hicimos, qué cambió.
3. Gaps y plan: qué estamos cazando mal y el plan del mes siguiente.

## Anti-métricas (evitar)
- Alertas por día sin contexto de acción (ruido).
- Número de IoCs bloqueados sin probar relevancia.
- MTTR sin distinguir severidad (SEV1 vs SEV3 no se promedian).