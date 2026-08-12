---
name: powershell-core-variables-entorno-rutas-basico
description: Variables de entorno y rutas · nivel Básico · PowerShell 7: scripting profesional. Environment, $env:, rutas relativas, Join-Path y portabilidad entre máquinas. Objetivo del nivel: Leer y escribir variables de entorno y armar rutas sin hacks
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "variables-entorno-rutas"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Variables de entorno y rutas — Básico

## Qué hace este skill

Environment, $env:, rutas relativas, Join-Path y portabilidad entre máquinas. En este nivel se entrega: **Leer y escribir variables de entorno y armar rutas sin hacks**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Variables de entorno y rutas** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer variables con $env: y con [Environment]::GetEnvironmentVariable
2. Setear variables para la sesión actual
3. Usar Join-Path en vez de concatenar strings de rutas
4. Entender $PSScriptRoot y $PWD

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Leer y escribir variables de entorno y armar rutas sin hacks | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Leer variables con $env: y con [Environment]::GetEnvironmentVariable · Setear variables para la sesión actual · Usar Join-Path en vez de concatenar strings de rutas · Entender $PSScriptRoot y $PWD | lista | sí | 3-4 pasos |
| $criterios_clave | Tus rutas se arman con Join-Path, no con sumas de strings · Sabés qué variables de entorno tenés y cómo consultarlas | lista | sí | calidad verificable |
| $prompt_guia | Mi script usa rutas hardcodeadas y quiero volverlo portable. Explicame variables de entorno, $PSScriptRoot y por qué Join-Path es mejor que concatenar. | texto | no | "Variables de entorno y rutas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus rutas se arman con Join-Path, no con sumas de strings
- [ ] Sabés qué variables de entorno tenés y cómo consultarlas

## Ejemplos de prompts

- "Mi script usa rutas hardcodeadas y quiero volverlo portable. Explicame variables de entorno, $PSScriptRoot y por qué Join-Path es mejor que concatenar."
- "Aplica Variables de entorno y rutas (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Tus rutas se arman con Join-Path, no con sumas de strings"
- "Revisa mi powershell-core y dime qué pasos de Variables de entorno y rutas me faltan en este nivel"