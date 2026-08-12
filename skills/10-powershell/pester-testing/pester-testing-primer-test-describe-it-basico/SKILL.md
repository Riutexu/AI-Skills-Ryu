---
name: pester-testing-primer-test-describe-it-basico
description: Primer test con Describe/It · nivel Básico · Pester: testing de scripts. Escribir el primer test real: estructura Describe/It/Should y cómo correrlo con Invoke-Pester. Objetivo del nivel: Escribir y correr el primer test Pester
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "primer-test-describe-it"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Primer test con Describe/It — Básico

## Qué hace este skill

Escribir el primer test real: estructura Describe/It/Should y cómo correrlo con Invoke-Pester. En este nivel se entrega: **Escribir y correr el primer test Pester**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Primer test con Describe/It** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar Pester 5 con Install-Module
2. Escribir un archivo .Tests.ps1 con Describe e It
3. Usar Should -Be con una expectativa
4. Correr Invoke-Pester y leer el resultado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir y correr el primer test Pester | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Instalar Pester 5 con Install-Module · Escribir un archivo .Tests.ps1 con Describe e It · Usar Should -Be con una expectativa · Correr Invoke-Pester y leer el resultado | lista | sí | 3-4 pasos |
| $criterios_clave | Tu primer test pasa y otro falla a propósito · Entendés la salida de Invoke-Pester | lista | sí | calidad verificable |
| $prompt_guia | Nunca usé Pester: armame mi primer archivo de test con Describe, It y Should -Be, y mostrame cómo correrlo y leer el resultado. | texto | no | "Primer test con Describe/It" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tu primer test pasa y otro falla a propósito
- [ ] Entendés la salida de Invoke-Pester

## Ejemplos de prompts

- "Nunca usé Pester: armame mi primer archivo de test con Describe, It y Should -Be, y mostrame cómo correrlo y leer el resultado."
- "Aplica Primer test con Describe/It (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Tu primer test pasa y otro falla a propósito"
- "Revisa mi pester-testing y dime qué pasos de Primer test con Describe/It me faltan en este nivel"