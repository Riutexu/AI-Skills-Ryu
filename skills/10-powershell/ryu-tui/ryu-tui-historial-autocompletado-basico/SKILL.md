---
name: ryu-tui-historial-autocompletado-basico
description: Historial y autocompletado · nivel Básico · RYU-TUI: interfaces de terminal. Historial de entradas, navegación con flechas, autocompletado por prefijo y búsqueda. Objetivo del nivel: Input de línea con historial navegable con flechas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "historial-autocompletado"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Historial y autocompletado — Básico

## Qué hace este skill

Historial de entradas, navegación con flechas, autocompletado por prefijo y búsqueda. En este nivel se entrega: **Input de línea con historial navegable con flechas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Historial y autocompletado** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar una línea de input editable
2. Guardar entradas en un historial en memoria
3. Navegar el historial con flechas arriba/abajo
4. Mantener lo que escribiste al cancelar la búsqueda

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Input de línea con historial navegable con flechas | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Implementar una línea de input editable · Guardar entradas en un historial en memoria · Navegar el historial con flechas arriba/abajo · Mantener lo que escribiste al cancelar la búsqueda | lista | sí | 3-4 pasos |
| $criterios_clave | Las flechas recorren el historial sin pisar lo tipeado · Escape restaura lo que estabas escribiendo | lista | sí | calidad verificable |
| $prompt_guia | Mi input de comandos de RYU-TUI no tiene historial. Implementámelo: que las flechas naveguen lo anterior y que Escape no borre lo que estaba escribiendo. | texto | no | "Historial y autocompletado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las flechas recorren el historial sin pisar lo tipeado
- [ ] Escape restaura lo que estabas escribiendo

## Ejemplos de prompts

- "Mi input de comandos de RYU-TUI no tiene historial. Implementámelo: que las flechas naveguen lo anterior y que Escape no borre lo que estaba escribiendo."
- "Aplica Historial y autocompletado (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Las flechas recorren el historial sin pisar lo tipeado"
- "Revisa mi ryu-tui y dime qué pasos de Historial y autocompletado me faltan en este nivel"