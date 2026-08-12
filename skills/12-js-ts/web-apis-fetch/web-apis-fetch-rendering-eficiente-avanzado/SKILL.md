---
name: web-apis-fetch-rendering-eficiente-avanzado
description: Rendering eficiente · nivel Avanzado · APIs del navegador. Optimizás el render con batching, microtasks, layout y composición del navegador. Objetivo del nivel: Usar batching y planificación con rAF y microtasks
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "rendering-eficiente"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Rendering eficiente — Avanzado

## Qué hace este skill

Optimizás el render con batching, microtasks, layout y composición del navegador. En este nivel se entrega: **Usar batching y planificación con rAF y microtasks**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendering eficiente** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Batch de actualizaciones con requestAnimationFrame
2. Diferenciar microtasks de tasks en el render
3. Implementar virtual scrolling para listas largas
4. Usar IntersectionObserver para carga perezosa

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar batching y planificación con rAF y microtasks | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Batch de actualizaciones con requestAnimationFrame · Diferenciar microtasks de tasks en el render · Implementar virtual scrolling para listas largas · Usar IntersectionObserver para carga perezosa | lista | sí | 3-4 pasos |
| $criterios_clave | Las actualizaciones batch evitan renders múltiples · El virtual scrolling mantiene pocos nodos en el DOM | lista | sí | calidad verificable |
| $prompt_guia | El buscador renderiza 4 veces por keystroke: batcheá las actualizaciones con rAF y virtual scrolling para la lista de 50k resultados. | texto | no | "Rendering eficiente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las actualizaciones batch evitan renders múltiples
- [ ] El virtual scrolling mantiene pocos nodos en el DOM

## Ejemplos de prompts

- "El buscador renderiza 4 veces por keystroke: batcheá las actualizaciones con rAF y virtual scrolling para la lista de 50k resultados."
- "Aplica Rendering eficiente (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza Las actualizaciones batch evitan renders múltiples"
- "Revisa mi web-apis-fetch y dime qué pasos de Rendering eficiente me faltan en este nivel"