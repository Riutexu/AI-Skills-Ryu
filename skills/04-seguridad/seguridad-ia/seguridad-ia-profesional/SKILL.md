---
name: seguridad-ia-profesional
description: Gobierno de riesgos de IA en producción: NIST AI RMF aplicado, red teaming de modelos en profundidad, adversarial ML y programa medible de seguridad de IA
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-ia"
  nivel: profesional
  stack: "NIST AI RMF, MITRE ATLAS, generadores adversariales, evaluación continua"
---

# Seguridad de IA — Nivel profesional

## Qué hace este skill

Ordena la seguridad de la IA como un **programa** en una organización: gobierna el riesgo con el **NIST AI Risk Management Framework** (Govern, Map, Measure, Manage), ejecuta red teaming de modelos en profundidad, entiende el **adversarial ML** (ataques a modelos y embeddings) y demuestra mejora con métricas.

## Cuándo usarlo

- Eres responsable de seguridad/IA en una organización con modelos en producción.
- Te piden demostrar que la IA cumple un nivel de seguridad defendible (auditoría, cliente, regulación).
- Los ataques a tu modelo ya no son solo prompts: hay equipos dedicados a romper OS.

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Modelos/agentes en producción con telemetría.
- Capacidad de experimentar fuera de producción (entorno de pruebas).

## Workflow paso a paso

1. **Gobernar (NIST AI RMF — Govern)**: define políticas para uso de IA, roles (dueño del modelo, del riesgo, de la respuesta) y criterios de alto riesgo. Inventario de modelos: qué hace cada uno, con qué datos, para quién.
2. **Mapear (Map)**: por cada modelo: contexto de uso, actores de riesgo (externos, usuarios, internos), dependencias de la cadena (proveedor, RAG, fine-tuning), impactos si falla (fuga, desinformación, daño reputacional). Esto alimenta el registro de riesgos.
3. **Medir (Measure)**: define y automatiza métricas: tasa de bypass de guardrails, precisión en inputs adversariales, PII en salidas, latencia/coste anómalo (LLM10). Baselines mensuales por modelo.
4. **Gestionar (Manage)**: con el riesgo calibrado, decide: mitigar (guardrails, permisos), transferir (seguro, contrato con proveedor), evitar (no desplegar ese uso) o aceptar (con aprobación). Revisión periódica del registro.
5. **Red teaming de modelo en profundidad**: batería estructurada por categoría (injection directa/indirecta multicapa, jailbreaks encadenados, evasión con codificación, ataques al RAG, extracción de training data, agotamiento de contexto/coste) con entorno aislado y guardrails espejo de producción.
6. **Adversarial ML**: evalúa ataques a la capa de aprendizaje: envenenamiento de datos de fine-tuning/RAG, evasión de clasificadores (adversarial examples), inversión de modelo (extraer datos de entrenamiento). Documenta qué es relevante para tu aplicación y qué no.
7. **Programa medible**: panel mensual (métrica por modelo), revisión de incidentes de IA (nuevo playbook de IR para IA), ejercicios de mesa (tabletop) y entrenamiento al equipo. La seguridad de IA deja de ser un susto para ser un proceso.

## NIST AI RMF en una tabla

| Función | Pregunta | Entregable de este skill |
|---|---|---|
| **Govern** | ¿Cómo gobernamos el riesgo de IA? | Políticas, roles, inventario |
| **Map** | ¿Cuál es el contexto y los riesgos? | Registro de riesgos por modelo |
| **Measure** | ¿Cómo lo medimos? | Métricas automatizadas + baselines |
| **Manage** | ¿Qué hacemos con el riesgo? | Decisiones mitigar/transferir/evitar/aceptar |

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `modelos` | Inventario de modelos | lista | sí | "chat-rag, clasificador" |
| `registro_riesgos` | ¿Existe registro? | booleano | no | false |
| `metricas` | Métricas a automatizar | lista | no | "bypass taux, PII out" |
| `entorno_redteam` | ¿Entorno aislado disponible? | booleano | sí | true |
| `regulacion` | Normativa aplicable | texto | no | "EU AI Act (futuro)" |

## Reglas y checklist

- [ ] Inventario de modelos con dueño y uso
- [ ] Políticas de IA y criterios de alto riesgo definidos
- [ ] Registro de riesgos por modelo (contexto, actores, impacto)
- [ ] Métricas automatizadas con baseline y panel
- [ ] Decisiones de riesgo documentadas (mitigar/transferir/evitar/aceptar)
- [ ] Red teaming en entorno aislado con guardrails espejo
- [ ] Evaluación adversarial ML documentada (relevante vs no)
- [ ] Playbook de incidentes de IA y ejercicio de mesa
- [ ] Revisión periódica del programa con métricas

## Ejemplos de prompts

- "Arma el programa NIST AI RMF para mi organización: funciones, entregables y calendario"
- "Registro de riesgos para mis 3 modelos en producción, con impactos y decisiones"
- "Red teaming profundo de mi agente RAG: batería multicapa y análisis de bypasses"
- "¿Qué ataques adversarial ML me afectan de verdad? Evalúalos para mi caso"

## Plantillas y recursos

- [templates/registro-riesgos.md](templates/registro-riesgos.md) — registro de riesgos por modelo
- [templates/plan-programa-ia.md](templates/plan-programa-ia.md) — plan del programa NIST AI RMF
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
- [resources/metricas-ia.md](resources/metricas-ia.md) — métricas de seguridad de IA medibles