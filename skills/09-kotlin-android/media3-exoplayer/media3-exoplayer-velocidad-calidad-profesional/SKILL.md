---
name: media3-exoplayer-velocidad-calidad-profesional
description: Control de velocidad y calidad · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Velocidad de reproducción, ecualizador y selección de calidad de audio. Objetivo del nivel: Política de audio del producto: balance entre calidad y datos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "velocidad-calidad"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Control de velocidad y calidad — Profesional

## Qué hace este skill

Velocidad de reproducción, ecualizador y selección de calidad de audio. En este nivel se entrega: **Política de audio del producto: balance entre calidad y datos.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Control de velocidad y calidad** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir las calidades según el tipo de red
2. Implementar el modo ahorro de datos
3. Medir el consumo de datos por hora de escucha
4. Documentar la matriz de calidad del producto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de audio del producto: balance entre calidad y datos. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Definir las calidades según el tipo de red · Implementar el modo ahorro de datos · Medir el consumo de datos por hora de escucha · Documentar la matriz de calidad del producto | lista | sí | 3-4 pasos |
| $criterios_clave | El modo ahorro de datos baja el consumo sin romper la escucha · La matriz de calidad está documentada y aplicada | lista | sí | calidad verificable |
| $prompt_guia | Quiero un modo ahorro de datos en Ryutify que baje la calidad en datos móviles y vuelva a la máxima en wifi, con la matriz de calidades documentada. | texto | no | "Control de velocidad y calidad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El modo ahorro de datos baja el consumo sin romper la escucha
- [ ] La matriz de calidad está documentada y aplicada

## Ejemplos de prompts

- "Quiero un modo ahorro de datos en Ryutify que baje la calidad en datos móviles y vuelva a la máxima en wifi, con la matriz de calidades documentada."
- "Aplica Control de velocidad y calidad (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza El modo ahorro de datos baja el consumo sin romper la escucha"
- "Revisa mi media3-exoplayer y dime qué pasos de Control de velocidad y calidad me faltan en este nivel"