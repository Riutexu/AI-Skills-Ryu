---
name: powershell-core-psscriptanalyzer-estilo-basico
description: PSScriptAnalyzer y estilo · nivel Básico · PowerShell 7: scripting profesional. Lint automático, convenciones de estilo y código que un colega puede mantener. Objetivo del nivel: Instalar PSScriptAnalyzer y corregir los warnings más comunes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "psscriptanalyzer-estilo"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# PSScriptAnalyzer y estilo — Básico

## Qué hace este skill

Lint automático, convenciones de estilo y código que un colega puede mantener. En este nivel se entrega: **Instalar PSScriptAnalyzer y corregir los warnings más comunes**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PSScriptAnalyzer y estilo** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar PSScriptAnalyzer desde PSGallery
2. Correr Invoke-ScriptAnalyzer sobre un script
3. Interpretar los mensajes de warning y error
4. Corregir los 5 errores de estilo más comunes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Instalar PSScriptAnalyzer y corregir los warnings más comunes | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Instalar PSScriptAnalyzer desde PSGallery · Correr Invoke-ScriptAnalyzer sobre un script · Interpretar los mensajes de warning y error · Corregir los 5 errores de estilo más comunes | lista | sí | 3-4 pasos |
| $criterios_clave | Invoke-ScriptAnalyzer corre sin errores en tu script · Sabés qué significa cada tipo de regla del output | lista | sí | calidad verificable |
| $prompt_guia | Instalame PSScriptAnalyzer y corrémelo sobre mi script de respaldo. Después explicame los warnings que aparezcan y arreglá los de estilo. | texto | no | "PSScriptAnalyzer y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Invoke-ScriptAnalyzer corre sin errores en tu script
- [ ] Sabés qué significa cada tipo de regla del output

## Ejemplos de prompts

- "Instalame PSScriptAnalyzer y corrémelo sobre mi script de respaldo. Después explicame los warnings que aparezcan y arreglá los de estilo."
- "Aplica PSScriptAnalyzer y estilo (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Invoke-ScriptAnalyzer corre sin errores en tu script"
- "Revisa mi powershell-core y dime qué pasos de PSScriptAnalyzer y estilo me faltan en este nivel"