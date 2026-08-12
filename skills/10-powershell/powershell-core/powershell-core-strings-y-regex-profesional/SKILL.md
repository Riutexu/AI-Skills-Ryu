---
name: powershell-core-strings-y-regex-profesional
description: Strings y regex · nivel Profesional · PowerShell 7: scripting profesional. Manipulación de texto, operadores de strings, expresiones regulares y parsing eficiente de líneas. Objetivo del nivel: Parsing de texto robusto y performante para volúmenes reales de logs
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "strings-y-regex"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Strings y regex — Profesional

## Qué hace este skill

Manipulación de texto, operadores de strings, expresiones regulares y parsing eficiente de líneas. En este nivel se entrega: **Parsing de texto robusto y performante para volúmenes reales de logs**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Strings y regex** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Procesar archivos grandes línea por línea sin cargar todo
2. Construir un parser tolerante a variaciones de formato
3. Medir y optimizar el tiempo de parsing
4. Generar un resumen estructurado a partir del texto crudo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Parsing de texto robusto y performante para volúmenes reales de logs | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Procesar archivos grandes línea por línea sin cargar todo · Construir un parser tolerante a variaciones de formato · Medir y optimizar el tiempo de parsing · Generar un resumen estructurado a partir del texto crudo | lista | sí | 3-4 pasos |
| $criterios_clave | El parser procesa archivos de cientos de MB sin quedarse sin memoria · Líneas con formato raro se registran, no rompen el proceso | lista | sí | calidad verificable |
| $prompt_guia | Tengo logs de 500 MB por día y mi parser con -match anda lento. Necesito un approach de streaming línea por línea, con regex compiladas y un reporte de líneas que no matchean. ¿Cómo lo armás? | texto | no | "Strings y regex" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El parser procesa archivos de cientos de MB sin quedarse sin memoria
- [ ] Líneas con formato raro se registran, no rompen el proceso

## Ejemplos de prompts

- "Tengo logs de 500 MB por día y mi parser con -match anda lento. Necesito un approach de streaming línea por línea, con regex compiladas y un reporte de líneas que no matchean. ¿Cómo lo armás?"
- "Aplica Strings y regex (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza El parser procesa archivos de cientos de MB sin quedarse sin memoria"
- "Revisa mi powershell-core y dime qué pasos de Strings y regex me faltan en este nivel"