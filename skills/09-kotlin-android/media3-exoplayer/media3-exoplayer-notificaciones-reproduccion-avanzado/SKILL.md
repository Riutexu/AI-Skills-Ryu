---
name: media3-exoplayer-notificaciones-reproduccion-avanzado
description: Notificaciones de reproducción · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Controles de reproducción en la barra de notificaciones con Media3. Objetivo del nivel: Personalización de la notificación y controles de cola.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "notificaciones-reproduccion"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Notificaciones de reproducción — Avanzado

## Qué hace este skill

Controles de reproducción en la barra de notificaciones con Media3. En este nivel se entrega: **Personalización de la notificación y controles de cola.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Notificaciones de reproducción** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Personalizar el layout de la notificación
2. Agregar controles como favorito y shuffle
3. Actualizar el progreso de la notificación
4. Configurar la prioridad y la visibilidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Personalización de la notificación y controles de cola. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Personalizar el layout de la notificación · Agregar controles como favorito y shuffle · Actualizar el progreso de la notificación · Configurar la prioridad y la visibilidad | lista | sí | 3-4 pasos |
| $criterios_clave | La notificación personalizada muestra el progreso · Los controles extra funcionan desde la notificación | lista | sí | calidad verificable |
| $prompt_guia | Personalizá la notificación de Ryutify: agregá el botón de favorito, el progreso de la canción y los controles de cola. | texto | no | "Notificaciones de reproducción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La notificación personalizada muestra el progreso
- [ ] Los controles extra funcionan desde la notificación

## Ejemplos de prompts

- "Personalizá la notificación de Ryutify: agregá el botón de favorito, el progreso de la canción y los controles de cola."
- "Aplica Notificaciones de reproducción (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La notificación personalizada muestra el progreso"
- "Revisa mi media3-exoplayer y dime qué pasos de Notificaciones de reproducción me faltan en este nivel"