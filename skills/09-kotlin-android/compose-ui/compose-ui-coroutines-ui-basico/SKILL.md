---
name: compose-ui-coroutines-ui-basico
description: Coroutines en la UI · nivel Básico · Jetpack Compose: UI declarativa. LaunchedEffect, rememberCoroutineScope y trabajo asincrónico en Compose. Objetivo del nivel: Lanzar coroutines desde Compose con LaunchedEffect.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "coroutines-ui"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Coroutines en la UI — Básico

## Qué hace este skill

LaunchedEffect, rememberCoroutineScope y trabajo asincrónico en Compose. En este nivel se entrega: **Lanzar coroutines desde Compose con LaunchedEffect.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coroutines en la UI** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar LaunchedEffect para cargar datos al entrar
2. Actualizar el progreso del player con una coroutine
3. Usar rememberCoroutineScope para acciones de UI
4. Cancelar correctamente al salir de la pantalla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Lanzar coroutines desde Compose con LaunchedEffect. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Usar LaunchedEffect para cargar datos al entrar · Actualizar el progreso del player con una coroutine · Usar rememberCoroutineScope para acciones de UI · Cancelar correctamente al salir de la pantalla | lista | sí | 3-4 pasos |
| $criterios_clave | La carga inicial se ejecuta una sola vez por entrada · La coroutine del progreso se cancela al salir | lista | sí | calidad verificable |
| $prompt_guia | La pantalla del player de Ryutify carga datos con LaunchedEffect y el progreso se actualiza con una coroutine que se cancela al salir. Implementalo. | texto | no | "Coroutines en la UI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La carga inicial se ejecuta una sola vez por entrada
- [ ] La coroutine del progreso se cancela al salir

## Ejemplos de prompts

- "La pantalla del player de Ryutify carga datos con LaunchedEffect y el progreso se actualiza con una coroutine que se cancela al salir. Implementalo."
- "Aplica Coroutines en la UI (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La carga inicial se ejecuta una sola vez por entrada"
- "Revisa mi compose-ui y dime qué pasos de Coroutines en la UI me faltan en este nivel"