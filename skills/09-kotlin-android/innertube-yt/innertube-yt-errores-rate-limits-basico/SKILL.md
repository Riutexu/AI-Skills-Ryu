---
name: innertube-yt-errores-rate-limits-basico
description: Errores y rate limits · nivel Básico · Cliente YouTube innertube: contenido de video. Clasifica los errores de innertube y sobrevive a los rate limits. Objetivo del nivel: Clasificar los errores de respuesta del cliente innertube.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "errores-rate-limits"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Errores y rate limits — Básico

## Qué hace este skill

Clasifica los errores de innertube y sobrevive a los rate limits. En este nivel se entrega: **Clasificar los errores de respuesta del cliente innertube.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y rate limits** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar los códigos de error de innertube
2. Mapear los errores a excepciones de dominio
3. Mostrar mensajes de error claros en la UI
4. Loguear el contexto de cada error

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Clasificar los errores de respuesta del cliente innertube. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Identificar los códigos de error de innertube · Mapear los errores a excepciones de dominio · Mostrar mensajes de error claros en la UI · Loguear el contexto de cada error | lista | sí | 3-4 pasos |
| $criterios_clave | Cada error de la API se mapea a su tipo de dominio · La UI muestra un mensaje según el tipo de error | lista | sí | calidad verificable |
| $prompt_guia | La API de YouTube devuelve errores raros a veces y Ryutify no los distingue. Clasificalos y mapealos a excepciones de dominio con mensajes claros. | texto | no | "Errores y rate limits" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada error de la API se mapea a su tipo de dominio
- [ ] La UI muestra un mensaje según el tipo de error

## Ejemplos de prompts

- "La API de YouTube devuelve errores raros a veces y Ryutify no los distingue. Clasificalos y mapealos a excepciones de dominio con mensajes claros."
- "Aplica Errores y rate limits (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Cada error de la API se mapea a su tipo de dominio"
- "Revisa mi innertube-yt y dime qué pasos de Errores y rate limits me faltan en este nivel"