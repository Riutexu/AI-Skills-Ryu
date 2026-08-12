---
name: innertube-yt-detalle-sugerencias-basico
description: Detalle y sugerencias · nivel Básico · Cliente YouTube innertube: contenido de video. Información detallada de un video y sugerencias relacionadas. Objetivo del nivel: Obtener el detalle básico de un video por su id.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "detalle-sugerencias"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Detalle y sugerencias — Básico

## Qué hace este skill

Información detallada de un video y sugerencias relacionadas. En este nivel se entrega: **Obtener el detalle básico de un video por su id.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Detalle y sugerencias** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Armar el request de detalle con el videoId
2. Extraer título, artista, duración y miniatura
3. Mapear el detalle al modelo de Ryutify
4. Mostrar el detalle en la pantalla del player

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Obtener el detalle básico de un video por su id. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Armar el request de detalle con el videoId · Extraer título, artista, duración y miniatura · Mapear el detalle al modelo de Ryutify · Mostrar el detalle en la pantalla del player | lista | sí | 3-4 pasos |
| $criterios_clave | El detalle del video se muestra completo en el player · La duración y la miniatura llegan correctamente | lista | sí | calidad verificable |
| $prompt_guia | La pantalla del player de Ryutify necesita el detalle del video: título, artista, duración y miniatura. Implementá el request de detalle por videoId. | texto | no | "Detalle y sugerencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El detalle del video se muestra completo en el player
- [ ] La duración y la miniatura llegan correctamente

## Ejemplos de prompts

- "La pantalla del player de Ryutify necesita el detalle del video: título, artista, duración y miniatura. Implementá el request de detalle por videoId."
- "Aplica Detalle y sugerencias (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El detalle del video se muestra completo en el player"
- "Revisa mi innertube-yt y dime qué pasos de Detalle y sugerencias me faltan en este nivel"