---
name: testing-js-flakiness-retries-profesional
description: Flakiness y retries · nivel Profesional · Testing JS/TS. Detectás, corregís y previenes tests intermitentes con retries y diagnóstico. Objetivo del nivel: Gestionar la confiabilidad de la suite a largo plazo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "flakiness-retries"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Flakiness y retries — Profesional

## Qué hace este skill

Detectás, corregís y previenes tests intermitentes con retries y diagnóstico. En este nivel se entrega: **Gestionar la confiabilidad de la suite a largo plazo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flakiness y retries** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Medir la tasa de flakiness del pipeline
2. Crear un proceso de cuarentena de tests flaky
3. Automatizar la detección de flakiness con repeticiones en CI
4. Documentar los patrones anti-flakiness del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gestionar la confiabilidad de la suite a largo plazo | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Medir la tasa de flakiness del pipeline · Crear un proceso de cuarentena de tests flaky · Automatizar la detección de flakiness con repeticiones en CI · Documentar los patrones anti-flakiness del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | La tasa de flakiness se mide y baja de forma sostenida · Los tests flaky van a cuarentena con ticket | lista | sí | calidad verificable |
| $prompt_guia | El 3% de las corridas de CI fallan por flakiness: diseñá la medición, el proceso de cuarentena con ticket y los patrones anti-flakiness documentados para el equipo. | texto | no | "Flakiness y retries" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La tasa de flakiness se mide y baja de forma sostenida
- [ ] Los tests flaky van a cuarentena con ticket

## Ejemplos de prompts

- "El 3% de las corridas de CI fallan por flakiness: diseñá la medición, el proceso de cuarentena con ticket y los patrones anti-flakiness documentados para el equipo."
- "Aplica Flakiness y retries (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza La tasa de flakiness se mide y baja de forma sostenida"
- "Revisa mi testing-js y dime qué pasos de Flakiness y retries me faltan en este nivel"