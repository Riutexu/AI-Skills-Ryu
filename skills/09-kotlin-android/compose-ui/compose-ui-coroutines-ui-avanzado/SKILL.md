---
name: compose-ui-coroutines-ui-avanzado
description: Coroutines en la UI · nivel Avanzado · Jetpack Compose: UI declarativa. LaunchedEffect, rememberCoroutineScope y trabajo asincrónico en Compose. Objetivo del nivel: Dispatchers y trabajo pesado sin bloquear la UI.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "coroutines-ui"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Coroutines en la UI — Avanzado

## Qué hace este skill

LaunchedEffect, rememberCoroutineScope y trabajo asincrónico en Compose. En este nivel se entrega: **Dispatchers y trabajo pesado sin bloquear la UI.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coroutines en la UI** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mover el parsing pesado fuera del hilo main
2. Usar withContext en el flujo de la UI
3. Combinar múltiples flujos en la pantalla
4. Evitar coroutines que escriben estado desde hilos incorrectos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Dispatchers y trabajo pesado sin bloquear la UI. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Mover el parsing pesado fuera del hilo main · Usar withContext en el flujo de la UI · Combinar múltiples flujos en la pantalla · Evitar coroutines que escriben estado desde hilos incorrectos | lista | sí | 3-4 pasos |
| $criterios_clave | El parsing de una respuesta grande no bloquea la UI · Las actualizaciones de estado vienen del hilo correcto | lista | sí | calidad verificable |
| $prompt_guia | El parseo de las respuestas de innertube en Ryutify congela la pantalla. Movelo fuera del main con withContext y verificá los hilos. | texto | no | "Coroutines en la UI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El parsing de una respuesta grande no bloquea la UI
- [ ] Las actualizaciones de estado vienen del hilo correcto

## Ejemplos de prompts

- "El parseo de las respuestas de innertube en Ryutify congela la pantalla. Movelo fuera del main con withContext y verificá los hilos."
- "Aplica Coroutines en la UI (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El parsing de una respuesta grande no bloquea la UI"
- "Revisa mi compose-ui y dime qué pasos de Coroutines en la UI me faltan en este nivel"