---
name: pester-testing-primer-test-describe-it-profesional
description: Primer test con Describe/It · nivel Profesional · Pester: testing de scripts. Escribir el primer test real: estructura Describe/It/Should y cómo correrlo con Invoke-Pester. Objetivo del nivel: Suite completa y legible: contratos por función, ejecución aislada y documentación del comportamiento
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "primer-test-describe-it"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Primer test con Describe/It — Profesional

## Qué hace este skill

Escribir el primer test real: estructura Describe/It/Should y cómo correrlo con Invoke-Pester. En este nivel se entrega: **Suite completa y legible: contratos por función, ejecución aislada y documentación del comportamiento**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Primer test con Describe/It** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir un contrato de tests por función pública
2. Hacer que la suite corra sin red ni estado previo
3. Documentar qué comportamiento cubre cada archivo de tests
4. Mantener la suite verde ante refactors

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Suite completa y legible: contratos por función, ejecución aislada y documentación del comportamiento | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Definir un contrato de tests por función pública · Hacer que la suite corra sin red ni estado previo · Documentar qué comportamiento cubre cada archivo de tests · Mantener la suite verde ante refactors | lista | sí | 3-4 pasos |
| $criterios_clave | Cualquier función pública tiene su archivo de tests · La suite corre en menos de 10 segundos sin network | lista | sí | calidad verificable |
| $prompt_guia | Quiero documentar el comportamiento de mis funciones de RYU-TUI con tests: armame el estándar de archivos de tests por función, con ejecución offline y una estructura que un colega entienda. | texto | no | "Primer test con Describe/It" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cualquier función pública tiene su archivo de tests
- [ ] La suite corre en menos de 10 segundos sin network

## Ejemplos de prompts

- "Quiero documentar el comportamiento de mis funciones de RYU-TUI con tests: armame el estándar de archivos de tests por función, con ejecución offline y una estructura que un colega entienda."
- "Aplica Primer test con Describe/It (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza Cualquier función pública tiene su archivo de tests"
- "Revisa mi pester-testing y dime qué pasos de Primer test con Describe/It me faltan en este nivel"