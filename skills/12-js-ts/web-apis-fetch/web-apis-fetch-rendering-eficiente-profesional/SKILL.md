---
name: web-apis-fetch-rendering-eficiente-profesional
description: Rendering eficiente · nivel Profesional · APIs del navegador. Optimizás el render con batching, microtasks, layout y composición del navegador. Objetivo del nivel: Diseñar la estrategia de rendering del proyecto completo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "rendering-eficiente"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Rendering eficiente — Profesional

## Qué hace este skill

Optimizás el render con batching, microtasks, layout y composición del navegador. En este nivel se entrega: **Diseñar la estrategia de rendering del proyecto completo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendering eficiente** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir cuándo usar DOM directo, canvas o web workers
2. Implementar render de datos en workers con OffscreenCanvas
3. Medir y presupuestar el presupuesto de frames
4. Documentar la estrategia de rendering

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de rendering del proyecto completo | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Definir cuándo usar DOM directo, canvas o web workers · Implementar render de datos en workers con OffscreenCanvas · Medir y presupuestar el presupuesto de frames · Documentar la estrategia de rendering | lista | sí | 3-4 pasos |
| $criterios_clave | El presupuesto de 16ms se respeta en vistas complejas · La estrategia de rendering está documentada | lista | sí | calidad verificable |
| $prompt_guia | La vista de reportes se congela con 50k puntos: diseñá la estrategia de rendering con web workers + OffscreenCanvas, presupuesto de frames y documentación. | texto | no | "Rendering eficiente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El presupuesto de 16ms se respeta en vistas complejas
- [ ] La estrategia de rendering está documentada

## Ejemplos de prompts

- "La vista de reportes se congela con 50k puntos: diseñá la estrategia de rendering con web workers + OffscreenCanvas, presupuesto de frames y documentación."
- "Aplica Rendering eficiente (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza El presupuesto de 16ms se respeta en vistas complejas"
- "Revisa mi web-apis-fetch y dime qué pasos de Rendering eficiente me faltan en este nivel"