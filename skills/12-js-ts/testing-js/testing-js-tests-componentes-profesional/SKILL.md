---
name: testing-js-tests-componentes-profesional
description: Tests de componentes · nivel Profesional · Testing JS/TS. Probás componentes de la SPA en jsdom con Testing Library y user-event. Objetivo del nivel: Diseñar la suite de componentes del sistema
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-componentes"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests de componentes — Profesional

## Qué hace este skill

Probás componentes de la SPA en jsdom con Testing Library y user-event. En este nivel se entrega: **Diseñar la suite de componentes del sistema**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de componentes** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear helper de render con providers y estado de test
2. Escribir tests de accesibilidad de componentes
3. Probar composición de componentes complejos
4. Documentar los patrones de test de componentes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la suite de componentes del sistema | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Crear helper de render con providers y estado de test · Escribir tests de accesibilidad de componentes · Probar composición de componentes complejos · Documentar los patrones de test de componentes | lista | sí | 3-4 pasos |
| $criterios_clave | Los helpers de render se reutilizan en todas las suites · Los componentes clave tienen tests de accesibilidad | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la suite de tests de componentes del sistema: helper de render con estado, tests de accesibilidad para el modal y la tabla, y patrones documentados. | texto | no | "Tests de componentes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los helpers de render se reutilizan en todas las suites
- [ ] Los componentes clave tienen tests de accesibilidad

## Ejemplos de prompts

- "Diseñá la suite de tests de componentes del sistema: helper de render con estado, tests de accesibilidad para el modal y la tabla, y patrones documentados."
- "Aplica Tests de componentes (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza Los helpers de render se reutilizan en todas las suites"
- "Revisa mi testing-js y dime qué pasos de Tests de componentes me faltan en este nivel"