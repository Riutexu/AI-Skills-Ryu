---
name: ryu-tui-escape-ansi-colores-basico
description: Escape ANSI y colores · nivel Básico · RYU-TUI: interfaces de terminal. Códigos de escape, colores 16/256/truecolor, fondos, estilos y limpieza de pantalla portable. Objetivo del nivel: Colorear salida con códigos ANSI y estilos básicos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "escape-ansi-colores"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Escape ANSI y colores — Básico

## Qué hace este skill

Códigos de escape, colores 16/256/truecolor, fondos, estilos y limpieza de pantalla portable. En este nivel se entrega: **Colorear salida con códigos ANSI y estilos básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Escape ANSI y colores** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Colorear texto con $PSStyle o secuencias directas
2. Aplicar negrita, subrayado y fondo
3. Limpiar pantalla y mover cursor con escapes
4. Crear helpers de color reutilizables

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Colorear salida con códigos ANSI y estilos básicos | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Colorear texto con $PSStyle o secuencias directas · Aplicar negrita, subrayado y fondo · Limpiar pantalla y mover cursor con escapes · Crear helpers de color reutilizables | lista | sí | 3-4 pasos |
| $criterios_clave | La salida coloreada se ve igual en Windows Terminal · Tenés helpers para los colores que usás seguido | lista | sí | calidad verificable |
| $prompt_guia | Quiero darle color a la salida de mi script de estado del sistema. Mostrame cómo usar códigos ANSI en PowerShell 7, incluyendo $PSStyle y helpers simples de color. | texto | no | "Escape ANSI y colores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La salida coloreada se ve igual en Windows Terminal
- [ ] Tenés helpers para los colores que usás seguido

## Ejemplos de prompts

- "Quiero darle color a la salida de mi script de estado del sistema. Mostrame cómo usar códigos ANSI en PowerShell 7, incluyendo $PSStyle y helpers simples de color."
- "Aplica Escape ANSI y colores (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza La salida coloreada se ve igual en Windows Terminal"
- "Revisa mi ryu-tui y dime qué pasos de Escape ANSI y colores me faltan en este nivel"