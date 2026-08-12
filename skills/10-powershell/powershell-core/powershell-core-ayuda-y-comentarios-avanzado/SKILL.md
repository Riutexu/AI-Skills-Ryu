---
name: powershell-core-ayuda-y-comentarios-avanzado
description: Ayuda y comentarios · nivel Avanzado · PowerShell 7: scripting profesional. Comment-based help, Get-Help de calidad y comentarios que explican el porqué, no el qué. Objetivo del nivel: Ayuda completa con notas, enlaces y metadata de versión
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ayuda-y-comentarios"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Ayuda y comentarios — Avanzado

## Qué hace este skill

Comment-based help, Get-Help de calidad y comentarios que explican el porqué, no el qué. En este nivel se entrega: **Ayuda completa con notas, enlaces y metadata de versión**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ayuda y comentarios** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar .NOTES con autor, fecha y requisitos
2. Usar .LINK para enlazar documentación relacionada
3. Documentar outputs con .OUTPUTS y inputs con .INPUTS
4. Mantener la ayuda sincronizada con el código

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Ayuda completa con notas, enlaces y metadata de versión | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Agregar .NOTES con autor, fecha y requisitos · Usar .LINK para enlazar documentación relacionada · Documentar outputs con .OUTPUTS y inputs con .INPUTS · Mantener la ayuda sincronizada con el código | lista | sí | 3-4 pasos |
| $criterios_clave | La ayuda incluye requisitos, enlaces y tipos de entrada/salida · Actualizás la ayuda cuando cambia el comportamiento | lista | sí | calidad verificable |
| $prompt_guia | Quiero ayuda de nivel profesional para mis funciones: con .NOTES, .LINK, .INPUTS y .OUTPUTS. Elegí una de mis funciones de RYU-TUI y completámela entera. | texto | no | "Ayuda y comentarios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La ayuda incluye requisitos, enlaces y tipos de entrada/salida
- [ ] Actualizás la ayuda cuando cambia el comportamiento

## Ejemplos de prompts

- "Quiero ayuda de nivel profesional para mis funciones: con .NOTES, .LINK, .INPUTS y .OUTPUTS. Elegí una de mis funciones de RYU-TUI y completámela entera."
- "Aplica Ayuda y comentarios (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza La ayuda incluye requisitos, enlaces y tipos de entrada/salida"
- "Revisa mi powershell-core y dime qué pasos de Ayuda y comentarios me faltan en este nivel"