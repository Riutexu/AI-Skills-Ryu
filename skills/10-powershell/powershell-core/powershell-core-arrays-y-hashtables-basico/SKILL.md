---
name: powershell-core-arrays-y-hashtables-basico
description: Arrays y hashtables · nivel Básico · PowerShell 7: scripting profesional. Colecciones: arrays, hashtables, operaciones de colección y patrones de acumulación sin bugs raros. Objetivo del nivel: Crear y recorrer arrays y hashtables básicos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "arrays-y-hashtables"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Arrays y hashtables — Básico

## Qué hace este skill

Colecciones: arrays, hashtables, operaciones de colección y patrones de acumulación sin bugs raros. En este nivel se entrega: **Crear y recorrer arrays y hashtables básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y hashtables** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear arrays con @() y agregar elementos
2. Recorrer con foreach y ForEach-Object
3. Crear hashtables con @{} y acceder a sus claves
4. Contar elementos y saber si existe una clave

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear y recorrer arrays y hashtables básicos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Crear arrays con @() y agregar elementos · Recorrer con foreach y ForEach-Object · Crear hashtables con @{} y acceder a sus claves · Contar elementos y saber si existe una clave | lista | sí | 3-4 pasos |
| $criterios_clave | Recorrés colecciones sin errores de elemento único · Sabés acceder a valores de un hashtable por clave | lista | sí | calidad verificable |
| $prompt_guia | Necesito un ejemplo claro de arrays y hashtables en PowerShell: cómo crearlos, agregarles elementos y recorrerlos sin pisarme. Mostrame también el problema clásico de un solo elemento. | texto | no | "Arrays y hashtables" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Recorrés colecciones sin errores de elemento único
- [ ] Sabés acceder a valores de un hashtable por clave

## Ejemplos de prompts

- "Necesito un ejemplo claro de arrays y hashtables en PowerShell: cómo crearlos, agregarles elementos y recorrerlos sin pisarme. Mostrame también el problema clásico de un solo elemento."
- "Aplica Arrays y hashtables (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Recorrés colecciones sin errores de elemento único"
- "Revisa mi powershell-core y dime qué pasos de Arrays y hashtables me faltan en este nivel"