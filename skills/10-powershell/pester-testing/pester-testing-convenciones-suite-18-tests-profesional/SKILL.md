---
name: pester-testing-convenciones-suite-18-tests-profesional
description: Convenciones de la suite (18 tests estilo RYU-TUI) · nivel Profesional · Pester: testing de scripts. El estándar de la suite de RYU-TUI: qué cubren los 18 tests, sus convenciones y cómo crecen sin romperse. Objetivo del nivel: Evolución de la suite: criterios para sumar/podar tests, cobertura por área y gobernanza
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "convenciones-suite-18-tests"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Convenciones de la suite (18 tests estilo RYU-TUI) — Profesional

## Qué hace este skill

El estándar de la suite de RYU-TUI: qué cubren los 18 tests, sus convenciones y cómo crecen sin romperse. En este nivel se entrega: **Evolución de la suite: criterios para sumar/podar tests, cobertura por área y gobernanza**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Convenciones de la suite (18 tests estilo RYU-TUI)** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir qué área necesita tests nuevos (cobertura por área)
2. Establecer el criterio para podar un test obsoleto
3. Documentar la arquitectura de la suite
4. Revisar la suite periódicamente contra el código

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Evolución de la suite: criterios para sumar/podar tests, cobertura por área y gobernanza | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Definir qué área necesita tests nuevos (cobertura por área) · Establecer el criterio para podar un test obsoleto · Documentar la arquitectura de la suite · Revisar la suite periódicamente contra el código | lista | sí | 3-4 pasos |
| $criterios_clave | La suite refleja la funcionalidad actual del proyecto · Hay un criterio documentado para cada test que existe | lista | sí | calidad verificable |
| $prompt_guia | Quiero gobernanza para la suite de 18 tests de RYU-TUI: criterios de cobertura por área, reglas para sumar y podar tests y documentación de la arquitectura de la suite. | texto | no | "Convenciones de la suite (18 tests estilo RYU-TUI)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La suite refleja la funcionalidad actual del proyecto
- [ ] Hay un criterio documentado para cada test que existe

## Ejemplos de prompts

- "Quiero gobernanza para la suite de 18 tests de RYU-TUI: criterios de cobertura por área, reglas para sumar y podar tests y documentación de la arquitectura de la suite."
- "Aplica Convenciones de la suite (18 tests estilo RYU-TUI) (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza La suite refleja la funcionalidad actual del proyecto"
- "Revisa mi pester-testing y dime qué pasos de Convenciones de la suite (18 tests estilo RYU-TUI) me faltan en este nivel"