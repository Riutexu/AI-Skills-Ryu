---
name: powershell-core-funciones-avanzadas-profesional
description: Funciones avanzadas · nivel Profesional · PowerShell 7: scripting profesional. Funciones con parámetros tipados, validación, CmdletBinding y comportamiento de cmdlet nativo. Objetivo del nivel: Diseñar funciones que aceptan pipeline, con splatting y manejo de errores terminantes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "funciones-avanzadas"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Funciones avanzadas — Profesional

## Qué hace este skill

Funciones con parámetros tipados, validación, CmdletBinding y comportamiento de cmdlet nativo. En este nivel se entrega: **Diseñar funciones que aceptan pipeline, con splatting y manejo de errores terminantes**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones avanzadas** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Aceptar entrada por pipeline con ValueFromPipeline
2. Usar splatting de parámetros para llamadas limpias
3. Combinar try/catch con parámetros de error common
4. Documentar cada función con ayuda comment-based

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar funciones que aceptan pipeline, con splatting y manejo de errores terminantes | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Aceptar entrada por pipeline con ValueFromPipeline · Usar splatting de parámetros para llamadas limpias · Combinar try/catch con parámetros de error common · Documentar cada función con ayuda comment-based | lista | sí | 3-4 pasos |
| $criterios_clave | La función se usa con o sin pipeline de forma idéntica · Los errores se manejan con catch y mensajes claros al usuario | lista | sí | calidad verificable |
| $prompt_guia | Quiero que mi función de limpieza acepte también rutas por pipeline, use splatting internamente y tenga ayuda comment-based completa para que Get-Help funcione. ¿Cómo lo encarás? | texto | no | "Funciones avanzadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La función se usa con o sin pipeline de forma idéntica
- [ ] Los errores se manejan con catch y mensajes claros al usuario

## Ejemplos de prompts

- "Quiero que mi función de limpieza acepte también rutas por pipeline, use splatting internamente y tenga ayuda comment-based completa para que Get-Help funcione. ¿Cómo lo encarás?"
- "Aplica Funciones avanzadas (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza La función se usa con o sin pipeline de forma idéntica"
- "Revisa mi powershell-core y dime qué pasos de Funciones avanzadas me faltan en este nivel"