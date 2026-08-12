---
name: compose-ui-rendimiento-recomposicion-avanzado
description: Rendimiento de recomposición · nivel Avanzado · Jetpack Compose: UI declarativa. Mide y optimiza la recomposición para una UI fluida. Objetivo del nivel: Skippability, inmutabilidad y hoisting para evitar trabajo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "rendimiento-recomposicion"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Rendimiento de recomposición — Avanzado

## Qué hace este skill

Mide y optimiza la recomposición para una UI fluida. En este nivel se entrega: **Skippability, inmutabilidad y hoisting para evitar trabajo.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de recomposición** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar la skippability de los composables clave
2. Usar datos inmutables en los parámetros
3. Aplicar remember y derivedStateOf donde corresponde
4. Medir el antes y el después con el profiler

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Skippability, inmutabilidad y hoisting para evitar trabajo. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Verificar la skippability de los composables clave · Usar datos inmutables en los parámetros · Aplicar remember y derivedStateOf donde corresponde · Medir el antes y el después con el profiler | lista | sí | 3-4 pasos |
| $criterios_clave | Los composables de la lista son skippables · La medición muestra una mejora medible en frames | lista | sí | calidad verificable |
| $prompt_guia | Quiero que los composables de la lista de Ryutify sean skippables. Auditá la estabilidad de los parámetros y medí la mejora con el profiler. | texto | no | "Rendimiento de recomposición" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los composables de la lista son skippables
- [ ] La medición muestra una mejora medible en frames

## Ejemplos de prompts

- "Quiero que los composables de la lista de Ryutify sean skippables. Auditá la estabilidad de los parámetros y medí la mejora con el profiler."
- "Aplica Rendimiento de recomposición (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Los composables de la lista son skippables"
- "Revisa mi compose-ui y dime qué pasos de Rendimiento de recomposición me faltan en este nivel"