---
name: compose-ui-testing-ui-avanzado
description: Testing de UI Compose · nivel Avanzado · Jetpack Compose: UI declarativa. Tests de interfaz confiables con Compose Test y semantics. Objetivo del nivel: Tests de flujos completos con estados y esperas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-ui"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Testing de UI Compose — Avanzado

## Qué hace este skill

Tests de interfaz confiables con Compose Test y semantics. En este nivel se entrega: **Tests de flujos completos con estados y esperas.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de UI Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear el flujo de búsqueda completo
2. Usar idling resources y esperas para datos asincrónicos
3. Testear el estado de error y el vacío
4. Usar testTags para elementos sin texto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Tests de flujos completos con estados y esperas. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Testear el flujo de búsqueda completo · Usar idling resources y esperas para datos asincrónicos · Testear el estado de error y el vacío · Usar testTags para elementos sin texto | lista | sí | 3-4 pasos |
| $criterios_clave | El test de búsqueda cubre éxito, vacío y error · Los tests no dependen de tiempos fijos | lista | sí | calidad verificable |
| $prompt_guia | Cubrí con tests de UI el flujo de búsqueda de Ryutify: éxito, vacío y error de red, con esperas robustas sin sleeps. | texto | no | "Testing de UI Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El test de búsqueda cubre éxito, vacío y error
- [ ] Los tests no dependen de tiempos fijos

## Ejemplos de prompts

- "Cubrí con tests de UI el flujo de búsqueda de Ryutify: éxito, vacío y error de red, con esperas robustas sin sleeps."
- "Aplica Testing de UI Compose (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El test de búsqueda cubre éxito, vacío y error"
- "Revisa mi compose-ui y dime qué pasos de Testing de UI Compose me faltan en este nivel"