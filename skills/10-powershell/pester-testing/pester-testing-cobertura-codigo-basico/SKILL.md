---
name: pester-testing-cobertura-codigo-basico
description: Cobertura de código · nivel Básico · Pester: testing de scripts. Medir qué parte del código ejecutan los tests con -CodeCoverage y usar el número con criterio. Objetivo del nivel: Medir la cobertura de la suite con Invoke-Pester -CodeCoverage
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "cobertura-codigo"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Cobertura de código — Básico

## Qué hace este skill

Medir qué parte del código ejecutan los tests con -CodeCoverage y usar el número con criterio. En este nivel se entrega: **Medir la cobertura de la suite con Invoke-Pester -CodeCoverage**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cobertura de código** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Correr la suite con -CodeCoverage sobre un archivo
2. Leer el reporte de líneas no cubiertas
3. Identificar las funciones sin cubrir
4. Interpretar el porcentaje global

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Medir la cobertura de la suite con Invoke-Pester -CodeCoverage | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Correr la suite con -CodeCoverage sobre un archivo · Leer el reporte de líneas no cubiertas · Identificar las funciones sin cubrir · Interpretar el porcentaje global | lista | sí | 3-4 pasos |
| $criterios_clave | Generás el reporte de cobertura de tu script · Sabés qué líneas no se ejecutan jamás en tests | lista | sí | calidad verificable |
| $prompt_guia | Quiero saber cuánto cubren mis tests de ryu-tui.ps1: corré Invoke-Pester -CodeCoverage y mostrame cómo leer qué líneas quedan afuera. | texto | no | "Cobertura de código" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Generás el reporte de cobertura de tu script
- [ ] Sabés qué líneas no se ejecutan jamás en tests

## Ejemplos de prompts

- "Quiero saber cuánto cubren mis tests de ryu-tui.ps1: corré Invoke-Pester -CodeCoverage y mostrame cómo leer qué líneas quedan afuera."
- "Aplica Cobertura de código (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Generás el reporte de cobertura de tu script"
- "Revisa mi pester-testing y dime qué pasos de Cobertura de código me faltan en este nivel"