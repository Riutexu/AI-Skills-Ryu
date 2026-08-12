---
name: media3-exoplayer-buffering-adaptacion-profesional
description: Buffering y adaptación · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Configura el buffer y la adaptación de red para una escucha sin cortes. Objetivo del nivel: Estrategia de buffering del producto: métricas y ajuste continuo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "buffering-adaptacion"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Buffering y adaptación — Profesional

## Qué hace este skill

Configura el buffer y la adaptación de red para una escucha sin cortes. En este nivel se entrega: **Estrategia de buffering del producto: métricas y ajuste continuo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Buffering y adaptación** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Meter las métricas de rebuffer en la telemetría
2. Definir el presupuesto de cortes por sesión
3. Ajustar los buffers con datos reales de la telemetría
4. Simular perfiles de red en tests instrumentados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de buffering del producto: métricas y ajuste continuo. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Meter las métricas de rebuffer en la telemetría · Definir el presupuesto de cortes por sesión · Ajustar los buffers con datos reales de la telemetría · Simular perfiles de red en tests instrumentados | lista | sí | 3-4 pasos |
| $criterios_clave | Los cortes por sesión están dentro del presupuesto definido · Los cambios de buffer se validan con la telemetría | lista | sí | calidad verificable |
| $prompt_guia | Quiero bajar los cortes de Ryutify: meté las métricas de rebuffer en la telemetría, definí el presupuesto por sesión y ajustá los buffers con datos reales. | texto | no | "Buffering y adaptación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los cortes por sesión están dentro del presupuesto definido
- [ ] Los cambios de buffer se validan con la telemetría

## Ejemplos de prompts

- "Quiero bajar los cortes de Ryutify: meté las métricas de rebuffer en la telemetría, definí el presupuesto por sesión y ajustá los buffers con datos reales."
- "Aplica Buffering y adaptación (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza Los cortes por sesión están dentro del presupuesto definido"
- "Revisa mi media3-exoplayer y dime qué pasos de Buffering y adaptación me faltan en este nivel"