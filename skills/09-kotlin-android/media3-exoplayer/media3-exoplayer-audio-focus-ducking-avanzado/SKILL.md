---
name: media3-exoplayer-audio-focus-ducking-avanzado
description: Audio focus y ducking · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Comparte el audio con otras apps: foco, pausa y atenuación correctas. Objetivo del nivel: Ducking y tipos de foco según el caso de uso.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "audio-focus-ducking"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Audio focus y ducking — Avanzado

## Qué hace este skill

Comparte el audio con otras apps: foco, pausa y atenuación correctas. En este nivel se entrega: **Ducking y tipos de foco según el caso de uso.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Audio focus y ducking** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar el ducking con atenuación gradual
2. Distinguir foco transitorio y permanente
3. Usar AudioAttributes de música correctamente
4. Manejar la interacción con la navegación del auto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Ducking y tipos de foco según el caso de uso. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Implementar el ducking con atenuación gradual · Distinguir foco transitorio y permanente · Usar AudioAttributes de música correctamente · Manejar la interacción con la navegación del auto | lista | sí | 3-4 pasos |
| $criterios_clave | El ducking atenúa sin cortar el audio · Los atributos de audio son correctos para música | lista | sí | calidad verificable |
| $prompt_guia | Quiero que Ryutify baje el volumen en vez de pausar cuando otra app pide foco transitorio. Implementá el ducking con atenuación gradual. | texto | no | "Audio focus y ducking" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El ducking atenúa sin cortar el audio
- [ ] Los atributos de audio son correctos para música

## Ejemplos de prompts

- "Quiero que Ryutify baje el volumen en vez de pausar cuando otra app pide foco transitorio. Implementá el ducking con atenuación gradual."
- "Aplica Audio focus y ducking (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El ducking atenúa sin cortar el audio"
- "Revisa mi media3-exoplayer y dime qué pasos de Audio focus y ducking me faltan en este nivel"