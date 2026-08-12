---
name: web-apis-fetch-websockets-profesional
description: WebSockets · nivel Profesional · APIs del navegador. Mantenés conexiones bidireccionales en tiempo real con control de estados y reconexión. Objetivo del nivel: Diseñar la capa de tiempo real robusta del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "websockets"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# WebSockets — Profesional

## Qué hace este skill

Mantenés conexiones bidireccionales en tiempo real con control de estados y reconexión. En este nivel se entrega: **Diseñar la capa de tiempo real robusta del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WebSockets** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un cliente WebSocket con estados y suscripciones
2. Definir el protocolo de mensajes con el backend
3. Implementar reintentos con límites y fallback a polling
4. Monitorear la salud de las conexiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la capa de tiempo real robusta del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Crear un cliente WebSocket con estados y suscripciones · Definir el protocolo de mensajes con el backend · Implementar reintentos con límites y fallback a polling · Monitorear la salud de las conexiones | lista | sí | 3-4 pasos |
| $criterios_clave | El cliente maneja todos los estados sin perderse · El fallback a polling mantiene la funcionalidad | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el cliente WebSocket del panel de ventas: protocolo tipado, suscripciones por canal, límites de reconexión con fallback a polling y métricas de salud de conexión. | texto | no | "WebSockets" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El cliente maneja todos los estados sin perderse
- [ ] El fallback a polling mantiene la funcionalidad

## Ejemplos de prompts

- "Diseñá el cliente WebSocket del panel de ventas: protocolo tipado, suscripciones por canal, límites de reconexión con fallback a polling y métricas de salud de conexión."
- "Aplica WebSockets (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza El cliente maneja todos los estados sin perderse"
- "Revisa mi web-apis-fetch y dime qué pasos de WebSockets me faltan en este nivel"