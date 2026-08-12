---
name: ryu-tui-entrada-teclado-eventos-basico
description: Entrada de teclado y eventos · nivel Básico · RYU-TUI: interfaces de terminal. Lectura de teclas con $Host.UI.RawUI, ReadKey, detección de teclas especiales y bucles de evento. Objetivo del nivel: Leer teclas individuales y distinguir enter, escape y flechas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "entrada-teclado-eventos"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Entrada de teclado y eventos — Básico

## Qué hace este skill

Lectura de teclas con $Host.UI.RawUI, ReadKey, detección de teclas especiales y bucles de evento. En este nivel se entrega: **Leer teclas individuales y distinguir enter, escape y flechas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Entrada de teclado y eventos** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar $Host.UI.RawUI.ReadKey para leer teclas
2. Detectar Escape, Enter y flechas
3. Leer teclas sin eco en pantalla
4. Diferenciar tecla normal de combinación con Shift

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Leer teclas individuales y distinguir enter, escape y flechas | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Usar $Host.UI.RawUI.ReadKey para leer teclas · Detectar Escape, Enter y flechas · Leer teclas sin eco en pantalla · Diferenciar tecla normal de combinación con Shift | lista | sí | 3-4 pasos |
| $criterios_clave | Tu bucle responde a Enter, Escape y flechas · Las teclas no se imprimen solas en pantalla | lista | sí | calidad verificable |
| $prompt_guia | Necesito un bucle que lea teclas sin que aparezcan en pantalla y responda a Enter, Escape y flechas. Mostrame ReadKey con y sin echo. | texto | no | "Entrada de teclado y eventos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tu bucle responde a Enter, Escape y flechas
- [ ] Las teclas no se imprimen solas en pantalla

## Ejemplos de prompts

- "Necesito un bucle que lea teclas sin que aparezcan en pantalla y responda a Enter, Escape y flechas. Mostrame ReadKey con y sin echo."
- "Aplica Entrada de teclado y eventos (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Tu bucle responde a Enter, Escape y flechas"
- "Revisa mi ryu-tui y dime qué pasos de Entrada de teclado y eventos me faltan en este nivel"