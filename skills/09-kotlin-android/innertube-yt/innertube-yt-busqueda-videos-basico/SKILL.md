---
name: innertube-yt-busqueda-videos-basico
description: Búsqueda de videos · nivel Básico · Cliente YouTube innertube: contenido de video. Busca canciones y videos con los parámetros de innertube. Objetivo del nivel: Implementar la búsqueda de canciones por texto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "busqueda-videos"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Búsqueda de videos — Básico

## Qué hace este skill

Busca canciones y videos con los parámetros de innertube. En este nivel se entrega: **Implementar la búsqueda de canciones por texto.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Búsqueda de videos** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Armar el request de búsqueda con el query
2. Parsear los resultados de la lista
3. Mapear los resultados a la entidad Song de Ryutify
4. Mostrar los resultados en la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Implementar la búsqueda de canciones por texto. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Armar el request de búsqueda con el query · Parsear los resultados de la lista · Mapear los resultados a la entidad Song de Ryutify · Mostrar los resultados en la UI | lista | sí | 3-4 pasos |
| $criterios_clave | La búsqueda devuelve canciones mapeadas a Song · Los resultados se muestran en la UI de Ryutify | lista | sí | calidad verificable |
| $prompt_guia | Implementá la búsqueda de canciones de Ryutify contra innertube: request con el query, parseo de resultados y mapeo a la entidad Song. | texto | no | "Búsqueda de videos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La búsqueda devuelve canciones mapeadas a Song
- [ ] Los resultados se muestran en la UI de Ryutify

## Ejemplos de prompts

- "Implementá la búsqueda de canciones de Ryutify contra innertube: request con el query, parseo de resultados y mapeo a la entidad Song."
- "Aplica Búsqueda de videos (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La búsqueda devuelve canciones mapeadas a Song"
- "Revisa mi innertube-yt y dime qué pasos de Búsqueda de videos me faltan en este nivel"