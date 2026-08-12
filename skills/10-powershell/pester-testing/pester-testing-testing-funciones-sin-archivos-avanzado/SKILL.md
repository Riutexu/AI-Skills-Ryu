---
name: pester-testing-testing-funciones-sin-archivos-avanzado
description: Testing de funciones sin archivos · nivel Avanzado · Pester: testing de scripts. Probar lógica de funciones sueltas: dot-sourcing, InModuleScope y helpers aislados del filesystem. Objetivo del nivel: InModuleScope para internals y testing de funciones privadas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "testing-funciones-sin-archivos"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Testing de funciones sin archivos — Avanzado

## Qué hace este skill

Probar lógica de funciones sueltas: dot-sourcing, InModuleScope y helpers aislados del filesystem. En este nivel se entrega: **InModuleScope para internals y testing de funciones privadas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de funciones sin archivos** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar InModuleScope para acceder a internals
2. Testear funciones privadas del módulo
3. Controlar variables de módulo en tests
4. Evitar romper el scope del módulo en tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | InModuleScope para internals y testing de funciones privadas | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Usar InModuleScope para acceder a internals · Testear funciones privadas del módulo · Controlar variables de módulo en tests · Evitar romper el scope del módulo en tests | lista | sí | 3-4 pasos |
| $criterios_clave | Las funciones privadas se testean sin exponerlas · Los tests no contaminan el estado global del módulo | lista | sí | calidad verificable |
| $prompt_guia | Quiero testear los helpers privados de mi módulo de RYU-TUI sin exportarlos: mostrame InModuleScope y cómo controlar las variables internas del módulo. | texto | no | "Testing de funciones sin archivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las funciones privadas se testean sin exponerlas
- [ ] Los tests no contaminan el estado global del módulo

## Ejemplos de prompts

- "Quiero testear los helpers privados de mi módulo de RYU-TUI sin exportarlos: mostrame InModuleScope y cómo controlar las variables internas del módulo."
- "Aplica Testing de funciones sin archivos (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Las funciones privadas se testean sin exponerlas"
- "Revisa mi pester-testing y dime qué pasos de Testing de funciones sin archivos me faltan en este nivel"