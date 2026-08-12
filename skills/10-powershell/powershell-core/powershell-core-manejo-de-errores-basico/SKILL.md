---
name: powershell-core-manejo-de-errores-basico
description: Manejo de errores try/catch · nivel Básico · PowerShell 7: scripting profesional. Errores terminantes y no terminantes, try/catch/finally, ErrorAction y diagnóstico de fallas. Objetivo del nivel: Diferenciar errores terminantes de no terminantes y capturarlos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "manejo-de-errores"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Manejo de errores try/catch — Básico

## Qué hace este skill

Errores terminantes y no terminantes, try/catch/finally, ErrorAction y diagnóstico de fallas. En este nivel se entrega: **Diferenciar errores terminantes de no terminantes y capturarlos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores try/catch** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar try/catch para envolver operaciones frágiles
2. Capturar el mensaje de error con $_.Exception.Message
3. Entender -ErrorAction Stop y su efecto en try/catch
4. Usar finally para limpiar recursos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Diferenciar errores terminantes de no terminantes y capturarlos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Usar try/catch para envolver operaciones frágiles · Capturar el mensaje de error con $_.Exception.Message · Entender -ErrorAction Stop y su efecto en try/catch · Usar finally para limpiar recursos | lista | sí | 3-4 pasos |
| $criterios_clave | Un comando que falla no tumba todo el script · El usuario ve un mensaje de error claro, no una excepción cruda | lista | sí | calidad verificable |
| $prompt_guia | Mi script se corta cuando un archivo no existe. Envolvemelo con try/catch y mostrame cómo informar el error sin que se rompa el resto de la ejecución. | texto | no | "Manejo de errores try/catch" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un comando que falla no tumba todo el script
- [ ] El usuario ve un mensaje de error claro, no una excepción cruda

## Ejemplos de prompts

- "Mi script se corta cuando un archivo no existe. Envolvemelo con try/catch y mostrame cómo informar el error sin que se rompa el resto de la ejecución."
- "Aplica Manejo de errores try/catch (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Un comando que falla no tumba todo el script"
- "Revisa mi powershell-core y dime qué pasos de Manejo de errores try/catch me faltan en este nivel"