---
name: ryu-tui-integracion-ryu-tui-avanzado
description: Integración con ryu-tui.ps1 · nivel Avanzado · RYU-TUI: interfaces de terminal. Trabajo real sobre la suite RYU-TUI: bootstrap.ps1, ryu-tui.ps1, comandos y el flujo de instalación. Objetivo del nivel: Modificar y extender el menú y los comandos de ryu-tui.ps1 sin romper el resto
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "integracion-ryu-tui"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Integración con ryu-tui.ps1 — Avanzado

## Qué hace este skill

Trabajo real sobre la suite RYU-TUI: bootstrap.ps1, ryu-tui.ps1, comandos y el flujo de instalación. En este nivel se entrega: **Modificar y extender el menú y los comandos de ryu-tui.ps1 sin romper el resto**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con ryu-tui.ps1** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar una opción nueva al menú principal
2. Crear un comando que reutilice helpers existentes
3. Respetar el estilo y las convenciones del proyecto
4. Verificar que la TUI sigue navegable tras el cambio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Modificar y extender el menú y los comandos de ryu-tui.ps1 sin romper el resto | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Agregar una opción nueva al menú principal · Crear un comando que reutilice helpers existentes · Respetar el estilo y las convenciones del proyecto · Verificar que la TUI sigue navegable tras el cambio | lista | sí | 3-4 pasos |
| $criterios_clave | La opción nueva aparece, se navega y ejecuta su acción · Los helpers se reutilizan sin duplicar lógica | lista | sí | calidad verificable |
| $prompt_guia | Quiero agregar al menú de RYU-TUI una opción de diagnóstico que muestre versión de pwsh, SO y estado de los 18 tests. Reutilizá los helpers que ya existen. | texto | no | "Integración con ryu-tui.ps1" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La opción nueva aparece, se navega y ejecuta su acción
- [ ] Los helpers se reutilizan sin duplicar lógica

## Ejemplos de prompts

- "Quiero agregar al menú de RYU-TUI una opción de diagnóstico que muestre versión de pwsh, SO y estado de los 18 tests. Reutilizá los helpers que ya existen."
- "Aplica Integración con ryu-tui.ps1 (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza La opción nueva aparece, se navega y ejecuta su acción"
- "Revisa mi ryu-tui y dime qué pasos de Integración con ryu-tui.ps1 me faltan en este nivel"