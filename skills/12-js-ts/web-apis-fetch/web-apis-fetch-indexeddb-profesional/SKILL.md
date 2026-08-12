---
name: web-apis-fetch-indexeddb-profesional
description: IndexedDB · nivel Profesional · APIs del navegador. Almacenás datos estructurados en el navegador con IndexedDB y wrappers ergonómicos. Objetivo del nivel: Diseñar la estrategia de almacenamiento local del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "indexeddb"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# IndexedDB — Profesional

## Qué hace este skill

Almacenás datos estructurados en el navegador con IndexedDB y wrappers ergonómicos. En este nivel se entrega: **Diseñar la estrategia de almacenamiento local del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **IndexedDB** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un wrapper de IndexedDB con API promisificada
2. Sincronizar los datos offline con el backend
3. Definir políticas de limpieza y cuotas
4. Manejar la privacidad de los datos almacenados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de almacenamiento local del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Crear un wrapper de IndexedDB con API promisificada · Sincronizar los datos offline con el backend · Definir políticas de limpieza y cuotas · Manejar la privacidad de los datos almacenados | lista | sí | 3-4 pasos |
| $criterios_clave | El wrapper está documentado y testeado · La sincronización offline no pierde ni duplica datos | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia offline de la SPA: wrapper promisificado de IndexedDB, cola de operaciones pendientes que sincroniza al volver la red y políticas de limpieza por cuota. | texto | no | "IndexedDB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El wrapper está documentado y testeado
- [ ] La sincronización offline no pierde ni duplica datos

## Ejemplos de prompts

- "Diseñá la estrategia offline de la SPA: wrapper promisificado de IndexedDB, cola de operaciones pendientes que sincroniza al volver la red y políticas de limpieza por cuota."
- "Aplica IndexedDB (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza El wrapper está documentado y testeado"
- "Revisa mi web-apis-fetch y dime qué pasos de IndexedDB me faltan en este nivel"