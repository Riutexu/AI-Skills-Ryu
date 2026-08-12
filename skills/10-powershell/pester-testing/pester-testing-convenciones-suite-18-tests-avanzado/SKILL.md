---
name: pester-testing-convenciones-suite-18-tests-avanzado
description: Convenciones de la suite (18 tests estilo RYU-TUI) · nivel Avanzado · Pester: testing de scripts. El estándar de la suite de RYU-TUI: qué cubren los 18 tests, sus convenciones y cómo crecen sin romperse. Objetivo del nivel: Agregar un test nuevo siguiendo las convenciones de la suite
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "convenciones-suite-18-tests"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Convenciones de la suite (18 tests estilo RYU-TUI) — Avanzado

## Qué hace este skill

El estándar de la suite de RYU-TUI: qué cubren los 18 tests, sus convenciones y cómo crecen sin romperse. En este nivel se entrega: **Agregar un test nuevo siguiendo las convenciones de la suite**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Convenciones de la suite (18 tests estilo RYU-TUI)** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar dónde encaja el test nuevo
2. Seguir el estilo de Describe/It/Should de la suite
3. Usar los helpers de la suite existentes
4. Verificar que la suite entera sigue pasando

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Agregar un test nuevo siguiendo las convenciones de la suite | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Identificar dónde encaja el test nuevo · Seguir el estilo de Describe/It/Should de la suite · Usar los helpers de la suite existentes · Verificar que la suite entera sigue pasando | lista | sí | 3-4 pasos |
| $criterios_clave | El test nuevo es indistinguible en estilo del resto · La suite completa sigue en verde tras sumarlo | lista | sí | calidad verificable |
| $prompt_guia | Agregué una función nueva a ryu-tui.ps1 y quiero sumar su test a la suite: mostrame cómo sigue las convenciones de los 18 tests existentes y que no rompe el resto. | texto | no | "Convenciones de la suite (18 tests estilo RYU-TUI)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El test nuevo es indistinguible en estilo del resto
- [ ] La suite completa sigue en verde tras sumarlo

## Ejemplos de prompts

- "Agregué una función nueva a ryu-tui.ps1 y quiero sumar su test a la suite: mostrame cómo sigue las convenciones de los 18 tests existentes y que no rompe el resto."
- "Aplica Convenciones de la suite (18 tests estilo RYU-TUI) (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza El test nuevo es indistinguible en estilo del resto"
- "Revisa mi pester-testing y dime qué pasos de Convenciones de la suite (18 tests estilo RYU-TUI) me faltan en este nivel"