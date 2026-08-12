---
name: compose-ui-rendimiento-recomposicion-basico
description: Rendimiento de recomposición · nivel Básico · Jetpack Compose: UI declarativa. Mide y optimiza la recomposición para una UI fluida. Objetivo del nivel: Detectar recomposiciones excesivas con las herramientas del IDE.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "rendimiento-recomposicion"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Rendimiento de recomposición — Básico

## Qué hace este skill

Mide y optimiza la recomposición para una UI fluida. En este nivel se entrega: **Detectar recomposiciones excesivas con las herramientas del IDE.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de recomposición** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar el layout inspector para ver recomposiciones
2. Identificar composables que se recomponen sin necesidad
3. Aplicar skippability con parámetros estables
4. Corregir un caso real de recomposición excesiva

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Detectar recomposiciones excesivas con las herramientas del IDE. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Usar el layout inspector para ver recomposiciones · Identificar composables que se recomponen sin necesidad · Aplicar skippability con parámetros estables · Corregir un caso real de recomposición excesiva | lista | sí | 3-4 pasos |
| $criterios_clave | El inspector muestra recomposición mínima en la lista · Los parámetros de los composables son estables | lista | sí | calidad verificable |
| $prompt_guia | La lista de canciones de Ryutify se recompona entera al tocar un favorito. Usá el layout inspector, identificá el problema y corregilo. | texto | no | "Rendimiento de recomposición" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El inspector muestra recomposición mínima en la lista
- [ ] Los parámetros de los composables son estables

## Ejemplos de prompts

- "La lista de canciones de Ryutify se recompona entera al tocar un favorito. Usá el layout inspector, identificá el problema y corregilo."
- "Aplica Rendimiento de recomposición (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El inspector muestra recomposición mínima en la lista"
- "Revisa mi compose-ui y dime qué pasos de Rendimiento de recomposición me faltan en este nivel"