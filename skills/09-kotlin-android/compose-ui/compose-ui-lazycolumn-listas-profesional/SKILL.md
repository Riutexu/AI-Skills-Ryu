---
name: compose-ui-lazycolumn-listas-profesional
description: Listas con LazyColumn · nivel Profesional · Jetpack Compose: UI declarativa. Listas eficientes y de todo tipo con LazyColumn y LazyGrid. Objetivo del nivel: Rendimiento extremo en listas: diffs, prefetch y memoria.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "lazycolumn-listas"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Listas con LazyColumn — Profesional

## Qué hace este skill

Listas eficientes y de todo tipo con LazyColumn y LazyGrid. En este nivel se entrega: **Rendimiento extremo en listas: diffs, prefetch y memoria.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Listas con LazyColumn** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar keys estables y evitar recomposición de ítems
2. Implementar prefetch de miniaturas
3. Medir la memoria de la lista con 50.000 ítems
4. Usar LazyColumn con estados derivados eficientes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Rendimiento extremo en listas: diffs, prefetch y memoria. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Usar keys estables y evitar recomposición de ítems · Implementar prefetch de miniaturas · Medir la memoria de la lista con 50.000 ítems · Usar LazyColumn con estados derivados eficientes | lista | sí | 3-4 pasos |
| $criterios_clave | El scroll con 50.000 ítems no supera la memoria acordada · Las miniaturas llegan antes de que se vean los ítems | lista | sí | calidad verificable |
| $prompt_guia | La biblioteca grande de Ryutify gasta memoria al scrollear. Optimizá la LazyColumn con prefetch de imágenes, keys estables y medición de memoria. | texto | no | "Listas con LazyColumn" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El scroll con 50.000 ítems no supera la memoria acordada
- [ ] Las miniaturas llegan antes de que se vean los ítems

## Ejemplos de prompts

- "La biblioteca grande de Ryutify gasta memoria al scrollear. Optimizá la LazyColumn con prefetch de imágenes, keys estables y medición de memoria."
- "Aplica Listas con LazyColumn (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El scroll con 50.000 ítems no supera la memoria acordada"
- "Revisa mi compose-ui y dime qué pasos de Listas con LazyColumn me faltan en este nivel"