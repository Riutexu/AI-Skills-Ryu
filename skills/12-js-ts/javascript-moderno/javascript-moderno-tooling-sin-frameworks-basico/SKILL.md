---
name: javascript-moderno-tooling-sin-frameworks-basico
description: Tooling sin frameworks · nivel Básico · JavaScript moderno: ES2024. Montás un proyecto vanilla con Vite, scripts, lint y test sin la carga de un framework. Objetivo del nivel: Inicializar un proyecto vanilla con Vite y scripts npm
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tooling-sin-frameworks"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Tooling sin frameworks — Básico

## Qué hace este skill

Montás un proyecto vanilla con Vite, scripts, lint y test sin la carga de un framework. En este nivel se entrega: **Inicializar un proyecto vanilla con Vite y scripts npm**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tooling sin frameworks** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un proyecto Vite vanilla con npm create
2. Agregar scripts de dev, build y preview al package.json
3. Instalar y configurar Vitest como runner de tests
4. Correr el dev server y el build de producción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Inicializar un proyecto vanilla con Vite y scripts npm | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear un proyecto Vite vanilla con npm create · Agregar scripts de dev, build y preview al package.json · Instalar y configurar Vitest como runner de tests · Correr el dev server y el build de producción | lista | sí | 3-4 pasos |
| $criterios_clave | El build de producción se genera sin errores · Los scripts funcionan desde un clon limpio | lista | sí | calidad verificable |
| $prompt_guia | Inicializá un proyecto vanilla con Vite para la SPA, agregá Vitest con un test de humo y dejá los scripts de dev/build/test documentados en el README. | texto | no | "Tooling sin frameworks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El build de producción se genera sin errores
- [ ] Los scripts funcionan desde un clon limpio

## Ejemplos de prompts

- "Inicializá un proyecto vanilla con Vite para la SPA, agregá Vitest con un test de humo y dejá los scripts de dev/build/test documentados en el README."
- "Aplica Tooling sin frameworks (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El build de producción se genera sin errores"
- "Revisa mi javascript-moderno y dime qué pasos de Tooling sin frameworks me faltan en este nivel"