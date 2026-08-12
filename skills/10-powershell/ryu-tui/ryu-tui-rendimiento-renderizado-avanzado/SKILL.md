---
name: ryu-tui-rendimiento-renderizado-avanzado
description: Rendimiento de renderizado · nivel Avanzado · RYU-TUI: interfaces de terminal. Frames por segundo, costo de los escapes, drawing vs I/O y profiling del ciclo completo. Objetivo del nivel: Reducir I/O: escribir por bloques, evitar flushes y cachear escapes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rendimiento-renderizado"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Rendimiento de renderizado — Avanzado

## Qué hace este skill

Frames por segundo, costo de los escapes, drawing vs I/O y profiling del ciclo completo. En este nivel se entrega: **Reducir I/O: escribir por bloques, evitar flushes y cachear escapes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de renderizado** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Concatenar la salida de un frame y escribirla de una
2. Cachear secuencias ANSI que se repiten
3. Evitar el overhead de redirigir por cada línea
4. Comparar velocidad de distintos métodos de escritura

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reducir I/O: escribir por bloques, evitar flushes y cachear escapes | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Concatenar la salida de un frame y escribirla de una · Cachear secuencias ANSI que se repiten · Evitar el overhead de redirigir por cada línea · Comparar velocidad de distintos métodos de escritura | lista | sí | 3-4 pasos |
| $criterios_clave | El frame se escribe en un solo flush · Las secuencias repetidas se generan una vez y se reutilizan | lista | sí | calidad verificable |
| $prompt_guia | Ryu-tui.ps1 escribe cientos de escapes por frame. Quiero escribir cada frame de una sola vez y cachear las secuencias ANSI repetidas. Medí la mejora antes y después. | texto | no | "Rendimiento de renderizado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El frame se escribe en un solo flush
- [ ] Las secuencias repetidas se generan una vez y se reutilizan

## Ejemplos de prompts

- "Ryu-tui.ps1 escribe cientos de escapes por frame. Quiero escribir cada frame de una sola vez y cachear las secuencias ANSI repetidas. Medí la mejora antes y después."
- "Aplica Rendimiento de renderizado (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El frame se escribe en un solo flush"
- "Revisa mi ryu-tui y dime qué pasos de Rendimiento de renderizado me faltan en este nivel"