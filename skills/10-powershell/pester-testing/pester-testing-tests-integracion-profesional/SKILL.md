---
name: pester-testing-tests-integracion-profesional
description: Tests de integración · nivel Profesional · Pester: testing de scripts. Cuando el mock no alcanza: probar la interacción real entre script, módulos y sistema operativo. Objetivo del nivel: Estrategia de integración de la suite: pirámide de tests, integración por release y contract tests
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tests-integracion"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Tests de integración — Profesional

## Qué hace este skill

Cuando el mock no alcanza: probar la interacción real entre script, módulos y sistema operativo. En este nivel se entrega: **Estrategia de integración de la suite: pirámide de tests, integración por release y contract tests**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de integración** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la pirámide: muchos unit, pocos integración
2. Correr integración solo en release y CI específico
3. Probar contratos entre módulos de la suite
4. Mantener la integración en menos de 5 minutos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de integración de la suite: pirámide de tests, integración por release y contract tests | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Definir la pirámide: muchos unit, pocos integración · Correr integración solo en release y CI específico · Probar contratos entre módulos de la suite · Mantener la integración en menos de 5 minutos | lista | sí | 3-4 pasos |
| $criterios_clave | La suite unitaria corre en segundos y la integración en minutos · Los contratos entre módulos se testean explícitamente | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de integración para RYU-TUI: pirámide de tests definida, integración solo en release, contract tests entre bootstrap y módulos, y tiempos acotados. | texto | no | "Tests de integración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La suite unitaria corre en segundos y la integración en minutos
- [ ] Los contratos entre módulos se testean explícitamente

## Ejemplos de prompts

- "Quiero una estrategia de integración para RYU-TUI: pirámide de tests definida, integración solo en release, contract tests entre bootstrap y módulos, y tiempos acotados."
- "Aplica Tests de integración (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza La suite unitaria corre en segundos y la integración en minutos"
- "Revisa mi pester-testing y dime qué pasos de Tests de integración me faltan en este nivel"