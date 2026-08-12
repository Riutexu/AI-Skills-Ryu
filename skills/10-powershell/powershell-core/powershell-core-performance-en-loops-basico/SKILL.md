---
name: powershell-core-performance-en-loops-basico
description: Performance en loops · nivel Básico · PowerShell 7: scripting profesional. Eliminar bottlenecks: medir con Measure-Command, evitar anti-patrones y elegir la herramienta correcta. Objetivo del nivel: Medir el tiempo de ejecución y detectar loops lentos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "performance-en-loops"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Performance en loops — Básico

## Qué hace este skill

Eliminar bottlenecks: medir con Measure-Command, evitar anti-patrones y elegir la herramienta correcta. En este nivel se entrega: **Medir el tiempo de ejecución y detectar loops lentos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Performance en loops** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar Measure-Command para cronometrar bloques
2. Comparar foreach con ForEach-Object en la práctica
3. Detectar operaciones repetidas dentro de un loop
4. Mover operaciones constantes fuera del loop

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Medir el tiempo de ejecución y detectar loops lentos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Usar Measure-Command para cronometrar bloques · Comparar foreach con ForEach-Object en la práctica · Detectar operaciones repetidas dentro de un loop · Mover operaciones constantes fuera del loop | lista | sí | 3-4 pasos |
| $criterios_clave | Medís el tiempo real de cada sección de tu script · Identificás al menos un anti-patrón en tu propio código | lista | sí | calidad verificable |
| $prompt_guia | Mi script tarda minutos y sospecho que es un loop. Mostrame cómo medir con Measure-Command y qué patrones de lentitud típicos buscar. | texto | no | "Performance en loops" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Medís el tiempo real de cada sección de tu script
- [ ] Identificás al menos un anti-patrón en tu propio código

## Ejemplos de prompts

- "Mi script tarda minutos y sospecho que es un loop. Mostrame cómo medir con Measure-Command y qué patrones de lentitud típicos buscar."
- "Aplica Performance en loops (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Medís el tiempo real de cada sección de tu script"
- "Revisa mi powershell-core y dime qué pasos de Performance en loops me faltan en este nivel"