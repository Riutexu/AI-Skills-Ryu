---
name: pester-testing-parametros-test-basico
description: Parámetros de test · nivel Básico · Pester: testing de scripts. Tests parametrizados con @Cases: cubrir múltiples entradas con un solo It sin duplicar código. Objetivo del nivel: Parametrizar un test con -TestCases y -ForEach
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "parametros-test"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Parámetros de test — Básico

## Qué hace este skill

Tests parametrizados con @Cases: cubrir múltiples entradas con un solo It sin duplicar código. En este nivel se entrega: **Parametrizar un test con -TestCases y -ForEach**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Parámetros de test** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar -TestCases con un array de hashtables
2. Usar -ForEach para inlining de casos
3. Ver los casos como tests separados en el reporte
4. Identificar cuál caso falló por su nombre

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Parametrizar un test con -TestCases y -ForEach | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Usar -TestCases con un array de hashtables · Usar -ForEach para inlining de casos · Ver los casos como tests separados en el reporte · Identificar cuál caso falló por su nombre | lista | sí | 3-4 pasos |
| $criterios_clave | Un It cubre 5 casos y el reporte los distingue · Cuando un caso falla, sabés cuál es | lista | sí | calidad verificable |
| $prompt_guia | Tengo una función que valida formatos de fecha y quiero probar 10 variantes: mostrame -TestCases y -ForEach y cómo distinguir en el reporte cuál caso falló. | texto | no | "Parámetros de test" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un It cubre 5 casos y el reporte los distingue
- [ ] Cuando un caso falla, sabés cuál es

## Ejemplos de prompts

- "Tengo una función que valida formatos de fecha y quiero probar 10 variantes: mostrame -TestCases y -ForEach y cómo distinguir en el reporte cuál caso falló."
- "Aplica Parámetros de test (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Un It cubre 5 casos y el reporte los distingue"
- "Revisa mi pester-testing y dime qué pasos de Parámetros de test me faltan en este nivel"