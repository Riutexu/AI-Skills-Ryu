---
name: ryu-tui-entrada-teclado-eventos-avanzado
description: Entrada de teclado y eventos · nivel Avanzado · RYU-TUI: interfaces de terminal. Lectura de teclas con $Host.UI.RawUI, ReadKey, detección de teclas especiales y bucles de evento. Objetivo del nivel: Mapeo de teclas complejas: combinaciones, teclas de función y estados de la UI
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "entrada-teclado-eventos"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Entrada de teclado y eventos — Avanzado

## Qué hace este skill

Lectura de teclas con $Host.UI.RawUI, ReadKey, detección de teclas especiales y bucles de evento. En este nivel se entrega: **Mapeo de teclas complejas: combinaciones, teclas de función y estados de la UI**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Entrada de teclado y eventos** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar Ctrl+tecla y Alt+tecla
2. Mapear F1-F12 a acciones
3. Construir un dispatcher de teclas a comandos
4. Manejar teclas que devuelven secuencias largas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mapeo de teclas complejas: combinaciones, teclas de función y estados de la UI | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Detectar Ctrl+tecla y Alt+tecla · Mapear F1-F12 a acciones · Construir un dispatcher de teclas a comandos · Manejar teclas que devuelven secuencias largas | lista | sí | 3-4 pasos |
| $criterios_clave | Ctrl+C se maneja explícitamente y no mata la UI de golpe · El dispatcher está desacoplado de la lógica de dibujo | lista | sí | calidad verificable |
| $prompt_guia | Quiero un dispatcher de teclado para RYU-TUI: Ctrl+C debe disparar una confirmación de salida en vez de matar el proceso, y las teclas de función deben ejecutar acciones del menú. ¿Cómo lo diseño? | texto | no | "Entrada de teclado y eventos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ctrl+C se maneja explícitamente y no mata la UI de golpe
- [ ] El dispatcher está desacoplado de la lógica de dibujo

## Ejemplos de prompts

- "Quiero un dispatcher de teclado para RYU-TUI: Ctrl+C debe disparar una confirmación de salida en vez de matar el proceso, y las teclas de función deben ejecutar acciones del menú. ¿Cómo lo diseño?"
- "Aplica Entrada de teclado y eventos (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Ctrl+C se maneja explícitamente y no mata la UI de golpe"
- "Revisa mi ryu-tui y dime qué pasos de Entrada de teclado y eventos me faltan en este nivel"