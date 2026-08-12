---
name: media3-exoplayer-buffering-adaptacion-avanzado
description: Buffering y adaptación · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Configura el buffer y la adaptación de red para una escucha sin cortes. Objetivo del nivel: Adaptación de la reproducción a las condiciones de red.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "buffering-adaptacion"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Buffering y adaptación — Avanzado

## Qué hace este skill

Configura el buffer y la adaptación de red para una escucha sin cortes. En este nivel se entrega: **Adaptación de la reproducción a las condiciones de red.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Buffering y adaptación** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar el rendimiento de carga para predecir cortes
2. Reducir el buffer de rebuffer dinámicamente
3. Configurar el umbral de calidad según la red
4. Manejar el autoswitch de calidad con TrackSelector

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Adaptación de la reproducción a las condiciones de red. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Usar el rendimiento de carga para predecir cortes · Reducir el buffer de rebuffer dinámicamente · Configurar el umbral de calidad según la red · Manejar el autoswitch de calidad con TrackSelector | lista | sí | 3-4 pasos |
| $criterios_clave | Los cortes se reducen al bajar la calidad en red mala · La calidad sube sola al mejorar la red | lista | sí | calidad verificable |
| $prompt_guia | En red mala Ryutify corta cada dos por tres. Configurá la adaptación: bajar calidad antes del corte y subirla al mejorar la red. | texto | no | "Buffering y adaptación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los cortes se reducen al bajar la calidad en red mala
- [ ] La calidad sube sola al mejorar la red

## Ejemplos de prompts

- "En red mala Ryutify corta cada dos por tres. Configurá la adaptación: bajar calidad antes del corte y subirla al mejorar la red."
- "Aplica Buffering y adaptación (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza Los cortes se reducen al bajar la calidad en red mala"
- "Revisa mi media3-exoplayer y dime qué pasos de Buffering y adaptación me faltan en este nivel"