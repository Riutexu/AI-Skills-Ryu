---
name: pester-testing-organizacion-suites-profesional
description: Organización de suites · nivel Profesional · Pester: testing de scripts. Carpetas de tests, naming, ejecución selectiva y el flujo de una suite que crece sin caos. Objetivo del nivel: Gestión de una suite grande: módulos de soporte, reportes consistentes y evolución controlada
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "organizacion-suites"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Organización de suites — Profesional

## Qué hace este skill

Carpetas de tests, naming, ejecución selectiva y el flujo de una suite que crece sin caos. En este nivel se entrega: **Gestión de una suite grande: módulos de soporte, reportes consistentes y evolución controlada**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Organización de suites** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un módulo de soporte para helpers de tests
2. Generar reportes NUnit/XML para CI
3. Definir políticas de cuándo agregar un test
4. Revisar y podar tests obsoletos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gestión de una suite grande: módulos de soporte, reportes consistentes y evolución controlada | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Crear un módulo de soporte para helpers de tests · Generar reportes NUnit/XML para CI · Definir políticas de cuándo agregar un test · Revisar y podar tests obsoletos | lista | sí | 3-4 pasos |
| $criterios_clave | La suite de 18 tests de RYU-TUI tiene reportes listos para CI · Los tests obsoletos se detectan y se eliminan | lista | sí | calidad verificable |
| $prompt_guia | La suite de RYU-TUI tiene 18 tests y quiero que crezca ordenada: módulo de soporte con helpers, reporte para el CI y una política de cuándo sumar o podar tests. | texto | no | "Organización de suites" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La suite de 18 tests de RYU-TUI tiene reportes listos para CI
- [ ] Los tests obsoletos se detectan y se eliminan

## Ejemplos de prompts

- "La suite de RYU-TUI tiene 18 tests y quiero que crezca ordenada: módulo de soporte con helpers, reporte para el CI y una política de cuándo sumar o podar tests."
- "Aplica Organización de suites (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza La suite de 18 tests de RYU-TUI tiene reportes listos para CI"
- "Revisa mi pester-testing y dime qué pasos de Organización de suites me faltan en este nivel"