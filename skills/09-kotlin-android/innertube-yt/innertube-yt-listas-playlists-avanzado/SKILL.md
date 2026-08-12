---
name: innertube-yt-listas-playlists-avanzado
description: Listas y playlists · nivel Avanzado · Cliente YouTube innertube: contenido de video. Obtén las playlists de YouTube y sus canciones. Objetivo del nivel: Playlists completas con continuaciones y metadatos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "listas-playlists"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Listas y playlists — Avanzado

## Qué hace este skill

Obtén las playlists de YouTube y sus canciones. En este nivel se entrega: **Playlists completas con continuaciones y metadatos.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Listas y playlists** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar las continuaciones de playlists largas
2. Extraer el título y la portada de la playlist
3. Agregar el indicador de carga de más canciones
4. Cachear las playlists abiertas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Playlists completas con continuaciones y metadatos. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Manejar las continuaciones de playlists largas · Extraer el título y la portada de la playlist · Agregar el indicador de carga de más canciones · Cachear las playlists abiertas | lista | sí | 3-4 pasos |
| $criterios_clave | Las playlists largas cargan todas sus canciones · La playlist cacheada no pierde el progreso | lista | sí | calidad verificable |
| $prompt_guia | Las playlists largas de Ryutify cargan solo las primeras canciones. Implementá las continuaciones con el indicador de carga. | texto | no | "Listas y playlists" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las playlists largas cargan todas sus canciones
- [ ] La playlist cacheada no pierde el progreso

## Ejemplos de prompts

- "Las playlists largas de Ryutify cargan solo las primeras canciones. Implementá las continuaciones con el indicador de carga."
- "Aplica Listas y playlists (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Las playlists largas cargan todas sus canciones"
- "Revisa mi innertube-yt y dime qué pasos de Listas y playlists me faltan en este nivel"