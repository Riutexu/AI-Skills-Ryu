---
name: powershell-core-scripts-vs-modulos-avanzado
description: Scripts vs módulos · nivel Avanzado · PowerShell 7: scripting profesional. Cuándo un script alcanza, cuándo necesitás un módulo y cómo estructurar código compartido. Objetivo del nivel: Estructurar módulos con funciones privadas y públicas y control del scope
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "scripts-vs-modulos"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Scripts vs módulos — Avanzado

## Qué hace este skill

Cuándo un script alcanza, cuándo necesitás un módulo y cómo estructurar código compartido. En este nivel se entrega: **Estructurar módulos con funciones privadas y públicas y control del scope**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripts vs módulos** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar funciones públicas de helpers privados
2. Controlar el scope con $script: y variables privadas del módulo
3. Cargar settings del módulo al importarlo
4. Exponer solo lo necesario con Export-ModuleMember

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Estructurar módulos con funciones privadas y públicas y control del scope | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Separar funciones públicas de helpers privados · Controlar el scope con $script: y variables privadas del módulo · Cargar settings del módulo al importarlo · Exponer solo lo necesario con Export-ModuleMember | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo expone solo las funciones públicas · Las variables internas no ensucian la sesión global | lista | sí | calidad verificable |
| $prompt_guia | Estoy armando un módulo para mi suite RYU-TUI y quiero que los helpers de dibujo sean privados y solo se expongan las funciones de alto nivel. ¿Cómo estructuro el .psm1 y el Export-ModuleMember? | texto | no | "Scripts vs módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo expone solo las funciones públicas
- [ ] Las variables internas no ensucian la sesión global

## Ejemplos de prompts

- "Estoy armando un módulo para mi suite RYU-TUI y quiero que los helpers de dibujo sean privados y solo se expongan las funciones de alto nivel. ¿Cómo estructuro el .psm1 y el Export-ModuleMember?"
- "Aplica Scripts vs módulos (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza El módulo expone solo las funciones públicas"
- "Revisa mi powershell-core y dime qué pasos de Scripts vs módulos me faltan en este nivel"