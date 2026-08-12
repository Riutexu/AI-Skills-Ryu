---
name: pester-testing-assertions-should-profesional
description: Assertions Should · nivel Profesional · Pester: testing de scripts. Todas las formas de Should: -Be, -BeTrue, -Contain, -Throw, -BeLike y cuándo usar cada una. Objetivo del nivel: Política de assertions de la suite: consistencia, helpers propios y falso verde evitado
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "assertions-should"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Assertions Should — Profesional

## Qué hace este skill

Todas las formas de Should: -Be, -BeTrue, -Contain, -Throw, -BeLike y cuándo usar cada una. En este nivel se entrega: **Política de assertions de la suite: consistencia, helpers propios y falso verde evitado**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Assertions Should** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir qué assertions usa la suite y por qué
2. Crear helpers de assertion propios (ej: validar JSON)
3. Evitar falso verde: asserts que pasan por error
4. Revisar los tests contra cobertura de comportamiento real

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de assertions de la suite: consistencia, helpers propios y falso verde evitado | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Definir qué assertions usa la suite y por qué · Crear helpers de assertion propios (ej: validar JSON) · Evitar falso verde: asserts que pasan por error · Revisar los tests contra cobertura de comportamiento real | lista | sí | 3-4 pasos |
| $criterios_clave | Un test no puede pasar por accidente (sin assert real) · Los helpers de assertion están probados y reutilizados | lista | sí | calidad verificable |
| $prompt_guia | Quiero una política de assertions para la suite de RYU-TUI: qué assert usar en cada caso, un helper para validar la estructura JSON de la config y reglas contra el falso verde. | texto | no | "Assertions Should" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un test no puede pasar por accidente (sin assert real)
- [ ] Los helpers de assertion están probados y reutilizados

## Ejemplos de prompts

- "Quiero una política de assertions para la suite de RYU-TUI: qué assert usar en cada caso, un helper para validar la estructura JSON de la config y reglas contra el falso verde."
- "Aplica Assertions Should (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza Un test no puede pasar por accidente (sin assert real)"
- "Revisa mi pester-testing y dime qué pasos de Assertions Should me faltan en este nivel"