---
name: compose-ui-viewmodel-compose-profesional
description: ViewModel y Compose · nivel Profesional · Jetpack Compose: UI declarativa. Integración de ViewModel con Compose: estado, ciclo de vida y colección. Objetivo del nivel: Arquitectura ViewModel y UiState del producto completo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "viewmodel-compose"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# ViewModel y Compose — Profesional

## Qué hace este skill

Integración de ViewModel con Compose: estado, ciclo de vida y colección. En este nivel se entrega: **Arquitectura ViewModel y UiState del producto completo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ViewModel y Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el patrón UiState más UiEvent del proyecto
2. Testear la integración ViewModel y Compose
3. Documentar el flujo de datos de cada pantalla
4. Auditar la duplicación de estado entre pantallas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Arquitectura ViewModel y UiState del producto completo. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir el patrón UiState más UiEvent del proyecto · Testear la integración ViewModel y Compose · Documentar el flujo de datos de cada pantalla · Auditar la duplicación de estado entre pantallas | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las pantallas siguen el patrón definido · No hay estado duplicado entre pantallas | lista | sí | calidad verificable |
| $prompt_guia | Estandarizá la arquitectura ViewModel y UiState de Ryutify: patrón, tests de integración y documentación del flujo de datos de cada pantalla. | texto | no | "ViewModel y Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las pantallas siguen el patrón definido
- [ ] No hay estado duplicado entre pantallas

## Ejemplos de prompts

- "Estandarizá la arquitectura ViewModel y UiState de Ryutify: patrón, tests de integración y documentación del flujo de datos de cada pantalla."
- "Aplica ViewModel y Compose (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Todas las pantallas siguen el patrón definido"
- "Revisa mi compose-ui y dime qué pasos de ViewModel y Compose me faltan en este nivel"