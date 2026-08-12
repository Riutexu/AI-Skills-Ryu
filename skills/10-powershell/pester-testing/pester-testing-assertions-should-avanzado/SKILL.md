---
name: pester-testing-assertions-should-avanzado
description: Assertions Should · nivel Avanzado · Pester: testing de scripts. Todas las formas de Should: -Be, -BeTrue, -Contain, -Throw, -BeLike y cuándo usar cada una. Objetivo del nivel: Assertions sobre errores, strings y pipelines con mensajes de falla claros
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "assertions-should"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Assertions Should — Avanzado

## Qué hace este skill

Todas las formas de Should: -Be, -BeTrue, -Contain, -Throw, -BeLike y cuándo usar cada una. En este nivel se entrega: **Assertions sobre errores, strings y pipelines con mensajes de falla claros**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Assertions Should** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar errores con Should -Throw y su mensaje
2. Validar strings con -BeLike y -Match
3. Testear salidas de pipeline con -FileContentMatch
4. Escribir mensajes de aserción con -Because

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Assertions sobre errores, strings y pipelines con mensajes de falla claros | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Verificar errores con Should -Throw y su mensaje · Validar strings con -BeLike y -Match · Testear salidas de pipeline con -FileContentMatch · Escribir mensajes de aserción con -Because | lista | sí | 3-4 pasos |
| $criterios_clave | Las fallas de assertion dicen exactamente qué se esperaba · Los tests de errores verifican el mensaje, no solo que tire algo | lista | sí | calidad verificable |
| $prompt_guia | Mis tests fallan con mensajes crípticos: enseñame Should -Throw con verificación del mensaje, -BeLike para strings y -Because para que las fallas se entiendan solas. | texto | no | "Assertions Should" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las fallas de assertion dicen exactamente qué se esperaba
- [ ] Los tests de errores verifican el mensaje, no solo que tire algo

## Ejemplos de prompts

- "Mis tests fallan con mensajes crípticos: enseñame Should -Throw con verificación del mensaje, -BeLike para strings y -Because para que las fallas se entiendan solas."
- "Aplica Assertions Should (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Las fallas de assertion dicen exactamente qué se esperaba"
- "Revisa mi pester-testing y dime qué pasos de Assertions Should me faltan en este nivel"