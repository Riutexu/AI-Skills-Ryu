---
name: media3-exoplayer-headless-playback-avanzado
description: Reproducción headless · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Controla el player sin UI: desde el servicio, la notificación y el sistema. Objetivo del nivel: Integración del player headless con el ViewModel y la persistencia.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "headless-playback"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Reproducción headless — Avanzado

## Qué hace este skill

Controla el player sin UI: desde el servicio, la notificación y el sistema. En este nivel se entrega: **Integración del player headless con el ViewModel y la persistencia.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reproducción headless** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Publicar el estado del player headless como StateFlow
2. Restaurar la cola y la posición desde la persistencia
3. Sincronizar el ViewModel con el estado del servicio
4. Manejar la reconexión de la UI a la sesión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Integración del player headless con el ViewModel y la persistencia. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Publicar el estado del player headless como StateFlow · Restaurar la cola y la posición desde la persistencia · Sincronizar el ViewModel con el estado del servicio · Manejar la reconexión de la UI a la sesión | lista | sí | 3-4 pasos |
| $criterios_clave | La UI al reabrirse refleja el estado real del player · La posición se restaura al reconectar la UI | lista | sí | calidad verificable |
| $prompt_guia | Cuando abro Ryutify después de escuchar en background, la UI no refleja lo que suena. Sincronizá el ViewModel con el estado del player headless. | texto | no | "Reproducción headless" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI al reabrirse refleja el estado real del player
- [ ] La posición se restaura al reconectar la UI

## Ejemplos de prompts

- "Cuando abro Ryutify después de escuchar en background, la UI no refleja lo que suena. Sincronizá el ViewModel con el estado del player headless."
- "Aplica Reproducción headless (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La UI al reabrirse refleja el estado real del player"
- "Revisa mi media3-exoplayer y dime qué pasos de Reproducción headless me faltan en este nivel"