---
name: kotlin-core-estilo-tooling-avanzado
description: Estilo, lint y tooling · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Código consistente y profesional con ktlint, detekt y convenciones del equipo. Objetivo del nivel: Configurar reglas de lint a medida y reducir la deuda técnica.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "estilo-tooling"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Estilo, lint y tooling — Avanzado

## Qué hace este skill

Código consistente y profesional con ktlint, detekt y convenciones del equipo. En este nivel se entrega: **Configurar reglas de lint a medida y reducir la deuda técnica.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estilo, lint y tooling** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar reglas de detekt específicas para el proyecto
2. Crear suppressions documentadas para reglas que no aplican
3. Reducir la complejidad ciclomática en las funciones calientes del player
4. Integrar detekt en la tarea de build local

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Configurar reglas de lint a medida y reducir la deuda técnica. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Configurar reglas de detekt específicas para el proyecto · Crear suppressions documentadas para reglas que no aplican · Reducir la complejidad ciclomática en las funciones calientes del player · Integrar detekt en la tarea de build local | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte de detekt pasa en el build local sin suppressions silenciosas · La complejidad ciclomática máxima está dentro del umbral definido | lista | sí | calidad verificable |
| $prompt_guia | detekt me da cientos de warnings en el player de Ryutify. Configurá umbrales razonables, documentá las suppression justificadas y bajá la complejidad de las funciones calientes. | texto | no | "Estilo, lint y tooling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte de detekt pasa en el build local sin suppressions silenciosas
- [ ] La complejidad ciclomática máxima está dentro del umbral definido

## Ejemplos de prompts

- "detekt me da cientos de warnings en el player de Ryutify. Configurá umbrales razonables, documentá las suppression justificadas y bajá la complejidad de las funciones calientes."
- "Aplica Estilo, lint y tooling (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El reporte de detekt pasa en el build local sin suppressions silenciosas"
- "Revisa mi kotlin-core y dime qué pasos de Estilo, lint y tooling me faltan en este nivel"