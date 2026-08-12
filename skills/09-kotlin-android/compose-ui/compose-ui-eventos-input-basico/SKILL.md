---
name: compose-ui-eventos-input-basico
description: Eventos e input · nivel Básico · Jetpack Compose: UI declarativa. Gestos, campos de texto y accesibilidad en la UI Compose. Objetivo del nivel: Manejar clicks y campos de texto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "eventos-input"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Eventos e input — Básico

## Qué hace este skill

Gestos, campos de texto y accesibilidad en la UI Compose. En este nivel se entrega: **Manejar clicks y campos de texto.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos e input** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar clicks con clickable
2. Crear el campo de búsqueda con OutlinedTextField
3. Vincular el texto con el estado
4. Usar la barra de progreso como slider

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Manejar clicks y campos de texto. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Manejar clicks con clickable · Crear el campo de búsqueda con OutlinedTextField · Vincular el texto con el estado · Usar la barra de progreso como slider | lista | sí | 3-4 pasos |
| $criterios_clave | El campo de búsqueda refleja el estado del texto · El slider cambia la posición del player | lista | sí | calidad verificable |
| $prompt_guia | Creá el campo de búsqueda de Ryutify con OutlinedTextField conectado al estado y hacé que el usuario pueda buscar al presionar enter. | texto | no | "Eventos e input" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El campo de búsqueda refleja el estado del texto
- [ ] El slider cambia la posición del player

## Ejemplos de prompts

- "Creá el campo de búsqueda de Ryutify con OutlinedTextField conectado al estado y hacé que el usuario pueda buscar al presionar enter."
- "Aplica Eventos e input (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El campo de búsqueda refleja el estado del texto"
- "Revisa mi compose-ui y dime qué pasos de Eventos e input me faltan en este nivel"