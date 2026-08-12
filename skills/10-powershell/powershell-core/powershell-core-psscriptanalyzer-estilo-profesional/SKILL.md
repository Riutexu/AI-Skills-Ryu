---
name: powershell-core-psscriptanalyzer-estilo-profesional
description: PSScriptAnalyzer y estilo · nivel Profesional · PowerShell 7: scripting profesional. Lint automático, convenciones de estilo y código que un colega puede mantener. Objetivo del nivel: Integrar el análisis en el flujo: gate de CI y evolución de las reglas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "psscriptanalyzer-estilo"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# PSScriptAnalyzer y estilo — Profesional

## Qué hace este skill

Lint automático, convenciones de estilo y código que un colega puede mantener. En este nivel se entrega: **Integrar el análisis en el flujo: gate de CI y evolución de las reglas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PSScriptAnalyzer y estilo** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar PSScriptAnalyzer como gate en el pipeline CI
2. Fijar la severidad mínima que bloquea commits
3. Mantener el archivo de reglas versionado con el proyecto
4. Documentar métricas de calidad del código

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Integrar el análisis en el flujo: gate de CI y evolución de las reglas | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Agregar PSScriptAnalyzer como gate en el pipeline CI · Fijar la severidad mínima que bloquea commits · Mantener el archivo de reglas versionado con el proyecto · Documentar métricas de calidad del código | lista | sí | 3-4 pasos |
| $criterios_clave | Un commit con severidad alta falla el pipeline automáticamente · El equipo puede revisar qué reglas cambiaron y por qué | lista | sí | calidad verificable |
| $prompt_guia | Quiero que ningún script de RYU-TUI pueda romperse por estilo sin que el CI se entere. Integrame Invoke-ScriptAnalyzer como gate en el pipeline con severidad configurable y reporte de salida. | texto | no | "PSScriptAnalyzer y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un commit con severidad alta falla el pipeline automáticamente
- [ ] El equipo puede revisar qué reglas cambiaron y por qué

## Ejemplos de prompts

- "Quiero que ningún script de RYU-TUI pueda romperse por estilo sin que el CI se entere. Integrame Invoke-ScriptAnalyzer como gate en el pipeline con severidad configurable y reporte de salida."
- "Aplica PSScriptAnalyzer y estilo (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Un commit con severidad alta falla el pipeline automáticamente"
- "Revisa mi powershell-core y dime qué pasos de PSScriptAnalyzer y estilo me faltan en este nivel"