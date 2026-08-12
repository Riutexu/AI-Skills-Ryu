---
name: pester-testing-primer-test-describe-it-avanzado
description: Primer test con Describe/It · nivel Avanzado · Pester: testing de scripts. Escribir el primer test real: estructura Describe/It/Should y cómo correrlo con Invoke-Pester. Objetivo del nivel: Estructurar tests por comportamiento: múltiples It, contextos y nombres descriptivos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "primer-test-describe-it"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Primer test con Describe/It — Avanzado

## Qué hace este skill

Escribir el primer test real: estructura Describe/It/Should y cómo correrlo con Invoke-Pester. En este nivel se entrega: **Estructurar tests por comportamiento: múltiples It, contextos y nombres descriptivos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Primer test con Describe/It** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agrupar casos con Context
2. Escribir nombres de It que describan el comportamiento
3. Probar casos borde (vacíos, null, límites)
4. Organizar el orden lógico de los tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Estructurar tests por comportamiento: múltiples It, contextos y nombres descriptivos | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Agrupar casos con Context · Escribir nombres de It que describan el comportamiento · Probar casos borde (vacíos, null, límites) · Organizar el orden lógico de los tests | lista | sí | 3-4 pasos |
| $criterios_clave | Cada It describe un comportamiento, no una implementación · Los casos borde están cubiertos | lista | sí | calidad verificable |
| $prompt_guia | Quiero tests de calidad para mi función de parsing de rutas: mostrame cómo estructurar Contexts, nombres descriptivos y qué casos borde debería cubrir sí o sí. | texto | no | "Primer test con Describe/It" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada It describe un comportamiento, no una implementación
- [ ] Los casos borde están cubiertos

## Ejemplos de prompts

- "Quiero tests de calidad para mi función de parsing de rutas: mostrame cómo estructurar Contexts, nombres descriptivos y qué casos borde debería cubrir sí o sí."
- "Aplica Primer test con Describe/It (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Cada It describe un comportamiento, no una implementación"
- "Revisa mi pester-testing y dime qué pasos de Primer test con Describe/It me faltan en este nivel"