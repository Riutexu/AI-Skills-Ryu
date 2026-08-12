---
name: powershell-core-scripts-vs-modulos-basico
description: Scripts vs módulos · nivel Básico · PowerShell 7: scripting profesional. Cuándo un script alcanza, cuándo necesitás un módulo y cómo estructurar código compartido. Objetivo del nivel: Entender la diferencia entre script y módulo y cuándo usar cada uno
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "scripts-vs-modulos"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Scripts vs módulos — Básico

## Qué hace este skill

Cuándo un script alcanza, cuándo necesitás un módulo y cómo estructurar código compartido. En este nivel se entrega: **Entender la diferencia entre script y módulo y cuándo usar cada uno**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripts vs módulos** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar cuándo un script simple es suficiente
2. Crear un módulo básico .psm1
3. Importar funciones con Import-Module
4. Ver qué funciones expone un módulo con Get-Command -Module

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender la diferencia entre script y módulo y cuándo usar cada uno | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Identificar cuándo un script simple es suficiente · Crear un módulo básico .psm1 · Importar funciones con Import-Module · Ver qué funciones expone un módulo con Get-Command -Module | lista | sí | 3-4 pasos |
| $criterios_clave | Explicás con tus palabras cuándo pasarse a módulo · Importás tu primer módulo y usás sus funciones | lista | sí | calidad verificable |
| $prompt_guia | Tengo 4 funciones que reutilizo en varios scripts. Explicame la diferencia entre tenerlas en un .psm1 y copiarlas en cada script: cuándo conviene cada opción. | texto | no | "Scripts vs módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Explicás con tus palabras cuándo pasarse a módulo
- [ ] Importás tu primer módulo y usás sus funciones

## Ejemplos de prompts

- "Tengo 4 funciones que reutilizo en varios scripts. Explicame la diferencia entre tenerlas en un .psm1 y copiarlas en cada script: cuándo conviene cada opción."
- "Aplica Scripts vs módulos (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Explicás con tus palabras cuándo pasarse a módulo"
- "Revisa mi powershell-core y dime qué pasos de Scripts vs módulos me faltan en este nivel"