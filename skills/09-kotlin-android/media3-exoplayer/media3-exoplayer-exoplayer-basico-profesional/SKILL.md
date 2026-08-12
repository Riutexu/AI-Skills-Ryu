---
name: media3-exoplayer-exoplayer-basico-profesional
description: ExoPlayer básico · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Crea y configura el player para reproducir streams de audio en Ryutify. Objetivo del nivel: Configurar el player de producción de Ryutify con políticas de caché y calidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "exoplayer-basico"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# ExoPlayer básico — Profesional

## Qué hace este skill

Crea y configura el player para reproducir streams de audio en Ryutify. En este nivel se entrega: **Configurar el player de producción de Ryutify con políticas de caché y calidad.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ExoPlayer básico** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar el cache simple para chunks de audio
2. Definir la política de carga: audio-only y calidad por defecto
3. Configurar los tiempos de buffer de arranque
4. Medir el tiempo hasta el primer sonido

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Configurar el player de producción de Ryutify con políticas de caché y calidad. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Configurar el cache simple para chunks de audio · Definir la política de carga: audio-only y calidad por defecto · Configurar los tiempos de buffer de arranque · Medir el tiempo hasta el primer sonido | lista | sí | 3-4 pasos |
| $criterios_clave | El tiempo hasta el primer sonido es menor a 3 segundos en 4G · El cache de audio no supera el límite definido | lista | sí | calidad verificable |
| $prompt_guia | Configurá el ExoPlayer de producción de Ryutify: cache de audio con límite, audio-only para ahorrar datos y medición del tiempo hasta el primer sonido. | texto | no | "ExoPlayer básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tiempo hasta el primer sonido es menor a 3 segundos en 4G
- [ ] El cache de audio no supera el límite definido

## Ejemplos de prompts

- "Configurá el ExoPlayer de producción de Ryutify: cache de audio con límite, audio-only para ahorrar datos y medición del tiempo hasta el primer sonido."
- "Aplica ExoPlayer básico (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El tiempo hasta el primer sonido es menor a 3 segundos en 4G"
- "Revisa mi media3-exoplayer y dime qué pasos de ExoPlayer básico me faltan en este nivel"