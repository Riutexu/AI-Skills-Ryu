---
name: powershell-core-performance-en-loops-avanzado
description: Performance en loops · nivel Avanzado · PowerShell 7: scripting profesional. Eliminar bottlenecks: medir con Measure-Command, evitar anti-patrones y elegir la herramienta correcta. Objetivo del nivel: Optimizar con las herramientas correctas: List[T], Where() y evitar round-trips al sistema
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "performance-en-loops"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Performance en loops — Avanzado

## Qué hace este skill

Eliminar bottlenecks: medir con Measure-Command, evitar anti-patrones y elegir la herramienta correcta. En este nivel se entrega: **Optimizar con las herramientas correctas: List[T], Where() y evitar round-trips al sistema**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Performance en loops** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Reemplazar += en arrays por List[T] o arrays estáticos
2. Usar .Where() y .ForEach() en colecciones en memoria
3. Evitar llamar cmdlets por cada ítem cuando hay uno por lotes
4. Comparar rendimiento antes y después con mediciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Optimizar con las herramientas correctas: List[T], Where() y evitar round-trips al sistema | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Reemplazar += en arrays por List[T] o arrays estáticos · Usar .Where() y .ForEach() en colecciones en memoria · Evitar llamar cmdlets por cada ítem cuando hay uno por lotes · Comparar rendimiento antes y después con mediciones | lista | sí | 3-4 pasos |
| $criterios_clave | Reducís al menos 10x el tiempo de un loop real · Cada optimización está justificada por una medición | lista | sí | calidad verificable |
| $prompt_guia | Proceso 50.000 archivos y el script muere de lento. ¿Qué optimizaciones concretas aplico? Comparame foreach con .ForEach(), arrays con List[string] y cuándo conviene procesar por lotes. | texto | no | "Performance en loops" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Reducís al menos 10x el tiempo de un loop real
- [ ] Cada optimización está justificada por una medición

## Ejemplos de prompts

- "Proceso 50.000 archivos y el script muere de lento. ¿Qué optimizaciones concretas aplico? Comparame foreach con .ForEach(), arrays con List[string] y cuándo conviene procesar por lotes."
- "Aplica Performance en loops (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Reducís al menos 10x el tiempo de un loop real"
- "Revisa mi powershell-core y dime qué pasos de Performance en loops me faltan en este nivel"