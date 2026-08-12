---
name: web-apis-fetch-websockets-basico
description: WebSockets · nivel Básico · APIs del navegador. Mantenés conexiones bidireccionales en tiempo real con control de estados y reconexión. Objetivo del nivel: Abrir y usar una conexión WebSocket
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "websockets"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# WebSockets — Básico

## Qué hace este skill

Mantenés conexiones bidireccionales en tiempo real con control de estados y reconexión. En este nivel se entrega: **Abrir y usar una conexión WebSocket**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WebSockets** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una conexión WebSocket a un endpoint
2. Enviar y recibir mensajes JSON
3. Manejar los eventos open, message, close y error
4. Cerrar la conexión correctamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Abrir y usar una conexión WebSocket | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Crear una conexión WebSocket a un endpoint · Enviar y recibir mensajes JSON · Manejar los eventos open, message, close y error · Cerrar la conexión correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | Los mensajes JSON se serializan y parsean bien · El cierre de conexión es limpio y controlado | lista | sí | calidad verificable |
| $prompt_guia | Conectá la SPA al WebSocket del chat de soporte: conexión, mensajes JSON, manejo de los cuatro eventos y cierre limpio. | texto | no | "WebSockets" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los mensajes JSON se serializan y parsean bien
- [ ] El cierre de conexión es limpio y controlado

## Ejemplos de prompts

- "Conectá la SPA al WebSocket del chat de soporte: conexión, mensajes JSON, manejo de los cuatro eventos y cierre limpio."
- "Aplica WebSockets (nivel basico) a mi trabajo actual con APIs del navegador: prioriza Los mensajes JSON se serializan y parsean bien"
- "Revisa mi web-apis-fetch y dime qué pasos de WebSockets me faltan en este nivel"