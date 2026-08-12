---
name: innertube-yt-descifrado-streams-profesional
description: Descifrado de streams · nivel Profesional · Cliente YouTube innertube: contenido de video. Obtén y descifra las URLs de stream de audio de YouTube. Objetivo del nivel: Robustez de streams en producción: fallbacks, caché y métricas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "descifrado-streams"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Descifrado de streams — Profesional

## Qué hace este skill

Obtén y descifra las URLs de stream de audio de YouTube. En este nivel se entrega: **Robustez de streams en producción: fallbacks, caché y métricas.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Descifrado de streams** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cachear las URLs de stream con expiración controlada
2. Implementar fallback a calidad menor si falla la mejor
3. Medir la tasa de streams exitosos
4. Actualizar el algoritmo de descifrado ante cambios

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Robustez de streams en producción: fallbacks, caché y métricas. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Cachear las URLs de stream con expiración controlada · Implementar fallback a calidad menor si falla la mejor · Medir la tasa de streams exitosos · Actualizar el algoritmo de descifrado ante cambios | lista | sí | 3-4 pasos |
| $criterios_clave | La tasa de streams exitosos supera el 99% · Los cambios del algoritmo se actualizan sin tocar el resto | lista | sí | calidad verificable |
| $prompt_guia | El descifrado de streams de Ryutify se rompe cuando YouTube lo cambia. Aislalo con cache, fallbacks y métricas de éxito, y que el fix toque una sola capa. | texto | no | "Descifrado de streams" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La tasa de streams exitosos supera el 99%
- [ ] Los cambios del algoritmo se actualizan sin tocar el resto

## Ejemplos de prompts

- "El descifrado de streams de Ryutify se rompe cuando YouTube lo cambia. Aislalo con cache, fallbacks y métricas de éxito, y que el fix toque una sola capa."
- "Aplica Descifrado de streams (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La tasa de streams exitosos supera el 99%"
- "Revisa mi innertube-yt y dime qué pasos de Descifrado de streams me faltan en este nivel"