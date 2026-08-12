---
name: ryu-tui-mouse-consola-profesional
description: Mouse en consola · nivel Profesional · RYU-TUI: interfaces de terminal. Soporte de mouse en Windows Terminal: habilitación VT, eventos de clic y su uso con moderación. Objetivo del nivel: Integración completa: modo drag, doble clic y coexistiendo con el teclado en un solo event loop
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "mouse-consola"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Mouse en consola — Profesional

## Qué hace este skill

Soporte de mouse en Windows Terminal: habilitación VT, eventos de clic y su uso con moderación. En este nivel se entrega: **Integración completa: modo drag, doble clic y coexistiendo con el teclado en un solo event loop**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mouse en consola** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Soportar drag de selección con eventos continuos
2. Detectar doble clic por temporización
3. Unificar teclado y mouse en un solo event loop
4. Degradar elegante en hosts sin soporte de mouse

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Integración completa: modo drag, doble clic y coexistiendo con el teclado en un solo event loop | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Soportar drag de selección con eventos continuos · Detectar doble clic por temporización · Unificar teclado y mouse en un solo event loop · Degradar elegante en hosts sin soporte de mouse | lista | sí | 3-4 pasos |
| $criterios_clave | Mouse y teclado conviven sin conflictos de estado · En hosts sin mouse la UI sigue funcionando igual | lista | sí | calidad verificable |
| $prompt_guia | Estoy unificando la entrada de ryu-tui.ps1: quiero que teclado y mouse compartan event loop, con drag y doble clic, pero que en una consola sin soporte VT no rompa nada. Diseñá la capa de entrada unificada. | texto | no | "Mouse en consola" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Mouse y teclado conviven sin conflictos de estado
- [ ] En hosts sin mouse la UI sigue funcionando igual

## Ejemplos de prompts

- "Estoy unificando la entrada de ryu-tui.ps1: quiero que teclado y mouse compartan event loop, con drag y doble clic, pero que en una consola sin soporte VT no rompa nada. Diseñá la capa de entrada unificada."
- "Aplica Mouse en consola (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Mouse y teclado conviven sin conflictos de estado"
- "Revisa mi ryu-tui y dime qué pasos de Mouse en consola me faltan en este nivel"