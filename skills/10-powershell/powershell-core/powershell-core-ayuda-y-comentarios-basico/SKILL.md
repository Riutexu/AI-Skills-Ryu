---
name: powershell-core-ayuda-y-comentarios-basico
description: Ayuda y comentarios · nivel Básico · PowerShell 7: scripting profesional. Comment-based help, Get-Help de calidad y comentarios que explican el porqué, no el qué. Objetivo del nivel: Escribir ayuda comment-based que funcione con Get-Help
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ayuda-y-comentarios"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Ayuda y comentarios — Básico

## Qué hace este skill

Comment-based help, Get-Help de calidad y comentarios que explican el porqué, no el qué. En este nivel se entrega: **Escribir ayuda comment-based que funcione con Get-Help**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ayuda y comentarios** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar bloque de ayuda con .SYNOPSIS y .DESCRIPTION
2. Documentar parámetros con .PARAMETER
3. Incluir .EXAMPLE con ejemplos usables
4. Verificar que Get-Help muestre tu ayuda

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir ayuda comment-based que funcione con Get-Help | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Agregar bloque de ayuda con .SYNOPSIS y .DESCRIPTION · Documentar parámetros con .PARAMETER · Incluir .EXAMPLE con ejemplos usables · Verificar que Get-Help muestre tu ayuda | lista | sí | 3-4 pasos |
| $criterios_clave | Get-Help sobre tu función muestra synopsis, parámetros y ejemplos · Los ejemplos de la ayuda son copiables y funcionan | lista | sí | calidad verificable |
| $prompt_guia | Mi función no tiene ayuda y quiero que Get-Help muestre algo decente. Armame el bloque comment-based completo con synopsis, parámetros y dos ejemplos. | texto | no | "Ayuda y comentarios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Get-Help sobre tu función muestra synopsis, parámetros y ejemplos
- [ ] Los ejemplos de la ayuda son copiables y funcionan

## Ejemplos de prompts

- "Mi función no tiene ayuda y quiero que Get-Help muestre algo decente. Armame el bloque comment-based completo con synopsis, parámetros y dos ejemplos."
- "Aplica Ayuda y comentarios (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Get-Help sobre tu función muestra synopsis, parámetros y ejemplos"
- "Revisa mi powershell-core y dime qué pasos de Ayuda y comentarios me faltan en este nivel"