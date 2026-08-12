---
name: media3-exoplayer-errores-stream-avanzado
description: Errores de stream y recuperación · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Errores de reproducción: detectarlos, clasificarlos y recuperarse sin romper la sesión. Objetivo del nivel: Reintentos automáticos y degradación de la sesión.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "errores-stream"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Errores de stream y recuperación — Avanzado

## Qué hace este skill

Errores de reproducción: detectarlos, clasificarlos y recuperarse sin romper la sesión. En este nivel se entrega: **Reintentos automáticos y degradación de la sesión.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores de stream y recuperación** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar el reintento automático con backoff
2. Saltar a la siguiente canción tras N fallos
3. Clasificar los errores según el tipo de fallo
4. Loguear el contexto del error completo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reintentos automáticos y degradación de la sesión. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Implementar el reintento automático con backoff · Saltar a la siguiente canción tras N fallos · Clasificar los errores según el tipo de fallo · Loguear el contexto del error completo | lista | sí | 3-4 pasos |
| $criterios_clave | Un fallo transitorio se recupera solo · Tras N fallos la cola avanza sin morir | lista | sí | calidad verificable |
| $prompt_guia | Los streams de Ryutify fallan a veces de forma transitoria. Implementá reintentos con backoff y que tras tres fallos seguidos salte a la siguiente canción. | texto | no | "Errores de stream y recuperación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un fallo transitorio se recupera solo
- [ ] Tras N fallos la cola avanza sin morir

## Ejemplos de prompts

- "Los streams de Ryutify fallan a veces de forma transitoria. Implementá reintentos con backoff y que tras tres fallos seguidos salte a la siguiente canción."
- "Aplica Errores de stream y recuperación (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza Un fallo transitorio se recupera solo"
- "Revisa mi media3-exoplayer y dime qué pasos de Errores de stream y recuperación me faltan en este nivel"