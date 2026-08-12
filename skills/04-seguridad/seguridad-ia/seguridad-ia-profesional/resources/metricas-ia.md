# Métricas de seguridad de IA — medibles y accionables

## Por modelo (automáticas, mensuales)
| Métrica | Definición | Objetivo |
|---|---|---|
| Bypass rate de guardrails | % de prompts adversariales que traspasan | < 5% (y bajando) |
| PII en salidas | Tasa de respuestas con PII detectada | 0 (bloqueada/redactada) |
| Coste anómalo | Coste/1000 respuestas fuera de rango | Dentro del baseline ± 20% |
| Latencia de guardrails | Overhead de los filtros | < 150 ms |
| Addiction al RAG | Sin respuesta sin fuente (cuando aplica) | > 90% |

## De programa (trimestral)
| Métrica | Definición |
|---|---|
| Cobertura de modelado | % de modelos con ficha de riesgo actualizada |
| Red team realizados | Campañas completadas vs planificadas |
| MTTR de incidentes de IA | Tiempo medio de resolución |
| Reincidencia | Incidentes repetidos por misma causa |

## Reglas de oro
1. Cada métrica tiene fecha, dueño y una acción si empeora.
2. Las tendencias cuentan más que los absolutos.
3. Red teaming dirigido (hipótesis) vale más que volumen de prompts.
4. Si un bypass se arregla y no hay test de regresión, no se arregló.