---
name: innertube-yt-flujo-reproducible-basico
description: Construcción del flujo reproductible · nivel Básico · Cliente YouTube innertube: contenido de video. Convierte cualquier contenido en una secuencia de streams reproducibles. Objetivo del nivel: Construir el flujo de streams de una canción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flujo-reproducible"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Construcción del flujo reproductible — Básico

## Qué hace este skill

Convierte cualquier contenido en una secuencia de streams reproducibles. En este nivel se entrega: **Construir el flujo de streams de una canción.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Construcción del flujo reproductible** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Unir detalle y stream en un solo flujo de datos
2. Armar la MediaItem con el stream y el metadata
3. Pasar el flujo al ExoPlayer de Ryutify
4. Verificar la reproducción de principio a fin

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Construir el flujo de streams de una canción. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Unir detalle y stream en un solo flujo de datos · Armar la MediaItem con el stream y el metadata · Pasar el flujo al ExoPlayer de Ryutify · Verificar la reproducción de principio a fin | lista | sí | 3-4 pasos |
| $criterios_clave | La canción se reproduce con su metadata completa · El flujo detalle-stream funciona sin pasos manuales | lista | sí | calidad verificable |
| $prompt_guia | Uní en Ryutify el detalle y el stream de una canción en un flujo único que termine en la MediaItem del ExoPlayer. | texto | no | "Construcción del flujo reproductible" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La canción se reproduce con su metadata completa
- [ ] El flujo detalle-stream funciona sin pasos manuales

## Ejemplos de prompts

- "Uní en Ryutify el detalle y el stream de una canción en un flujo único que termine en la MediaItem del ExoPlayer."
- "Aplica Construcción del flujo reproductible (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La canción se reproduce con su metadata completa"
- "Revisa mi innertube-yt y dime qué pasos de Construcción del flujo reproductible me faltan en este nivel"