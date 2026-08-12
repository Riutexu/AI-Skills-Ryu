---
name: ryu-tui-rendimiento-renderizado-basico
description: Rendimiento de renderizado · nivel Básico · RYU-TUI: interfaces de terminal. Frames por segundo, costo de los escapes, drawing vs I/O y profiling del ciclo completo. Objetivo del nivel: Medir el costo de dibujar y detectar las partes lentas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rendimiento-renderizado"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Rendimiento de renderizado — Básico

## Qué hace este skill

Frames por segundo, costo de los escapes, drawing vs I/O y profiling del ciclo completo. En este nivel se entrega: **Medir el costo de dibujar y detectar las partes lentas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de renderizado** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cronometrar el renderizado con Measure-Command
2. Identificar bucles de dibujo innecesarios
3. Evitar Write-Host por carácter dentro de loops
4. Contar cuántos writes hace tu render por frame

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Medir el costo de dibujar y detectar las partes lentas | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Cronometrar el renderizado con Measure-Command · Identificar bucles de dibujo innecesarios · Evitar Write-Host por carácter dentro de loops · Contar cuántos writes hace tu render por frame | lista | sí | 3-4 pasos |
| $criterios_clave | Conocés cuánto tarda tu frame y cuántos writes hace · Reducís los writes por frame al mínimo | lista | sí | calidad verificable |
| $prompt_guia | Mi render de RYU-TUI tarda mucho y no sé dónde. Ayudame a cronometrar cada etapa y a contar cuántos Write-Host se emiten por frame. | texto | no | "Rendimiento de renderizado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Conocés cuánto tarda tu frame y cuántos writes hace
- [ ] Reducís los writes por frame al mínimo

## Ejemplos de prompts

- "Mi render de RYU-TUI tarda mucho y no sé dónde. Ayudame a cronometrar cada etapa y a contar cuántos Write-Host se emiten por frame."
- "Aplica Rendimiento de renderizado (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Conocés cuánto tarda tu frame y cuántos writes hace"
- "Revisa mi ryu-tui y dime qué pasos de Rendimiento de renderizado me faltan en este nivel"