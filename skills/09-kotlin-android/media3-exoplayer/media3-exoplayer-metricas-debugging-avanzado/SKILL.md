---
name: media3-exoplayer-metricas-debugging-avanzado
description: Métricas y debugging del player · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Mide la salud de la reproducción y debuggea con datos, no con suposiciones. Objetivo del nivel: Instrumentar la telemetría del player con métricas de sesión.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "metricas-debugging"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Métricas y debugging del player — Avanzado

## Qué hace este skill

Mide la salud de la reproducción y debuggea con datos, no con suposiciones. En este nivel se entrega: **Instrumentar la telemetría del player con métricas de sesión.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Métricas y debugging del player** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir las métricas de sesión: rebuffers, cortes y duración
2. Enviar los datos anonimizados a la telemetría
3. Correlacionar las métricas con la red y el device
4. Construir el reporte de salud por versión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Instrumentar la telemetría del player con métricas de sesión. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Definir las métricas de sesión: rebuffers, cortes y duración · Enviar los datos anonimizados a la telemetría · Correlacionar las métricas con la red y el device · Construir el reporte de salud por versión | lista | sí | 3-4 pasos |
| $criterios_clave | Las métricas de sesión llegan a la telemetría · El reporte muestra la salud por versión y tipo de red | lista | sí | calidad verificable |
| $prompt_guia | Quiero un dashboard de salud de reproducción para Ryutify: rebuffers por sesión, cortes por red y versión. Instrumentá el player y definí el reporte. | texto | no | "Métricas y debugging del player" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las métricas de sesión llegan a la telemetría
- [ ] El reporte muestra la salud por versión y tipo de red

## Ejemplos de prompts

- "Quiero un dashboard de salud de reproducción para Ryutify: rebuffers por sesión, cortes por red y versión. Instrumentá el player y definí el reporte."
- "Aplica Métricas y debugging del player (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza Las métricas de sesión llegan a la telemetría"
- "Revisa mi media3-exoplayer y dime qué pasos de Métricas y debugging del player me faltan en este nivel"