---
name: powershell-core-archivos-y-directorios-profesional
description: Archivos y directorios · nivel Profesional · PowerShell 7: scripting profesional. Get-ChildItem, rutas, lecturas eficientes, filtros y operaciones batch sin sorpresas de permiso. Objetivo del nivel: Operaciones batch atómicas: staging, renombrado masivo y consistencia con -WhatIf
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "archivos-y-directorios"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Archivos y directorios — Profesional

## Qué hace este skill

Get-ChildItem, rutas, lecturas eficientes, filtros y operaciones batch sin sorpresas de permiso. En este nivel se entrega: **Operaciones batch atómicas: staging, renombrado masivo y consistencia con -WhatIf**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Archivos y directorios** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar un script de renombrado masivo reversible
2. Mover archivos a una carpeta de staging antes de borrar
3. Registrar cada operación en un log de auditoría
4. Probar todo con -WhatIf antes de tocar el sistema

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Operaciones batch atómicas: staging, renombrado masivo y consistencia con -WhatIf | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Diseñar un script de renombrado masivo reversible · Mover archivos a una carpeta de staging antes de borrar · Registrar cada operación en un log de auditoría · Probar todo con -WhatIf antes de tocar el sistema | lista | sí | 3-4 pasos |
| $criterios_clave | Podés revertir una operación batch con la info del log · El script documenta exactamente qué cambió y cuándo | lista | sí | calidad verificable |
| $prompt_guia | Necesito un script que renombre 2.000 archivos agregándoles un prefijo con fecha, pero quiero que primero simule con -WhatIf, que loguee cada cambio y que se pueda revertir. Diseñámelo. | texto | no | "Archivos y directorios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Podés revertir una operación batch con la info del log
- [ ] El script documenta exactamente qué cambió y cuándo

## Ejemplos de prompts

- "Necesito un script que renombre 2.000 archivos agregándoles un prefijo con fecha, pero quiero que primero simule con -WhatIf, que loguee cada cambio y que se pueda revertir. Diseñámelo."
- "Aplica Archivos y directorios (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Podés revertir una operación batch con la info del log"
- "Revisa mi powershell-core y dime qué pasos de Archivos y directorios me faltan en este nivel"