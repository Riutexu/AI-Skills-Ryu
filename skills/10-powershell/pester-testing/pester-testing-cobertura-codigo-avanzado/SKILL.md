---
name: pester-testing-cobertura-codigo-avanzado
description: Cobertura de código · nivel Avanzado · Pester: testing de scripts. Medir qué parte del código ejecutan los tests con -CodeCoverage y usar el número con criterio. Objetivo del nivel: Mejorar la cobertura con objetivo: ramas de error y casos borde que nadie testea
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "cobertura-codigo"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Cobertura de código — Avanzado

## Qué hace este skill

Medir qué parte del código ejecutan los tests con -CodeCoverage y usar el número con criterio. En este nivel se entrega: **Mejorar la cobertura con objetivo: ramas de error y casos borde que nadie testea**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cobertura de código** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cubrir los caminos de error y excepción
2. Usar -CodeCoverageBreakAt para fijar umbral
3. Priorizar qué cubrir según riesgo, no número
4. Verificar la cobertura de ramas if/else

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mejorar la cobertura con objetivo: ramas de error y casos borde que nadie testea | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Cubrir los caminos de error y excepción · Usar -CodeCoverageBreakAt para fijar umbral · Priorizar qué cubrir según riesgo, no número · Verificar la cobertura de ramas if/else | lista | sí | 3-4 pasos |
| $criterios_clave | Los caminos de error tienen tests, no solo el happy path · El umbral de cobertura está fijado y se respeta | lista | sí | calidad verificable |
| $prompt_guia | Mi cobertura da 70% pero el 30% que falta son puras ramas de error: ayudame a priorizar qué cubrir con -CodeCoverageBreakAt y a testear los caminos de falla. | texto | no | "Cobertura de código" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los caminos de error tienen tests, no solo el happy path
- [ ] El umbral de cobertura está fijado y se respeta

## Ejemplos de prompts

- "Mi cobertura da 70% pero el 30% que falta son puras ramas de error: ayudame a priorizar qué cubrir con -CodeCoverageBreakAt y a testear los caminos de falla."
- "Aplica Cobertura de código (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Los caminos de error tienen tests, no solo el happy path"
- "Revisa mi pester-testing y dime qué pasos de Cobertura de código me faltan en este nivel"