---
name: testing-js-tests-componentes-avanzado
description: Tests de componentes · nivel Avanzado · Testing JS/TS. Probás componentes de la SPA en jsdom con Testing Library y user-event. Objetivo del nivel: Probar interacciones y estados con user-event
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-componentes"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests de componentes — Avanzado

## Qué hace este skill

Probás componentes de la SPA en jsdom con Testing Library y user-event. En este nivel se entrega: **Probar interacciones y estados con user-event**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de componentes** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar user-event para clicks, typing y focus
2. Probar estados de carga y error en componentes
3. Testear formularios completos de componentes
4. Esperar cambios con waitFor y findBy

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Probar interacciones y estados con user-event | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Usar user-event para clicks, typing y focus · Probar estados de carga y error en componentes · Testear formularios completos de componentes · Esperar cambios con waitFor y findBy | lista | sí | 3-4 pasos |
| $criterios_clave | Las interacciones con user-event son realistas · Los estados asíncronos se esperan con findBy | lista | sí | calidad verificable |
| $prompt_guia | Escribí tests del componente de login: typing con user-event, submit, estados de carga y error, y espera de elementos con findBy. | texto | no | "Tests de componentes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las interacciones con user-event son realistas
- [ ] Los estados asíncronos se esperan con findBy

## Ejemplos de prompts

- "Escribí tests del componente de login: typing con user-event, submit, estados de carga y error, y espera de elementos con findBy."
- "Aplica Tests de componentes (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Las interacciones con user-event son realistas"
- "Revisa mi testing-js y dime qué pasos de Tests de componentes me faltan en este nivel"