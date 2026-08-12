---
name: web-apis-fetch-fetch-avanzada-basico
description: Fetch avanzada · nivel Básico · APIs del navegador. Dominás fetch más allá del GET: streams de respuesta, progreso, abortos y cabeceras. Objetivo del nivel: Manejar fetch con opciones completas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fetch-avanzada"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Fetch avanzada — Básico

## Qué hace este skill

Dominás fetch más allá del GET: streams de respuesta, progreso, abortos y cabeceras. En este nivel se entrega: **Manejar fetch con opciones completas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fetch avanzada** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar fetch con headers, method y body
2. Leer respuestas de tipos distintos (json, text, blob)
3. Manejar errores de red y códigos HTTP
4. Pasar credenciales y cookies con credentials

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Manejar fetch con opciones completas | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Usar fetch con headers, method y body · Leer respuestas de tipos distintos (json, text, blob) · Manejar errores de red y códigos HTTP · Pasar credenciales y cookies con credentials | lista | sí | 3-4 pasos |
| $criterios_clave | Las opciones de cada llamada son explícitas · Los errores de red se diferencian de los HTTP | lista | sí | calidad verificable |
| $prompt_guia | Actualizá las llamadas fetch del módulo de archivos para subir y descargar blobs con headers correctos y manejo de errores por tipo. | texto | no | "Fetch avanzada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las opciones de cada llamada son explícitas
- [ ] Los errores de red se diferencian de los HTTP

## Ejemplos de prompts

- "Actualizá las llamadas fetch del módulo de archivos para subir y descargar blobs con headers correctos y manejo de errores por tipo."
- "Aplica Fetch avanzada (nivel basico) a mi trabajo actual con APIs del navegador: prioriza Las opciones de cada llamada son explícitas"
- "Revisa mi web-apis-fetch y dime qué pasos de Fetch avanzada me faltan en este nivel"