---
name: media3-exoplayer-servicio-audio-fondo-basico
description: Servicio de audio en segundo plano · nivel Básico · Media3/ExoPlayer: reproducción de audio. Reproducción en background con MediaSessionService sin matar la app. Objetivo del nivel: Crear un MediaSessionService que mantenga la reproducción en background.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "servicio-audio-fondo"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Servicio de audio en segundo plano — Básico

## Qué hace este skill

Reproducción en background con MediaSessionService sin matar la app. En este nivel se entrega: **Crear un MediaSessionService que mantenga la reproducción en background.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Servicio de audio en segundo plano** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el servicio que extiende MediaSessionService
2. Declararlo en el manifiesto con el permiso de foreground
3. Devolver la sesión desde onGetSession
4. Verificar que el audio sigue en background

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un MediaSessionService que mantenga la reproducción en background. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Crear el servicio que extiende MediaSessionService · Declararlo en el manifiesto con el permiso de foreground · Devolver la sesión desde onGetSession · Verificar que el audio sigue en background | lista | sí | 3-4 pasos |
| $criterios_clave | El audio sigue sonando con la app en background · El servicio se declara correctamente en el manifiesto | lista | sí | calidad verificable |
| $prompt_guia | El audio de Ryutify se corta al pasar la app a background. Creá un MediaSessionService que mantenga la reproducción en primer plano. | texto | no | "Servicio de audio en segundo plano" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El audio sigue sonando con la app en background
- [ ] El servicio se declara correctamente en el manifiesto

## Ejemplos de prompts

- "El audio de Ryutify se corta al pasar la app a background. Creá un MediaSessionService que mantenga la reproducción en primer plano."
- "Aplica Servicio de audio en segundo plano (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El audio sigue sonando con la app en background"
- "Revisa mi media3-exoplayer y dime qué pasos de Servicio de audio en segundo plano me faltan en este nivel"