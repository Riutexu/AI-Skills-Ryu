---
name: media3-exoplayer-audio-focus-ducking-profesional
description: Audio focus y ducking · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Comparte el audio con otras apps: foco, pausa y atenuación correctas. Objetivo del nivel: Política de audio del producto: todos los escenarios de foco cubiertos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "audio-focus-ducking"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Audio focus y ducking — Profesional

## Qué hace este skill

Comparte el audio con otras apps: foco, pausa y atenuación correctas. En este nivel se entrega: **Política de audio del producto: todos los escenarios de foco cubiertos.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Audio focus y ducking** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar la matriz de escenarios de foco de audio
2. Manejar las notificaciones interrumpibles y el asistente
3. Configurar el comportamiento en Android Auto
4. Testear los escenarios con apps reales en un device

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de audio del producto: todos los escenarios de foco cubiertos. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Documentar la matriz de escenarios de foco de audio · Manejar las notificaciones interrumpibles y el asistente · Configurar el comportamiento en Android Auto · Testear los escenarios con apps reales en un device | lista | sí | 3-4 pasos |
| $criterios_clave | La matriz de foco cubre alarma, llamada, voz y otra música · Ryutify no pausa ni se atenúa en escenarios incorrectos | lista | sí | calidad verificable |
| $prompt_guia | Armá la matriz de escenarios de audio focus de Ryutify: llamada, alarma, asistente y otra app de música, y que el comportamiento sea el correcto en cada uno. | texto | no | "Audio focus y ducking" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La matriz de foco cubre alarma, llamada, voz y otra música
- [ ] Ryutify no pausa ni se atenúa en escenarios incorrectos

## Ejemplos de prompts

- "Armá la matriz de escenarios de audio focus de Ryutify: llamada, alarma, asistente y otra app de música, y que el comportamiento sea el correcto en cada uno."
- "Aplica Audio focus y ducking (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La matriz de foco cubre alarma, llamada, voz y otra música"
- "Revisa mi media3-exoplayer y dime qué pasos de Audio focus y ducking me faltan en este nivel"