---
name: web-apis-fetch-web-components-avanzados-profesional
description: Web components avanzados · nivel Profesional · APIs del navegador. Llevás custom elements al límite: composition, forms, lazy upgrade y frameworks externos. Objetivo del nivel: Diseñar el sistema de web components escalable
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "web-components-avanzados"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Web components avanzados — Profesional

## Qué hace este skill

Llevás custom elements al límite: composition, forms, lazy upgrade y frameworks externos. En este nivel se entrega: **Diseñar el sistema de web components escalable**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Web components avanzados** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el modelo de composición y slots del sistema
2. Implementar lazy loading y upgrade de componentes
3. Asegurar compatibilidad con los tests y el SSR
4. Documentar las convenciones avanzadas del sistema

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de web components escalable | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Definir el modelo de composición y slots del sistema · Implementar lazy loading y upgrade de componentes · Asegurar compatibilidad con los tests y el SSR · Documentar las convenciones avanzadas del sistema | lista | sí | 3-4 pasos |
| $criterios_clave | Los componentes cargan bajo demanda sin jank · El sistema se documenta con ejemplos de composición | lista | sí | calidad verificable |
| $prompt_guia | El sistema de componentes creció a 40 elementos: diseñá el modelo de composición, lazy loading con import dinámico y la documentación de convenciones avanzadas. | texto | no | "Web components avanzados" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los componentes cargan bajo demanda sin jank
- [ ] El sistema se documenta con ejemplos de composición

## Ejemplos de prompts

- "El sistema de componentes creció a 40 elementos: diseñá el modelo de composición, lazy loading con import dinámico y la documentación de convenciones avanzadas."
- "Aplica Web components avanzados (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza Los componentes cargan bajo demanda sin jank"
- "Revisa mi web-apis-fetch y dime qué pasos de Web components avanzados me faltan en este nivel"