---
name: powershell-core-performance-en-loops-profesional
description: Performance en loops · nivel Profesional · PowerShell 7: scripting profesional. Eliminar bottlenecks: medir con Measure-Command, evitar anti-patrones y elegir la herramienta correcta. Objetivo del nivel: Perfilado serio: benchmarks, parallelismo controlado y decisiones basadas en datos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "performance-en-loops"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Performance en loops — Profesional

## Qué hace este skill

Eliminar bottlenecks: medir con Measure-Command, evitar anti-patrones y elegir la herramienta correcta. En este nivel se entrega: **Perfilado serio: benchmarks, parallelismo controlado y decisiones basadas en datos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Performance en loops** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Armar un benchmark reproducible entre dos implementaciones
2. Usar ForEach-Object -Parallel con control de throttling
3. Identificar cuellos de botella de I/O vs CPU
4. Documentar límites de memoria y tiempo del script

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Perfilado serio: benchmarks, parallelismo controlado y decisiones basadas en datos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Armar un benchmark reproducible entre dos implementaciones · Usar ForEach-Object -Parallel con control de throttling · Identificar cuellos de botella de I/O vs CPU · Documentar límites de memoria y tiempo del script | lista | sí | 3-4 pasos |
| $criterios_clave | Las decisiones de optimización tienen benchmark que las respalda · El paralelismo no rompe la salida ni dispara problemas de recursos | lista | sí | calidad verificable |
| $prompt_guia | Necesito decidir entre dos implementaciones de un parser de logs y quiero un benchmark serio: mediciones repetidas, promedio, y comparación. Además evaluá si ForEach-Object -Parallel vale la pena con estos archivos. | texto | no | "Performance en loops" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las decisiones de optimización tienen benchmark que las respalda
- [ ] El paralelismo no rompe la salida ni dispara problemas de recursos

## Ejemplos de prompts

- "Necesito decidir entre dos implementaciones de un parser de logs y quiero un benchmark serio: mediciones repetidas, promedio, y comparación. Además evaluá si ForEach-Object -Parallel vale la pena con estos archivos."
- "Aplica Performance en loops (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Las decisiones de optimización tienen benchmark que las respalda"
- "Revisa mi powershell-core y dime qué pasos de Performance en loops me faltan en este nivel"