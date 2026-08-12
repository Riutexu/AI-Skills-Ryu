---
name: compose-ui-state-recomposicion-basico
description: State y recomposición · nivel Básico · Jetpack Compose: UI declarativa. El corazón de Compose: cómo fluye el estado y cuándo se recompone. Objetivo del nivel: Usar remember y mutableStateOf para estados simples.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "state-recomposicion"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# State y recomposición — Básico

## Qué hace este skill

El corazón de Compose: cómo fluye el estado y cuándo se recompone. En este nivel se entrega: **Usar remember y mutableStateOf para estados simples.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State y recomposición** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mantener el estado de play y pausa con mutableStateOf
2. Persistir el estado con remember y rememberSaveable
3. Actualizar el texto del botón según el estado
4. Observar cuándo se recomponen los composables

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar remember y mutableStateOf para estados simples. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Mantener el estado de play y pausa con mutableStateOf · Persistir el estado con remember y rememberSaveable · Actualizar el texto del botón según el estado · Observar cuándo se recomponen los composables | lista | sí | 3-4 pasos |
| $criterios_clave | El botón refleja el estado correcto tras la rotación · El estado no se pierde al recomponer | lista | sí | calidad verificable |
| $prompt_guia | El botón de play de Ryutify pierde su estado al rotar. Usá rememberSaveable y explicame cuándo se recomponen los composables. | texto | no | "State y recomposición" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El botón refleja el estado correcto tras la rotación
- [ ] El estado no se pierde al recomponer

## Ejemplos de prompts

- "El botón de play de Ryutify pierde su estado al rotar. Usá rememberSaveable y explicame cuándo se recomponen los composables."
- "Aplica State y recomposición (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El botón refleja el estado correcto tras la rotación"
- "Revisa mi compose-ui y dime qué pasos de State y recomposición me faltan en este nivel"