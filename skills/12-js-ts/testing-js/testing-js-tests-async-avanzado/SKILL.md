---
name: testing-js-tests-async-avanzado
description: Tests async · nivel Avanzado · Testing JS/TS. Probás código asíncrono: promesas, timers, eventos y flujos con tiempo. Objetivo del nivel: Controlar timers y flujos asíncronos con fake timers
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-async"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests async — Avanzado

## Qué hace este skill

Probás código asíncrono: promesas, timers, eventos y flujos con tiempo. En este nivel se entrega: **Controlar timers y flujos asíncronos con fake timers**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests async** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar vi.useFakeTimers para controlar el tiempo
2. Avanzar el tiempo con advanceTimersByTime
3. Testear debounce y timeouts
4. Combinar fake timers con promesas correctamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Controlar timers y flujos asíncronos con fake timers | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Usar vi.useFakeTimers para controlar el tiempo · Avanzar el tiempo con advanceTimersByTime · Testear debounce y timeouts · Combinar fake timers con promesas correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests con timers no dependen del tiempo real · El debounce se testea avanzando el reloj | lista | sí | calidad verificable |
| $prompt_guia | Testeá el buscador con debounce de 300ms usando fake timers: verificá que no busque antes del tiempo y que busque una vez al avanzar el reloj. | texto | no | "Tests async" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests con timers no dependen del tiempo real
- [ ] El debounce se testea avanzando el reloj

## Ejemplos de prompts

- "Testeá el buscador con debounce de 300ms usando fake timers: verificá que no busque antes del tiempo y que busque una vez al avanzar el reloj."
- "Aplica Tests async (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Los tests con timers no dependen del tiempo real"
- "Revisa mi testing-js y dime qué pasos de Tests async me faltan en este nivel"