---
name: testing-js-e2e-playwright-basico
description: E2E con Playwright · nivel Básico · Testing JS/TS. Probás flujos completos en navegadores reales con Playwright, con fixtures y esperas robustas. Objetivo del nivel: Configurar Playwright y escribir los primeros E2E
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "e2e-playwright"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# E2E con Playwright — Básico

## Qué hace este skill

Probás flujos completos en navegadores reales con Playwright, con fixtures y esperas robustas. En este nivel se entrega: **Configurar Playwright y escribir los primeros E2E**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **E2E con Playwright** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar Playwright con navegadores
2. Escribir un test E2E de login completo
3. Usar selectors accesibles (getByRole, getByLabel)
4. Correr los tests en chromium

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar Playwright y escribir los primeros E2E | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar Playwright con navegadores · Escribir un test E2E de login completo · Usar selectors accesibles (getByRole, getByLabel) · Correr los tests en chromium | lista | sí | 3-4 pasos |
| $criterios_clave | Los selectors son accesibles y estables · El test E2E corre de punta a punta | lista | sí | calidad verificable |
| $prompt_guia | Configurá Playwright y escribí el E2E del login: navegar, completar el form con getByLabel, submit y verificar la redirección al panel. | texto | no | "E2E con Playwright" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los selectors son accesibles y estables
- [ ] El test E2E corre de punta a punta

## Ejemplos de prompts

- "Configurá Playwright y escribí el E2E del login: navegar, completar el form con getByLabel, submit y verificar la redirección al panel."
- "Aplica E2E con Playwright (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Los selectors son accesibles y estables"
- "Revisa mi testing-js y dime qué pasos de E2E con Playwright me faltan en este nivel"