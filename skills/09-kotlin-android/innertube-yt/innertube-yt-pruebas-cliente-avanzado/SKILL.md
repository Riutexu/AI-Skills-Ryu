---
name: innertube-yt-pruebas-cliente-avanzado
description: Pruebas del cliente innertube · nivel Avanzado · Cliente YouTube innertube: contenido de video. Tests del cliente con fixtures, interceptores y datos simulados. Objetivo del nivel: Tests de resiliencia: errores, campos faltantes y rate limits.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "pruebas-cliente"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Pruebas del cliente innertube — Avanzado

## Qué hace este skill

Tests del cliente con fixtures, interceptores y datos simulados. En este nivel se entrega: **Tests de resiliencia: errores, campos faltantes y rate limits.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas del cliente innertube** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear los campos faltantes en las respuestas
2. Testear la clasificación de errores
3. Testear el backoff del rate limit
4. Usar datos de prueba versionados por formato

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Tests de resiliencia: errores, campos faltantes y rate limits. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Testear los campos faltantes en las respuestas · Testear la clasificación de errores · Testear el backoff del rate limit · Usar datos de prueba versionados por formato | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests cubren las respuestas malformadas · El backoff se testea sin esperas reales | lista | sí | calidad verificable |
| $prompt_guia | Cubrí con tests los casos feos del cliente de Ryutify: respuestas sin campos, errores y rate limits con backoff sin esperas reales. | texto | no | "Pruebas del cliente innertube" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests cubren las respuestas malformadas
- [ ] El backoff se testea sin esperas reales

## Ejemplos de prompts

- "Cubrí con tests los casos feos del cliente de Ryutify: respuestas sin campos, errores y rate limits con backoff sin esperas reales."
- "Aplica Pruebas del cliente innertube (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Los tests cubren las respuestas malformadas"
- "Revisa mi innertube-yt y dime qué pasos de Pruebas del cliente innertube me faltan en este nivel"