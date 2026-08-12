---
name: media3-exoplayer-reproduccion-red-basico
description: Reproducción en red · nivel Básico · Media3/ExoPlayer: reproducción de audio. Streaming de audio: URLs, headers, cookies y resiliencia de red. Objetivo del nivel: Reproducir streams por URL con los headers necesarios.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "reproduccion-red"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Reproducción en red — Básico

## Qué hace este skill

Streaming de audio: URLs, headers, cookies y resiliencia de red. En este nivel se entrega: **Reproducir streams por URL con los headers necesarios.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reproducción en red** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear MediaItem con URI de stream
2. Agregar los headers requeridos al stream
3. Manejar la pérdida de conexión básica
4. Mostrar el estado de error de red

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Reproducir streams por URL con los headers necesarios. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Crear MediaItem con URI de stream · Agregar los headers requeridos al stream · Manejar la pérdida de conexión básica · Mostrar el estado de error de red | lista | sí | 3-4 pasos |
| $criterios_clave | El stream con headers se reproduce correctamente · La pérdida de conexión muestra un estado claro | lista | sí | calidad verificable |
| $prompt_guia | Los streams de Ryutify requieren headers custom para reproducirse. Configurá la MediaItem con los headers necesarios y manejá la pérdida de conexión. | texto | no | "Reproducción en red" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El stream con headers se reproduce correctamente
- [ ] La pérdida de conexión muestra un estado claro

## Ejemplos de prompts

- "Los streams de Ryutify requieren headers custom para reproducirse. Configurá la MediaItem con los headers necesarios y manejá la pérdida de conexión."
- "Aplica Reproducción en red (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El stream con headers se reproduce correctamente"
- "Revisa mi media3-exoplayer y dime qué pasos de Reproducción en red me faltan en este nivel"