---
name: innertube-yt-listas-playlists-profesional
description: Listas y playlists · nivel Profesional · Cliente YouTube innertube: contenido de video. Obtén las playlists de YouTube y sus canciones. Objetivo del nivel: Gestión de playlists del producto: precarga y sincronización.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "listas-playlists"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Listas y playlists — Profesional

## Qué hace este skill

Obtén las playlists de YouTube y sus canciones. En este nivel se entrega: **Gestión de playlists del producto: precarga y sincronización.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Listas y playlists** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Precargar la primera canción de cada playlist del home
2. Sincronizar las playlists favoritas en modo offline
3. Medir el tiempo de carga de playlists grandes
4. Manejar las playlists eliminadas o privadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gestión de playlists del producto: precarga y sincronización. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Precargar la primera canción de cada playlist del home · Sincronizar las playlists favoritas en modo offline · Medir el tiempo de carga de playlists grandes · Manejar las playlists eliminadas o privadas | lista | sí | 3-4 pasos |
| $criterios_clave | El home de Ryutify precarga las primeras canciones · Las playlists favoritas están disponibles offline | lista | sí | calidad verificable |
| $prompt_guia | Quiero que el home de Ryutify muestre las playlists con su primera canción lista para reproducir y que las favoritas estén offline. | texto | no | "Listas y playlists" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El home de Ryutify precarga las primeras canciones
- [ ] Las playlists favoritas están disponibles offline

## Ejemplos de prompts

- "Quiero que el home de Ryutify muestre las playlists con su primera canción lista para reproducir y que las favoritas estén offline."
- "Aplica Listas y playlists (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El home de Ryutify precarga las primeras canciones"
- "Revisa mi innertube-yt y dime qué pasos de Listas y playlists me faltan en este nivel"