---
name: ryu-tui-integracion-ryu-tui-profesional
description: Integración con ryu-tui.ps1 · nivel Profesional · RYU-TUI: interfaces de terminal. Trabajo real sobre la suite RYU-TUI: bootstrap.ps1, ryu-tui.ps1, comandos y el flujo de instalación. Objetivo del nivel: Refactorizar partes de la suite con seguridad: contratos, tests y regresiones cero
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "integracion-ryu-tui"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Integración con ryu-tui.ps1 — Profesional

## Qué hace este skill

Trabajo real sobre la suite RYU-TUI: bootstrap.ps1, ryu-tui.ps1, comandos y el flujo de instalación. En este nivel se entrega: **Refactorizar partes de la suite con seguridad: contratos, tests y regresiones cero**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con ryu-tui.ps1** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Extraer una función de ryu-tui.ps1 a un módulo con contrato
2. Escribir tests Pester que cubran la lógica extraída
3. Correr toda la suite de 18 tests y PSScriptAnalyzer
4. Hacer el cambio sin regresiones visibles en la TUI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Refactorizar partes de la suite con seguridad: contratos, tests y regresiones cero | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Extraer una función de ryu-tui.ps1 a un módulo con contrato · Escribir tests Pester que cubran la lógica extraída · Correr toda la suite de 18 tests y PSScriptAnalyzer · Hacer el cambio sin regresiones visibles en la TUI | lista | sí | 3-4 pasos |
| $criterios_clave | Los 18 tests pasan en pwsh 7 sin network · La refactorización no cambia el comportamiento de la TUI | lista | sí | calidad verificable |
| $prompt_guia | Quiero extraer la lógica de dibujo de ventanas de ryu-tui.ps1 a un módulo aparte sin cambiar el comportamiento. Escribí los tests primero, corré los 18 tests de la suite y confirmá cero regresiones. | texto | no | "Integración con ryu-tui.ps1" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los 18 tests pasan en pwsh 7 sin network
- [ ] La refactorización no cambia el comportamiento de la TUI

## Ejemplos de prompts

- "Quiero extraer la lógica de dibujo de ventanas de ryu-tui.ps1 a un módulo aparte sin cambiar el comportamiento. Escribí los tests primero, corré los 18 tests de la suite y confirmá cero regresiones."
- "Aplica Integración con ryu-tui.ps1 (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Los 18 tests pasan en pwsh 7 sin network"
- "Revisa mi ryu-tui y dime qué pasos de Integración con ryu-tui.ps1 me faltan en este nivel"