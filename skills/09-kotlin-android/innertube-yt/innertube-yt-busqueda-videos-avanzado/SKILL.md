---
name: innertube-yt-busqueda-videos-avanzado
description: Búsqueda de videos · nivel Avanzado · Cliente YouTube innertube: contenido de video. Busca canciones y videos con los parámetros de innertube. Objetivo del nivel: Parámetros avanzados de búsqueda y tipado de resultados.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "busqueda-videos"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Búsqueda de videos — Avanzado

## Qué hace este skill

Busca canciones y videos con los parámetros de innertube. En este nivel se entrega: **Parámetros avanzados de búsqueda y tipado de resultados.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Búsqueda de videos** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar los filtros de tipo de resultado
2. Distinguir canciones, artistas, playlists y videos
3. Extraer los ids de video, playlist y channel
4. Implementar la búsqueda con debounce y cancelación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Parámetros avanzados de búsqueda y tipado de resultados. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Usar los filtros de tipo de resultado · Distinguir canciones, artistas, playlists y videos · Extraer los ids de video, playlist y channel · Implementar la búsqueda con debounce y cancelación | lista | sí | 3-4 pasos |
| $criterios_clave | Los filtros de búsqueda funcionan correctamente · La búsqueda con debounce cancela requests viejos | lista | sí | calidad verificable |
| $prompt_guia | La búsqueda de Ryutify mezcla canciones, artistas y playlists sin orden. Agregá los filtros por tipo y la cancelación de requests con debounce. | texto | no | "Búsqueda de videos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los filtros de búsqueda funcionan correctamente
- [ ] La búsqueda con debounce cancela requests viejos

## Ejemplos de prompts

- "La búsqueda de Ryutify mezcla canciones, artistas y playlists sin orden. Agregá los filtros por tipo y la cancelación de requests con debounce."
- "Aplica Búsqueda de videos (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Los filtros de búsqueda funcionan correctamente"
- "Revisa mi innertube-yt y dime qué pasos de Búsqueda de videos me faltan en este nivel"