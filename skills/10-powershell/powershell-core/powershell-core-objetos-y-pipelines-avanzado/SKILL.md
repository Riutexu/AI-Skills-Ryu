---
name: powershell-core-objetos-y-pipelines-avanzado
description: Objetos y pipelines · nivel Avanzado · PowerShell 7: scripting profesional. Pensar en objetos en vez de texto: pipelines, filtrado temprano y salida rica para componer scripts robustos. Objetivo del nivel: Componer pipelines complejos con expresiones, agrupación y resolución de problemas de salida
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "objetos-y-pipelines"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Objetos y pipelines — Avanzado

## Qué hace este skill

Pensar en objetos en vez de texto: pipelines, filtrado temprano y salida rica para componer scripts robustos. En este nivel se entrega: **Componer pipelines complejos con expresiones, agrupación y resolución de problemas de salida**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Objetos y pipelines** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear objetos personalizados con [PSCustomObject] en un pipeline
2. Usar Group-Object y Sort-Object para resumir datos
3. Procesar entrada pipeline en una función con process
4. Resolver colisiones de nombres de propiedades al exportar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Componer pipelines complejos con expresiones, agrupación y resolución de problemas de salida | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Crear objetos personalizados con [PSCustomObject] en un pipeline · Usar Group-Object y Sort-Object para resumir datos · Procesar entrada pipeline en una función con process · Resolver colisiones de nombres de propiedades al exportar | lista | sí | 3-4 pasos |
| $criterios_clave | Armás pipelines que generan PSCustomObject con datos calculados · Diagnosticás qué objeto llega realmente a cada etapa con Get-Member | lista | sí | calidad verificable |
| $prompt_guia | Necesito un pipeline que lea los procesos de un servidor, los agrupe por usuario y genere un PSCustomObject con el total de memoria por grupo. Armámelo y explicalo paso a paso. | texto | no | "Objetos y pipelines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Armás pipelines que generan PSCustomObject con datos calculados
- [ ] Diagnosticás qué objeto llega realmente a cada etapa con Get-Member

## Ejemplos de prompts

- "Necesito un pipeline que lea los procesos de un servidor, los agrupe por usuario y genere un PSCustomObject con el total de memoria por grupo. Armámelo y explicalo paso a paso."
- "Aplica Objetos y pipelines (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Armás pipelines que generan PSCustomObject con datos calculados"
- "Revisa mi powershell-core y dime qué pasos de Objetos y pipelines me faltan en este nivel"