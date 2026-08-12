---
name: compose-ui-composables-basicos-basico
description: Composables básicos · nivel Básico · Jetpack Compose: UI declarativa. Primeros pasos con la UI declarativa: text, column, row y botones. Objetivo del nivel: Crear composables simples para la pantalla de reproducción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "composables-basicos"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Composables básicos — Básico

## Qué hace este skill

Primeros pasos con la UI declarativa: text, column, row y botones. En este nivel se entrega: **Crear composables simples para la pantalla de reproducción.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Composables básicos** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el composable PantallaReproduccion con Column
2. Usar Text, Button y Icon para el control de play
3. Componer la card de la canción en curso
4. Recibir parámetros como canción y duración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear composables simples para la pantalla de reproducción. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Crear el composable PantallaReproduccion con Column · Usar Text, Button y Icon para el control de play · Componer la card de la canción en curso · Recibir parámetros como canción y duración | lista | sí | 3-4 pasos |
| $criterios_clave | La pantalla muestra canción, artista y duración correctamente · El botón de play y pausa cambia su icono según el estado | lista | sí | calidad verificable |
| $prompt_guia | Armá el layout de la pantalla de reproducción de Ryutify con Compose: portada, título, artista, barra de progreso y botones de play y siguiente. | texto | no | "Composables básicos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La pantalla muestra canción, artista y duración correctamente
- [ ] El botón de play y pausa cambia su icono según el estado

## Ejemplos de prompts

- "Armá el layout de la pantalla de reproducción de Ryutify con Compose: portada, título, artista, barra de progreso y botones de play y siguiente."
- "Aplica Composables básicos (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La pantalla muestra canción, artista y duración correctamente"
- "Revisa mi compose-ui y dime qué pasos de Composables básicos me faltan en este nivel"