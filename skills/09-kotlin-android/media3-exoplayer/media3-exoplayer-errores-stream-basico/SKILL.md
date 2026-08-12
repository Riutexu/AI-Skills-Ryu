---
name: media3-exoplayer-errores-stream-basico
description: Errores de stream y recuperación · nivel Básico · Media3/ExoPlayer: reproducción de audio. Errores de reproducción: detectarlos, clasificarlos y recuperarse sin romper la sesión. Objetivo del nivel: Detectar errores de reproducción con Player.Listener.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "errores-stream"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Errores de stream y recuperación — Básico

## Qué hace este skill

Errores de reproducción: detectarlos, clasificarlos y recuperarse sin romper la sesión. En este nivel se entrega: **Detectar errores de reproducción con Player.Listener.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores de stream y recuperación** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escuchar el evento onPlayerError
2. Mostrar un mensaje de error en la UI
3. Diferenciar error de stream del de red
4. Ofrecer el reintento manual

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Detectar errores de reproducción con Player.Listener. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Escuchar el evento onPlayerError · Mostrar un mensaje de error en la UI · Diferenciar error de stream del de red · Ofrecer el reintento manual | lista | sí | 3-4 pasos |
| $criterios_clave | Un error de stream muestra un mensaje claro · El reintento manual recarga la misma canción | lista | sí | calidad verificable |
| $prompt_guia | Cuando falla un stream en Ryutify solo se corta el audio sin aviso. Detectá el error con Player.Listener y mostrá un mensaje con reintento. | texto | no | "Errores de stream y recuperación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un error de stream muestra un mensaje claro
- [ ] El reintento manual recarga la misma canción

## Ejemplos de prompts

- "Cuando falla un stream en Ryutify solo se corta el audio sin aviso. Detectá el error con Player.Listener y mostrá un mensaje con reintento."
- "Aplica Errores de stream y recuperación (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza Un error de stream muestra un mensaje claro"
- "Revisa mi media3-exoplayer y dime qué pasos de Errores de stream y recuperación me faltan en este nivel"