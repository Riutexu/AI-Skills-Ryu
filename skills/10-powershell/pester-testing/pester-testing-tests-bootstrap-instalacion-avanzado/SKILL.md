---
name: pester-testing-tests-bootstrap-instalacion-avanzado
description: Tests de bootstrap/instalación · nivel Avanzado · Pester: testing de scripts. Testear el instalador: idempotencia, prerequisitos y estado del sistema después de correr bootstrap.ps1. Objetivo del nivel: Tests de idempotencia y fallas: correr dos veces, prerequisitos faltantes y mensajes de error
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tests-bootstrap-instalacion"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Tests de bootstrap/instalación — Avanzado

## Qué hace este skill

Testear el instalador: idempotencia, prerequisitos y estado del sistema después de correr bootstrap.ps1. En este nivel se entrega: **Tests de idempotencia y fallas: correr dos veces, prerequisitos faltantes y mensajes de error**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de bootstrap/instalación** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear que correr el bootstrap dos veces no duplica nada
2. Simular prerequisitos faltantes y verificar el fallo
3. Verificar mensajes de error claros
4. Testear la detección de versiones instaladas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Tests de idempotencia y fallas: correr dos veces, prerequisitos faltantes y mensajes de error | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Testear que correr el bootstrap dos veces no duplica nada · Simular prerequisitos faltantes y verificar el fallo · Verificar mensajes de error claros · Testear la detección de versiones instaladas | lista | sí | 3-4 pasos |
| $criterios_clave | La idempotencia está cubierta por tests · Las fallas de prerequisitos se testean con su mensaje exacto | lista | sí | calidad verificable |
| $prompt_guia | El bootstrap de RYU-TUI dice ser idempotente pero no está probado: armame tests que corran la lógica dos veces con mocks, simulen prerequisitos faltantes y verifiquen los mensajes. | texto | no | "Tests de bootstrap/instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La idempotencia está cubierta por tests
- [ ] Las fallas de prerequisitos se testean con su mensaje exacto

## Ejemplos de prompts

- "El bootstrap de RYU-TUI dice ser idempotente pero no está probado: armame tests que corran la lógica dos veces con mocks, simulen prerequisitos faltantes y verifiquen los mensajes."
- "Aplica Tests de bootstrap/instalación (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza La idempotencia está cubierta por tests"
- "Revisa mi pester-testing y dime qué pasos de Tests de bootstrap/instalación me faltan en este nivel"