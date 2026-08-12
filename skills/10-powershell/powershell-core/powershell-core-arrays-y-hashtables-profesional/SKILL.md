---
name: powershell-core-arrays-y-hashtables-profesional
description: Arrays y hashtables · nivel Profesional · PowerShell 7: scripting profesional. Colecciones: arrays, hashtables, operaciones de colección y patrones de acumulación sin bugs raros. Objetivo del nivel: Modelar datos complejos con colecciones anidadas y serializarlas a JSON
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "arrays-y-hashtables"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Arrays y hashtables — Profesional

## Qué hace este skill

Colecciones: arrays, hashtables, operaciones de colección y patrones de acumulación sin bugs raros. En este nivel se entrega: **Modelar datos complejos con colecciones anidadas y serializarlas a JSON**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y hashtables** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir estructuras anidadas de arrays de hashtables
2. Convertir colecciones a JSON con ConvertTo-Json sin truncar
3. Normalizar datos heterogéneos de varias fuentes en un esquema único
4. Escribir un helper que valide la estructura antes de procesar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Modelar datos complejos con colecciones anidadas y serializarlas a JSON | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Construir estructuras anidadas de arrays de hashtables · Convertir colecciones a JSON con ConvertTo-Json sin truncar · Normalizar datos heterogéneos de varias fuentes en un esquema único · Escribir un helper que valide la estructura antes de procesar | lista | sí | 3-4 pasos |
| $criterios_clave | Tus estructuras anidadas sobreviven ida y vuelta con JSON · El código tolera faltas de claves sin romperse | lista | sí | calidad verificable |
| $prompt_guia | Tengo logs de distintas fuentes con formatos distintos y quiero normalizarlos en una colección de objetos para exportarlos a JSON. ¿Cómo estructurás el modelo de datos y cómo manejás claves que faltan? | texto | no | "Arrays y hashtables" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus estructuras anidadas sobreviven ida y vuelta con JSON
- [ ] El código tolera faltas de claves sin romperse

## Ejemplos de prompts

- "Tengo logs de distintas fuentes con formatos distintos y quiero normalizarlos en una colección de objetos para exportarlos a JSON. ¿Cómo estructurás el modelo de datos y cómo manejás claves que faltan?"
- "Aplica Arrays y hashtables (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Tus estructuras anidadas sobreviven ida y vuelta con JSON"
- "Revisa mi powershell-core y dime qué pasos de Arrays y hashtables me faltan en este nivel"