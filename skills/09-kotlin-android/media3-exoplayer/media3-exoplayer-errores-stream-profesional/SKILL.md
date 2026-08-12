---
name: media3-exoplayer-errores-stream-profesional
description: Errores de stream y recuperación · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Errores de reproducción: detectarlos, clasificarlos y recuperarse sin romper la sesión. Objetivo del nivel: Política de recuperación del producto: robustez ante todo tipo de fallos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "errores-stream"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Errores de stream y recuperación — Profesional

## Qué hace este skill

Errores de reproducción: detectarlos, clasificarlos y recuperarse sin romper la sesión. En este nivel se entrega: **Política de recuperación del producto: robustez ante todo tipo de fallos.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores de stream y recuperación** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la matriz de recuperación por tipo de error
2. Degradar a radio similar si la canción es irrecuperable
3. Agregar las métricas de errores de stream a la telemetría
4. Testear los escenarios con streams rotos simulados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de recuperación del producto: robustez ante todo tipo de fallos. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Diseñar la matriz de recuperación por tipo de error · Degradar a radio similar si la canción es irrecuperable · Agregar las métricas de errores de stream a la telemetría · Testear los escenarios con streams rotos simulados | lista | sí | 3-4 pasos |
| $criterios_clave | La sesión de escucha nunca muere por un stream roto · La telemetría separa errores recuperados de fallos totales | lista | sí | calidad verificable |
| $prompt_guia | Quiero que ninguna canción rota termine la sesión de Ryutify: matriz de recuperación, fallback a radio y métricas de cada escenario en la telemetría. | texto | no | "Errores de stream y recuperación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La sesión de escucha nunca muere por un stream roto
- [ ] La telemetría separa errores recuperados de fallos totales

## Ejemplos de prompts

- "Quiero que ninguna canción rota termine la sesión de Ryutify: matriz de recuperación, fallback a radio y métricas de cada escenario en la telemetría."
- "Aplica Errores de stream y recuperación (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La sesión de escucha nunca muere por un stream roto"
- "Revisa mi media3-exoplayer y dime qué pasos de Errores de stream y recuperación me faltan en este nivel"