---
name: testing-js-vitest-basico-basico
description: Vitest básico · nivel Básico · Testing JS/TS. Configurás Vitest y escribís los primeros tests unitarios con describe/it. Objetivo del nivel: Configurar Vitest y escribir tests básicos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vitest-basico"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Vitest básico — Básico

## Qué hace este skill

Configurás Vitest y escribís los primeros tests unitarios con describe/it. En este nivel se entrega: **Configurar Vitest y escribir tests básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vitest básico** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar Vitest con entorno node y jsdom
2. Escribir tests con describe, it y expect
3. Ejecutar tests en modo watch
4. Organizar tests junto al código o en carpeta test

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar Vitest y escribir tests básicos | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar Vitest con entorno node y jsdom · Escribir tests con describe, it y expect · Ejecutar tests en modo watch · Organizar tests junto al código o en carpeta test | lista | sí | 3-4 pasos |
| $criterios_clave | Vitest corre desde npm test · Los tests describen comportamiento esperado | lista | sí | calidad verificable |
| $prompt_guia | Configurá Vitest en el proyecto, escribí los primeros tests de la función de cálculo de IVA con describe/it y dejá npm test funcionando. | texto | no | "Vitest básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Vitest corre desde npm test
- [ ] Los tests describen comportamiento esperado

## Ejemplos de prompts

- "Configurá Vitest en el proyecto, escribí los primeros tests de la función de cálculo de IVA con describe/it y dejá npm test funcionando."
- "Aplica Vitest básico (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Vitest corre desde npm test"
- "Revisa mi testing-js y dime qué pasos de Vitest básico me faltan en este nivel"