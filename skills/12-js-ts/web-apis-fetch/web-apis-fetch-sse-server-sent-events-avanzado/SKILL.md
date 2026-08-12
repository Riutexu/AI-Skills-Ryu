---
name: web-apis-fetch-sse-server-sent-events-avanzado
description: SSE (Server-Sent Events) · nivel Avanzado · APIs del navegador. Recibís notificaciones del servidor en tiempo real con EventSource, sin conexiones bidireccionales. Objetivo del nivel: Manejar reconexión, estado y reintentos del stream
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "sse-server-sent-events"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# SSE (Server-Sent Events) — Avanzado

## Qué hace este skill

Recibís notificaciones del servidor en tiempo real con EventSource, sin conexiones bidireccionales. En este nivel se entrega: **Manejar reconexión, estado y reintentos del stream**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SSE (Server-Sent Events)** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar el evento onerror y reconexión automática
2. Usar el campo retry del servidor
3. Reconstruir el estado perdido al reconectar
4. Mostrar el estado de la conexión en la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar reconexión, estado y reintentos del stream | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Manejar el evento onerror y reconexión automática · Usar el campo retry del servidor · Reconstruir el estado perdido al reconectar · Mostrar el estado de la conexión en la UI | lista | sí | 3-4 pasos |
| $criterios_clave | La reconexión automática restaura el stream · El estado de conexión es visible para el usuario | lista | sí | calidad verificable |
| $prompt_guia | El SSE de notificaciones se cae con la red: manejá onerror, respetá el retry del servidor, reconstruí el estado al reconectar y mostrá el estado en el header. | texto | no | "SSE (Server-Sent Events)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La reconexión automática restaura el stream
- [ ] El estado de conexión es visible para el usuario

## Ejemplos de prompts

- "El SSE de notificaciones se cae con la red: manejá onerror, respetá el retry del servidor, reconstruí el estado al reconectar y mostrá el estado en el header."
- "Aplica SSE (Server-Sent Events) (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza La reconexión automática restaura el stream"
- "Revisa mi web-apis-fetch y dime qué pasos de SSE (Server-Sent Events) me faltan en este nivel"