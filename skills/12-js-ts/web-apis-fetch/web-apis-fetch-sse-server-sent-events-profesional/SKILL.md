---
name: web-apis-fetch-sse-server-sent-events-profesional
description: SSE (Server-Sent Events) · nivel Profesional · APIs del navegador. Recibís notificaciones del servidor en tiempo real con EventSource, sin conexiones bidireccionales. Objetivo del nivel: Diseñar la arquitectura de tiempo real del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "sse-server-sent-events"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# SSE (Server-Sent Events) — Profesional

## Qué hace este skill

Recibís notificaciones del servidor en tiempo real con EventSource, sin conexiones bidireccionales. En este nivel se entrega: **Diseñar la arquitectura de tiempo real del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SSE (Server-Sent Events)** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Decidir entre SSE, WebSocket y polling según el caso
2. Diseñar el contrato de eventos SSE con el backend
3. Implementar cola de eventos perdidos con reconciliación
4. Documentar la arquitectura de tiempo real

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la arquitectura de tiempo real del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Decidir entre SSE, WebSocket y polling según el caso · Diseñar el contrato de eventos SSE con el backend · Implementar cola de eventos perdidos con reconciliación · Documentar la arquitectura de tiempo real | lista | sí | 3-4 pasos |
| $criterios_clave | La decisión SSE vs WebSocket está documentada con criterio · Los eventos perdidos se reconcilian con el backend | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la arquitectura de tiempo real: SSE para notificaciones y estado, WebSocket solo donde se necesite bidireccionalidad, contrato de eventos con el backend PHP y reconciliación de eventos perdidos. | texto | no | "SSE (Server-Sent Events)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La decisión SSE vs WebSocket está documentada con criterio
- [ ] Los eventos perdidos se reconcilian con el backend

## Ejemplos de prompts

- "Diseñá la arquitectura de tiempo real: SSE para notificaciones y estado, WebSocket solo donde se necesite bidireccionalidad, contrato de eventos con el backend PHP y reconciliación de eventos perdidos."
- "Aplica SSE (Server-Sent Events) (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza La decisión SSE vs WebSocket está documentada con criterio"
- "Revisa mi web-apis-fetch y dime qué pasos de SSE (Server-Sent Events) me faltan en este nivel"