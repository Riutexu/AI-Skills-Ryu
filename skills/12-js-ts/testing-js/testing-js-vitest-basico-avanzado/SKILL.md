---
name: testing-js-vitest-basico-avanzado
description: Vitest básico · nivel Avanzado · Testing JS/TS. Configurás Vitest y escribís los primeros tests unitarios con describe/it. Objetivo del nivel: Estructurar suites y usar hooks de ciclo de vida
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vitest-basico"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Vitest básico — Avanzado

## Qué hace este skill

Configurás Vitest y escribís los primeros tests unitarios con describe/it. En este nivel se entrega: **Estructurar suites y usar hooks de ciclo de vida**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vitest básico** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar beforeEach y afterEach para setup
2. Organizar suites por módulo con describe anidados
3. Usar test.each para casos parametrizados
4. Saltar o marcar tests con todo y skip

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Estructurar suites y usar hooks de ciclo de vida | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Usar beforeEach y afterEach para setup · Organizar suites por módulo con describe anidados · Usar test.each para casos parametrizados · Saltar o marcar tests con todo y skip | lista | sí | 3-4 pasos |
| $criterios_clave | Los setups y teardowns son simétricos · Los casos parametrizados cubren los bordes | lista | sí | calidad verificable |
| $prompt_guia | Reestructurá la suite de validación de email con describe anidados, hooks de setup y test.each con 10 casos de borde. | texto | no | "Vitest básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los setups y teardowns son simétricos
- [ ] Los casos parametrizados cubren los bordes

## Ejemplos de prompts

- "Reestructurá la suite de validación de email con describe anidados, hooks de setup y test.each con 10 casos de borde."
- "Aplica Vitest básico (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Los setups y teardowns son simétricos"
- "Revisa mi testing-js y dime qué pasos de Vitest básico me faltan en este nivel"