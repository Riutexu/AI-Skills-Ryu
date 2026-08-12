---
name: media3-exoplayer-reproduccion-red-avanzado
description: Reproducción en red · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Streaming de audio: URLs, headers, cookies y resiliencia de red. Objetivo del nivel: Resiliencia de red: reconexión, reintentos y fallbacks de stream.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "reproduccion-red"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Reproducción en red — Avanzado

## Qué hace este skill

Streaming de audio: URLs, headers, cookies y resiliencia de red. En este nivel se entrega: **Resiliencia de red: reconexión, reintentos y fallbacks de stream.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reproducción en red** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar la pérdida de red y pausar con gracia
2. Reanudar la reproducción al volver la red
3. Probar con streams alternativos si el principal falla
4. Usar la política de carga de red del player

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Resiliencia de red: reconexión, reintentos y fallbacks de stream. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Detectar la pérdida de red y pausar con gracia · Reanudar la reproducción al volver la red · Probar con streams alternativos si el principal falla · Usar la política de carga de red del player | lista | sí | 3-4 pasos |
| $criterios_clave | La reproducción se pausa y reanuda con la red · El fallback a otro stream no rompe la posición | lista | sí | calidad verificable |
| $prompt_guia | Cuando se corta la red, Ryutify tira error y no se recupera. Hacé que pausa con gracia y reanude al volver la conexión, con streams de respaldo. | texto | no | "Reproducción en red" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La reproducción se pausa y reanuda con la red
- [ ] El fallback a otro stream no rompe la posición

## Ejemplos de prompts

- "Cuando se corta la red, Ryutify tira error y no se recupera. Hacé que pausa con gracia y reanude al volver la conexión, con streams de respaldo."
- "Aplica Reproducción en red (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La reproducción se pausa y reanuda con la red"
- "Revisa mi media3-exoplayer y dime qué pasos de Reproducción en red me faltan en este nivel"