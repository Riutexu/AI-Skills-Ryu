---
name: pester-testing-convenciones-suite-18-tests-basico
description: Convenciones de la suite (18 tests estilo RYU-TUI) · nivel Básico · Pester: testing de scripts. El estándar de la suite de RYU-TUI: qué cubren los 18 tests, sus convenciones y cómo crecen sin romperse. Objetivo del nivel: Mapear y entender qué cubren los 18 tests de RYU-TUI
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "convenciones-suite-18-tests"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Convenciones de la suite (18 tests estilo RYU-TUI) — Básico

## Qué hace este skill

El estándar de la suite de RYU-TUI: qué cubren los 18 tests, sus convenciones y cómo crecen sin romperse. En este nivel se entrega: **Mapear y entender qué cubren los 18 tests de RYU-TUI**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Convenciones de la suite (18 tests estilo RYU-TUI)** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar los 18 tests y agruparlos por área
2. Entender qué comportamiento protege cada uno
3. Correr la suite y leer el reporte completo
4. Identificar qué pasa si un test falla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Mapear y entender qué cubren los 18 tests de RYU-TUI | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Listar los 18 tests y agruparlos por área · Entender qué comportamiento protege cada uno · Correr la suite y leer el reporte completo · Identificar qué pasa si un test falla | lista | sí | 3-4 pasos |
| $criterios_clave | Explicás qué cubre cada uno de los 18 tests · Corrés la suite y distinguís sus agrupaciones | lista | sí | calidad verificable |
| $prompt_guia | Quiero entender la suite de 18 tests de RYU-TUI: explicame qué cubre cada grupo de tests, cómo se agrupan y qué significa cada sección del reporte. | texto | no | "Convenciones de la suite (18 tests estilo RYU-TUI)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Explicás qué cubre cada uno de los 18 tests
- [ ] Corrés la suite y distinguís sus agrupaciones

## Ejemplos de prompts

- "Quiero entender la suite de 18 tests de RYU-TUI: explicame qué cubre cada grupo de tests, cómo se agrupan y qué significa cada sección del reporte."
- "Aplica Convenciones de la suite (18 tests estilo RYU-TUI) (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Explicás qué cubre cada uno de los 18 tests"
- "Revisa mi pester-testing y dime qué pasos de Convenciones de la suite (18 tests estilo RYU-TUI) me faltan en este nivel"