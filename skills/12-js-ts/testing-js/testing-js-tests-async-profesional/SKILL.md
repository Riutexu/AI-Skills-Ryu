---
name: testing-js-tests-async-profesional
description: Tests async · nivel Profesional · Testing JS/TS. Probás código asíncrono: promesas, timers, eventos y flujos con tiempo. Objetivo del nivel: Probar flujos asíncronos complejos y race conditions
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-async"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests async — Profesional

## Qué hace este skill

Probás código asíncrono: promesas, timers, eventos y flujos con tiempo. En este nivel se entrega: **Probar flujos asíncronos complejos y race conditions**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests async** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear concurrencia con Promise.all y sus fallos
2. Verificar cancelación de flujos con AbortController
3. Testear reintentos con backoff con fake timers
4. Documentar los patrones de tests async del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Probar flujos asíncronos complejos y race conditions | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Testear concurrencia con Promise.all y sus fallos · Verificar cancelación de flujos con AbortController · Testear reintentos con backoff con fake timers · Documentar los patrones de tests async del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Los flujos de reintentos y cancelación están cubiertos · No hay flakiness por timing en los tests | lista | sí | calidad verificable |
| $prompt_guia | Escribí tests del flujo de reintentos con backoff: avanzá el reloj en cada intento, verificá el límite de reintentos y la cancelación con AbortController. | texto | no | "Tests async" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los flujos de reintentos y cancelación están cubiertos
- [ ] No hay flakiness por timing en los tests

## Ejemplos de prompts

- "Escribí tests del flujo de reintentos con backoff: avanzá el reloj en cada intento, verificá el límite de reintentos y la cancelación con AbortController."
- "Aplica Tests async (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza Los flujos de reintentos y cancelación están cubiertos"
- "Revisa mi testing-js y dime qué pasos de Tests async me faltan en este nivel"