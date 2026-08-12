---
name: pester-testing-organizacion-suites-basico
description: Organización de suites · nivel Básico · Pester: testing de scripts. Carpetas de tests, naming, ejecución selectiva y el flujo de una suite que crece sin caos. Objetivo del nivel: Organizar los tests en una carpeta con naming consistente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "organizacion-suites"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Organización de suites — Básico

## Qué hace este skill

Carpetas de tests, naming, ejecución selectiva y el flujo de una suite que crece sin caos. En este nivel se entrega: **Organizar los tests en una carpeta con naming consistente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Organización de suites** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la estructura tests/ con .Tests.ps1 por script
2. Seguir el naming script.Tests.ps1
3. Correr toda la carpeta con Invoke-Pester
4. Correr un solo archivo de tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Organizar los tests en una carpeta con naming consistente | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Crear la estructura tests/ con .Tests.ps1 por script · Seguir el naming script.Tests.ps1 · Correr toda la carpeta con Invoke-Pester · Correr un solo archivo de tests | lista | sí | 3-4 pasos |
| $criterios_clave | Corrés toda la suite con un comando · Cada script tiene su archivo de tests con el nombre correcto | lista | sí | calidad verificable |
| $prompt_guia | Quiero organizar los tests de mis scripts: definime la estructura de carpetas y el naming, y mostrame cómo correr todo o un archivo puntual. | texto | no | "Organización de suites" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Corrés toda la suite con un comando
- [ ] Cada script tiene su archivo de tests con el nombre correcto

## Ejemplos de prompts

- "Quiero organizar los tests de mis scripts: definime la estructura de carpetas y el naming, y mostrame cómo correr todo o un archivo puntual."
- "Aplica Organización de suites (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Corrés toda la suite con un comando"
- "Revisa mi pester-testing y dime qué pasos de Organización de suites me faltan en este nivel"