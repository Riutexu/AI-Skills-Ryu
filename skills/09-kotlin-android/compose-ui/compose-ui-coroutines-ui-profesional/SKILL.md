---
name: compose-ui-coroutines-ui-profesional
description: Coroutines en la UI · nivel Profesional · Jetpack Compose: UI declarativa. LaunchedEffect, rememberCoroutineScope y trabajo asincrónico en Compose. Objetivo del nivel: Modelo de concurrencia de la UI: eventos, estado y ciclo de vida coherentes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "coroutines-ui"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Coroutines en la UI — Profesional

## Qué hace este skill

LaunchedEffect, rememberCoroutineScope y trabajo asincrónico en Compose. En este nivel se entrega: **Modelo de concurrencia de la UI: eventos, estado y ciclo de vida coherentes.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coroutines en la UI** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir dónde se lanzan coroutines en la UI
2. Integrar el scope de Compose con el del player
3. Testear las coroutines de la UI con runTest
4. Documentar el modelo de concurrencia de la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Modelo de concurrencia de la UI: eventos, estado y ciclo de vida coherentes. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir dónde se lanzan coroutines en la UI · Integrar el scope de Compose con el del player · Testear las coroutines de la UI con runTest · Documentar el modelo de concurrencia de la UI | lista | sí | 3-4 pasos |
| $criterios_clave | Las coroutines de la UI están cubiertas por tests · No hay coroutines fugadas en las pantallas | lista | sí | calidad verificable |
| $prompt_guia | Quiero un modelo de concurrencia claro para la UI de Ryutify: qué scope usa cada pantalla, cómo se integra con el player y tests con runTest. | texto | no | "Coroutines en la UI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las coroutines de la UI están cubiertas por tests
- [ ] No hay coroutines fugadas en las pantallas

## Ejemplos de prompts

- "Quiero un modelo de concurrencia claro para la UI de Ryutify: qué scope usa cada pantalla, cómo se integra con el player y tests con runTest."
- "Aplica Coroutines en la UI (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Las coroutines de la UI están cubiertas por tests"
- "Revisa mi compose-ui y dime qué pasos de Coroutines en la UI me faltan en este nivel"