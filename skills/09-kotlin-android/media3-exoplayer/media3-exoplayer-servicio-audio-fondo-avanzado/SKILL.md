---
name: media3-exoplayer-servicio-audio-fondo-avanzado
description: Servicio de audio en segundo plano · nivel Avanzado · Media3/ExoPlayer: reproducción de audio. Reproducción en background con MediaSessionService sin matar la app. Objetivo del nivel: Ciclo de vida del servicio y manejo del estado de la app.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "servicio-audio-fondo"
  nivel: avanzado
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Servicio de audio en segundo plano — Avanzado

## Qué hace este skill

Reproducción en background con MediaSessionService sin matar la app. En este nivel se entrega: **Ciclo de vida del servicio y manejo del estado de la app.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Servicio de audio en segundo plano** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar onTaskRemoved y detener el servicio cuando corresponde
2. Controlar la visibilidad del servicio según el estado
3. Evitar que el servicio se reinicie sin motivo
4. Coordinar el servicio con el ViewModel de reproducción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Ciclo de vida del servicio y manejo del estado de la app. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Manejar onTaskRemoved y detener el servicio cuando corresponde · Controlar la visibilidad del servicio según el estado · Evitar que el servicio se reinicie sin motivo · Coordinar el servicio con el ViewModel de reproducción | lista | sí | 3-4 pasos |
| $criterios_clave | El servicio no queda colgado sin razón · El estado del servicio se refleja en el ViewModel | lista | sí | calidad verificable |
| $prompt_guia | El servicio de audio de Ryutify a veces queda activo sin reproducir nada. Revisá su ciclo de vida y definí cuándo debe detenerse y reiniciarse. | texto | no | "Servicio de audio en segundo plano" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El servicio no queda colgado sin razón
- [ ] El estado del servicio se refleja en el ViewModel

## Ejemplos de prompts

- "El servicio de audio de Ryutify a veces queda activo sin reproducir nada. Revisá su ciclo de vida y definí cuándo debe detenerse y reiniciarse."
- "Aplica Servicio de audio en segundo plano (nivel avanzado) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El servicio no queda colgado sin razón"
- "Revisa mi media3-exoplayer y dime qué pasos de Servicio de audio en segundo plano me faltan en este nivel"