---
name: testing-js-e2e-playwright-avanzado
description: E2E con Playwright · nivel Avanzado · Testing JS/TS. Probás flujos completos en navegadores reales con Playwright, con fixtures y esperas robustas. Objetivo del nivel: Manejar estados, autenticación y esperas robustas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "e2e-playwright"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# E2E con Playwright — Avanzado

## Qué hace este skill

Probás flujos completos en navegadores reales con Playwright, con fixtures y esperas robustas. En este nivel se entrega: **Manejar estados, autenticación y esperas robustas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **E2E con Playwright** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar storageState para reutilizar la sesión
2. Interceptar y mockear respuestas de red con route
3. Esperar condiciones con expect.poll y toBeVisible
4. Organizar los tests con describe y fixtures

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar estados, autenticación y esperas robustas | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Usar storageState para reutilizar la sesión · Interceptar y mockear respuestas de red con route · Esperar condiciones con expect.poll y toBeVisible · Organizar los tests con describe y fixtures | lista | sí | 3-4 pasos |
| $criterios_clave | Las suites no se re-loguean en cada test · Los tests no dependen del backend real | lista | sí | calidad verificable |
| $prompt_guia | Optimizá la suite E2E: storageState para la sesión, interceptación de la API con route para el entorno de test y esperas robustas en todos los flujos. | texto | no | "E2E con Playwright" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las suites no se re-loguean en cada test
- [ ] Los tests no dependen del backend real

## Ejemplos de prompts

- "Optimizá la suite E2E: storageState para la sesión, interceptación de la API con route para el entorno de test y esperas robustas en todos los flujos."
- "Aplica E2E con Playwright (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Las suites no se re-loguean en cada test"
- "Revisa mi testing-js y dime qué pasos de E2E con Playwright me faltan en este nivel"