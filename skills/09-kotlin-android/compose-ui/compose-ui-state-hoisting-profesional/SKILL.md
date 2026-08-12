---
name: compose-ui-state-hoisting-profesional
description: State hoisting · nivel Profesional · Jetpack Compose: UI declarativa. Sube el estado y baja los eventos: la regla de oro de Compose. Objetivo del nivel: Definir la arquitectura de UI del proyecto con estados inmutables por pantalla.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "state-hoisting"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# State hoisting — Profesional

## Qué hace este skill

Sube el estado y baja los eventos: la regla de oro de Compose. En este nivel se entrega: **Definir la arquitectura de UI del proyecto con estados inmutables por pantalla.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State hoisting** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los UiState por pantalla con data classes inmutables
2. Documentar el flujo de eventos de cada pantalla
3. Testear los composables con distintos estados
4. Refactorizar las pantallas heredadas al patrón

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la arquitectura de UI del proyecto con estados inmutables por pantalla. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir los UiState por pantalla con data classes inmutables · Documentar el flujo de eventos de cada pantalla · Testear los composables con distintos estados · Refactorizar las pantallas heredadas al patrón | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las pantallas siguen el patrón de estado unidireccional · Los tests de UI cubren los estados definidos | lista | sí | calidad verificable |
| $prompt_guia | Quiero que todas las pantallas de Ryutify sigan el patrón UDF: UiState inmutable por pantalla, eventos hacia el ViewModel y tests de cada estado. Refactorizá y documentá. | texto | no | "State hoisting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las pantallas siguen el patrón de estado unidireccional
- [ ] Los tests de UI cubren los estados definidos

## Ejemplos de prompts

- "Quiero que todas las pantallas de Ryutify sigan el patrón UDF: UiState inmutable por pantalla, eventos hacia el ViewModel y tests de cada estado. Refactorizá y documentá."
- "Aplica State hoisting (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Todas las pantallas siguen el patrón de estado unidireccional"
- "Revisa mi compose-ui y dime qué pasos de State hoisting me faltan en este nivel"