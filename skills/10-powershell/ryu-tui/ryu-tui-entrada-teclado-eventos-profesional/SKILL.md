---
name: ryu-tui-entrada-teclado-eventos-profesional
description: Entrada de teclado y eventos · nivel Profesional · RYU-TUI: interfaces de terminal. Lectura de teclas con $Host.UI.RawUI, ReadKey, detección de teclas especiales y bucles de evento. Objetivo del nivel: Bucle de eventos completo: cola de input, estados, inactividad y testeo del flujo de teclas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "entrada-teclado-eventos"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Entrada de teclado y eventos — Profesional

## Qué hace este skill

Lectura de teclas con $Host.UI.RawUI, ReadKey, detección de teclas especiales y bucles de evento. En este nivel se entrega: **Bucle de eventos completo: cola de input, estados, inactividad y testeo del flujo de teclas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Entrada de teclado y eventos** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un event loop con estados (navegando, confirmando, escribiendo)
2. Soportar espera con timeout para redibujados periódicos
3. Registrar el flujo de teclas para debug
4. Aislar el input en una función testeable con Pester

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Bucle de eventos completo: cola de input, estados, inactividad y testeo del flujo de teclas | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Implementar un event loop con estados (navegando, confirmando, escribiendo) · Soportar espera con timeout para redibujados periódicos · Registrar el flujo de teclas para debug · Aislar el input en una función testeable con Pester | lista | sí | 3-4 pasos |
| $criterios_clave | La UI reacciona a teclas sin perder estado interno · El event loop se puede probar con teclas simuladas | lista | sí | calidad verificable |
| $prompt_guia | Estoy rediseñando el event loop de ryu-tui.ps1: quiero estados (menú, confirmación, input de texto), timeout para refrescar el reloj del header y poder simular teclas en tests Pester. ¿Qué arquitectura me sugerís? | texto | no | "Entrada de teclado y eventos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI reacciona a teclas sin perder estado interno
- [ ] El event loop se puede probar con teclas simuladas

## Ejemplos de prompts

- "Estoy rediseñando el event loop de ryu-tui.ps1: quiero estados (menú, confirmación, input de texto), timeout para refrescar el reloj del header y poder simular teclas en tests Pester. ¿Qué arquitectura me sugerís?"
- "Aplica Entrada de teclado y eventos (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza La UI reacciona a teclas sin perder estado interno"
- "Revisa mi ryu-tui y dime qué pasos de Entrada de teclado y eventos me faltan en este nivel"