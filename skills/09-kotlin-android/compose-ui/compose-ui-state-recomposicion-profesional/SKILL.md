---
name: compose-ui-state-recomposicion-profesional
description: State y recomposición · nivel Profesional · Jetpack Compose: UI declarativa. El corazón de Compose: cómo fluye el estado y cuándo se recompone. Objetivo del nivel: Arquitectura de estado en la UI: fuente única de verdad sin recomposición perdida.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "state-recomposicion"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# State y recomposición — Profesional

## Qué hace este skill

El corazón de Compose: cómo fluye el estado y cuándo se recompone. En este nivel se entrega: **Arquitectura de estado en la UI: fuente única de verdad sin recomposición perdida.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State y recomposición** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el modelo de estado de UI por pantalla
2. Usar collectAsStateWithLifecycle correctamente
3. Evitar estado duplicado entre composables
4. Medir el rendimiento de recomposición con las herramientas de Compose

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Arquitectura de estado en la UI: fuente única de verdad sin recomposición perdida. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir el modelo de estado de UI por pantalla · Usar collectAsStateWithLifecycle correctamente · Evitar estado duplicado entre composables · Medir el rendimiento de recomposición con las herramientas de Compose | lista | sí | 3-4 pasos |
| $criterios_clave | El estado de la pantalla viene de una única fuente · Las métricas de recomposición muestran trabajo mínimo | lista | sí | calidad verificable |
| $prompt_guia | El estado del player de Ryutify está duplicado en varios composables. Rediseñalo con una única fuente, collectAsStateWithLifecycle y medí las recomposiciones. | texto | no | "State y recomposición" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado de la pantalla viene de una única fuente
- [ ] Las métricas de recomposición muestran trabajo mínimo

## Ejemplos de prompts

- "El estado del player de Ryutify está duplicado en varios composables. Rediseñalo con una única fuente, collectAsStateWithLifecycle y medí las recomposiciones."
- "Aplica State y recomposición (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El estado de la pantalla viene de una única fuente"
- "Revisa mi compose-ui y dime qué pasos de State y recomposición me faltan en este nivel"