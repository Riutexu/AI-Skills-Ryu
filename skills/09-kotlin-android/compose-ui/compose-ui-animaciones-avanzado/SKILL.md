---
name: compose-ui-animaciones-avanzado
description: Animaciones en Compose · nivel Avanzado · Jetpack Compose: UI declarativa. Transiciones y microinteracciones fluidas para la UI de música. Objetivo del nivel: Animaciones coordinadas y con física natural.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "animaciones"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Animaciones en Compose — Avanzado

## Qué hace este skill

Transiciones y microinteracciones fluidas para la UI de música. En este nivel se entrega: **Animaciones coordinadas y con física natural.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Animaciones en Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Coordinar la rotación del disco con el estado de reproducción
2. Usar spring para el rebote del botón de favorito
3. Animear la expansión del mini player al player completo
4. Usar AnimatedContent para cambiar de canción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Animaciones coordinadas y con física natural. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Coordinar la rotación del disco con el estado de reproducción · Usar spring para el rebote del botón de favorito · Animear la expansión del mini player al player completo · Usar AnimatedContent para cambiar de canción | lista | sí | 3-4 pasos |
| $criterios_clave | La rotación del disco sigue la reproducción y se pausa correctamente · El cambio de canción con AnimatedContent no parpadea | lista | sí | calidad verificable |
| $prompt_guia | Quiero el disco girando en el player de Ryutify que siga el estado de reproducción y la transición de mini player a player completo animada. | texto | no | "Animaciones en Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La rotación del disco sigue la reproducción y se pausa correctamente
- [ ] El cambio de canción con AnimatedContent no parpadea

## Ejemplos de prompts

- "Quiero el disco girando en el player de Ryutify que siga el estado de reproducción y la transición de mini player a player completo animada."
- "Aplica Animaciones en Compose (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La rotación del disco sigue la reproducción y se pausa correctamente"
- "Revisa mi compose-ui y dime qué pasos de Animaciones en Compose me faltan en este nivel"