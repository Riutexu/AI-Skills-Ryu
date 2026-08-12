---
name: pester-testing-assertions-should-basico
description: Assertions Should · nivel Básico · Pester: testing de scripts. Todas las formas de Should: -Be, -BeTrue, -Contain, -Throw, -BeLike y cuándo usar cada una. Objetivo del nivel: Usar las assertions más comunes correctamente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "assertions-should"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Assertions Should — Básico

## Qué hace este skill

Todas las formas de Should: -Be, -BeTrue, -Contain, -Throw, -BeLike y cuándo usar cada una. En este nivel se entrega: **Usar las assertions más comunes correctamente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Assertions Should** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Comparar valores con Should -Be y -BeExactly
2. Usar -BeTrue/-BeFalse con expresiones booleanas
3. Verificar colecciones con -Contain y -HaveCount
4. Entender qué assert conviene para cada caso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar las assertions más comunes correctamente | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Comparar valores con Should -Be y -BeExactly · Usar -BeTrue/-BeFalse con expresiones booleanas · Verificar colecciones con -Contain y -HaveCount · Entender qué assert conviene para cada caso | lista | sí | 3-4 pasos |
| $criterios_clave | Tus assertions comparan lo correcto (tipo incluido) · No usás -Be para todo | lista | sí | calidad verificable |
| $prompt_guia | Estoy empezando con Pester y solo uso Should -Be: mostrame las assertions más comunes (Be, BeTrue, Contain, HaveCount) con ejemplos de cuándo usar cada una. | texto | no | "Assertions Should" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus assertions comparan lo correcto (tipo incluido)
- [ ] No usás -Be para todo

## Ejemplos de prompts

- "Estoy empezando con Pester y solo uso Should -Be: mostrame las assertions más comunes (Be, BeTrue, Contain, HaveCount) con ejemplos de cuándo usar cada una."
- "Aplica Assertions Should (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Tus assertions comparan lo correcto (tipo incluido)"
- "Revisa mi pester-testing y dime qué pasos de Assertions Should me faltan en este nivel"