---
name: testing-js-e2e-playwright-profesional
description: E2E con Playwright · nivel Profesional · Testing JS/TS. Probás flujos completos en navegadores reales con Playwright, con fixtures y esperas robustas. Objetivo del nivel: Diseñar la estrategia E2E del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "e2e-playwright"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# E2E con Playwright — Profesional

## Qué hace este skill

Probás flujos completos en navegadores reales con Playwright, con fixtures y esperas robustas. En este nivel se entrega: **Diseñar la estrategia E2E del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **E2E con Playwright** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir qué flujos cubren E2E y cuáles no
2. Configurar los proyectos de Playwright (browsers, móvil)
3. Integrar E2E en CI con paralelismo y reportes
4. Manejar entornos de test con seeds y datos controlados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia E2E del proyecto | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir qué flujos cubren E2E y cuáles no · Configurar los proyectos de Playwright (browsers, móvil) · Integrar E2E en CI con paralelismo y reportes · Manejar entornos de test con seeds y datos controlados | lista | sí | 3-4 pasos |
| $criterios_clave | Los E2E corren en CI con reportes y retries · El conjunto de flujos E2E está documentado | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia E2E del proyecto: flujos críticos cubiertos, proyectos de Playwright para desktop y mobile, integración en CI con reportes y datos de test controlados. | texto | no | "E2E con Playwright" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los E2E corren en CI con reportes y retries
- [ ] El conjunto de flujos E2E está documentado

## Ejemplos de prompts

- "Diseñá la estrategia E2E del proyecto: flujos críticos cubiertos, proyectos de Playwright para desktop y mobile, integración en CI con reportes y datos de test controlados."
- "Aplica E2E con Playwright (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza Los E2E corren en CI con reportes y retries"
- "Revisa mi testing-js y dime qué pasos de E2E con Playwright me faltan en este nivel"