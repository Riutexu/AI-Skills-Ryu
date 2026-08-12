---
name: testing-js-snapshot-testing-basico
description: Snapshot testing · nivel Básico · Testing JS/TS. Usás snapshots con criterio para detectar regresiones de salida y estructuras de datos. Objetivo del nivel: Crear y actualizar snapshots básicos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "snapshot-testing"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Snapshot testing — Básico

## Qué hace este skill

Usás snapshots con criterio para detectar regresiones de salida y estructuras de datos. En este nivel se entrega: **Crear y actualizar snapshots básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Snapshot testing** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar el primer snapshot con toMatchSnapshot
2. Actualizar snapshots con -u cuando corresponde
3. Inspeccionar el diff de un snapshot roto
4. Decidir cuándo un snapshot es útil

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear y actualizar snapshots básicos | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Generar el primer snapshot con toMatchSnapshot · Actualizar snapshots con -u cuando corresponde · Inspeccionar el diff de un snapshot roto · Decidir cuándo un snapshot es útil | lista | sí | 3-4 pasos |
| $criterios_clave | Los snapshots se revisan antes de actualizarlos · El diff se lee e interpreta correctamente | lista | sí | calidad verificable |
| $prompt_guia | Agregá snapshot tests para la función que serializa la config del usuario: generá el snapshot, rompé algo a propósito y mostrá cómo se lee el diff. | texto | no | "Snapshot testing" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los snapshots se revisan antes de actualizarlos
- [ ] El diff se lee e interpreta correctamente

## Ejemplos de prompts

- "Agregá snapshot tests para la función que serializa la config del usuario: generá el snapshot, rompé algo a propósito y mostrá cómo se lee el diff."
- "Aplica Snapshot testing (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Los snapshots se revisan antes de actualizarlos"
- "Revisa mi testing-js y dime qué pasos de Snapshot testing me faltan en este nivel"