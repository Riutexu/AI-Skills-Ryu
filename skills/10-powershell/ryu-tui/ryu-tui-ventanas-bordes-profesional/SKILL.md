---
name: ryu-tui-ventanas-bordes-profesional
description: Ventanas y bordes · nivel Profesional · RYU-TUI: interfaces de terminal. Dibujo de ventanas, bordes redondeados, sombras, títulos y sistemas de capas superpuestas. Objetivo del nivel: Sistema de capas: ventanas apiladas con foco, z-order y restauración de lo que estaba detrás
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ventanas-bordes"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Ventanas y bordes — Profesional

## Qué hace este skill

Dibujo de ventanas, bordes redondeados, sombras, títulos y sistemas de capas superpuestas. En este nivel se entrega: **Sistema de capas: ventanas apiladas con foco, z-order y restauración de lo que estaba detrás**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ventanas y bordes** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mantener una pila de ventanas con foco
2. Restaurar el contenido debajo al cerrar
3. Dibujar sombra o realce de la ventana activa
4. Implementar foco por capa en el dispatcher de teclas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sistema de capas: ventanas apiladas con foco, z-order y restauración de lo que estaba detrás | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Mantener una pila de ventanas con foco · Restaurar el contenido debajo al cerrar · Dibujar sombra o realce de la ventana activa · Implementar foco por capa en el dispatcher de teclas | lista | sí | 3-4 pasos |
| $criterios_clave | Cerrar una ventana restaura lo que había detrás sin corrupción · El teclado llega siempre a la ventana con foco | lista | sí | calidad verificable |
| $prompt_guia | Quiero que ryu-tui.ps1 tenga ventanas apiladas: modal sobre el menú, foco por capa, y al cerrar se restaure la pantalla de atrás. Diseñame el sistema de capas con z-order. | texto | no | "Ventanas y bordes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cerrar una ventana restaura lo que había detrás sin corrupción
- [ ] El teclado llega siempre a la ventana con foco

## Ejemplos de prompts

- "Quiero que ryu-tui.ps1 tenga ventanas apiladas: modal sobre el menú, foco por capa, y al cerrar se restaure la pantalla de atrás. Diseñame el sistema de capas con z-order."
- "Aplica Ventanas y bordes (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Cerrar una ventana restaura lo que había detrás sin corrupción"
- "Revisa mi ryu-tui y dime qué pasos de Ventanas y bordes me faltan en este nivel"