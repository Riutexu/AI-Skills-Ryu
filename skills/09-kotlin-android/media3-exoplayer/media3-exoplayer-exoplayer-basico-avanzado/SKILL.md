---
name: media3-exoplayer-exoplayer-basico-avanzado
description: ExoPlayer básico · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Crea y configura el player para reproducir streams de audio en Ryutify. Objetivo del nivel: Configurar el player con listeners y manejo de estados de reproducción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "exoplayer-basico"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# ExoPlayer básico — Avanzado

## Qué hace este skill

Crea y configura el player para reproducir streams de audio en Ryutify. En este nivel se entrega: **Configurar el player con listeners y manejo de estados de reproducción.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ExoPlayer básico** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escuchar los eventos con Player.Listener
2. Reflejar el estado (loading, ready, ended) en la UI
3. Manejar el fin de la canción y pasar a la siguiente
4. Exponer la posición y la duración en tiempo real

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Configurar el player con listeners y manejo de estados de reproducción. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Escuchar los eventos con Player.Listener · Reflejar el estado (loading, ready, ended) en la UI · Manejar el fin de la canción y pasar a la siguiente · Exponer la posición y la duración en tiempo real | lista | sí | 3-4 pasos |
| $criterios_clave | La UI refleja cada cambio de estado del player · Al terminar la canción la cola avanza automáticamente | lista | sí | calidad verificable |
| $prompt_guia | El player de Ryutify no refleja el estado en la UI. Conectá Player.Listener para mostrar loading, ready y ended, y que al terminar pase a la siguiente canción. | texto | no | "ExoPlayer básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI refleja cada cambio de estado del player
- [ ] Al terminar la canción la cola avanza automáticamente

## Ejemplos de prompts

- "El player de Ryutify no refleja el estado en la UI. Conectá Player.Listener para mostrar loading, ready y ended, y que al terminar pase a la siguiente canción."
- "Aplica ExoPlayer básico (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La UI refleja cada cambio de estado del player"
- "Revisa mi media3-exoplayer y dime qué pasos de ExoPlayer básico me faltan en este nivel"