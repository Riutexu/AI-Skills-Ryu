---
name: frontend-spa-rendering-dom-profesional
description: Rendering y DOM · nivel Profesional · SPAs vanilla y Vite. Renderizás vistas de forma eficiente, evitando reflows y actualizaciones innecesarias del DOM. Objetivo del nivel: Diseñar el sistema de render de la SPA con rendimiento medible
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "rendering-dom"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Rendering y DOM — Profesional

## Qué hace este skill

Renderizás vistas de forma eficiente, evitando reflows y actualizaciones innecesarias del DOM. En este nivel se entrega: **Diseñar el sistema de render de la SPA con rendimiento medible**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendering y DOM** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la estrategia de render por tipo de vista
2. Implementar renderización por windowing para listas enormes
3. Medir rendimiento con Performance API
4. Documentar los patrones de render del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de render de la SPA con rendimiento medible | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Definir la estrategia de render por tipo de vista · Implementar renderización por windowing para listas enormes · Medir rendimiento con Performance API · Documentar los patrones de render del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Las listas de 100k filas renderizan fluidas · Las métricas de render se miden y se reportan | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el sistema de render de la SPA: virtual windowing para la tabla de logs (100k filas), estrategia por vista, medición con Performance API y patrones documentados. | texto | no | "Rendering y DOM" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las listas de 100k filas renderizan fluidas
- [ ] Las métricas de render se miden y se reportan

## Ejemplos de prompts

- "Diseñá el sistema de render de la SPA: virtual windowing para la tabla de logs (100k filas), estrategia por vista, medición con Performance API y patrones documentados."
- "Aplica Rendering y DOM (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza Las listas de 100k filas renderizan fluidas"
- "Revisa mi frontend-spa y dime qué pasos de Rendering y DOM me faltan en este nivel"