---
name: media3-exoplayer-exoplayer-basico-basico
description: ExoPlayer básico · nivel Básico · Media3/ExoPlayer: reproducción de audio. Crea y configura el player para reproducir streams de audio en Ryutify. Objetivo del nivel: Crear un ExoPlayer y reproducir un stream de audio simple.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "exoplayer-basico"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# ExoPlayer básico — Básico

## Qué hace este skill

Crea y configura el player para reproducir streams de audio en Ryutify. En este nivel se entrega: **Crear un ExoPlayer y reproducir un stream de audio simple.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ExoPlayer básico** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el ExoPlayer con ExoPlayer.Builder
2. Setear la MediaItem con el stream de audio de Ryutify
3. Manejar play, pause y seekTo
4. Liberar el player al destruir la pantalla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un ExoPlayer y reproducir un stream de audio simple. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Crear el ExoPlayer con ExoPlayer.Builder · Setear la MediaItem con el stream de audio de Ryutify · Manejar play, pause y seekTo · Liberar el player al destruir la pantalla | lista | sí | 3-4 pasos |
| $criterios_clave | El stream de audio suena y se pausa correctamente · El player se libera sin fugas al cerrar la pantalla | lista | sí | calidad verificable |
| $prompt_guia | Reproducí el stream de audio de una canción de Ryutify con ExoPlayer: crear el player, setear la MediaItem y manejar play, pausa y seek. | texto | no | "ExoPlayer básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El stream de audio suena y se pausa correctamente
- [ ] El player se libera sin fugas al cerrar la pantalla

## Ejemplos de prompts

- "Reproducí el stream de audio de una canción de Ryutify con ExoPlayer: crear el player, setear la MediaItem y manejar play, pausa y seek."
- "Aplica ExoPlayer básico (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El stream de audio suena y se pausa correctamente"
- "Revisa mi media3-exoplayer y dime qué pasos de ExoPlayer básico me faltan en este nivel"