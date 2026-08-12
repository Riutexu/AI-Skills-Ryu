---
name: media3-exoplayer-headless-playback-profesional
description: Reproducción headless · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Controla el player sin UI: desde el servicio, la notificación y el sistema. Objetivo del nivel: Arquitectura player-Ui del producto: fuente única de estado para todo el sistema.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "headless-playback"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Reproducción headless — Profesional

## Qué hace este skill

Controla el player sin UI: desde el servicio, la notificación y el sistema. En este nivel se entrega: **Arquitectura player-Ui del producto: fuente única de estado para todo el sistema.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reproducción headless** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el estado de reproducción único para UI, servicio y sistema
2. Resolver las carreras entre UI y servicio
3. Garantizar la consistencia tras el proceso muerto
4. Testear los escenarios de reconexión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Arquitectura player-Ui del producto: fuente única de estado para todo el sistema. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Definir el estado de reproducción único para UI, servicio y sistema · Resolver las carreras entre UI y servicio · Garantizar la consistencia tras el proceso muerto · Testear los escenarios de reconexión | lista | sí | 3-4 pasos |
| $criterios_clave | UI, notificación y sistema muestran siempre el mismo estado · La reconexión tras proceso muerto restaura todo el estado | lista | sí | calidad verificable |
| $prompt_guia | Quiero una única fuente de verdad para la reproducción de Ryutify que compartan la UI, la notificación y el sistema, sin carreras ni desincronizaciones. | texto | no | "Reproducción headless" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] UI, notificación y sistema muestran siempre el mismo estado
- [ ] La reconexión tras proceso muerto restaura todo el estado

## Ejemplos de prompts

- "Quiero una única fuente de verdad para la reproducción de Ryutify que compartan la UI, la notificación y el sistema, sin carreras ni desincronizaciones."
- "Aplica Reproducción headless (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza UI, notificación y sistema muestran siempre el mismo estado"
- "Revisa mi media3-exoplayer y dime qué pasos de Reproducción headless me faltan en este nivel"