---
name: pester-testing-testing-funciones-sin-archivos-profesional
description: Testing de funciones sin archivos · nivel Profesional · Pester: testing de scripts. Probar lógica de funciones sueltas: dot-sourcing, InModuleScope y helpers aislados del filesystem. Objetivo del nivel: Capa de lógica pura: diseño de funciones testeables headless y pruebas sin terminal
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "testing-funciones-sin-archivos"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Testing de funciones sin archivos — Profesional

## Qué hace este skill

Probar lógica de funciones sueltas: dot-sourcing, InModuleScope y helpers aislados del filesystem. En este nivel se entrega: **Capa de lógica pura: diseño de funciones testeables headless y pruebas sin terminal**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de funciones sin archivos** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar la lógica pura del dibujo y la I/O
2. Diseñar funciones que acepten el renderer por inyección
3. Probar la lógica de selección de menú headless
4. Correr estos tests sin sesión interactiva

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de lógica pura: diseño de funciones testeables headless y pruebas sin terminal | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Separar la lógica pura del dibujo y la I/O · Diseñar funciones que acepten el renderer por inyección · Probar la lógica de selección de menú headless · Correr estos tests sin sesión interactiva | lista | sí | 3-4 pasos |
| $criterios_clave | La lógica de la TUI se prueba sin terminal · El renderizado es inyectable y mockeable | lista | sí | calidad verificable |
| $prompt_guia | La lógica de los menús de RYU-TUI está mezclada con el dibujo y no la puedo testear. Rediseñala para inyección del renderer y armá tests headless de la selección. | texto | no | "Testing de funciones sin archivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La lógica de la TUI se prueba sin terminal
- [ ] El renderizado es inyectable y mockeable

## Ejemplos de prompts

- "La lógica de los menús de RYU-TUI está mezclada con el dibujo y no la puedo testear. Rediseñala para inyección del renderer y armá tests headless de la selección."
- "Aplica Testing de funciones sin archivos (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza La lógica de la TUI se prueba sin terminal"
- "Revisa mi pester-testing y dime qué pasos de Testing de funciones sin archivos me faltan en este nivel"