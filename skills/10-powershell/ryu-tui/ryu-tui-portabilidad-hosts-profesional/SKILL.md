---
name: ryu-tui-portabilidad-hosts-profesional
description: Portabilidad entre hosts · nivel Profesional · RYU-TUI: interfaces de terminal. Windows Terminal, consola clásica, VS Code, CI: que tu TUI se comporte bien en todos lados. Objetivo del nivel: Matriz de compatibilidad: probar y documentar comportamiento en todos los hosts objetivo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "portabilidad-hosts"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Portabilidad entre hosts — Profesional

## Qué hace este skill

Windows Terminal, consola clásica, VS Code, CI: que tu TUI se comporte bien en todos lados. En este nivel se entrega: **Matriz de compatibilidad: probar y documentar comportamiento en todos los hosts objetivo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Portabilidad entre hosts** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Armar una matriz de hosts (Windows Terminal, consola, VS Code, CI)
2. Crear un script de smoke test de la TUI por host
3. Documentar límites y workarounds por host
4. Automatizar la detección al arrancar la TUI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Matriz de compatibilidad: probar y documentar comportamiento en todos los hosts objetivo | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Armar una matriz de hosts (Windows Terminal, consola, VS Code, CI) · Crear un script de smoke test de la TUI por host · Documentar límites y workarounds por host · Automatizar la detección al arrancar la TUI | lista | sí | 3-4 pasos |
| $criterios_clave | Cada host de la matriz está probado y documentado · El arranque de la TUI detecta capacidades y avisa límites | lista | sí | calidad verificable |
| $prompt_guia | Necesito una matriz de compatibilidad de RYU-TUI: probala en Windows Terminal, consola clásica y CI, documentá límites por host y armá un smoke test automático que detecte las capacidades al arrancar. | texto | no | "Portabilidad entre hosts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada host de la matriz está probado y documentado
- [ ] El arranque de la TUI detecta capacidades y avisa límites

## Ejemplos de prompts

- "Necesito una matriz de compatibilidad de RYU-TUI: probala en Windows Terminal, consola clásica y CI, documentá límites por host y armá un smoke test automático que detecte las capacidades al arrancar."
- "Aplica Portabilidad entre hosts (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Cada host de la matriz está probado y documentado"
- "Revisa mi ryu-tui y dime qué pasos de Portabilidad entre hosts me faltan en este nivel"