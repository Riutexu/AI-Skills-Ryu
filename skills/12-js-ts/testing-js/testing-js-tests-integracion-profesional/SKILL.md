---
name: testing-js-tests-integracion-profesional
description: Tests de integración · nivel Profesional · Testing JS/TS. Probás la integración entre módulos, servicios y el backend sin ir a producción. Objetivo del nivel: Diseñar la estrategia de tests de integración con entornos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-integracion"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests de integración — Profesional

## Qué hace este skill

Probás la integración entre módulos, servicios y el backend sin ir a producción. En este nivel se entrega: **Diseñar la estrategia de tests de integración con entornos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de integración** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los entornos de test y sus datos
2. Crear el fixture del ambiente de integración
3. Automatizar los tests de integración en CI
4. Documentar las responsabilidades de cada capa de test

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de tests de integración con entornos | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir los entornos de test y sus datos · Crear el fixture del ambiente de integración · Automatizar los tests de integración en CI · Documentar las responsabilidades de cada capa de test | lista | sí | 3-4 pasos |
| $criterios_clave | Los entornos de test se crean reproducibles · La integración se automatiza sin intervención manual | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia de integración: entorno de test reproducible con seeds, automatización en CI y documentación de qué cubre cada capa de test. | texto | no | "Tests de integración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los entornos de test se crean reproducibles
- [ ] La integración se automatiza sin intervención manual

## Ejemplos de prompts

- "Diseñá la estrategia de integración: entorno de test reproducible con seeds, automatización en CI y documentación de qué cubre cada capa de test."
- "Aplica Tests de integración (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza Los entornos de test se crean reproducibles"
- "Revisa mi testing-js y dime qué pasos de Tests de integración me faltan en este nivel"