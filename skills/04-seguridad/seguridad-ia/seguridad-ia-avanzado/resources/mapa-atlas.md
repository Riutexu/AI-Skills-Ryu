# MITRE ATLAS → mitigaciones (referencia rápida)

| Técnica ATLAS | Descripción | Mitigación de este skill |
|---|---|---|
| ML Prompt Injection | Instrucciones maliciosas en input | Guardrails entrada + verificador + data/instrucción aislados |
| Indirect Prompt Injection | Contenido externo con instrucciones | Saneamiento de URLs/archivos + marcado de data no confiable |
| ML Model Inversion | Extraer datos de entrenamiento | Minimizar datos sensibles + logging + redacción |
| ML Data Poisoning | Corromper datos de entrenamiento/RAG | Sanear corpus RAG + validación de fuentes + monitoreo de drift |
| ML Evasion | Inputs diseñados para evadir | Testing adversarial + umbrales verificados |
| LLM Denial of Service | Consumo agotado de contexto/coste | Límites tokens/coste + rate limits |
| LLM Rebuttal | Contestación engañosa persistente | Grounding + política de confianza + logs |

## Cómo usarlo
1. Para cada técnica con "sí" en tu contexto, escribe la mitigación CONCRETA en tu app (no la genérica).
2. Marca en el registro de riesgos: técnica, app afectada, mitigación, estado (✓/falta), re-test.
3. Prioriza por: exposición pública + valor de los datos + coste de fallar.

## Referencias
- [MITRE ATLAS](https://atlas.mitre.org/) — matriz de ataques a ML/IA
- [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)