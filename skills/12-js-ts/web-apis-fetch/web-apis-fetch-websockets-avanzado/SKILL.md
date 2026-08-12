---
name: web-apis-fetch-websockets-avanzado
description: WebSockets · nivel Avanzado · APIs del navegador. Mantenés conexiones bidireccionales en tiempo real con control de estados y reconexión. Objetivo del nivel: Manejar reconexión, heartbeat y backpressure de mensajes
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "websockets"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# WebSockets — Avanzado

## Qué hace este skill

Mantenés conexiones bidireccionales en tiempo real con control de estados y reconexión. En este nivel se entrega: **Manejar reconexión, heartbeat y backpressure de mensajes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WebSockets** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar reconexión con backoff
2. Mantener la conexión viva con ping/pong
3. Manejar colas de mensajes sin enviar
4. Distinguir cierres normales de errores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar reconexión, heartbeat y backpressure de mensajes | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Implementar reconexión con backoff · Mantener la conexión viva con ping/pong · Manejar colas de mensajes sin enviar · Distinguir cierres normales de errores | lista | sí | 3-4 pasos |
| $criterios_clave | La reconexión respeta backoff y límites · El heartbeat detecta conexiones muertas | lista | sí | calidad verificable |
| $prompt_guia | El WebSocket se corta cada 30 minutos: implementá heartbeat, reconexión con backoff, cola de mensajes pendientes y distinción de cierres normales. | texto | no | "WebSockets" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La reconexión respeta backoff y límites
- [ ] El heartbeat detecta conexiones muertas

## Ejemplos de prompts

- "El WebSocket se corta cada 30 minutos: implementá heartbeat, reconexión con backoff, cola de mensajes pendientes y distinción de cierres normales."
- "Aplica WebSockets (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza La reconexión respeta backoff y límites"
- "Revisa mi web-apis-fetch y dime qué pasos de WebSockets me faltan en este nivel"