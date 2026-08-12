---
name: media3-exoplayer-audio-focus-ducking-basico
description: Audio focus y ducking · nivel Básico · Media3/ExoPlayer: reproducción de audio. Comparte el audio con otras apps: foco, pausa y atenuación correctas. Objetivo del nivel: Solicitar y manejar el audio focus correctamente.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "audio-focus-ducking"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Audio focus y ducking — Básico

## Qué hace este skill

Comparte el audio con otras apps: foco, pausa y atenuación correctas. En este nivel se entrega: **Solicitar y manejar el audio focus correctamente.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Audio focus y ducking** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Solicitar el audio focus al empezar a reproducir
2. Pausar al perder el foco temporal
3. Reanudar al recuperar el foco
4. Abandonar el foco al detener

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Solicitar y manejar el audio focus correctamente. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Solicitar el audio focus al empezar a reproducir · Pausar al perder el foco temporal · Reanudar al recuperar el foco · Abandonar el foco al detener | lista | sí | 3-4 pasos |
| $criterios_clave | La app se pausa cuando otra app pide el foco · La app reanuda al recuperar el foco si corresponde | lista | sí | calidad verificable |
| $prompt_guia | Cuando suena la alarma o se inicia otra app, Ryutify sigue sonando por encima. Implementá el audio focus con pausa y reanudación correctas. | texto | no | "Audio focus y ducking" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La app se pausa cuando otra app pide el foco
- [ ] La app reanuda al recuperar el foco si corresponde

## Ejemplos de prompts

- "Cuando suena la alarma o se inicia otra app, Ryutify sigue sonando por encima. Implementá el audio focus con pausa y reanudación correctas."
- "Aplica Audio focus y ducking (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La app se pausa cuando otra app pide el foco"
- "Revisa mi media3-exoplayer y dime qué pasos de Audio focus y ducking me faltan en este nivel"