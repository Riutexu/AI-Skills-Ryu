---
name: media3-exoplayer-mediasession-basico
description: MediaSession · nivel Básico · Media3/ExoPlayer: reproducción de audio. Expone el estado del player al sistema: medios, controles y comandos. Objetivo del nivel: Crear una MediaSession y conectarla al player.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mediasession"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# MediaSession — Básico

## Qué hace este skill

Expone el estado del player al sistema: medios, controles y comandos. En este nivel se entrega: **Crear una MediaSession y conectarla al player.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **MediaSession** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la MediaSession con el contexto
2. Conectar la sesión al ExoPlayer
3. Actualizar los metadatos de la canción actual
4. Manejar play, pause y next desde la sesión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear una MediaSession y conectarla al player. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Crear la MediaSession con el contexto · Conectar la sesión al ExoPlayer · Actualizar los metadatos de la canción actual · Manejar play, pause y next desde la sesión | lista | sí | 3-4 pasos |
| $criterios_clave | El sistema ve la canción actual con su metadato · Los comandos de la sesión controlan el player | lista | sí | calidad verificable |
| $prompt_guia | Conectá una MediaSession al player de Ryutify para que el sistema conozca la canción actual y sus controles. | texto | no | "MediaSession" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El sistema ve la canción actual con su metadato
- [ ] Los comandos de la sesión controlan el player

## Ejemplos de prompts

- "Conectá una MediaSession al player de Ryutify para que el sistema conozca la canción actual y sus controles."
- "Aplica MediaSession (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El sistema ve la canción actual con su metadato"
- "Revisa mi media3-exoplayer y dime qué pasos de MediaSession me faltan en este nivel"