---
name: ryu-tui-ventanas-bordes-basico
description: Ventanas y bordes · nivel Básico · RYU-TUI: interfaces de terminal. Dibujo de ventanas, bordes redondeados, sombras, títulos y sistemas de capas superpuestas. Objetivo del nivel: Dibujar ventanas con borde, título y área de contenido
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ventanas-bordes"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Ventanas y bordes — Básico

## Qué hace este skill

Dibujo de ventanas, bordes redondeados, sombras, títulos y sistemas de capas superpuestas. En este nivel se entrega: **Dibujar ventanas con borde, título y área de contenido**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ventanas y bordes** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Dibujar bordes con caracteres de caja
2. Centrar el título en el borde superior
3. Dibujar contenido dentro de los límites de la ventana
4. Borrar la ventana por completo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Dibujar ventanas con borde, título y área de contenido | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Dibujar bordes con caracteres de caja · Centrar el título en el borde superior · Dibujar contenido dentro de los límites de la ventana · Borrar la ventana por completo | lista | sí | 3-4 pasos |
| $criterios_clave | La ventana tiene bordes alineados y título centrado · El contenido nunca pisa el borde | lista | sí | calidad verificable |
| $prompt_guia | Quiero dibujar una ventana modal para confirmaciones: borde, título centrado, contenido adentro y cierre limpio. Con las coordenadas que usa RYU-TUI. | texto | no | "Ventanas y bordes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La ventana tiene bordes alineados y título centrado
- [ ] El contenido nunca pisa el borde

## Ejemplos de prompts

- "Quiero dibujar una ventana modal para confirmaciones: borde, título centrado, contenido adentro y cierre limpio. Con las coordenadas que usa RYU-TUI."
- "Aplica Ventanas y bordes (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza La ventana tiene bordes alineados y título centrado"
- "Revisa mi ryu-tui y dime qué pasos de Ventanas y bordes me faltan en este nivel"