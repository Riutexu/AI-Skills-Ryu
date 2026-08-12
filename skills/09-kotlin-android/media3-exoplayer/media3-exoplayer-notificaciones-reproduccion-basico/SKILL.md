---
name: media3-exoplayer-notificaciones-reproduccion-basico
description: Notificaciones de reproducción · nivel Básico · Media3/ExoPlayer: reproducción de audio. Controles de reproducción en la barra de notificaciones con Media3. Objetivo del nivel: Mostrar la notificación de reproducción con el control de medios.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "notificaciones-reproduccion"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Notificaciones de reproducción — Básico

## Qué hace este skill

Controles de reproducción en la barra de notificaciones con Media3. En este nivel se entrega: **Mostrar la notificación de reproducción con el control de medios.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Notificaciones de reproducción** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar la notificación automática de Media3
2. Configurar el canal de notificaciones
3. Mostrar la portada y el título en la notificación
4. Manejar los controles de play, pausa y next

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Mostrar la notificación de reproducción con el control de medios. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Usar la notificación automática de Media3 · Configurar el canal de notificaciones · Mostrar la portada y el título en la notificación · Manejar los controles de play, pausa y next | lista | sí | 3-4 pasos |
| $criterios_clave | La notificación muestra la canción actual con su portada · Los controles de la notificación controlan el player | lista | sí | calidad verificable |
| $prompt_guia | Mostrá la notificación de reproducción de Ryutify con la portada, el título y los controles de play, pausa y next usando la notificación de Media3. | texto | no | "Notificaciones de reproducción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La notificación muestra la canción actual con su portada
- [ ] Los controles de la notificación controlan el player

## Ejemplos de prompts

- "Mostrá la notificación de reproducción de Ryutify con la portada, el título y los controles de play, pausa y next usando la notificación de Media3."
- "Aplica Notificaciones de reproducción (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La notificación muestra la canción actual con su portada"
- "Revisa mi media3-exoplayer y dime qué pasos de Notificaciones de reproducción me faltan en este nivel"