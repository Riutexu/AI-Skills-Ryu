---
name: compose-ui-state-recomposicion-avanzado
description: State y recomposición · nivel Avanzado · Jetpack Compose: UI declarativa. El corazón de Compose: cómo fluye el estado y cuándo se recompone. Objetivo del nivel: Entender la recomposición y evitar trabajo innecesario.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "state-recomposicion"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# State y recomposición — Avanzado

## Qué hace este skill

El corazón de Compose: cómo fluye el estado y cuándo se recompone. En este nivel se entrega: **Entender la recomposición y evitar trabajo innecesario.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State y recomposición** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar el scope de recomposición de cada estado
2. Usar derivedStateOf para estados derivados
3. Evitar recomponer la lista completa al cambiar un ítem
4. Usar remember con keys para recomposiciones controladas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Entender la recomposición y evitar trabajo innecesario. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Identificar el scope de recomposición de cada estado · Usar derivedStateOf para estados derivados · Evitar recomponer la lista completa al cambiar un ítem · Usar remember con keys para recomposiciones controladas | lista | sí | 3-4 pasos |
| $criterios_clave | Cambiar el progreso del player no recompone la lista completa · El layout inspector muestra el scope mínimo de recomposición | lista | sí | calidad verificable |
| $prompt_guia | Cada segundo que avanza el progreso del player de Ryutify se recompona la pantalla entera. Optimizá el scope de recomposición con derivedStateOf y remember. | texto | no | "State y recomposición" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cambiar el progreso del player no recompone la lista completa
- [ ] El layout inspector muestra el scope mínimo de recomposición

## Ejemplos de prompts

- "Cada segundo que avanza el progreso del player de Ryutify se recompona la pantalla entera. Optimizá el scope de recomposición con derivedStateOf y remember."
- "Aplica State y recomposición (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Cambiar el progreso del player no recompone la lista completa"
- "Revisa mi compose-ui y dime qué pasos de State y recomposición me faltan en este nivel"