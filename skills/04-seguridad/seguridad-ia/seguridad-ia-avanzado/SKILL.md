---
name: seguridad-ia-avanzado
description: Endurece apps con LLMs contra ataques reales: OWASP LLM Top 10 aplicado, MITRE ATLAS para modelar riesgos, guardrails y evidencia de adversarios
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-ia"
  nivel: avanzado
  stack: "guardrails, LamaGuard, NeMo Guardrails, red teaming de prompts"
---

# Seguridad de IA — Nivel avanzado

## Qué hace este skill

Lleva la seguridad de tu app de IA de "cuidados" a "defensa estructurada": aplica las 10 categorías del **OWASP LLM Top 10**, modela tus riesgos con **MITRE ATLAS** y monta guardrails (filtros de entrada/salida, validación de herramientas) con herramientas reales.

## Cuándo usarlo

- Tu app con IA pasa de demo a producto: más usuarios, más entradas, más herramientas.
- Necesitas justificar defensas concretas (ante clientes, auditorías o tu propio criterio).
- Quieres hacer red teaming de prompts propio y verificar que tus guardrails aguantan.

## Requisitos previos

- Nivel básico de este tema aplicado.
- Tu app con IA funcionando y acceso al sistema de prompts/herramientas.
- Conocimiento de HTTP/APIs (los ataques LLM llegan a través de APIs).

## Workflow paso a paso

1. **Modela tus riesgos con MITRE ATLAS**: identifica técnicas relevantes para tu app (ML Prompt Injection, Indirect Prompt Injection, Data Poisoning, Model Inversion...). Salida: matriz técnica → app → mitigación.
2. **OWASP LLM Top 10 en tu app**: repasa las 10 categorías (LLM01 Prompt Injection, LLM02 Sensitive Information Disclosure, LLM03 Supply Chain, LLM04 Data and Model Poisoning, LLM05 Improper Output Handling, LLM06 Excessive Agency, LLM07 System Prompt Leakage, LLM08 Vector and Embedding Weaknesses, LLM09 Misinformation, LLM10 Unbounded Consumption). Documenta el estado de cada una.
3. **Guardrails de entrada**: clasifica y filtra antes del modelo: tamaño, formato, PII, intentos obvios de injection; aísla las instrucciones de la data (delimitadores + política de prioridad + modelo secundario verificador).
4. **Guardrails de salida**: valida lo que produce: contenido prohibido, PII, URLs peligrosas, comandos; escapa para el contexto de renderizado; retoma/neutraliza si algo no pasa.
5. **Excessive Agency (LLM06)**: audita cada herramienta del agente: ¿privilegio mínimo? ¿confirmación humana para acciones de impacto? ¿timeouts y límites (tokens, gasto, archivos)? Recuerda: un agente con demasiados poderes es una botnet con ChatGPT dentro.
6. **Es el sistema robusto al abuso**: rate limit por usuario, políticas de uso, logging de entradas/salidas (con redacción de PII) para forense.
7. **Red teaming propio**: crea una batería de prompts adversariales (injection directa/indirecta, jailbreaks, exfiltración con ROT13/Base64, roleplay) y ejecuta contra tu app; cada bypass = arreglo + test de regresión.

## OWASP LLM Top 10 → mitigación rápida

| Categoría | Amenaza | Mitigación clave |
|---|---|---|
| LLM01 Prompt Injection | Instrucciones en el contenido | Tratar entrada no confiable como data + verificador |
| LLM02 Sensitive Info | Fuga de datos/secretos | Redacción + PII scanning + mínimos al proveedor |
| LLM03 Supply Chain | Prompts/plugins maliciosos | Repo bloqueado, hashes, revisión de dependencias |
| LLM04 Poisoning | Datos de entrenamiento/RAG manipulados | Sanear fuentes RAG, ranking + validación |
| LLM05 Improper Output Handling | Salida no validada (XSS, comandos) | Validar + escapar toda salida |
| LLM06 Excessive Agency | Demasiados poderes al modelo | Permisos mínimos + confirmación humana |
| LLM07 Prompt Leakage | Fuga del system prompt | No poner secretos; asumir que el prompt se puede ver |
| LLM08 Vector Weaknesses | Embeddings manipulados | Sanear contenido del RAG antes de indexar |
| LLM09 Misinformation | Alucinaciones dañinas | Grounding con fuentes + avisos de confianza |
| LLM10 Unbounded Consumption | Costo/DoS vía contexto | Límites de tokens/coste y rate limits |

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `app_ia` | Qué construiste | texto | sí | "chatbot con RAG" |
| `entradas` | Fuentes (chat, web, archivos) | lista | sí | "chat + urls" |
| `herramientas` | Poderes del modelo | lista | sí | "buscar_web, ejecutar" |
| `guardrails` | Herramienta elegida | texto | no | "NeMo Guardrails" |
| `rag` | ¿Usas RAG/embeddings? | booleano | no | true |
| `redteam_bateria` | ¿Batería de prompts? | booleano | no | false |

## Reglas y checklist

- [ ] Mitigaciones OWASP LLM Top 10 documentadas (10 categorías)
- [ ] Técnicas MITRE ATLAS relevante mapeadas a mitigaciones
- [ ] Guardrails de entrada activos (tamaño, formato, injection básica)
- [ ] Guardrails de salida activos (PII, contenido, escapar render)
- [ ] Auditoría de agencia: cada herramienta con permiso mínimo
- [ ] Red teaming ejecutado y bypasses corregidos + teste de regresión
- [ ] Logging con redacción para forense

## Ejemplos de prompts

- "Aplica el OWASP LLM Top 10 a mi chatbot con RAG y dame el estado por categoría"
- "Modela mis riesgos con MITRE ATLAS: qué técnicas me aplican y qué mitigación pongo"
- "Monta guardrails de entrada/salida para mi API de LLM"
- "Crea una batería de red teaming de prompts para mi agente y ejecútala"

## Plantillas y recursos

- [templates/guardrails.py](templates/guardrails.py) — guardrails de entrada/salida de referencia
- [templates/bateria-red-team.md](templates/bateria-red-team.md) — batería de prompts adversariales
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
- [resources/mapa-atlas.md](resources/mapa-atlas.md) — técnicas MITRE ATLAS → mitigaciones