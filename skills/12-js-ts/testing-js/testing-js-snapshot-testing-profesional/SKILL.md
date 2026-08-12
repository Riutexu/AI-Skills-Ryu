---
name: testing-js-snapshot-testing-profesional
description: Snapshot testing · nivel Profesional · Testing JS/TS. Usás snapshots con criterio para detectar regresiones de salida y estructuras de datos. Objetivo del nivel: Definir la política de snapshots del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "snapshot-testing"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Snapshot testing — Profesional

## Qué hace este skill

Usás snapshots con criterio para detectar regresiones de salida y estructuras de datos. En este nivel se entrega: **Definir la política de snapshots del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Snapshot testing** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir dónde los snapshots aportan y dónde no
2. Crear la convención de revisión de snapshots en PRs
3. Automatizar la detección de snapshots obsoletos
4. Documentar la política de snapshot testing

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la política de snapshots del proyecto | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir dónde los snapshots aportan y dónde no · Crear la convención de revisión de snapshots en PRs · Automatizar la detección de snapshots obsoletos · Documentar la política de snapshot testing | lista | sí | 3-4 pasos |
| $criterios_clave | La política define usos y límites claros · Los PRs revisan snapshots explícitamente | lista | sí | calidad verificable |
| $prompt_guia | Definí la política de snapshots del proyecto: en qué capas se usan, cómo se revisan en PRs y cómo detectar los que ya no aportan. Que no se conviertan en muletas. | texto | no | "Snapshot testing" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política define usos y límites claros
- [ ] Los PRs revisan snapshots explícitamente

## Ejemplos de prompts

- "Definí la política de snapshots del proyecto: en qué capas se usan, cómo se revisan en PRs y cómo detectar los que ya no aportan. Que no se conviertan en muletas."
- "Aplica Snapshot testing (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza La política define usos y límites claros"
- "Revisa mi testing-js y dime qué pasos de Snapshot testing me faltan en este nivel"