---
name: compose-ui-rendimiento-recomposicion-profesional
description: Rendimiento de recomposición · nivel Profesional · Jetpack Compose: UI declarativa. Mide y optimiza la recomposición para una UI fluida. Objetivo del nivel: Presupuesto de rendimiento de la UI y monitoreo continuo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "rendimiento-recomposicion"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Rendimiento de recomposición — Profesional

## Qué hace este skill

Mide y optimiza la recomposición para una UI fluida. En este nivel se entrega: **Presupuesto de rendimiento de la UI y monitoreo continuo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de recomposición** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el frame budget de las pantallas clave
2. Crear una prueba de rendimiento de la lista grande
3. Monitorear jank con la herramienta de perfiles en CI
4. Documentar los patrones que degradan la recomposición

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Presupuesto de rendimiento de la UI y monitoreo continuo. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir el frame budget de las pantallas clave · Crear una prueba de rendimiento de la lista grande · Monitorear jank con la herramienta de perfiles en CI · Documentar los patrones que degradan la recomposición | lista | sí | 3-4 pasos |
| $criterios_clave | Las pantallas clave no superan el frame budget en devices gama media · El monitoreo de jank está en el CI | lista | sí | calidad verificable |
| $prompt_guia | Quiero un presupuesto de rendimiento para la UI de Ryutify: frame budget por pantalla, pruebas de la lista grande y monitoreo de jank en el CI. | texto | no | "Rendimiento de recomposición" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las pantallas clave no superan el frame budget en devices gama media
- [ ] El monitoreo de jank está en el CI

## Ejemplos de prompts

- "Quiero un presupuesto de rendimiento para la UI de Ryutify: frame budget por pantalla, pruebas de la lista grande y monitoreo de jank en el CI."
- "Aplica Rendimiento de recomposición (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Las pantallas clave no superan el frame budget en devices gama media"
- "Revisa mi compose-ui y dime qué pasos de Rendimiento de recomposición me faltan en este nivel"