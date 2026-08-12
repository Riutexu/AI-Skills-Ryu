---
name: testing-js-coverage-basico
description: Coverage · nivel Básico · Testing JS/TS. Medís y gestionás la cobertura de código con umbrales y reportes accionables. Objetivo del nivel: Configurar la cobertura con Vitest
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "coverage"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Coverage — Básico

## Qué hace este skill

Medís y gestionás la cobertura de código con umbrales y reportes accionables. En este nivel se entrega: **Configurar la cobertura con Vitest**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coverage** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar @vitest/coverage-v8
2. Generar el reporte de cobertura por archivo
3. Interpretar statements, branches, functions y lines
4. Ejecutar coverage desde npm script

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar la cobertura con Vitest | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar @vitest/coverage-v8 · Generar el reporte de cobertura por archivo · Interpretar statements, branches, functions y lines · Ejecutar coverage desde npm script | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte de cobertura se genera sin errores · Los números se interpretan correctamente | lista | sí | calidad verificable |
| $prompt_guia | Configurá la cobertura de Vitest con @vitest/coverage-v8 y explicá el reporte: qué archivos están al descubierto y por qué. | texto | no | "Coverage" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte de cobertura se genera sin errores
- [ ] Los números se interpretan correctamente

## Ejemplos de prompts

- "Configurá la cobertura de Vitest con @vitest/coverage-v8 y explicá el reporte: qué archivos están al descubierto y por qué."
- "Aplica Coverage (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza El reporte de cobertura se genera sin errores"
- "Revisa mi testing-js y dime qué pasos de Coverage me faltan en este nivel"