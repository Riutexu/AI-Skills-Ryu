---
name: media3-exoplayer-velocidad-calidad-avanzado
description: Control de velocidad y calidad · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Velocidad de reproducción, ecualizador y selección de calidad de audio. Objetivo del nivel: Selección de calidad y formato de audio del stream.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "velocidad-calidad"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Control de velocidad y calidad — Avanzado

## Qué hace este skill

Velocidad de reproducción, ecualizador y selección de calidad de audio. En este nivel se entrega: **Selección de calidad y formato de audio del stream.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Control de velocidad y calidad** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Elegir la pista de audio de mayor calidad disponible
2. Configurar el formato de salida del renderer
3. Manejar streams de audio de distinto bitrate
4. Cambiar la calidad en runtime sin cortar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Selección de calidad y formato de audio del stream. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Elegir la pista de audio de mayor calidad disponible · Configurar el formato de salida del renderer · Manejar streams de audio de distinto bitrate · Cambiar la calidad en runtime sin cortar | lista | sí | 3-4 pasos |
| $criterios_clave | El player elige la pista de mejor calidad disponible · El cambio de calidad en runtime no corta la reproducción | lista | sí | calidad verificable |
| $prompt_guia | Los streams de Ryutify vienen en varios bitrates. Configurá el player para elegir la mejor calidad y que el cambio de calidad en runtime no corte el audio. | texto | no | "Control de velocidad y calidad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El player elige la pista de mejor calidad disponible
- [ ] El cambio de calidad en runtime no corta la reproducción

## Ejemplos de prompts

- "Los streams de Ryutify vienen en varios bitrates. Configurá el player para elegir la mejor calidad y que el cambio de calidad en runtime no corte el audio."
- "Aplica Control de velocidad y calidad (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El player elige la pista de mejor calidad disponible"
- "Revisa mi media3-exoplayer y dime qué pasos de Control de velocidad y calidad me faltan en este nivel"