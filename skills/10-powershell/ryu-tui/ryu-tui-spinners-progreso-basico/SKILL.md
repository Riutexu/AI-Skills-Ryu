---
name: ryu-tui-spinners-progreso-basico
description: Spinners y barras de progreso · nivel Básico · RYU-TUI: interfaces de terminal. Feedback visual de operaciones largas: spinners animados, barras de progreso y mensajes que no ensucian. Objetivo del nivel: Spinner simple y mensaje de estado que se actualiza en la misma línea
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "spinners-progreso"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Spinners y barras de progreso — Básico

## Qué hace este skill

Feedback visual de operaciones largas: spinners animados, barras de progreso y mensajes que no ensucian. En este nivel se entrega: **Spinner simple y mensaje de estado que se actualiza en la misma línea**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Spinners y barras de progreso** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Animar un spinner con caracteres giratorios
2. Actualizar una línea de estado sin imprimir de más
3. Combinar spinner con una tarea que tarda
4. Limpiar la línea al terminar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Spinner simple y mensaje de estado que se actualiza en la misma línea | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Animar un spinner con caracteres giratorios · Actualizar una línea de estado sin imprimir de más · Combinar spinner con una tarea que tarda · Limpiar la línea al terminar | lista | sí | 3-4 pasos |
| $criterios_clave | El spinner gira sin generar líneas nuevas · Al terminar, la línea queda limpia y reutilizable | lista | sí | calidad verificable |
| $prompt_guia | Mi script de instalación tarda unos segundos y quiero un spinner que gire mostrando qué está haciendo, en una sola línea. Mostrame cómo con carriage return y timeout. | texto | no | "Spinners y barras de progreso" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El spinner gira sin generar líneas nuevas
- [ ] Al terminar, la línea queda limpia y reutilizable

## Ejemplos de prompts

- "Mi script de instalación tarda unos segundos y quiero un spinner que gire mostrando qué está haciendo, en una sola línea. Mostrame cómo con carriage return y timeout."
- "Aplica Spinners y barras de progreso (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El spinner gira sin generar líneas nuevas"
- "Revisa mi ryu-tui y dime qué pasos de Spinners y barras de progreso me faltan en este nivel"