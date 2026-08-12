---
name: web-apis-fetch-rendering-eficiente-basico
description: Rendering eficiente · nivel Básico · APIs del navegador. Optimizás el render con batching, microtasks, layout y composición del navegador. Objetivo del nivel: Evitar reflows y renders innecesarios
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "rendering-eficiente"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Rendering eficiente — Básico

## Qué hace este skill

Optimizás el render con batching, microtasks, layout y composición del navegador. En este nivel se entrega: **Evitar reflows y renders innecesarios**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendering eficiente** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agrupar lecturas y escrituras del layout
2. Usar will-change y transform con criterio
3. Evitar cambios de layout en animaciones
4. Medir reflows con DevTools

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Evitar reflows y renders innecesarios | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Agrupar lecturas y escrituras del layout · Usar will-change y transform con criterio · Evitar cambios de layout en animaciones · Medir reflows con DevTools | lista | sí | 3-4 pasos |
| $criterios_clave | Las animaciones usan transform/opacity · No hay layout thrashing en los handlers | lista | sí | calidad verificable |
| $prompt_guia | La lista de productos titila al filtrar: auditá los reflows con DevTools, agrupá lecturas/escrituras y usá transform para el orden de las tarjetas. | texto | no | "Rendering eficiente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las animaciones usan transform/opacity
- [ ] No hay layout thrashing en los handlers

## Ejemplos de prompts

- "La lista de productos titila al filtrar: auditá los reflows con DevTools, agrupá lecturas/escrituras y usá transform para el orden de las tarjetas."
- "Aplica Rendering eficiente (nivel basico) a mi trabajo actual con APIs del navegador: prioriza Las animaciones usan transform/opacity"
- "Revisa mi web-apis-fetch y dime qué pasos de Rendering eficiente me faltan en este nivel"