---
name: compose-ui-testing-ui-basico
description: Testing de UI Compose · nivel Básico · Jetpack Compose: UI declarativa. Tests de interfaz confiables con Compose Test y semantics. Objetivo del nivel: Escribir tests de UI básicos con Compose Test.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-ui"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Testing de UI Compose — Básico

## Qué hace este skill

Tests de interfaz confiables con Compose Test y semantics. En este nivel se entrega: **Escribir tests de UI básicos con Compose Test.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de UI Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar las dependencias de testing de Compose
2. Escribir un test que verifica el título de la canción
3. Simular clicks en el botón de play
4. Usar onNodeWithText y onNodeWithTag

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir tests de UI básicos con Compose Test. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Configurar las dependencias de testing de Compose · Escribir un test que verifica el título de la canción · Simular clicks en el botón de play · Usar onNodeWithText y onNodeWithTag | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests corren en el CI sin flakes · El click de play verifica el cambio de estado | lista | sí | calidad verificable |
| $prompt_guia | Escribí los primeros tests de UI de Ryutify: que la pantalla del player muestre el título correcto y que el botón de play cambie de estado al tocarlo. | texto | no | "Testing de UI Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests corren en el CI sin flakes
- [ ] El click de play verifica el cambio de estado

## Ejemplos de prompts

- "Escribí los primeros tests de UI de Ryutify: que la pantalla del player muestre el título correcto y que el botón de play cambie de estado al tocarlo."
- "Aplica Testing de UI Compose (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Los tests corren en el CI sin flakes"
- "Revisa mi compose-ui y dime qué pasos de Testing de UI Compose me faltan en este nivel"