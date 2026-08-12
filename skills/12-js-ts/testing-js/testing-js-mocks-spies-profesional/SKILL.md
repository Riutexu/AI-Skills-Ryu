---
name: testing-js-mocks-spies-profesional
description: Mocks y spies · nivel Profesional · Testing JS/TS. Aislás dependencias con mocks, spies y stubs para testear unidades con precisión. Objetivo del nivel: Diseñar la estrategia de mocks del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "mocks-spies"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Mocks y spies — Profesional

## Qué hace este skill

Aislás dependencias con mocks, spies y stubs para testear unidades con precisión. En este nivel se entrega: **Diseñar la estrategia de mocks del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mocks y spies** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir qué mockear y qué no en cada capa
2. Crear factories de mocks reutilizables
3. Evitar el over-mocking que acopla tests
4. Documentar los patrones de mock del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de mocks del proyecto | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir qué mockear y qué no en cada capa · Crear factories de mocks reutilizables · Evitar el over-mocking que acopla tests · Documentar los patrones de mock del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests no se rompen por cambios internos irrelevantes · Las fábricas de mocks se reutilizan en todo el repo | lista | sí | calidad verificable |
| $prompt_guia | Definí la política de mocks del proyecto: qué capas se mockean, factories reutilizables y ejemplos de over-mocking que evitamos. Que los tests sobrevivan a refactors. | texto | no | "Mocks y spies" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests no se rompen por cambios internos irrelevantes
- [ ] Las fábricas de mocks se reutilizan en todo el repo

## Ejemplos de prompts

- "Definí la política de mocks del proyecto: qué capas se mockean, factories reutilizables y ejemplos de over-mocking que evitamos. Que los tests sobrevivan a refactors."
- "Aplica Mocks y spies (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza Los tests no se rompen por cambios internos irrelevantes"
- "Revisa mi testing-js y dime qué pasos de Mocks y spies me faltan en este nivel"