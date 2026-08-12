---
name: winapi-pinvoke-casos-reales-tui-basico
description: Casos reales de TUI · nivel Básico · WinAPI y P/Invoke. Aplicar interop a RYU-TUI: redimensionar la consola nativa, título de ventana, foco y clipboard. Objetivo del nivel: Controlar la ventana de la propia consola con user32
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "casos-reales-tui"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Casos reales de TUI — Básico

## Qué hace este skill

Aplicar interop a RYU-TUI: redimensionar la consola nativa, título de ventana, foco y clipboard. En este nivel se entrega: **Controlar la ventana de la propia consola con user32**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos reales de TUI** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Obtener el handle de la consola con GetConsoleWindow
2. Cambiar el título de la ventana
3. Redimensionar la ventana con SetWindowPos
4. Restaurar el título original al salir

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Controlar la ventana de la propia consola con user32 | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Obtener el handle de la consola con GetConsoleWindow · Cambiar el título de la ventana · Redimensionar la ventana con SetWindowPos · Restaurar el título original al salir | lista | sí | 3-4 pasos |
| $criterios_clave | La TUI cambia el título y el tamaño de su propia ventana · Al salir se restaura el estado original | lista | sí | calidad verificable |
| $prompt_guia | Quiero que RYU-TUI cambie el título y el tamaño de su propia ventana: mostrame GetConsoleWindow, SetWindowPos y la restauración al salir. | texto | no | "Casos reales de TUI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La TUI cambia el título y el tamaño de su propia ventana
- [ ] Al salir se restaura el estado original

## Ejemplos de prompts

- "Quiero que RYU-TUI cambie el título y el tamaño de su propia ventana: mostrame GetConsoleWindow, SetWindowPos y la restauración al salir."
- "Aplica Casos reales de TUI (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza La TUI cambia el título y el tamaño de su propia ventana"
- "Revisa mi winapi-pinvoke y dime qué pasos de Casos reales de TUI me faltan en este nivel"