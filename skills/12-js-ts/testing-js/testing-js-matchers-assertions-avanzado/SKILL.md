---
name: testing-js-matchers-assertions-avanzado
description: Matchers y assertions · nivel Avanzado · Testing JS/TS. Asertás con matchers precisos: igualdad, parcialidad, excepciones y composición. Objetivo del nivel: Asertar excepciones, números y composiciones parciales
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "matchers-assertions"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Matchers y assertions — Avanzado

## Qué hace este skill

Asertás con matchers precisos: igualdad, parcialidad, excepciones y composición. En este nivel se entrega: **Asertar excepciones, números y composiciones parciales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Matchers y assertions** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar excepciones con toThrow y sus mensajes
2. Comparar números con tolerancia (toBeCloseTo)
3. Usar expect.objectContaining y expect.arrayContaining
4. Componer negaciones con not

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Asertar excepciones, números y composiciones parciales | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Verificar excepciones con toThrow y sus mensajes · Comparar números con tolerancia (toBeCloseTo) · Usar expect.objectContaining y expect.arrayContaining · Componer negaciones con not | lista | sí | 3-4 pasos |
| $criterios_clave | toThrow verifica mensaje y tipo de error · Las aserciones parciales no acoplan a detalles irrelevantes | lista | sí | calidad verificable |
| $prompt_guia | Completá los tests del módulo de pagos: toThrow para errores de validación, toBeCloseTo para montos con decimales y expect.objectContaining para las respuestas. | texto | no | "Matchers y assertions" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] toThrow verifica mensaje y tipo de error
- [ ] Las aserciones parciales no acoplan a detalles irrelevantes

## Ejemplos de prompts

- "Completá los tests del módulo de pagos: toThrow para errores de validación, toBeCloseTo para montos con decimales y expect.objectContaining para las respuestas."
- "Aplica Matchers y assertions (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza toThrow verifica mensaje y tipo de error"
- "Revisa mi testing-js y dime qué pasos de Matchers y assertions me faltan en este nivel"