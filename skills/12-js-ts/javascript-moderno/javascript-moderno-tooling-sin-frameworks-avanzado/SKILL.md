---
name: javascript-moderno-tooling-sin-frameworks-avanzado
description: Tooling sin frameworks · nivel Avanzado · JavaScript moderno: ES2024. Montás un proyecto vanilla con Vite, scripts, lint y test sin la carga de un framework. Objetivo del nivel: Configurar tooling con ESLint, Prettier y aliases
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tooling-sin-frameworks"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Tooling sin frameworks — Avanzado

## Qué hace este skill

Montás un proyecto vanilla con Vite, scripts, lint y test sin la carga de un framework. En este nivel se entrega: **Configurar tooling con ESLint, Prettier y aliases**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tooling sin frameworks** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar ESLint con flat config para el proyecto
2. Integrar Prettier con ESLint sin conflictos
3. Configurar alias de importación en Vite y jsconfig
4. Agregar scripts de lint y format con pre-commit

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Configurar tooling con ESLint, Prettier y aliases | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Configurar ESLint con flat config para el proyecto · Integrar Prettier con ESLint sin conflictos · Configurar alias de importación en Vite y jsconfig · Agregar scripts de lint y format con pre-commit | lista | sí | 3-4 pasos |
| $criterios_clave | El lint pasa sin errores ni warnings · Los aliases funcionan en build, tests y editor | lista | sí | calidad verificable |
| $prompt_guia | Configurá ESLint flat config + Prettier en el proyecto vanilla, con alias @/ para src/, y dejá un script de fix que el equipo pueda correr antes de commitear. | texto | no | "Tooling sin frameworks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El lint pasa sin errores ni warnings
- [ ] Los aliases funcionan en build, tests y editor

## Ejemplos de prompts

- "Configurá ESLint flat config + Prettier en el proyecto vanilla, con alias @/ para src/, y dejá un script de fix que el equipo pueda correr antes de commitear."
- "Aplica Tooling sin frameworks (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El lint pasa sin errores ni warnings"
- "Revisa mi javascript-moderno y dime qué pasos de Tooling sin frameworks me faltan en este nivel"