---
name: innertube-yt-caching-respuestas-basico
description: Caching de respuestas · nivel Básico · Cliente YouTube innertube: contenido de video. Cache con TTL para búsquedas, detalles y playlists. Objetivo del nivel: Cachear las respuestas de innertube en memoria.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "caching-respuestas"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Caching de respuestas — Básico

## Qué hace este skill

Cache con TTL para búsquedas, detalles y playlists. En este nivel se entrega: **Cachear las respuestas de innertube en memoria.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caching de respuestas** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un cache en memoria con TTL
2. Cachear las búsquedas recientes
3. Servir el detalle de la canción desde cache
4. Invalidar la cache al expirar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Cachear las respuestas de innertube en memoria. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Crear un cache en memoria con TTL · Cachear las búsquedas recientes · Servir el detalle de la canción desde cache · Invalidar la cache al expirar | lista | sí | 3-4 pasos |
| $criterios_clave | Las búsquedas repetidas no tocan la red · La cache expira según el TTL | lista | sí | calidad verificable |
| $prompt_guia | Las búsquedas repetidas de Ryutify tocan la red siempre. Agregá un cache en memoria con TTL para búsquedas y detalles. | texto | no | "Caching de respuestas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las búsquedas repetidas no tocan la red
- [ ] La cache expira según el TTL

## Ejemplos de prompts

- "Las búsquedas repetidas de Ryutify tocan la red siempre. Agregá un cache en memoria con TTL para búsquedas y detalles."
- "Aplica Caching de respuestas (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Las búsquedas repetidas no tocan la red"
- "Revisa mi innertube-yt y dime qué pasos de Caching de respuestas me faltan en este nivel"