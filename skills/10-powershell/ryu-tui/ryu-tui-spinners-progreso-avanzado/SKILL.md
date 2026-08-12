---
name: ryu-tui-spinners-progreso-avanzado
description: Spinners y barras de progreso · nivel Avanzado · RYU-TUI: interfaces de terminal. Feedback visual de operaciones largas: spinners animados, barras de progreso y mensajes que no ensucian. Objetivo del nivel: Barras de progreso con porcentaje y texto dinámico, y control de ancho
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "spinners-progreso"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Spinners y barras de progreso — Avanzado

## Qué hace este skill

Feedback visual de operaciones largas: spinners animados, barras de progreso y mensajes que no ensucian. En este nivel se entrega: **Barras de progreso con porcentaje y texto dinámico, y control de ancho**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Spinners y barras de progreso** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Dibujar una barra de progreso con porcentaje
2. Actualizar el texto de estado dentro de la barra
3. Soportar ancho variable según la consola
4. Mostrar tiempo transcurrido y restante estimado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Barras de progreso con porcentaje y texto dinámico, y control de ancho | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Dibujar una barra de progreso con porcentaje · Actualizar el texto de estado dentro de la barra · Soportar ancho variable según la consola · Mostrar tiempo transcurrido y restante estimado | lista | sí | 3-4 pasos |
| $criterios_clave | La barra se adapta al ancho de la terminal · El porcentaje nunca se desalinea al crecer | lista | sí | calidad verificable |
| $prompt_guia | Quiero una barra de progreso estilo terminal para el paso de instalación de RYU-TUI, con porcentaje, descripción de la etapa y tiempo estimado, adaptada al ancho de la consola. Armámela. | texto | no | "Spinners y barras de progreso" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La barra se adapta al ancho de la terminal
- [ ] El porcentaje nunca se desalinea al crecer

## Ejemplos de prompts

- "Quiero una barra de progreso estilo terminal para el paso de instalación de RYU-TUI, con porcentaje, descripción de la etapa y tiempo estimado, adaptada al ancho de la consola. Armámela."
- "Aplica Spinners y barras de progreso (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza La barra se adapta al ancho de la terminal"
- "Revisa mi ryu-tui y dime qué pasos de Spinners y barras de progreso me faltan en este nivel"