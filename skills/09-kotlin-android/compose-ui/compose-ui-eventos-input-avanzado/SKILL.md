---
name: compose-ui-eventos-input-avanzado
description: Eventos e input · nivel Avanzado · Jetpack Compose: UI declarativa. Gestos, campos de texto y accesibilidad en la UI Compose. Objetivo del nivel: Gestos personalizados y accesibilidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "eventos-input"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Eventos e input — Avanzado

## Qué hace este skill

Gestos, campos de texto y accesibilidad en la UI Compose. En este nivel se entrega: **Gestos personalizados y accesibilidad.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos e input** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar swipe para descartar canciones
2. Usar detección de drag en el slider del player
3. Agregar contentDescription a los elementos
4. Soportar navegación por teclado y accesibilidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Gestos personalizados y accesibilidad. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Implementar swipe para descartar canciones · Usar detección de drag en el slider del player · Agregar contentDescription a los elementos · Soportar navegación por teclado y accesibilidad | lista | sí | 3-4 pasos |
| $criterios_clave | El swipe para descartar canciones funciona y es accesible · Todos los elementos tienen contentDescription | lista | sí | calidad verificable |
| $prompt_guia | Agregá a Ryutify el swipe para descartar canciones de la cola y hacé que toda la pantalla del player sea accesible con contentDescription. | texto | no | "Eventos e input" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El swipe para descartar canciones funciona y es accesible
- [ ] Todos los elementos tienen contentDescription

## Ejemplos de prompts

- "Agregá a Ryutify el swipe para descartar canciones de la cola y hacé que toda la pantalla del player sea accesible con contentDescription."
- "Aplica Eventos e input (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El swipe para descartar canciones funciona y es accesible"
- "Revisa mi compose-ui y dime qué pasos de Eventos e input me faltan en este nivel"