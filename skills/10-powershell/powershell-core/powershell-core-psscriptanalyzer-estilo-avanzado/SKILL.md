---
name: powershell-core-psscriptanalyzer-estilo-avanzado
description: PSScriptAnalyzer y estilo · nivel Avanzado · PowerShell 7: scripting profesional. Lint automático, convenciones de estilo y código que un colega puede mantener. Objetivo del nivel: Configurar reglas propias y estandarizar el estilo del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "psscriptanalyzer-estilo"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# PSScriptAnalyzer y estilo — Avanzado

## Qué hace este skill

Lint automático, convenciones de estilo y código que un colega puede mantener. En este nivel se entrega: **Configurar reglas propias y estandarizar el estilo del proyecto**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PSScriptAnalyzer y estilo** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un PSScriptAnalyzerSettings.psd1 con reglas custom
2. Decidir y documentar convenciones del equipo
3. Excluir falsos positivos justificados
4. Correr el análisis en toda la carpeta del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Configurar reglas propias y estandarizar el estilo del proyecto | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Crear un PSScriptAnalyzerSettings.psd1 con reglas custom · Decidir y documentar convenciones del equipo · Excluir falsos positivos justificados · Correr el análisis en toda la carpeta del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | El análisis del proyecto completo pasa sin errores · Cada exclusión de regla está justificada y documentada | lista | sí | calidad verificable |
| $prompt_guia | Quiero estandarizar el estilo de toda mi carpeta de scripts de RYU-TUI: armame un PSScriptAnalyzerSettings.psd1 con las reglas que tiene sentido tener y corré el análisis sobre el proyecto entero. | texto | no | "PSScriptAnalyzer y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El análisis del proyecto completo pasa sin errores
- [ ] Cada exclusión de regla está justificada y documentada

## Ejemplos de prompts

- "Quiero estandarizar el estilo de toda mi carpeta de scripts de RYU-TUI: armame un PSScriptAnalyzerSettings.psd1 con las reglas que tiene sentido tener y corré el análisis sobre el proyecto entero."
- "Aplica PSScriptAnalyzer y estilo (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza El análisis del proyecto completo pasa sin errores"
- "Revisa mi powershell-core y dime qué pasos de PSScriptAnalyzer y estilo me faltan en este nivel"