---
name: ryu-tui-menus-interactivos-avanzado
description: Menús interactivos · nivel Avanzado · RYU-TUI: interfaces de terminal. Menús navegables con flechas, selección, atajos y estados de foco, estilo lo que se ve en RYU-TUI. Objetivo del nivel: Menús con atajos, foco, opciones deshabilitadas y submenús
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "menus-interactivos"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Menús interactivos — Avanzado

## Qué hace este skill

Menús navegables con flechas, selección, atajos y estados de foco, estilo lo que se ve en RYU-TUI. En este nivel se entrega: **Menús con atajos, foco, opciones deshabilitadas y submenús**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Menús interactivos** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Soportar atajos de una letra por opción
2. Marcar opciones deshabilitadas no seleccionables
3. Implementar submenús que vuelven al padre
4. Reflejar estado (marcado/desmarcado) en las opciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Menús con atajos, foco, opciones deshabilitadas y submenús | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Soportar atajos de una letra por opción · Marcar opciones deshabilitadas no seleccionables · Implementar submenús que vuelven al padre · Reflejar estado (marcado/desmarcado) en las opciones | lista | sí | 3-4 pasos |
| $criterios_clave | Cada opción se elige por flecha o por su letra de atajo · El submenú vuelve al menú padre sin perder el foco | lista | sí | calidad verificable |
| $prompt_guia | Mi menú principal de RYU-TUI necesita submenús, atajos de teclado y opciones deshabilitadas según el estado. ¿Cómo estructuro la pila de menús para que la navegación sea fluida? | texto | no | "Menús interactivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada opción se elige por flecha o por su letra de atajo
- [ ] El submenú vuelve al menú padre sin perder el foco

## Ejemplos de prompts

- "Mi menú principal de RYU-TUI necesita submenús, atajos de teclado y opciones deshabilitadas según el estado. ¿Cómo estructuro la pila de menús para que la navegación sea fluida?"
- "Aplica Menús interactivos (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Cada opción se elige por flecha o por su letra de atajo"
- "Revisa mi ryu-tui y dime qué pasos de Menús interactivos me faltan en este nivel"