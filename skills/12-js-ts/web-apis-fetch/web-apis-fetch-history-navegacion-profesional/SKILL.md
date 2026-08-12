---
name: web-apis-fetch-history-navegacion-profesional
description: History y navegación · nivel Profesional · APIs del navegador. Controlás el historial y la URL con la History API, estados y scroll restoration. Objetivo del nivel: Diseñar el sistema de navegación con deep linking
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "history-navegacion"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# History y navegación — Profesional

## Qué hace este skill

Controlás el historial y la URL con la History API, estados y scroll restoration. En este nivel se entrega: **Diseñar el sistema de navegación con deep linking**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **History y navegación** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar deep linking con estado en la URL
2. Sincronizar tabs y modales con la URL
3. Manejar la compatibilidad del server con el routing
4. Documentar las convenciones de URL del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de navegación con deep linking | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Implementar deep linking con estado en la URL · Sincronizar tabs y modales con la URL · Manejar la compatibilidad del server con el routing · Documentar las convenciones de URL del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Cada estado de la app tiene URL compartible · El server PHP sirve el index para rutas desconocidas | lista | sí | calidad verificable |
| $prompt_guia | La app necesita URLs compartibles: deep linking de cada estado (filtros, tabs, modales), configuración del server PHP para servir el index y convenciones de URL documentadas. | texto | no | "History y navegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada estado de la app tiene URL compartible
- [ ] El server PHP sirve el index para rutas desconocidas

## Ejemplos de prompts

- "La app necesita URLs compartibles: deep linking de cada estado (filtros, tabs, modales), configuración del server PHP para servir el index y convenciones de URL documentadas."
- "Aplica History y navegación (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza Cada estado de la app tiene URL compartible"
- "Revisa mi web-apis-fetch y dime qué pasos de History y navegación me faltan en este nivel"