---
name: powershell-core-json-xml-csv-profesional
description: JSON, XML y CSV · nivel Profesional · PowerShell 7: scripting profesional. Serialización y parsing de los formatos de datos que aparecen en el trabajo real con APIs y configs. Objetivo del nivel: Schema propio: validación de datos importados y round-trip confiable entre formatos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "json-xml-csv"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# JSON, XML y CSV — Profesional

## Qué hace este skill

Serialización y parsing de los formatos de datos que aparecen en el trabajo real con APIs y configs. En este nivel se entrega: **Schema propio: validación de datos importados y round-trip confiable entre formatos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **JSON, XML y CSV** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir un esquema de validación para configs JSON
2. Construir un convertidor JSON a XML con mapeo explícito
3. Probar round-trip: exportar, importar y comparar
4. Versionar el formato de datos dentro del propio archivo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Schema propio: validación de datos importados y round-trip confiable entre formatos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Definir un esquema de validación para configs JSON · Construir un convertidor JSON a XML con mapeo explícito · Probar round-trip: exportar, importar y comparar · Versionar el formato de datos dentro del propio archivo | lista | sí | 3-4 pasos |
| $criterios_clave | Un JSON inválido o incompleto falla con mensaje claro · El round-trip de tus datos es estable entre versiones | lista | sí | calidad verificable |
| $prompt_guia | Mi app de terminal RYU-TUI guarda su configuración en JSON y quiero que si el archivo está corrupto o le falta un campo, arranque con defaults y avise. Armame la validación de esquema y el round-trip seguro. | texto | no | "JSON, XML y CSV" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un JSON inválido o incompleto falla con mensaje claro
- [ ] El round-trip de tus datos es estable entre versiones

## Ejemplos de prompts

- "Mi app de terminal RYU-TUI guarda su configuración en JSON y quiero que si el archivo está corrupto o le falta un campo, arranque con defaults y avise. Armame la validación de esquema y el round-trip seguro."
- "Aplica JSON, XML y CSV (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Un JSON inválido o incompleto falla con mensaje claro"
- "Revisa mi powershell-core y dime qué pasos de JSON, XML y CSV me faltan en este nivel"