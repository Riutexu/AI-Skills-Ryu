---
name: media3-exoplayer-notificaciones-reproduccion-profesional
description: Notificaciones de reproducción · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Controles de reproducción en la barra de notificaciones con Media3. Objetivo del nivel: Notificación de producción: consistencia, adaptación y accesibilidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "notificaciones-reproduccion"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Notificaciones de reproducción — Profesional

## Qué hace este skill

Controles de reproducción en la barra de notificaciones con Media3. En este nivel se entrega: **Notificación de producción: consistencia, adaptación y accesibilidad.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Notificaciones de reproducción** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Sincronizar la notificación con el estado del player
2. Adaptar la notificación a Android Auto y wearables
3. Garantizar la accesibilidad con contentDescription
4. Resolver las políticas de notificaciones de la versión target

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Notificación de producción: consistencia, adaptación y accesibilidad. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Sincronizar la notificación con el estado del player · Adaptar la notificación a Android Auto y wearables · Garantizar la accesibilidad con contentDescription · Resolver las políticas de notificaciones de la versión target | lista | sí | 3-4 pasos |
| $criterios_clave | La notificación nunca muestra un estado distinto al player · La notificación cumple las políticas de la versión target | lista | sí | calidad verificable |
| $prompt_guia | La notificación de Ryutify a veces muestra una canción distinta a la que suena. Sincronizala con el estado del player y adaptala a Android Auto. | texto | no | "Notificaciones de reproducción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La notificación nunca muestra un estado distinto al player
- [ ] La notificación cumple las políticas de la versión target

## Ejemplos de prompts

- "La notificación de Ryutify a veces muestra una canción distinta a la que suena. Sincronizala con el estado del player y adaptala a Android Auto."
- "Aplica Notificaciones de reproducción (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La notificación nunca muestra un estado distinto al player"
- "Revisa mi media3-exoplayer y dime qué pasos de Notificaciones de reproducción me faltan en este nivel"