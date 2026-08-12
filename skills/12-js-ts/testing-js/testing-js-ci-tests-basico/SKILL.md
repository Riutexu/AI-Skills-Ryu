---
name: testing-js-ci-tests-basico
description: CI con tests · nivel Básico · Testing JS/TS. Integrás la ejecución de tests en el pipeline de CI con velocidad y reportes. Objetivo del nivel: Correr los tests en un pipeline de CI básico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "ci-tests"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# CI con tests — Básico

## Qué hace este skill

Integrás la ejecución de tests en el pipeline de CI con velocidad y reportes. En este nivel se entrega: **Correr los tests en un pipeline de CI básico**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI con tests** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar un job de CI que instale y corra los tests
2. Cachear dependencias para acelerar
3. Fijar la versión de Node en el pipeline
4. Publicar el resultado del job

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Correr los tests en un pipeline de CI básico | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar un job de CI que instale y corra los tests · Cachear dependencias para acelerar · Fijar la versión de Node en el pipeline · Publicar el resultado del job | lista | sí | 3-4 pasos |
| $criterios_clave | El job de CI corre los tests en cada push · La cache acelera la instalación | lista | sí | calidad verificable |
| $prompt_guia | Configurá el job de CI del proyecto: checkout, setup de Node 22 con cache y npm test en cada push, con el resultado visible en el PR. | texto | no | "CI con tests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El job de CI corre los tests en cada push
- [ ] La cache acelera la instalación

## Ejemplos de prompts

- "Configurá el job de CI del proyecto: checkout, setup de Node 22 con cache y npm test en cada push, con el resultado visible en el PR."
- "Aplica CI con tests (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza El job de CI corre los tests en cada push"
- "Revisa mi testing-js y dime qué pasos de CI con tests me faltan en este nivel"