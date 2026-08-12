---
name: web-apis-fetch-fetch-avanzada-avanzado
description: Fetch avanzada · nivel Avanzado · APIs del navegador. Dominás fetch más allá del GET: streams de respuesta, progreso, abortos y cabeceras. Objetivo del nivel: Usar streams de respuesta, progreso y abortos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fetch-avanzada"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Fetch avanzada — Avanzado

## Qué hace este skill

Dominás fetch más allá del GET: streams de respuesta, progreso, abortos y cabeceras. En este nivel se entrega: **Usar streams de respuesta, progreso y abortos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fetch avanzada** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer respuestas con streams y Response.body
2. Implementar progreso de descarga con streams
3. Abortar requests con AbortController
4. Reintentar con idempotencia en POST fallidos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar streams de respuesta, progreso y abortos | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Leer respuestas con streams y Response.body · Implementar progreso de descarga con streams · Abortar requests con AbortController · Reintentar con idempotencia en POST fallidos | lista | sí | 3-4 pasos |
| $criterios_clave | El progreso de descarga se muestra en la UI · Los abortos detienen la transferencia en curso | lista | sí | calidad verificable |
| $prompt_guia | Implementá la descarga de reportes grandes con stream: progreso en tiempo real, botón de cancelar con AbortController y retry solo en GET. | texto | no | "Fetch avanzada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El progreso de descarga se muestra en la UI
- [ ] Los abortos detienen la transferencia en curso

## Ejemplos de prompts

- "Implementá la descarga de reportes grandes con stream: progreso en tiempo real, botón de cancelar con AbortController y retry solo en GET."
- "Aplica Fetch avanzada (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza El progreso de descarga se muestra en la UI"
- "Revisa mi web-apis-fetch y dime qué pasos de Fetch avanzada me faltan en este nivel"