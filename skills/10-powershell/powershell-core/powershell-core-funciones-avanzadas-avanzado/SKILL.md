---
name: powershell-core-funciones-avanzadas-avanzado
description: Funciones avanzadas · nivel Avanzado · PowerShell 7: scripting profesional. Funciones con parámetros tipados, validación, CmdletBinding y comportamiento de cmdlet nativo. Objetivo del nivel: Usar CmdletBinding, parámetros tipados y validación de entrada
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "funciones-avanzadas"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Funciones avanzadas — Avanzado

## Qué hace este skill

Funciones con parámetros tipados, validación, CmdletBinding y comportamiento de cmdlet nativo. En este nivel se entrega: **Usar CmdletBinding, parámetros tipados y validación de entrada**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones avanzadas** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar [CmdletBinding()] y parámetros obligatorios
2. Tipar parámetros y validar con ValidateSet y ValidateRange
3. Implementar SupportsShouldProcess para -WhatIf
4. Soportar -Verbose y -ErrorAction de forma consistente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar CmdletBinding, parámetros tipados y validación de entrada | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Agregar [CmdletBinding()] y parámetros obligatorios · Tipar parámetros y validar con ValidateSet y ValidateRange · Implementar SupportsShouldProcess para -WhatIf · Soportar -Verbose y -ErrorAction de forma consistente | lista | sí | 3-4 pasos |
| $criterios_clave | Los parámetros validan entrada antes de ejecutar · -WhatIf no modifica el sistema y -Verbose informa qué hace | lista | sí | calidad verificable |
| $prompt_guia | Tengo una función que borra archivos temporales viejos. Convertímela en función avanzada con CmdletBinding, validación de la cantidad de días y soporte para -WhatIf, así puedo probarla sin miedo. | texto | no | "Funciones avanzadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los parámetros validan entrada antes de ejecutar
- [ ] -WhatIf no modifica el sistema y -Verbose informa qué hace

## Ejemplos de prompts

- "Tengo una función que borra archivos temporales viejos. Convertímela en función avanzada con CmdletBinding, validación de la cantidad de días y soporte para -WhatIf, así puedo probarla sin miedo."
- "Aplica Funciones avanzadas (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Los parámetros validan entrada antes de ejecutar"
- "Revisa mi powershell-core y dime qué pasos de Funciones avanzadas me faltan en este nivel"