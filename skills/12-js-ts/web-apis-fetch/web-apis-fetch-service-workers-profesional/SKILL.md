---
name: web-apis-fetch-service-workers-profesional
description: Service workers · nivel Profesional · APIs del navegador. Interceptás requests y habilitás offline con service workers y estrategias de cache. Objetivo del nivel: Diseñar la estrategia PWA del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "service-workers"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Service workers — Profesional

## Qué hace este skill

Interceptás requests y habilitás offline con service workers y estrategias de cache. En este nivel se entrega: **Diseñar la estrategia PWA del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Service workers** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el modelo de actualización de la app
2. Implementar background sync para operaciones pendientes
3. Medir la efectividad de la cache con métricas
4. Documentar la estrategia de service worker

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia PWA del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Definir el modelo de actualización de la app · Implementar background sync para operaciones pendientes · Medir la efectividad de la cache con métricas · Documentar la estrategia de service worker | lista | sí | 3-4 pasos |
| $criterios_clave | Las operaciones pendientes sincronizan en background · El modelo de actualización no rompe sesiones activas | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia PWA completa: actualización con aviso al usuario, background sync para la cola offline de operaciones y métricas de hits de cache. | texto | no | "Service workers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las operaciones pendientes sincronizan en background
- [ ] El modelo de actualización no rompe sesiones activas

## Ejemplos de prompts

- "Diseñá la estrategia PWA completa: actualización con aviso al usuario, background sync para la cola offline de operaciones y métricas de hits de cache."
- "Aplica Service workers (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza Las operaciones pendientes sincronizan en background"
- "Revisa mi web-apis-fetch y dime qué pasos de Service workers me faltan en este nivel"