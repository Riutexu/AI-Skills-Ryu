---
name: web-apis-fetch-sse-server-sent-events-basico
description: SSE (Server-Sent Events) · nivel Básico · APIs del navegador. Recibís notificaciones del servidor en tiempo real con EventSource, sin conexiones bidireccionales. Objetivo del nivel: Consumir un stream SSE con EventSource
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "sse-server-sent-events"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# SSE (Server-Sent Events) — Básico

## Qué hace este skill

Recibís notificaciones del servidor en tiempo real con EventSource, sin conexiones bidireccionales. En este nivel se entrega: **Consumir un stream SSE con EventSource**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SSE (Server-Sent Events)** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un EventSource a un endpoint del backend
2. Manejar eventos por tipo con addEventListener
3. Usar eventos por defecto y nombrados
4. Cerrar la conexión con close

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Consumir un stream SSE con EventSource | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Crear un EventSource a un endpoint del backend · Manejar eventos por tipo con addEventListener · Usar eventos por defecto y nombrados · Cerrar la conexión con close | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos se procesan por tipo correctamente · La conexión se cierra cuando la vista se destruye | lista | sí | calidad verificable |
| $prompt_guia | Conectá la SPA al endpoint SSE de notificaciones del backend PHP: EventSource, eventos nombrados y cierre de conexión al salir de la vista. | texto | no | "SSE (Server-Sent Events)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos se procesan por tipo correctamente
- [ ] La conexión se cierra cuando la vista se destruye

## Ejemplos de prompts

- "Conectá la SPA al endpoint SSE de notificaciones del backend PHP: EventSource, eventos nombrados y cierre de conexión al salir de la vista."
- "Aplica SSE (Server-Sent Events) (nivel basico) a mi trabajo actual con APIs del navegador: prioriza Los eventos se procesan por tipo correctamente"
- "Revisa mi web-apis-fetch y dime qué pasos de SSE (Server-Sent Events) me faltan en este nivel"