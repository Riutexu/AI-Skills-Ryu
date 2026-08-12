---
name: frontend-spa-rendering-dom-avanzado
description: Rendering y DOM · nivel Avanzado · SPAs vanilla y Vite. Renderizás vistas de forma eficiente, evitando reflows y actualizaciones innecesarias del DOM. Objetivo del nivel: Aplicar técnicas de render eficiente y diffs manuales
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "rendering-dom"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Rendering y DOM — Avanzado

## Qué hace este skill

Renderizás vistas de forma eficiente, evitando reflows y actualizaciones innecesarias del DOM. En este nivel se entrega: **Aplicar técnicas de render eficiente y diffs manuales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendering y DOM** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Actualizar solo nodos cambiados en lugar de re-renderizar
2. Usar DocumentFragment para batch de nodos
3. Evitar layout thrashing agrupando lecturas y escrituras
4. Implementar un virtual DOM mínimo si hace falta

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar técnicas de render eficiente y diffs manuales | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Actualizar solo nodos cambiados en lugar de re-renderizar · Usar DocumentFragment para batch de nodos · Evitar layout thrashing agrupando lecturas y escrituras · Implementar un virtual DOM mínimo si hace falta | lista | sí | 3-4 pasos |
| $criterios_clave | Los re-renders no afectan nodos sin cambios · Las listas largas renderizan sin saltos perceptibles | lista | sí | calidad verificable |
| $prompt_guia | Optimizá el render de la tabla de 5000 filas: batch con DocumentFragment, actualizaciones por diffs de filas y sin reflows innecesarios al filtrar. | texto | no | "Rendering y DOM" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los re-renders no afectan nodos sin cambios
- [ ] Las listas largas renderizan sin saltos perceptibles

## Ejemplos de prompts

- "Optimizá el render de la tabla de 5000 filas: batch con DocumentFragment, actualizaciones por diffs de filas y sin reflows innecesarios al filtrar."
- "Aplica Rendering y DOM (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los re-renders no afectan nodos sin cambios"
- "Revisa mi frontend-spa y dime qué pasos de Rendering y DOM me faltan en este nivel"