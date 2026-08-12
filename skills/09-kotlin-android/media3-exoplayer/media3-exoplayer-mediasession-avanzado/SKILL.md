---
name: media3-exoplayer-mediasession-avanzado
description: MediaSession · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Expone el estado del player al sistema: medios, controles y comandos. Objetivo del nivel: Comandos personalizados, playback state y controles de cola.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mediasession"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# MediaSession — Avanzado

## Qué hace este skill

Expone el estado del player al sistema: medios, controles y comandos. En este nivel se entrega: **Comandos personalizados, playback state y controles de cola.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **MediaSession** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar los comandos disponibles en la sesión
2. Publicar el playback state con posiciones
3. Manejar comandos personalizados como favorito
4. Sincronizar la sesión con el estado del ViewModel

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Comandos personalizados, playback state y controles de cola. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Configurar los comandos disponibles en la sesión · Publicar el playback state con posiciones · Manejar comandos personalizados como favorito · Sincronizar la sesión con el estado del ViewModel | lista | sí | 3-4 pasos |
| $criterios_clave | El sistema muestra la posición y duración correctas · El comando de favorito llega al repositorio | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la MediaSession de Ryutify publique la posición en tiempo real y soporte un comando de favorito desde el control del sistema. | texto | no | "MediaSession" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El sistema muestra la posición y duración correctas
- [ ] El comando de favorito llega al repositorio

## Ejemplos de prompts

- "Quiero que la MediaSession de Ryutify publique la posición en tiempo real y soporte un comando de favorito desde el control del sistema."
- "Aplica MediaSession (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El sistema muestra la posición y duración correctas"
- "Revisa mi media3-exoplayer y dime qué pasos de MediaSession me faltan en este nivel"