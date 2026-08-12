---
name: innertube-yt-mapeo-dominio-basico
description: Mapeo de datos a dominio · nivel Básico · Cliente YouTube innertube: contenido de video. Convierte las respuestas crudas de YouTube en los modelos de Ryutify. Objetivo del nivel: Crear mappers de las respuestas a las entidades de dominio.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mapeo-dominio"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Mapeo de datos a dominio — Básico

## Qué hace este skill

Convierte las respuestas crudas de YouTube en los modelos de Ryutify. En este nivel se entrega: **Crear mappers de las respuestas a las entidades de dominio.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mapeo de datos a dominio** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el mapper de resultado de búsqueda a Song
2. Mapear el detalle del video
3. Manejar los campos opcionales en el mapeo
4. Centralizar los mappers en una capa

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear mappers de las respuestas a las entidades de dominio. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Crear el mapper de resultado de búsqueda a Song · Mapear el detalle del video · Manejar los campos opcionales en el mapeo · Centralizar los mappers en una capa | lista | sí | 3-4 pasos |
| $criterios_clave | Los mappers convierten todos los campos usados · Los campos ausentes no rompen el mapeo | lista | sí | calidad verificable |
| $prompt_guia | Creá los mappers de las respuestas de innertube a las entidades de dominio de Ryutify: Song, Artist y Playlist. | texto | no | "Mapeo de datos a dominio" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los mappers convierten todos los campos usados
- [ ] Los campos ausentes no rompen el mapeo

## Ejemplos de prompts

- "Creá los mappers de las respuestas de innertube a las entidades de dominio de Ryutify: Song, Artist y Playlist."
- "Aplica Mapeo de datos a dominio (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Los mappers convierten todos los campos usados"
- "Revisa mi innertube-yt y dime qué pasos de Mapeo de datos a dominio me faltan en este nivel"