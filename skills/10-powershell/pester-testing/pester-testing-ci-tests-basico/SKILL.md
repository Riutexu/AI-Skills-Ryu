---
name: pester-testing-ci-tests-basico
description: CI con tests · nivel Básico · Pester: testing de scripts. Los tests en el pipeline: correr la suite en GitHub Actions, artefactos y gate de calidad. Objetivo del nivel: Correr la suite de tests en un pipeline CI simple
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ci-tests"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# CI con tests — Básico

## Qué hace este skill

Los tests en el pipeline: correr la suite en GitHub Actions, artefactos y gate de calidad. En este nivel se entrega: **Correr la suite de tests en un pipeline CI simple**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI con tests** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar un job que instala pwsh y Pester
2. Correr Invoke-Pester en el pipeline
3. Fijar el exit code según el resultado
4. Ver el resultado de la corrida en el pipeline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Correr la suite de tests en un pipeline CI simple | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Configurar un job que instala pwsh y Pester · Correr Invoke-Pester en el pipeline · Fijar el exit code según el resultado · Ver el resultado de la corrida en el pipeline | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline corre la suite y falla si algo no pasa · El log del pipeline muestra los tests y sus errores | lista | sí | calidad verificable |
| $prompt_guia | Quiero que mis tests corran en GitHub Actions: armame un workflow que instale pwsh y Pester, corra la suite de 18 tests y falle si alguno no pasa. | texto | no | "CI con tests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline corre la suite y falla si algo no pasa
- [ ] El log del pipeline muestra los tests y sus errores

## Ejemplos de prompts

- "Quiero que mis tests corran en GitHub Actions: armame un workflow que instale pwsh y Pester, corra la suite de 18 tests y falle si alguno no pasa."
- "Aplica CI con tests (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza El pipeline corre la suite y falla si algo no pasa"
- "Revisa mi pester-testing y dime qué pasos de CI con tests me faltan en este nivel"