---
name: testing-js-matchers-assertions-basico
description: Matchers y assertions · nivel Básico · Testing JS/TS. Asertás con matchers precisos: igualdad, parcialidad, excepciones y composición. Objetivo del nivel: Usar matchers básicos de Vitest
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "matchers-assertions"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Matchers y assertions — Básico

## Qué hace este skill

Asertás con matchers precisos: igualdad, parcialidad, excepciones y composición. En este nivel se entrega: **Usar matchers básicos de Vitest**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Matchers y assertions** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Comparar con toBe y toEqual distinguiendo sus diferencias
2. Verificar arrays y objetos con toContain y toHaveProperty
3. Comprobar valores truthy y falsy
4. Escribir assertions descriptivas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar matchers básicos de Vitest | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Comparar con toBe y toEqual distinguiendo sus diferencias · Verificar arrays y objetos con toContain y toHaveProperty · Comprobar valores truthy y falsy · Escribir assertions descriptivas | lista | sí | 3-4 pasos |
| $criterios_clave | toBe se usa para referencias y toEqual para valores · Las assertions verifican el comportamiento correcto | lista | sí | calidad verificable |
| $prompt_guia | Escribí tests para el módulo de precios usando toBe, toEqual, toHaveProperty y toContain, distinguiendo cuándo corresponde cada uno. | texto | no | "Matchers y assertions" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] toBe se usa para referencias y toEqual para valores
- [ ] Las assertions verifican el comportamiento correcto

## Ejemplos de prompts

- "Escribí tests para el módulo de precios usando toBe, toEqual, toHaveProperty y toContain, distinguiendo cuándo corresponde cada uno."
- "Aplica Matchers y assertions (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza toBe se usa para referencias y toEqual para valores"
- "Revisa mi testing-js y dime qué pasos de Matchers y assertions me faltan en este nivel"