---
name: ryu-tui-rendimiento-renderizado-profesional
description: Rendimiento de renderizado · nivel Profesional · RYU-TUI: interfaces de terminal. Frames por segundo, costo de los escapes, drawing vs I/O y profiling del ciclo completo. Objetivo del nivel: Optimización con evidencia: benchmark del ciclo de frame completo y objetivo de FPS
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rendimiento-renderizado"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Rendimiento de renderizado — Profesional

## Qué hace este skill

Frames por segundo, costo de los escapes, drawing vs I/O y profiling del ciclo completo. En este nivel se entrega: **Optimización con evidencia: benchmark del ciclo de frame completo y objetivo de FPS**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de renderizado** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir un benchmark reproducible del render
2. Fijar un objetivo de frames por segundo medible
3. Optimizar con datos: dónde se va el tiempo realmente
4. Mantener el render por debajo del umbral en listas de 500 items

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Optimización con evidencia: benchmark del ciclo de frame completo y objetivo de FPS | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Definir un benchmark reproducible del render · Fijar un objetivo de frames por segundo medible · Optimizar con datos: dónde se va el tiempo realmente · Mantener el render por debajo del umbral en listas de 500 items | lista | sí | 3-4 pasos |
| $criterios_clave | El benchmark es reproducible y se documenta el número · Listas largas renderizan por debajo del umbral definido | lista | sí | calidad verificable |
| $prompt_guia | Quiero fijar un objetivo de rendimiento para el renderizado de ryu-tui.ps1: un benchmark reproducible, medición de FPS reales y que una lista de 500 ítems escrolee fluida. Diseñá el benchmark y optimizá con datos. | texto | no | "Rendimiento de renderizado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El benchmark es reproducible y se documenta el número
- [ ] Listas largas renderizan por debajo del umbral definido

## Ejemplos de prompts

- "Quiero fijar un objetivo de rendimiento para el renderizado de ryu-tui.ps1: un benchmark reproducible, medición de FPS reales y que una lista de 500 ítems escrolee fluida. Diseñá el benchmark y optimizá con datos."
- "Aplica Rendimiento de renderizado (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El benchmark es reproducible y se documenta el número"
- "Revisa mi ryu-tui y dime qué pasos de Rendimiento de renderizado me faltan en este nivel"