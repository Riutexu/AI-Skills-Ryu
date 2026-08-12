---
name: javascript-moderno-variables-scope-avanzado
description: Variables y scope (let/const) · nivel Avanzado · JavaScript moderno: ES2024. Manejás declaración, hoisting, temporal dead zone y scoping de bloques con let y const. Objetivo del nivel: Aplicar scoping de cierres y captura de variables en loops
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "variables-scope"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Variables y scope (let/const) — Avanzado

## Qué hace este skill

Manejás declaración, hoisting, temporal dead zone y scoping de bloques con let y const. En este nivel se entrega: **Aplicar scoping de cierres y captura de variables en loops**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Variables y scope (let/const)** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Corregir el clásico bug de var en un for con setTimeout
2. Crear un contador con closures que capturen estado propio
3. Usar destructuring para intercambiar valores sin variable temporal
4. Analizar el shadowing de variables en scopes anidados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar scoping de cierres y captura de variables en loops | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Corregir el clásico bug de var en un for con setTimeout · Crear un contador con closures que capturen estado propio · Usar destructuring para intercambiar valores sin variable temporal · Analizar el shadowing de variables en scopes anidados | lista | sí | 3-4 pasos |
| $criterios_clave | Cada closure captura el valor correcto del loop · El código no depende del hoisting para funcionar | lista | sí | calidad verificable |
| $prompt_guia | Este for con var y setTimeout imprime siempre 5; arreglalo con let y después con closure, y contame cuál preferís y por qué en un comentario. | texto | no | "Variables y scope (let/const)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada closure captura el valor correcto del loop
- [ ] El código no depende del hoisting para funcionar

## Ejemplos de prompts

- "Este for con var y setTimeout imprime siempre 5; arreglalo con let y después con closure, y contame cuál preferís y por qué en un comentario."
- "Aplica Variables y scope (let/const) (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Cada closure captura el valor correcto del loop"
- "Revisa mi javascript-moderno y dime qué pasos de Variables y scope (let/const) me faltan en este nivel"