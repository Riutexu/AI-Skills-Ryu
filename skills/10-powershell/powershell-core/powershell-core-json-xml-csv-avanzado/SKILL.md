---
name: powershell-core-json-xml-csv-avanzado
description: JSON, XML y CSV · nivel Avanzado · PowerShell 7: scripting profesional. Serialización y parsing de los formatos de datos que aparecen en el trabajo real con APIs y configs. Objetivo del nivel: Manejar estructuras anidadas y datos heterogéneos reales
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "json-xml-csv"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# JSON, XML y CSV — Avanzado

## Qué hace este skill

Serialización y parsing de los formatos de datos que aparecen en el trabajo real con APIs y configs. En este nivel se entrega: **Manejar estructuras anidadas y datos heterogéneos reales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **JSON, XML y CSV** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Navegar JSON anidados con propiedades dinámicas
2. Acceder a nodos XML con XPath y SelectNodes
3. Manejar CSV con delimitadores y encoding raros
4. Convertir datos planos a estructuras jerárquicas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar estructuras anidadas y datos heterogéneos reales | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Navegar JSON anidados con propiedades dinámicas · Acceder a nodos XML con XPath y SelectNodes · Manejar CSV con delimitadores y encoding raros · Convertir datos planos a estructuras jerárquicas | lista | sí | 3-4 pasos |
| $criterios_clave | Navegás estructuras anidadas sin errores de null · CSV con comas internas o encoding extraño no te rompe | lista | sí | calidad verificable |
| $prompt_guia | Un endpoint me devuelve JSON anidado con arrays dentro de objetos y a veces claves ausentes. Necesito aplanarlo a un CSV con una fila por registro. ¿Cómo lo manejo para que no explote con null? | texto | no | "JSON, XML y CSV" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Navegás estructuras anidadas sin errores de null
- [ ] CSV con comas internas o encoding extraño no te rompe

## Ejemplos de prompts

- "Un endpoint me devuelve JSON anidado con arrays dentro de objetos y a veces claves ausentes. Necesito aplanarlo a un CSV con una fila por registro. ¿Cómo lo manejo para que no explote con null?"
- "Aplica JSON, XML y CSV (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Navegás estructuras anidadas sin errores de null"
- "Revisa mi powershell-core y dime qué pasos de JSON, XML y CSV me faltan en este nivel"