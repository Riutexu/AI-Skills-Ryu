---
name: media3-exoplayer-velocidad-calidad-basico
description: Control de velocidad y calidad · nivel Básico · Media3/ExoPlayer: reproducción de audio. Velocidad de reproducción, ecualizador y selección de calidad de audio. Objetivo del nivel: Cambiar la velocidad de reproducción del player.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "velocidad-calidad"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Control de velocidad y calidad — Básico

## Qué hace este skill

Velocidad de reproducción, ecualizador y selección de calidad de audio. En este nivel se entrega: **Cambiar la velocidad de reproducción del player.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Control de velocidad y calidad** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ajustar playbackParameters con la velocidad
2. Mantener el pitch con la velocidad
3. Exponer el control de velocidad en la UI
4. Persistir la velocidad elegida

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Cambiar la velocidad de reproducción del player. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Ajustar playbackParameters con la velocidad · Mantener el pitch con la velocidad · Exponer el control de velocidad en la UI · Persistir la velocidad elegida | lista | sí | 3-4 pasos |
| $criterios_clave | La velocidad cambia sin alterar el pitch · La velocidad elegida se mantiene entre sesiones | lista | sí | calidad verificable |
| $prompt_guia | Agregá a Ryutify el control de velocidad de reproducción 0,5x a 2x sin cambiar el pitch y que se recuerde entre sesiones. | texto | no | "Control de velocidad y calidad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La velocidad cambia sin alterar el pitch
- [ ] La velocidad elegida se mantiene entre sesiones

## Ejemplos de prompts

- "Agregá a Ryutify el control de velocidad de reproducción 0,5x a 2x sin cambiar el pitch y que se recuerde entre sesiones."
- "Aplica Control de velocidad y calidad (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La velocidad cambia sin alterar el pitch"
- "Revisa mi media3-exoplayer y dime qué pasos de Control de velocidad y calidad me faltan en este nivel"