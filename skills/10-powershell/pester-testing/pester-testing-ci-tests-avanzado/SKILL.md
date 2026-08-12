---
name: pester-testing-ci-tests-avanzado
description: CI con tests · nivel Avanzado · Pester: testing de scripts. Los tests en el pipeline: correr la suite en GitHub Actions, artefactos y gate de calidad. Objetivo del nivel: Reportes, artefactos y gates: PSScriptAnalyzer + Pester + cobertura en un solo pipeline
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ci-tests"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# CI con tests — Avanzado

## Qué hace este skill

Los tests en el pipeline: correr la suite en GitHub Actions, artefactos y gate de calidad. En este nivel se entrega: **Reportes, artefactos y gates: PSScriptAnalyzer + Pester + cobertura en un solo pipeline**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI con tests** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Publicar el reporte de tests como artefacto
2. Integrar PSScriptAnalyzer como gate
3. Publicar la cobertura como comentario del PR
4. Separar jobs: lint, unit, integration

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reportes, artefactos y gates: PSScriptAnalyzer + Pester + cobertura en un solo pipeline | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Publicar el reporte de tests como artefacto · Integrar PSScriptAnalyzer como gate · Publicar la cobertura como comentario del PR · Separar jobs: lint, unit, integration | lista | sí | 3-4 pasos |
| $criterios_clave | El PR muestra tests, lint y cobertura sin abrir el log · Cada job falla con su propio mensaje claro | lista | sí | calidad verificable |
| $prompt_guia | Quiero un pipeline completo para RYU-TUI: jobs separados de lint y tests, reporte de cobertura publicado en el PR y PSScriptAnalyzer como gate. Armámelo. | texto | no | "CI con tests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El PR muestra tests, lint y cobertura sin abrir el log
- [ ] Cada job falla con su propio mensaje claro

## Ejemplos de prompts

- "Quiero un pipeline completo para RYU-TUI: jobs separados de lint y tests, reporte de cobertura publicado en el PR y PSScriptAnalyzer como gate. Armámelo."
- "Aplica CI con tests (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza El PR muestra tests, lint y cobertura sin abrir el log"
- "Revisa mi pester-testing y dime qué pasos de CI con tests me faltan en este nivel"