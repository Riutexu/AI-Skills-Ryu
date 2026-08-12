---
name: innertube-yt-listas-playlists-basico
description: Listas y playlists · nivel Básico · Cliente YouTube innertube: contenido de video. Obtén las playlists de YouTube y sus canciones. Objetivo del nivel: Obtener una playlist y sus canciones por id.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "listas-playlists"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Listas y playlists — Básico

## Qué hace este skill

Obtén las playlists de YouTube y sus canciones. En este nivel se entrega: **Obtener una playlist y sus canciones por id.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Listas y playlists** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Armar el request de playlist con el id
2. Parsear la lista de canciones de la playlist
3. Mapear a la entidad Playlist de Ryutify
4. Mostrar la playlist en la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Obtener una playlist y sus canciones por id. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Armar el request de playlist con el id · Parsear la lista de canciones de la playlist · Mapear a la entidad Playlist de Ryutify · Mostrar la playlist en la UI | lista | sí | 3-4 pasos |
| $criterios_clave | La playlist se muestra con sus canciones · El id de playlist se resuelve desde una URL de YouTube | lista | sí | calidad verificable |
| $prompt_guia | Implementá la carga de playlists de Ryutify por id y resolvé el id desde una URL compartida de YouTube. | texto | no | "Listas y playlists" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La playlist se muestra con sus canciones
- [ ] El id de playlist se resuelve desde una URL de YouTube

## Ejemplos de prompts

- "Implementá la carga de playlists de Ryutify por id y resolvé el id desde una URL compartida de YouTube."
- "Aplica Listas y playlists (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La playlist se muestra con sus canciones"
- "Revisa mi innertube-yt y dime qué pasos de Listas y playlists me faltan en este nivel"