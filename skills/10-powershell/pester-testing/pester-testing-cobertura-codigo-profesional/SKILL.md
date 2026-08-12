---
name: pester-testing-cobertura-codigo-profesional
description: Cobertura de código · nivel Profesional · Pester: testing de scripts. Medir qué parte del código ejecutan los tests con -CodeCoverage y usar el número con criterio. Objetivo del nivel: Política de cobertura de la suite: umbrales por módulo, reportes en CI y cobertura accionable
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "cobertura-codigo"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Cobertura de código — Profesional

## Qué hace este skill

Medir qué parte del código ejecutan los tests con -CodeCoverage y usar el número con criterio. En este nivel se entrega: **Política de cobertura de la suite: umbrales por módulo, reportes en CI y cobertura accionable**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cobertura de código** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Fijar umbrales por módulo con justificación
2. Generar reportes de cobertura en el pipeline
3. Correlacionar cobertura con funcionalidad crítica
4. Revisar la cobertura de la suite de 18 tests de RYU-TUI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de cobertura de la suite: umbrales por módulo, reportes en CI y cobertura accionable | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Fijar umbrales por módulo con justificación · Generar reportes de cobertura en el pipeline · Correlacionar cobertura con funcionalidad crítica · Revisar la cobertura de la suite de 18 tests de RYU-TUI | lista | sí | 3-4 pasos |
| $criterios_clave | El CI falla si un módulo crítico baja del umbral · Los reportes de cobertura se revisan con la funcionalidad en mente | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la cobertura de RYU-TUI sea una política: umbrales por módulo crítico, reportes en el CI y una revisión de qué cubren los 18 tests contra la funcionalidad real. | texto | no | "Cobertura de código" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CI falla si un módulo crítico baja del umbral
- [ ] Los reportes de cobertura se revisan con la funcionalidad en mente

## Ejemplos de prompts

- "Quiero que la cobertura de RYU-TUI sea una política: umbrales por módulo crítico, reportes en el CI y una revisión de qué cubren los 18 tests contra la funcionalidad real."
- "Aplica Cobertura de código (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza El CI falla si un módulo crítico baja del umbral"
- "Revisa mi pester-testing y dime qué pasos de Cobertura de código me faltan en este nivel"