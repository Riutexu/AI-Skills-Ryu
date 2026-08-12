---
name: powershell-core-funciones-avanzadas-basico
description: Funciones avanzadas · nivel Básico · PowerShell 7: scripting profesional. Funciones con parámetros tipados, validación, CmdletBinding y comportamiento de cmdlet nativo. Objetivo del nivel: Escribir funciones con parámetros simples y devolver resultados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "funciones-avanzadas"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Funciones avanzadas — Básico

## Qué hace este skill

Funciones con parámetros tipados, validación, CmdletBinding y comportamiento de cmdlet nativo. En este nivel se entrega: **Escribir funciones con parámetros simples y devolver resultados**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones avanzadas** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una función con parámetro positional y named
2. Devolver resultados sin escribir en pantalla
3. Agregar valores por defecto a los parámetros
4. Llamar la función desde un script y capturar su salida

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir funciones con parámetros simples y devolver resultados | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Crear una función con parámetro positional y named · Devolver resultados sin escribir en pantalla · Agregar valores por defecto a los parámetros · Llamar la función desde un script y capturar su salida | lista | sí | 3-4 pasos |
| $criterios_clave | La función acepta parámetros y devuelve el resultado esperado · La salida se captura en una variable sin ruido extra | lista | sí | calidad verificable |
| $prompt_guia | Armame una función que reciba el nombre de un servicio y devuelva su estado. Quiero que tenga parámetro con default y que no ensucie la consola con Write-Host. | texto | no | "Funciones avanzadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La función acepta parámetros y devuelve el resultado esperado
- [ ] La salida se captura en una variable sin ruido extra

## Ejemplos de prompts

- "Armame una función que reciba el nombre de un servicio y devuelva su estado. Quiero que tenga parámetro con default y que no ensucie la consola con Write-Host."
- "Aplica Funciones avanzadas (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza La función acepta parámetros y devuelve el resultado esperado"
- "Revisa mi powershell-core y dime qué pasos de Funciones avanzadas me faltan en este nivel"