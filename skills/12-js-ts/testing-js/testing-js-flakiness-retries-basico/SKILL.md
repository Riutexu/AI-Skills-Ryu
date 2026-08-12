---
name: testing-js-flakiness-retries-basico
description: Flakiness y retries · nivel Básico · Testing JS/TS. Detectás, corregís y previenes tests intermitentes con retries y diagnóstico. Objetivo del nivel: Configurar retries y detectar tests flaky
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "flakiness-retries"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Flakiness y retries — Básico

## Qué hace este skill

Detectás, corregís y previenes tests intermitentes con retries y diagnóstico. En este nivel se entrega: **Configurar retries y detectar tests flaky**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flakiness y retries** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar retries en Vitest y Playwright
2. Reproducir un test flaky con --repeat
3. Identificar causas comunes de flakiness
4. Aislar un test que depende de otro

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar retries y detectar tests flaky | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar retries en Vitest y Playwright · Reproducir un test flaky con --repeat · Identificar causas comunes de flakiness · Aislar un test que depende de otro | lista | sí | 3-4 pasos |
| $criterios_clave | Los retries están configurados en CI · Los tests dependientes se identifican y corrigen | lista | sí | calidad verificable |
| $prompt_guia | El CI falla de vez en cuando: configurá retries, reproducí el test flaky con --repeat 20 y encontrá la causa raíz. | texto | no | "Flakiness y retries" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los retries están configurados en CI
- [ ] Los tests dependientes se identifican y corrigen

## Ejemplos de prompts

- "El CI falla de vez en cuando: configurá retries, reproducí el test flaky con --repeat 20 y encontrá la causa raíz."
- "Aplica Flakiness y retries (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Los retries están configurados en CI"
- "Revisa mi testing-js y dime qué pasos de Flakiness y retries me faltan en este nivel"