---
name: compose-ui-animaciones-basico
description: Animaciones en Compose · nivel Básico · Jetpack Compose: UI declarativa. Transiciones y microinteracciones fluidas para la UI de música. Objetivo del nivel: Animaciones simples: fade, slide y scale con animate y sus variantes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "animaciones"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Animaciones en Compose — Básico

## Qué hace este skill

Transiciones y microinteracciones fluidas para la UI de música. En este nivel se entrega: **Animaciones simples: fade, slide y scale con animate y sus variantes.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Animaciones en Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Animear la aparición de la portada con fade
2. Animear el cambio del botón play y pausa
3. Usar AnimatedVisibility para el panel de letra
4. Agregar la transición de la barra de progreso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Animaciones simples: fade, slide y scale con animate y sus variantes. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Animear la aparición de la portada con fade · Animear el cambio del botón play y pausa · Usar AnimatedVisibility para el panel de letra · Agregar la transición de la barra de progreso | lista | sí | 3-4 pasos |
| $criterios_clave | Las animaciones corren a 60fps en un device de gama media · El panel de letra aparece y desaparece suavemente | lista | sí | calidad verificable |
| $prompt_guia | Animá la UI del player de Ryutify: fade de portada, transición del botón play y panel de letras con AnimatedVisibility. | texto | no | "Animaciones en Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las animaciones corren a 60fps en un device de gama media
- [ ] El panel de letra aparece y desaparece suavemente

## Ejemplos de prompts

- "Animá la UI del player de Ryutify: fade de portada, transición del botón play y panel de letras con AnimatedVisibility."
- "Aplica Animaciones en Compose (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Las animaciones corren a 60fps en un device de gama media"
- "Revisa mi compose-ui y dime qué pasos de Animaciones en Compose me faltan en este nivel"