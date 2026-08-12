---
name: testing-js-ci-tests-avanzado
description: CI con tests · nivel Avanzado · Testing JS/TS. Integrás la ejecución de tests en el pipeline de CI con velocidad y reportes. Objetivo del nivel: Optimizar la velocidad y cubrir más checks en CI
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "ci-tests"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# CI con tests — Avanzado

## Qué hace este skill

Integrás la ejecución de tests en el pipeline de CI con velocidad y reportes. En este nivel se entrega: **Optimizar la velocidad y cubrir más checks en CI**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI con tests** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Dividir los tests con paralelismo por shards
2. Correr lint, typecheck y tests en jobs separados
3. Subir cobertura y reportes como artefactos
4. Bloquear el merge si falla algún job

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Optimizar la velocidad y cubrir más checks en CI | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Dividir los tests con paralelismo por shards · Correr lint, typecheck y tests en jobs separados · Subir cobertura y reportes como artefactos · Bloquear el merge si falla algún job | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline completo corre en menos de 5 minutos · El merge se bloquea ante fallos | lista | sí | calidad verificable |
| $prompt_guia | Optimizá el pipeline: shards de tests en paralelo, jobs separados de lint/typecheck/test y cobertura como artefacto, con merge bloqueado ante fallos. | texto | no | "CI con tests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline completo corre en menos de 5 minutos
- [ ] El merge se bloquea ante fallos

## Ejemplos de prompts

- "Optimizá el pipeline: shards de tests en paralelo, jobs separados de lint/typecheck/test y cobertura como artefacto, con merge bloqueado ante fallos."
- "Aplica CI con tests (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza El pipeline completo corre en menos de 5 minutos"
- "Revisa mi testing-js y dime qué pasos de CI con tests me faltan en este nivel"