---
name: pester-testing-ci-tests-profesional
description: CI con tests · nivel Profesional · Pester: testing de scripts. Los tests en el pipeline: correr la suite en GitHub Actions, artefactos y gate de calidad. Objetivo del nivel: CI de releases: matriz de versiones, gates por entorno y promoción a producción
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ci-tests"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# CI con tests — Profesional

## Qué hace este skill

Los tests en el pipeline: correr la suite en GitHub Actions, artefactos y gate de calidad. En este nivel se entrega: **CI de releases: matriz de versiones, gates por entorno y promoción a producción**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI con tests** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Correr la suite en matriz PS 5.1 y pwsh 7
2. Bloquear merge sin suite verde
3. Correr integración antes de publicar releases
4. Promover un build solo si pasa todos los gates

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | CI de releases: matriz de versiones, gates por entorno y promoción a producción | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Correr la suite en matriz PS 5.1 y pwsh 7 · Bloquear merge sin suite verde · Correr integración antes de publicar releases · Promover un build solo si pasa todos los gates | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna release sale sin la matriz completa verde · Los gates de promoción están automatizados | lista | sí | calidad verificable |
| $prompt_guia | Quiero que ninguna release de RYU-TUI salga sin los 18 tests verdes en pwsh 7 sin network: armame los gates del pipeline y la matriz de versiones. | texto | no | "CI con tests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna release sale sin la matriz completa verde
- [ ] Los gates de promoción están automatizados

## Ejemplos de prompts

- "Quiero que ninguna release de RYU-TUI salga sin los 18 tests verdes en pwsh 7 sin network: armame los gates del pipeline y la matriz de versiones."
- "Aplica CI con tests (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza Ninguna release sale sin la matriz completa verde"
- "Revisa mi pester-testing y dime qué pasos de CI con tests me faltan en este nivel"