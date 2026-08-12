---
name: media3-exoplayer-metricas-debugging-basico
description: Métricas y debugging del player · nivel Básico · Media3/ExoPlayer: reproducción de audio. Mide la salud de la reproducción y debuggea con datos, no con suposiciones. Objetivo del nivel: Exponer las métricas básicas del player en el debug.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "metricas-debugging"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Métricas y debugging del player — Básico

## Qué hace este skill

Mide la salud de la reproducción y debuggea con datos, no con suposiciones. En este nivel se entrega: **Exponer las métricas básicas del player en el debug.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Métricas y debugging del player** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer los metrics del ExoPlayer
2. Mostrar la información del formato en el debug
3. Loguear los eventos de carga y reproducción
4. Comparar dos canciones con métricas distintas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Exponer las métricas básicas del player en el debug. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Leer los metrics del ExoPlayer · Mostrar la información del formato en el debug · Loguear los eventos de carga y reproducción · Comparar dos canciones con métricas distintas | lista | sí | 3-4 pasos |
| $criterios_clave | El debug muestra bitrate, formato y buffer de la canción · Los logs del player son consultables por canción | lista | sí | calidad verificable |
| $prompt_guia | Quiero ver en el debug de Ryutify el bitrate, el formato y el buffer de cada canción para entender por qué unas cargan mejor que otras. | texto | no | "Métricas y debugging del player" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El debug muestra bitrate, formato y buffer de la canción
- [ ] Los logs del player son consultables por canción

## Ejemplos de prompts

- "Quiero ver en el debug de Ryutify el bitrate, el formato y el buffer de cada canción para entender por qué unas cargan mejor que otras."
- "Aplica Métricas y debugging del player (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El debug muestra bitrate, formato y buffer de la canción"
- "Revisa mi media3-exoplayer y dime qué pasos de Métricas y debugging del player me faltan en este nivel"