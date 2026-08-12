---
name: ryu-tui-layout-por-caracteres-basico
description: Layout por caracteres · nivel Básico · RYU-TUI: interfaces de terminal. Dibujo de interfaces con celdas de caracteres: coordenadas, medidas y composición de paneles. Objetivo del nivel: Escribir texto en coordenadas fijas y dibujar cajas simples
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "layout-por-caracteres"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Layout por caracteres — Básico

## Qué hace este skill

Dibujo de interfaces con celdas de caracteres: coordenadas, medidas y composición de paneles. En este nivel se entrega: **Escribir texto en coordenadas fijas y dibujar cajas simples**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Layout por caracteres** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mover el cursor con escapes de coordenadas
2. Dibujar una caja con caracteres de borde
3. Escribir texto en posiciones fijas
4. Limpiar líneas específicas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir texto en coordenadas fijas y dibujar cajas simples | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Mover el cursor con escapes de coordenadas · Dibujar una caja con caracteres de borde · Escribir texto en posiciones fijas · Limpiar líneas específicas | lista | sí | 3-4 pasos |
| $criterios_clave | Dibujás una caja con título sin desalinearse · Entendés el sistema de coordenadas fila/columna | lista | sí | calidad verificable |
| $prompt_guia | Quiero dibujar una caja de 60x10 con un título centrado en la parte superior, usando escapes de coordenadas. Mostrame el código y cómo evitar que el texto desborde. | texto | no | "Layout por caracteres" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Dibujás una caja con título sin desalinearse
- [ ] Entendés el sistema de coordenadas fila/columna

## Ejemplos de prompts

- "Quiero dibujar una caja de 60x10 con un título centrado en la parte superior, usando escapes de coordenadas. Mostrame el código y cómo evitar que el texto desborde."
- "Aplica Layout por caracteres (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Dibujás una caja con título sin desalinearse"
- "Revisa mi ryu-tui y dime qué pasos de Layout por caracteres me faltan en este nivel"