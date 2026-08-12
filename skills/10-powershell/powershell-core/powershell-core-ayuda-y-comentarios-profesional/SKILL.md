---
name: powershell-core-ayuda-y-comentarios-profesional
description: Ayuda y comentarios · nivel Profesional · PowerShell 7: scripting profesional. Comment-based help, Get-Help de calidad y comentarios que explican el porqué, no el qué. Objetivo del nivel: Documentación viva: ayuda generada desde el código y política de comentarios del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ayuda-y-comentarios"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Ayuda y comentarios — Profesional

## Qué hace este skill

Comment-based help, Get-Help de calidad y comentarios que explican el porqué, no el qué. En este nivel se entrega: **Documentación viva: ayuda generada desde el código y política de comentarios del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ayuda y comentarios** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar documentación Markdown desde la ayuda con platyPS
2. Definir la política de comentarios del proyecto
3. Comentar decisiones de diseño, no lo que hace el código
4. Crear un README de API por módulo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Documentación viva: ayuda generada desde el código y política de comentarios del proyecto | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Generar documentación Markdown desde la ayuda con platyPS · Definir la política de comentarios del proyecto · Comentar decisiones de diseño, no lo que hace el código · Crear un README de API por módulo | lista | sí | 3-4 pasos |
| $criterios_clave | La documentación Markdown se regenera sin edición manual · Un nuevo dev entiende el módulo solo con ayuda y README | lista | sí | calidad verificable |
| $prompt_guia | Quiero generar documentación Markdown de mi módulo RYU-TUI automáticamente desde la ayuda con platyPS, y que los comentarios del código sigan una política. Armame el flujo y las convenciones. | texto | no | "Ayuda y comentarios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La documentación Markdown se regenera sin edición manual
- [ ] Un nuevo dev entiende el módulo solo con ayuda y README

## Ejemplos de prompts

- "Quiero generar documentación Markdown de mi módulo RYU-TUI automáticamente desde la ayuda con platyPS, y que los comentarios del código sigan una política. Armame el flujo y las convenciones."
- "Aplica Ayuda y comentarios (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza La documentación Markdown se regenera sin edición manual"
- "Revisa mi powershell-core y dime qué pasos de Ayuda y comentarios me faltan en este nivel"