---
name: testing-js-fixtures-helpers-profesional
description: Fixtures y helpers · nivel Profesional · Testing JS/TS. Creás datos de prueba realistas y helpers que hacen los tests legibles y fáciles de mantener. Objetivo del nivel: Diseñar el sistema de fixtures del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fixtures-helpers"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Fixtures y helpers — Profesional

## Qué hace este skill

Creás datos de prueba realistas y helpers que hacen los tests legibles y fáciles de mantener. En este nivel se entrega: **Diseñar el sistema de fixtures del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fixtures y helpers** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la convención de fixtures por dominio
2. Crear helpers de test que simulen el backend
3. Centralizar fixtures con versionado de contrato
4. Documentar cómo crear y mantener fixtures

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de fixtures del proyecto | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir la convención de fixtures por dominio · Crear helpers de test que simulen el backend · Centralizar fixtures con versionado de contrato · Documentar cómo crear y mantener fixtures | lista | sí | 3-4 pasos |
| $criterios_clave | Los fixtures siguen el contrato versionado de la API · Los helpers de backend simulado se reutilizan en todo el repo | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el sistema de fixtures del proyecto: convención por dominio, un mock server liviano que responda los fixtures, versionado con el contrato de la API y guía de mantenimiento. | texto | no | "Fixtures y helpers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los fixtures siguen el contrato versionado de la API
- [ ] Los helpers de backend simulado se reutilizan en todo el repo

## Ejemplos de prompts

- "Diseñá el sistema de fixtures del proyecto: convención por dominio, un mock server liviano que responda los fixtures, versionado con el contrato de la API y guía de mantenimiento."
- "Aplica Fixtures y helpers (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza Los fixtures siguen el contrato versionado de la API"
- "Revisa mi testing-js y dime qué pasos de Fixtures y helpers me faltan en este nivel"