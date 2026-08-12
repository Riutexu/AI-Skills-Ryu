---
name: media3-exoplayer-headless-playback-basico
description: Reproducción headless · nivel Básico · Media3/ExoPlayer: reproducción de audio. Controla el player sin UI: desde el servicio, la notificación y el sistema. Objetivo del nivel: Controlar la reproducción sin una pantalla asociada.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "headless-playback"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Reproducción headless — Básico

## Qué hace este skill

Controla el player sin UI: desde el servicio, la notificación y el sistema. En este nivel se entrega: **Controlar la reproducción sin una pantalla asociada.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reproducción headless** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Controlar el player desde el servicio de audio
2. Responder a los comandos del sistema
3. Mantener el estado sin dependencias de la UI
4. Probar el control sin abrir la app

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Controlar la reproducción sin una pantalla asociada. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Controlar el player desde el servicio de audio · Responder a los comandos del sistema · Mantener el estado sin dependencias de la UI · Probar el control sin abrir la app | lista | sí | 3-4 pasos |
| $criterios_clave | La reproducción se controla sin abrir la app · El estado del player vive fuera de la UI | lista | sí | calidad verificable |
| $prompt_guia | Quiero controlar la reproducción de Ryutify sin abrir la app: desde la notificación y el control del sistema. Mové el estado del player fuera de la UI. | texto | no | "Reproducción headless" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La reproducción se controla sin abrir la app
- [ ] El estado del player vive fuera de la UI

## Ejemplos de prompts

- "Quiero controlar la reproducción de Ryutify sin abrir la app: desde la notificación y el control del sistema. Mové el estado del player fuera de la UI."
- "Aplica Reproducción headless (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La reproducción se controla sin abrir la app"
- "Revisa mi media3-exoplayer y dime qué pasos de Reproducción headless me faltan en este nivel"