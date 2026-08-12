---
name: media3-exoplayer-colas-playlist-profesional
description: Colas y playlists · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Construye la cola de reproducción con playlists, shuffle y repetición. Objetivo del nivel: Cola de producción: orden estable, transiciones y consistencia con la UI.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "colas-playlist"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Colas y playlists — Profesional

## Qué hace este skill

Construye la cola de reproducción con playlists, shuffle y repetición. En este nivel se entrega: **Cola de producción: orden estable, transiciones y consistencia con la UI.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colas y playlists** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Sincronizar la cola de la UI con la del player en cada cambio
2. Garantizar el orden estable del shuffle ante reintentos
3. Manejar canciones que fallan sin romper la cola
4. Medir la memoria con 500 canciones en cola

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Cola de producción: orden estable, transiciones y consistencia con la UI. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Sincronizar la cola de la UI con la del player en cada cambio · Garantizar el orden estable del shuffle ante reintentos · Manejar canciones que fallan sin romper la cola · Medir la memoria con 500 canciones en cola | lista | sí | 3-4 pasos |
| $criterios_clave | La UI y el player nunca divergen en la canción actual · El player no gotea memoria con 200 canciones en cola | lista | sí | calidad verificable |
| $prompt_guia | La cola de Ryutify se desincroniza entre la UI y el player cuando falla una canción. Sincronizala de forma consistente y medí la memoria con 200 canciones. | texto | no | "Colas y playlists" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI y el player nunca divergen en la canción actual
- [ ] El player no gotea memoria con 200 canciones en cola

## Ejemplos de prompts

- "La cola de Ryutify se desincroniza entre la UI y el player cuando falla una canción. Sincronizala de forma consistente y medí la memoria con 200 canciones."
- "Aplica Colas y playlists (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La UI y el player nunca divergen en la canción actual"
- "Revisa mi media3-exoplayer y dime qué pasos de Colas y playlists me faltan en este nivel"