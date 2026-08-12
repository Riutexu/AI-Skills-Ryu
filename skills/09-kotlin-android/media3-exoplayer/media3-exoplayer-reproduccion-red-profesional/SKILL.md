---
name: media3-exoplayer-reproduccion-red-profesional
description: Reproducción en red · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Streaming de audio: URLs, headers, cookies y resiliencia de red. Objetivo del nivel: Estrategia de red del producto: precondiciones, costos y modos offline.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "reproduccion-red"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Reproducción en red — Profesional

## Qué hace este skill

Streaming de audio: URLs, headers, cookies y resiliencia de red. En este nivel se entrega: **Estrategia de red del producto: precondiciones, costos y modos offline.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reproducción en red** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de datos móviles de Ryutify
2. Implementar el aviso de datos antes de reproducir
3. Integrar la reproducción con el modo offline
4. Medir el consumo de datos por sesión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de red del producto: precondiciones, costos y modos offline. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Definir la política de datos móviles de Ryutify · Implementar el aviso de datos antes de reproducir · Integrar la reproducción con el modo offline · Medir el consumo de datos por sesión | lista | sí | 3-4 pasos |
| $criterios_clave | El aviso de datos móviles aparece una sola vez por sesión · El consumo de datos por hora está dentro del presupuesto | lista | sí | calidad verificable |
| $prompt_guia | Quiero un aviso de consumo de datos en Ryutify antes de reproducir en 4G y que el modo offline integre la reproducción de la biblioteca descargada. | texto | no | "Reproducción en red" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El aviso de datos móviles aparece una sola vez por sesión
- [ ] El consumo de datos por hora está dentro del presupuesto

## Ejemplos de prompts

- "Quiero un aviso de consumo de datos en Ryutify antes de reproducir en 4G y que el modo offline integre la reproducción de la biblioteca descargada."
- "Aplica Reproducción en red (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El aviso de datos móviles aparece una sola vez por sesión"
- "Revisa mi media3-exoplayer y dime qué pasos de Reproducción en red me faltan en este nivel"