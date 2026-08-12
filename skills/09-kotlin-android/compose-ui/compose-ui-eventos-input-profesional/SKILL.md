---
name: compose-ui-eventos-input-profesional
description: Eventos e input · nivel Profesional · Jetpack Compose: UI declarativa. Gestos, campos de texto y accesibilidad en la UI Compose. Objetivo del nivel: Experiencia de input del producto: gestos y accesibilidad medibles.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "eventos-input"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Eventos e input — Profesional

## Qué hace este skill

Gestos, campos de texto y accesibilidad en la UI Compose. En este nivel se entrega: **Experiencia de input del producto: gestos y accesibilidad medibles.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos e input** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los gestos del producto y sus conflictos
2. Probar la app con TalkBack en flujos completos
3. Medir los tiempos de interacción clave
4. Auditar la accesibilidad con las herramientas del sistema

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Experiencia de input del producto: gestos y accesibilidad medibles. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir los gestos del producto y sus conflictos · Probar la app con TalkBack en flujos completos · Medir los tiempos de interacción clave · Auditar la accesibilidad con las herramientas del sistema | lista | sí | 3-4 pasos |
| $criterios_clave | El flujo completo de escucha es usable con TalkBack · Los gestos definidos no entran en conflicto | lista | sí | calidad verificable |
| $prompt_guia | Auditá la accesibilidad de Ryutify: flujo completo con TalkBack, gestos del player sin conflictos y métricas de interacción. | texto | no | "Eventos e input" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El flujo completo de escucha es usable con TalkBack
- [ ] Los gestos definidos no entran en conflicto

## Ejemplos de prompts

- "Auditá la accesibilidad de Ryutify: flujo completo con TalkBack, gestos del player sin conflictos y métricas de interacción."
- "Aplica Eventos e input (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El flujo completo de escucha es usable con TalkBack"
- "Revisa mi compose-ui y dime qué pasos de Eventos e input me faltan en este nivel"