---
name: media3-exoplayer-colas-playlist-basico
description: Colas y playlists · nivel Básico · Media3/ExoPlayer: reproducción de audio. Construye la cola de reproducción con playlists, shuffle y repetición. Objetivo del nivel: Encolar canciones y navegar la cola con el player.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "colas-playlist"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Colas y playlists — Básico

## Qué hace este skill

Construye la cola de reproducción con playlists, shuffle y repetición. En este nivel se entrega: **Encolar canciones y navegar la cola con el player.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colas y playlists** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar múltiples MediaItems a la cola
2. Navegar con next y previous
3. Mostrar la cola en la UI
4. Arrancar desde una canción puntual

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Encolar canciones y navegar la cola con el player. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Agregar múltiples MediaItems a la cola · Navegar con next y previous · Mostrar la cola en la UI · Arrancar desde una canción puntual | lista | sí | 3-4 pasos |
| $criterios_clave | La cola reproduce en orden y el next funciona · La UI muestra la lista de canciones encoladas | lista | sí | calidad verificable |
| $prompt_guia | Cargá la cola de reproducción de Ryutify con las canciones de la playlist y navegá con next, previous y arranque desde una canción puntual. | texto | no | "Colas y playlists" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cola reproduce en orden y el next funciona
- [ ] La UI muestra la lista de canciones encoladas

## Ejemplos de prompts

- "Cargá la cola de reproducción de Ryutify con las canciones de la playlist y navegá con next, previous y arranque desde una canción puntual."
- "Aplica Colas y playlists (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La cola reproduce en orden y el next funciona"
- "Revisa mi media3-exoplayer y dime qué pasos de Colas y playlists me faltan en este nivel"