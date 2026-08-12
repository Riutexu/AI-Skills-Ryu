# Registro de riesgos de IA — por modelo

> Llena una ficha por modelo. Prioridad = exposición x valor x coste de fallar.

## Modelo: `<nombre>`
- **Caso de uso:** (chat con RAG, clasificador, generador...)
- **Dueño del modelo:** — **Dueño del riesgo:** —
- **Datos que ve:** — **Alcance de herramientas:** —
- **Exposición:** pública / partner / interna · **Frecuencia:** alta/media/baja

### Riesgos identificados
| # | Riesgo (narrativa) | Técnica ATLAS/LLM | Impacto (1-5) | Probabilidad (1-5) | Prioridad | Mitigación | Estado | Dueño |
|---|---|---|---|---|---|---|---|---|
| R1 | Instrucciones externas en RAG redirigen al bot | Indirect Prompt Injection (LLM01) | 4 | 3 | 12 | Saneamiento del corpus + marcado data | ✓ | Ana |
| R2 | Fuga de PII en respuestas | LLM02 | 5 | 2 | 10 | Redacción + logs | 🔲 | Luis |
| R3 | Consumo de contexto agotado (coste) | LLM DoS (LLM10) | 2 | 4 | 8 | Límites de tokens/coste | ✓ | Ana |

### Decisiones (NIST AI RMF — Manage)
| Riesgo | Decisión | Justificación | Revisión |
|---|---|---|---|
| R1 | Mitigar | Riesgo clave del producto | Trimestral |
| R2 | Mitigar | Cumplimiento | Trimestral |
| R3 | Aceptar (con límites) | Coste bajo de fallar | Anual |

### Re-test / evidencia
- Última batería de red team: `YYYY-MM-DD` · Bypasses: N · Tests de regresión: N
- Métricas mensuales: bypass % = X · PII out = Y · coste anómalo = Z