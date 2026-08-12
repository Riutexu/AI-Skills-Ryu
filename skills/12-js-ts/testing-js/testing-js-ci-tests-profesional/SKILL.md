---
name: testing-js-ci-tests-profesional
description: CI con tests · nivel Profesional · Testing JS/TS. Integrás la ejecución de tests en el pipeline de CI con velocidad y reportes. Objetivo del nivel: Diseñar el pipeline de calidad completo del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "ci-tests"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# CI con tests — Profesional

## Qué hace este skill

Integrás la ejecución de tests en el pipeline de CI con velocidad y reportes. En este nivel se entrega: **Diseñar el pipeline de calidad completo del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI con tests** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los checks del gate de calidad (lint, type, test, coverage)
2. Integrar E2E en el flujo de CI sin duplicar trabajo
3. Configurar la matriz de Node y browsers
4. Documentar el pipeline y sus tiempos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el pipeline de calidad completo del proyecto | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir los checks del gate de calidad (lint, type, test, coverage) · Integrar E2E en el flujo de CI sin duplicar trabajo · Configurar la matriz de Node y browsers · Documentar el pipeline y sus tiempos | lista | sí | 3-4 pasos |
| $criterios_clave | El gate de calidad es completo y medible · Los tiempos del pipeline se conocen y optimizan | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el pipeline de calidad: gate completo con lint, typecheck, unit, integración y E2E; matrices de versiones y documentación de tiempos por etapa. | texto | no | "CI con tests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El gate de calidad es completo y medible
- [ ] Los tiempos del pipeline se conocen y optimizan

## Ejemplos de prompts

- "Diseñá el pipeline de calidad: gate completo con lint, typecheck, unit, integración y E2E; matrices de versiones y documentación de tiempos por etapa."
- "Aplica CI con tests (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza El gate de calidad es completo y medible"
- "Revisa mi testing-js y dime qué pasos de CI con tests me faltan en este nivel"