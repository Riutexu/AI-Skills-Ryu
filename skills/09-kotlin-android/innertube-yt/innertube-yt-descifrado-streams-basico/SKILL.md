---
name: innertube-yt-descifrado-streams-basico
description: Descifrado de streams · nivel Básico · Cliente YouTube innertube: contenido de video. Obtén y descifra las URLs de stream de audio de YouTube. Objetivo del nivel: Obtener la URL de stream de audio de un video.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "descifrado-streams"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Descifrado de streams — Básico

## Qué hace este skill

Obtén y descifra las URLs de stream de audio de YouTube. En este nivel se entrega: **Obtener la URL de stream de audio de un video.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Descifrado de streams** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar el endpoint player con el videoId
2. Extraer la URL del stream de audio
3. Verificar que la URL reproduce en el ExoPlayer
4. Manejar el caso de stream ausente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Obtener la URL de stream de audio de un video. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Usar el endpoint player con el videoId · Extraer la URL del stream de audio · Verificar que la URL reproduce en el ExoPlayer · Manejar el caso de stream ausente | lista | sí | 3-4 pasos |
| $criterios_clave | La URL de audio extraída reproduce en el player de Ryutify · El caso sin stream se maneja sin crash | lista | sí | calidad verificable |
| $prompt_guia | Extraé la URL del stream de audio de una canción de Ryutify con el endpoint player y verificá que reproduzca en el ExoPlayer. | texto | no | "Descifrado de streams" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La URL de audio extraída reproduce en el player de Ryutify
- [ ] El caso sin stream se maneja sin crash

## Ejemplos de prompts

- "Extraé la URL del stream de audio de una canción de Ryutify con el endpoint player y verificá que reproduzca en el ExoPlayer."
- "Aplica Descifrado de streams (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La URL de audio extraída reproduce en el player de Ryutify"
- "Revisa mi innertube-yt y dime qué pasos de Descifrado de streams me faltan en este nivel"