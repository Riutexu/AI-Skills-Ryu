---
name: powershell-core-strings-y-regex-basico
description: Strings y regex · nivel Básico · PowerShell 7: scripting profesional. Manipulación de texto, operadores de strings, expresiones regulares y parsing eficiente de líneas. Objetivo del nivel: Manipular strings con operadores y métodos comunes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "strings-y-regex"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Strings y regex — Básico

## Qué hace este skill

Manipulación de texto, operadores de strings, expresiones regulares y parsing eficiente de líneas. En este nivel se entrega: **Manipular strings con operadores y métodos comunes**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Strings y regex** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar -replace, -split y -match con ejemplos concretos
2. Concatenar y formatear strings con -f
3. Limpiar espacios con Trim y verificar con -like
4. Extraer substrings con métodos .Substring y .IndexOf

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Manipular strings con operadores y métodos comunes | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Usar -replace, -split y -match con ejemplos concretos · Concatenar y formatear strings con -f · Limpiar espacios con Trim y verificar con -like · Extraer substrings con métodos .Substring y .IndexOf | lista | sí | 3-4 pasos |
| $criterios_clave | Transformás texto de una línea sin escribir loops raros · Usás el operador correcto para cada tipo de búsqueda | lista | sí | calidad verificable |
| $prompt_guia | Tengo un archivo de logs con líneas tipo 'fecha: nivel: mensaje' y necesito separarlas en campos. Mostrame los operadores -split, -match y -replace con ejemplos. | texto | no | "Strings y regex" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Transformás texto de una línea sin escribir loops raros
- [ ] Usás el operador correcto para cada tipo de búsqueda

## Ejemplos de prompts

- "Tengo un archivo de logs con líneas tipo 'fecha: nivel: mensaje' y necesito separarlas en campos. Mostrame los operadores -split, -match y -replace con ejemplos."
- "Aplica Strings y regex (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Transformás texto de una línea sin escribir loops raros"
- "Revisa mi powershell-core y dime qué pasos de Strings y regex me faltan en este nivel"