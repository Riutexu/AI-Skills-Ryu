---
name: powershell-core-json-xml-csv-basico
description: JSON, XML y CSV · nivel Básico · PowerShell 7: scripting profesional. Serialización y parsing de los formatos de datos que aparecen en el trabajo real con APIs y configs. Objetivo del nivel: Convertir objetos a JSON/CSV/XML y volver a leerlos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "json-xml-csv"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# JSON, XML y CSV — Básico

## Qué hace este skill

Serialización y parsing de los formatos de datos que aparecen en el trabajo real con APIs y configs. En este nivel se entrega: **Convertir objetos a JSON/CSV/XML y volver a leerlos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **JSON, XML y CSV** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar ConvertTo-Json y ConvertFrom-Json ida y vuelta
2. Exportar e importar CSV con Export-Csv e Import-Csv
3. Parsear XML con [xml] y acceder a nodos
4. Entender el truncado por defecto de ConvertTo-Json

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Convertir objetos a JSON/CSV/XML y volver a leerlos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Usar ConvertTo-Json y ConvertFrom-Json ida y vuelta · Exportar e importar CSV con Export-Csv e Import-Csv · Parsear XML con [xml] y acceder a nodos · Entender el truncado por defecto de ConvertTo-Json | lista | sí | 3-4 pasos |
| $criterios_clave | Serializás y deserializás tus datos sin perder información · Sabés por qué un JSON vuelve truncado y cómo arreglarlo | lista | sí | calidad verificable |
| $prompt_guia | Quiero guardar la configuración de mi script en un archivo JSON y cargarla al inicio. Mostrame el ida y vuelta con ConvertTo-Json y ConvertFrom-Json, incluyendo el tema del -Depth. | texto | no | "JSON, XML y CSV" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Serializás y deserializás tus datos sin perder información
- [ ] Sabés por qué un JSON vuelve truncado y cómo arreglarlo

## Ejemplos de prompts

- "Quiero guardar la configuración de mi script en un archivo JSON y cargarla al inicio. Mostrame el ida y vuelta con ConvertTo-Json y ConvertFrom-Json, incluyendo el tema del -Depth."
- "Aplica JSON, XML y CSV (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Serializás y deserializás tus datos sin perder información"
- "Revisa mi powershell-core y dime qué pasos de JSON, XML y CSV me faltan en este nivel"