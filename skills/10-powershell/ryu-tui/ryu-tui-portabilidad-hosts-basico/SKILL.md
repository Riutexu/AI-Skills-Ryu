---
name: ryu-tui-portabilidad-hosts-basico
description: Portabilidad entre hosts · nivel Básico · RYU-TUI: interfaces de terminal. Windows Terminal, consola clásica, VS Code, CI: que tu TUI se comporte bien en todos lados. Objetivo del nivel: Detectar el host y adaptar la salida a sus capacidades
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "portabilidad-hosts"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Portabilidad entre hosts — Básico

## Qué hace este skill

Windows Terminal, consola clásica, VS Code, CI: que tu TUI se comporte bien en todos lados. En este nivel se entrega: **Detectar el host y adaptar la salida a sus capacidades**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Portabilidad entre hosts** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diferenciar hosts con $Host.Name
2. Detectar soporte VT con $Host.UI.SupportsVirtualTerminal
3. Degradar colores y animaciones en hosts limitados
4. Verificar encoding de salida con [Console]::OutputEncoding

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Detectar el host y adaptar la salida a sus capacidades | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Diferenciar hosts con $Host.Name · Detectar soporte VT con $Host.UI.SupportsVirtualTerminal · Degradar colores y animaciones en hosts limitados · Verificar encoding de salida con [Console]::OutputEncoding | lista | sí | 3-4 pasos |
| $criterios_clave | La TUI no rompe en consola clásica aunque pierda colores · Sabés en qué host estás corriendo siempre | lista | sí | calidad verificable |
| $prompt_guia | Mi TUI se ve bien en Windows Terminal pero se rompe en la consola clásica. Ayudame a detectar el host y degradar colores y animaciones sin reescribir todo. | texto | no | "Portabilidad entre hosts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La TUI no rompe en consola clásica aunque pierda colores
- [ ] Sabés en qué host estás corriendo siempre

## Ejemplos de prompts

- "Mi TUI se ve bien en Windows Terminal pero se rompe en la consola clásica. Ayudame a detectar el host y degradar colores y animaciones sin reescribir todo."
- "Aplica Portabilidad entre hosts (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza La TUI no rompe en consola clásica aunque pierda colores"
- "Revisa mi ryu-tui y dime qué pasos de Portabilidad entre hosts me faltan en este nivel"