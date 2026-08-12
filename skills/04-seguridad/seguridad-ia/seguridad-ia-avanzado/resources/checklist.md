# Checklist — Seguridad de IA nivel avanzado

## Modelado
- [ ] Técnicas MITRE ATLAS relevantes identificadas
- [ ] Matriz técnica → app → mitigación

## OWASP LLM Top 10
- [ ] LLM01 Prompt Injection: entrada como data + verificador
- [ ] LLM02 Sensitive Info: redacción + mínimos al proveedor
- [ ] LLM03 Supply Chain: dependencias/prompts verificados
- [ ] LLM04 Poisoning: fuentes RAG saneadas y ranking validado
- [ ] LLM05 Improper Output: salida validada y escapada
- [ ] LLM06 Excessive Agency: herramientas con permiso mínimo
- [ ] LLM07 Prompt Leakage: sin secretos en system prompt
- [ ] LLM08 Vector Weaknesses: contenido RAG saneado antes de indexar
- [ ] LLM09 Misinformation: grounding + avisos de confianza
- [ ] LLM10 Unbounded Consumption: límites de tokens/coste

## Guardrails
- [ ] Filtros de entrada activos (tamaño, formato, PII, hints de injection)
- [ ] Filtros de salida activos (PII, comandos, escapar render)
- [ ] Red teaming ejecutado con batería documentada
- [ ] Bypasses corregidos con test de regresión
- [ ] Logging con redacción de PII

## Operación
- [ ] Rate limits por usuario
- [ ] Monitorización de coste/contexto anómalo