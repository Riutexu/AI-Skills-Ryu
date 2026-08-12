---
name: media3-exoplayer-buffering-adaptacion-basico
description: Buffering y adaptación · nivel Básico · Media3/ExoPlayer: reproducción de audio. Configura el buffer y la adaptación de red para una escucha sin cortes. Objetivo del nivel: Entender y ajustar los tiempos de buffer del player.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "buffering-adaptacion"
  nivel: basico
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Buffering y adaptación — Básico

## Qué hace este skill

Configura el buffer y la adaptación de red para una escucha sin cortes. En este nivel se entrega: **Entender y ajustar los tiempos de buffer del player.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Buffering y adaptación** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar los buffers de carga y de rebuffer
2. Observar el estado de buffering en la UI
3. Distinguir buffer inicial de rebuffer
4. Probar con una red lenta simulada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender y ajustar los tiempos de buffer del player. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Configurar los buffers de carga y de rebuffer · Observar el estado de buffering en la UI · Distinguir buffer inicial de rebuffer · Probar con una red lenta simulada | lista | sí | 3-4 pasos |
| $criterios_clave | El buffer inicial es razonable en 4G · La UI muestra el estado de buffering claramente | lista | sí | calidad verificable |
| $prompt_guia | Ryutify tarda demasiado en arrancar cada canción. Ajustá los buffers de carga y rebuffer del ExoPlayer y probá con red lenta simulada. | texto | no | "Buffering y adaptación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El buffer inicial es razonable en 4G
- [ ] La UI muestra el estado de buffering claramente

## Ejemplos de prompts

- "Ryutify tarda demasiado en arrancar cada canción. Ajustá los buffers de carga y rebuffer del ExoPlayer y probá con red lenta simulada."
- "Aplica Buffering y adaptación (nivel basico) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El buffer inicial es razonable en 4G"
- "Revisa mi media3-exoplayer y dime qué pasos de Buffering y adaptación me faltan en este nivel"