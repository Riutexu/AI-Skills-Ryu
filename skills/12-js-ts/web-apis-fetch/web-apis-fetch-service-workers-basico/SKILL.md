---
name: web-apis-fetch-service-workers-basico
description: Service workers · nivel Básico · APIs del navegador. Interceptás requests y habilitás offline con service workers y estrategias de cache. Objetivo del nivel: Registrar un service worker y precachear recursos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "service-workers"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Service workers — Básico

## Qué hace este skill

Interceptás requests y habilitás offline con service workers y estrategias de cache. En este nivel se entrega: **Registrar un service worker y precachear recursos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Service workers** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Registrar un service worker en la app
2. Implementar install y activación con versión
3. Precachear el shell de la app
4. Verificar el registro en DevTools

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Registrar un service worker y precachear recursos | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Registrar un service worker en la app · Implementar install y activación con versión · Precachear el shell de la app · Verificar el registro en DevTools | lista | sí | 3-4 pasos |
| $criterios_clave | El service worker se registra y activa · El precache contiene los recursos del shell | lista | sí | calidad verificable |
| $prompt_guia | Registrá un service worker en la SPA que precachee el shell de la app, con versión y actualización controlada del cache. | texto | no | "Service workers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El service worker se registra y activa
- [ ] El precache contiene los recursos del shell

## Ejemplos de prompts

- "Registrá un service worker en la SPA que precachee el shell de la app, con versión y actualización controlada del cache."
- "Aplica Service workers (nivel basico) a mi trabajo actual con APIs del navegador: prioriza El service worker se registra y activa"
- "Revisa mi web-apis-fetch y dime qué pasos de Service workers me faltan en este nivel"