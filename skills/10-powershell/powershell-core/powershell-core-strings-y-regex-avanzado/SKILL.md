---
name: powershell-core-strings-y-regex-avanzado
description: Strings y regex · nivel Avanzado · PowerShell 7: scripting profesional. Manipulación de texto, operadores de strings, expresiones regulares y parsing eficiente de líneas. Objetivo del nivel: Expresiones regulares para extraer y validar texto complejo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "strings-y-regex"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Strings y regex — Avanzado

## Qué hace este skill

Manipulación de texto, operadores de strings, expresiones regulares y parsing eficiente de líneas. En este nivel se entrega: **Expresiones regulares para extraer y validar texto complejo**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Strings y regex** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Extraer grupos con -match y $Matches
2. Usar [regex]::Matches para múltiples ocurrencias
3. Validar formatos (IP, email, fechas) con regex
4. Escapar caracteres especiales y usar modo multiline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Expresiones regulares para extraer y validar texto complejo | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Extraer grupos con -match y $Matches · Usar [regex]::Matches para múltiples ocurrencias · Validar formatos (IP, email, fechas) con regex · Escapar caracteres especiales y usar modo multiline | lista | sí | 3-4 pasos |
| $criterios_clave | Extraés todas las ocurrencias de un patrón, no solo la primera · Tus regex validan sin falsos positivos en casos borde | lista | sí | calidad verificable |
| $prompt_guia | Necesito extraer de un log todos los timestamps con formato ISO y las IP que aparecen por línea. Armame el regex con $Matches y [regex]::Matches y fijate que no agarre cosas que no son. | texto | no | "Strings y regex" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Extraés todas las ocurrencias de un patrón, no solo la primera
- [ ] Tus regex validan sin falsos positivos en casos borde

## Ejemplos de prompts

- "Necesito extraer de un log todos los timestamps con formato ISO y las IP que aparecen por línea. Armame el regex con $Matches y [regex]::Matches y fijate que no agarre cosas que no son."
- "Aplica Strings y regex (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Extraés todas las ocurrencias de un patrón, no solo la primera"
- "Revisa mi powershell-core y dime qué pasos de Strings y regex me faltan en este nivel"