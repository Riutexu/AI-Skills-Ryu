---
name: testing-js-tests-async-basico
description: Tests async · nivel Básico · Testing JS/TS. Probás código asíncrono: promesas, timers, eventos y flujos con tiempo. Objetivo del nivel: Testear promesas y async/await
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-async"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests async — Básico

## Qué hace este skill

Probás código asíncrono: promesas, timers, eventos y flujos con tiempo. En este nivel se entrega: **Testear promesas y async/await**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests async** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear funciones que devuelven promesas con await
2. Verificar rechazos con rejects
3. Esperar operaciones asíncronas en los tests
4. Evitar assertions sin await que pasan de más

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Testear promesas y async/await | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Testear funciones que devuelven promesas con await · Verificar rechazos con rejects · Esperar operaciones asíncronas en los tests · Evitar assertions sin await que pasan de más | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún test asíncrono queda sin await · Los rechazos se verifican con rejects | lista | sí | calidad verificable |
| $prompt_guia | Escribí tests para los servicios asíncronos: resultados con await, errores con rejects y ningún test que pase por estar sin await. | texto | no | "Tests async" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún test asíncrono queda sin await
- [ ] Los rechazos se verifican con rejects

## Ejemplos de prompts

- "Escribí tests para los servicios asíncronos: resultados con await, errores con rejects y ningún test que pase por estar sin await."
- "Aplica Tests async (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Ningún test asíncrono queda sin await"
- "Revisa mi testing-js y dime qué pasos de Tests async me faltan en este nivel"