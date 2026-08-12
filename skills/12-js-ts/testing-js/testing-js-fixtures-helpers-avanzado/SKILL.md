---
name: testing-js-fixtures-helpers-avanzado
description: Fixtures y helpers · nivel Avanzado · Testing JS/TS. Creás datos de prueba realistas y helpers que hacen los tests legibles y fáciles de mantener. Objetivo del nivel: Crear factories con variabilidad controlada
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fixtures-helpers"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Fixtures y helpers — Avanzado

## Qué hace este skill

Creás datos de prueba realistas y helpers que hacen los tests legibles y fáciles de mantener. En este nivel se entrega: **Crear factories con variabilidad controlada**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fixtures y helpers** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar factories con overrides por test
2. Generar datos aleatorios controlados con seed
3. Crear fixtures por escenario (ok, error, vacío)
4. Compartir fixtures entre suites con helpers

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Crear factories con variabilidad controlada | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Implementar factories con overrides por test · Generar datos aleatorios controlados con seed · Crear fixtures por escenario (ok, error, vacío) · Compartir fixtures entre suites con helpers | lista | sí | 3-4 pasos |
| $criterios_clave | Los overrides cambian solo lo necesario · Los datos aleatorios son reproducibles con seed | lista | sí | calidad verificable |
| $prompt_guia | Creá una factory de pedidos con overrides por test y seed reproducible, más los fixtures de escenarios (ok, error, vacío) para las suites de servicios. | texto | no | "Fixtures y helpers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los overrides cambian solo lo necesario
- [ ] Los datos aleatorios son reproducibles con seed

## Ejemplos de prompts

- "Creá una factory de pedidos con overrides por test y seed reproducible, más los fixtures de escenarios (ok, error, vacío) para las suites de servicios."
- "Aplica Fixtures y helpers (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Los overrides cambian solo lo necesario"
- "Revisa mi testing-js y dime qué pasos de Fixtures y helpers me faltan en este nivel"