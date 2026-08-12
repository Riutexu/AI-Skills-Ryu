---
name: media3-exoplayer-mediasession-profesional
description: MediaSession · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Expone el estado del player al sistema: medios, controles y comandos. Objetivo del nivel: Sesión de medios de producción: consistencia, prioridades y edge cases.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mediasession"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# MediaSession — Profesional

## Qué hace este skill

Expone el estado del player al sistema: medios, controles y comandos. En este nivel se entrega: **Sesión de medios de producción: consistencia, prioridades y edge cases.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **MediaSession** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mantener consistente la sesión con el state del player en cada transición
2. Manejar la pérdida de foco de audio con la sesión
3. Resolver conflictos con otras apps de medios
4. Testear la sesión con el controlador del sistema

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sesión de medios de producción: consistencia, prioridades y edge cases. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Mantener consistente la sesión con el state del player en cada transición · Manejar la pérdida de foco de audio con la sesión · Resolver conflictos con otras apps de medios · Testear la sesión con el controlador del sistema | lista | sí | 3-4 pasos |
| $criterios_clave | El control del sistema refleja siempre el estado real del player · Un cambio de foco no deja la sesión desincronizada | lista | sí | calidad verificable |
| $prompt_guia | La sesión de medios de Ryutify queda desincronizada cuando pierde el foco de audio. Revisá las transiciones y hacé que el control del sistema refleje siempre el estado real. | texto | no | "MediaSession" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El control del sistema refleja siempre el estado real del player
- [ ] Un cambio de foco no deja la sesión desincronizada

## Ejemplos de prompts

- "La sesión de medios de Ryutify queda desincronizada cuando pierde el foco de audio. Revisá las transiciones y hacé que el control del sistema refleje siempre el estado real."
- "Aplica MediaSession (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El control del sistema refleja siempre el estado real del player"
- "Revisa mi media3-exoplayer y dime qué pasos de MediaSession me faltan en este nivel"