---
name: kotlin-core-estilo-tooling-profesional
description: Estilo, lint y tooling · nivel Profesional · Kotlin moderno: fundamentos profesionales. Código consistente y profesional con ktlint, detekt y convenciones del equipo. Objetivo del nivel: Blindar la calidad en el CI con gates de estilo y revisión de convenciones.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "estilo-tooling"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Estilo, lint y tooling — Profesional

## Qué hace este skill

Código consistente y profesional con ktlint, detekt y convenciones del equipo. En este nivel se entrega: **Blindar la calidad en el CI con gates de estilo y revisión de convenciones.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estilo, lint y tooling** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar ktlint y detekt como gates obligatorios del CI
2. Escribir la guía de convenciones del equipo y vincularla a las reglas
3. Automatizar la corrección de estilo en el flujo de PR
4. Medir la tendencia de deuda técnica por release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Blindar la calidad en el CI con gates de estilo y revisión de convenciones. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Agregar ktlint y detekt como gates obligatorios del CI · Escribir la guía de convenciones del equipo y vincularla a las reglas · Automatizar la corrección de estilo en el flujo de PR · Medir la tendencia de deuda técnica por release | lista | sí | 3-4 pasos |
| $criterios_clave | Un PR no se mergea si ktlint o detekt fallan · La tendencia de hallazgos de detekt baja o se mantiene en cada release | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la calidad no dependa de la memoria: agregá ktlint y detekt como gates del CI de Ryutify y automatizá la corrección de estilo en las PRs. | texto | no | "Estilo, lint y tooling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un PR no se mergea si ktlint o detekt fallan
- [ ] La tendencia de hallazgos de detekt baja o se mantiene en cada release

## Ejemplos de prompts

- "Quiero que la calidad no dependa de la memoria: agregá ktlint y detekt como gates del CI de Ryutify y automatizá la corrección de estilo en las PRs."
- "Aplica Estilo, lint y tooling (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Un PR no se mergea si ktlint o detekt fallan"
- "Revisa mi kotlin-core y dime qué pasos de Estilo, lint y tooling me faltan en este nivel"