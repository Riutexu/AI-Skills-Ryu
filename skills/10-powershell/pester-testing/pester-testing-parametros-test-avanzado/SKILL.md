---
name: pester-testing-parametros-test-avanzado
description: Parámetros de test · nivel Avanzado · Pester: testing de scripts. Tests parametrizados con @Cases: cubrir múltiples entradas con un solo It sin duplicar código. Objetivo del nivel: Datos de prueba bien organizados: fixtures, tablas de casos y nombres generados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "parametros-test"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Parámetros de test — Avanzado

## Qué hace este skill

Tests parametrizados con @Cases: cubrir múltiples entradas con un solo It sin duplicar código. En este nivel se entrega: **Datos de prueba bien organizados: fixtures, tablas de casos y nombres generados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Parámetros de test** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mantener los casos de prueba en archivos de fixtures
2. Generar nombres descriptivos por caso con -TestName
3. Combinar parámetros dependientes (input + esperado)
4. Documentar de dónde salen los casos borde

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Datos de prueba bien organizados: fixtures, tablas de casos y nombres generados | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Mantener los casos de prueba en archivos de fixtures · Generar nombres descriptivos por caso con -TestName · Combinar parámetros dependientes (input + esperado) · Documentar de dónde salen los casos borde | lista | sí | 3-4 pasos |
| $criterios_clave | Los fixtures se reutilizan entre archivos de tests · Cada caso documenta su origen o justificación | lista | sí | calidad verificable |
| $prompt_guia | Mis casos de test de parsing se repiten en varios archivos: organizámelos en fixtures reutilizables con -TestName descriptivos y casos de entrada+esperado juntos. | texto | no | "Parámetros de test" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los fixtures se reutilizan entre archivos de tests
- [ ] Cada caso documenta su origen o justificación

## Ejemplos de prompts

- "Mis casos de test de parsing se repiten en varios archivos: organizámelos en fixtures reutilizables con -TestName descriptivos y casos de entrada+esperado juntos."
- "Aplica Parámetros de test (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Los fixtures se reutilizan entre archivos de tests"
- "Revisa mi pester-testing y dime qué pasos de Parámetros de test me faltan en este nivel"