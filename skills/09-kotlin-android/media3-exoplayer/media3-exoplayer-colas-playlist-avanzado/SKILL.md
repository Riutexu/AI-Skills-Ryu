---
name: media3-exoplayer-colas-playlist-avanzado
description: Colas y playlists · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Construye la cola de reproducción con playlists, shuffle y repetición. Objetivo del nivel: Shuffle, repetición y manipulación de la cola en runtime.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "colas-playlist"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Colas y playlists — Avanzado

## Qué hace este skill

Construye la cola de reproducción con playlists, shuffle y repetición. En este nivel se entrega: **Shuffle, repetición y manipulación de la cola en runtime.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colas y playlists** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Activar y desactivar el shuffle con orden estable
2. Configurar la repetición: off, una y toda
3. Remover y mover canciones de la cola en runtime
4. Persistir la cola entre sesiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Shuffle, repetición y manipulación de la cola en runtime. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Activar y desactivar el shuffle con orden estable · Configurar la repetición: off, una y toda · Remover y mover canciones de la cola en runtime · Persistir la cola entre sesiones | lista | sí | 3-4 pasos |
| $criterios_clave | El shuffle no repite canciones hasta agotar la cola · La cola persistida se restaura en la próxima sesión | lista | sí | calidad verificable |
| $prompt_guia | Quiero shuffle y repetición en el player de Ryutify y que la cola se persista para la próxima sesión. Implementalo con la playlist del Media3. | texto | no | "Colas y playlists" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El shuffle no repite canciones hasta agotar la cola
- [ ] La cola persistida se restaura en la próxima sesión

## Ejemplos de prompts

- "Quiero shuffle y repetición en el player de Ryutify y que la cola se persista para la próxima sesión. Implementalo con la playlist del Media3."
- "Aplica Colas y playlists (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El shuffle no repite canciones hasta agotar la cola"
- "Revisa mi media3-exoplayer y dime qué pasos de Colas y playlists me faltan en este nivel"