---
name: innertube-yt-busqueda-videos-profesional
description: Búsqueda de videos · nivel Profesional · Cliente YouTube innertube: contenido de video. Busca canciones y videos con los parámetros de innertube. Objetivo del nivel: Búsqueda de producción: relevancia, cache y métricas de resultados.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "busqueda-videos"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Búsqueda de videos — Profesional

## Qué hace este skill

Busca canciones y videos con los parámetros de innertube. En este nivel se entrega: **Búsqueda de producción: relevancia, cache y métricas de resultados.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Búsqueda de videos** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Rankear los resultados por tipo según la intención
2. Cachear las búsquedas recientes con TTL
3. Medir la tasa de resultados vacíos
4. Degradar a radio si no hay resultados exactos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Búsqueda de producción: relevancia, cache y métricas de resultados. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Rankear los resultados por tipo según la intención · Cachear las búsquedas recientes con TTL · Medir la tasa de resultados vacíos · Degradar a radio si no hay resultados exactos | lista | sí | 3-4 pasos |
| $criterios_clave | Las búsquedas recientes se sirven de cache sin tocar la red · La tasa de vacíos está monitorizada | lista | sí | calidad verificable |
| $prompt_guia | Quiero que las búsquedas de Ryutify se cachead por 10 minutos y que si no hay resultados exactos se degrade a radio similar. Implementalo y medí los vacíos. | texto | no | "Búsqueda de videos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las búsquedas recientes se sirven de cache sin tocar la red
- [ ] La tasa de vacíos está monitorizada

## Ejemplos de prompts

- "Quiero que las búsquedas de Ryutify se cachead por 10 minutos y que si no hay resultados exactos se degrade a radio similar. Implementalo y medí los vacíos."
- "Aplica Búsqueda de videos (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Las búsquedas recientes se sirven de cache sin tocar la red"
- "Revisa mi innertube-yt y dime qué pasos de Búsqueda de videos me faltan en este nivel"