---
name: ryu-tui-escape-ansi-colores-avanzado
description: Escape ANSI y colores · nivel Avanzado · RYU-TUI: interfaces de terminal. Códigos de escape, colores 16/256/truecolor, fondos, estilos y limpieza de pantalla portable. Objetivo del nivel: Paleta 256 y truecolor, fondo, y manejo de soporte VT en el host
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "escape-ansi-colores"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Escape ANSI y colores — Avanzado

## Qué hace este skill

Códigos de escape, colores 16/256/truecolor, fondos, estilos y limpieza de pantalla portable. En este nivel se entrega: **Paleta 256 y truecolor, fondo, y manejo de soporte VT en el host**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Escape ANSI y colores** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar colores de la paleta 256 y truecolor
2. Pintar fondos y degradados con celdas de color
3. Detectar si el host soporta VT con $Host.UI.SupportsVirtualTerminal
4. Definir una paleta central del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Paleta 256 y truecolor, fondo, y manejo de soporte VT en el host | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Usar colores de la paleta 256 y truecolor · Pintar fondos y degradados con celdas de color · Detectar si el host soporta VT con $Host.UI.SupportsVirtualTerminal · Definir una paleta central del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | La paleta 256 y truecolor funcionan sin secuencias rotas · El código detecta host sin VT y degrada con gracia | lista | sí | calidad verificable |
| $prompt_guia | Estoy armando el tema visual de RYU-TUI y quiero una paleta central definida una sola vez, con soporte de 256 colores y fallback para hosts viejos. ¿Cómo estructuro los helpers? | texto | no | "Escape ANSI y colores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La paleta 256 y truecolor funcionan sin secuencias rotas
- [ ] El código detecta host sin VT y degrada con gracia

## Ejemplos de prompts

- "Estoy armando el tema visual de RYU-TUI y quiero una paleta central definida una sola vez, con soporte de 256 colores y fallback para hosts viejos. ¿Cómo estructuro los helpers?"
- "Aplica Escape ANSI y colores (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza La paleta 256 y truecolor funcionan sin secuencias rotas"
- "Revisa mi ryu-tui y dime qué pasos de Escape ANSI y colores me faltan en este nivel"