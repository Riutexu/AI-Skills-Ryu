---
name: media3-exoplayer-metricas-debugging-profesional
description: Métricas y debugging del player · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Mide la salud de la reproducción y debuggea con datos, no con suposiciones. Objetivo del nivel: Cultura de datos de reproducción: presupuestos, alertas y mejora continua.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "metricas-debugging"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Métricas y debugging del player — Profesional

## Qué hace este skill

Mide la salud de la reproducción y debuggea con datos, no con suposiciones. En este nivel se entrega: **Cultura de datos de reproducción: presupuestos, alertas y mejora continua.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Métricas y debugging del player** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los presupuestos de calidad de reproducción
2. Configurar alertas cuando se exceden los presupuestos
3. Priorizar las mejoras con los datos de la telemetría
4. Documentar el flujo de debugging estándar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Cultura de datos de reproducción: presupuestos, alertas y mejora continua. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Definir los presupuestos de calidad de reproducción · Configurar alertas cuando se exceden los presupuestos · Priorizar las mejoras con los datos de la telemetría · Documentar el flujo de debugging estándar | lista | sí | 3-4 pasos |
| $criterios_clave | Las alertas de calidad disparan cuando se excede el presupuesto · Las mejoras del player se justifican con datos | lista | sí | calidad verificable |
| $prompt_guia | Quiero alertas automáticas cuando la calidad de reproducción de Ryutify cae del presupuesto y un flujo estándar de debugging para el equipo. | texto | no | "Métricas y debugging del player" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las alertas de calidad disparan cuando se excede el presupuesto
- [ ] Las mejoras del player se justifican con datos

## Ejemplos de prompts

- "Quiero alertas automáticas cuando la calidad de reproducción de Ryutify cae del presupuesto y un flujo estándar de debugging para el equipo."
- "Aplica Métricas y debugging del player (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza Las alertas de calidad disparan cuando se excede el presupuesto"
- "Revisa mi media3-exoplayer y dime qué pasos de Métricas y debugging del player me faltan en este nivel"