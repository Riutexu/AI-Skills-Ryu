---
name: testing-js-matchers-assertions-profesional
description: Matchers y assertions · nivel Profesional · Testing JS/TS. Asertás con matchers precisos: igualdad, parcialidad, excepciones y composición. Objetivo del nivel: Crear matchers y aserciones de dominio propias
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "matchers-assertions"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Matchers y assertions — Profesional

## Qué hace este skill

Asertás con matchers precisos: igualdad, parcialidad, excepciones y composición. En este nivel se entrega: **Crear matchers y aserciones de dominio propias**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Matchers y assertions** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir matchers personalizados con expect.extend
2. Crear aserciones tipadas para el dominio
3. Documentar los matchers custom del proyecto
4. Mantener mensajes de fallo accionables

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Crear matchers y aserciones de dominio propias | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Escribir matchers personalizados con expect.extend · Crear aserciones tipadas para el dominio · Documentar los matchers custom del proyecto · Mantener mensajes de fallo accionables | lista | sí | 3-4 pasos |
| $criterios_clave | Los matchers custom tienen mensajes de fallo claros · Las aserciones de dominio se reutilizan entre suites | lista | sí | calidad verificable |
| $prompt_guia | Creá matchers personalizados (toBeValidCuit, toBeValidIban, toMatchSchema) con expect.extend y mensajes de fallo que digan qué esperaba y qué recibió. | texto | no | "Matchers y assertions" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los matchers custom tienen mensajes de fallo claros
- [ ] Las aserciones de dominio se reutilizan entre suites

## Ejemplos de prompts

- "Creá matchers personalizados (toBeValidCuit, toBeValidIban, toMatchSchema) con expect.extend y mensajes de fallo que digan qué esperaba y qué recibió."
- "Aplica Matchers y assertions (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza Los matchers custom tienen mensajes de fallo claros"
- "Revisa mi testing-js y dime qué pasos de Matchers y assertions me faltan en este nivel"