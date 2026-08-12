---
name: ryu-tui-integracion-ryu-tui-basico
description: Integración con ryu-tui.ps1 · nivel Básico · RYU-TUI: interfaces de terminal. Trabajo real sobre la suite RYU-TUI: bootstrap.ps1, ryu-tui.ps1, comandos y el flujo de instalación. Objetivo del nivel: Entender la estructura de RYU-TUI: qué hace cada script y cómo se ejecutan
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "integracion-ryu-tui"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Integración con ryu-tui.ps1 — Básico

## Qué hace este skill

Trabajo real sobre la suite RYU-TUI: bootstrap.ps1, ryu-tui.ps1, comandos y el flujo de instalación. En este nivel se entrega: **Entender la estructura de RYU-TUI: qué hace cada script y cómo se ejecutan**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con ryu-tui.ps1** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer y mapear bootstrap.ps1 y ryu-tui.ps1
2. Identificar las secciones de cada archivo
3. Ejecutar la TUI y navegar el menú principal
4. Entender qué comando ejecuta cada opción del menú

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender la estructura de RYU-TUI: qué hace cada script y cómo se ejecutan | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Leer y mapear bootstrap.ps1 y ryu-tui.ps1 · Identificar las secciones de cada archivo · Ejecutar la TUI y navegar el menú principal · Entender qué comando ejecuta cada opción del menú | lista | sí | 3-4 pasos |
| $criterios_clave | Explicás el flujo completo de instalación en 5 pasos · Corrés la TUI y operás el menú sin ayuda | lista | sí | calidad verificable |
| $prompt_guia | Recién arranco con la suite RYU-TUI: explicame qué hace bootstrap.ps1, qué hace ryu-tui.ps1 y cómo se conectan. Después probamos los comandos del menú juntos. | texto | no | "Integración con ryu-tui.ps1" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Explicás el flujo completo de instalación en 5 pasos
- [ ] Corrés la TUI y operás el menú sin ayuda

## Ejemplos de prompts

- "Recién arranco con la suite RYU-TUI: explicame qué hace bootstrap.ps1, qué hace ryu-tui.ps1 y cómo se conectan. Después probamos los comandos del menú juntos."
- "Aplica Integración con ryu-tui.ps1 (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Explicás el flujo completo de instalación en 5 pasos"
- "Revisa mi ryu-tui y dime qué pasos de Integración con ryu-tui.ps1 me faltan en este nivel"