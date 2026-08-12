---
name: winapi-pinvoke-casos-reales-tui-avanzado
description: Casos reales de TUI · nivel Avanzado · WinAPI y P/Invoke. Aplicar interop a RYU-TUI: redimensionar la consola nativa, título de ventana, foco y clipboard. Objetivo del nivel: Integraciones reales: clipboard nativa, font de consola y estados de ventana
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "casos-reales-tui"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Casos reales de TUI — Avanzado

## Qué hace este skill

Aplicar interop a RYU-TUI: redimensionar la consola nativa, título de ventana, foco y clipboard. En este nivel se entrega: **Integraciones reales: clipboard nativa, font de consola y estados de ventana**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos reales de TUI** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer y escribir el clipboard con OpenClipboard nativo
2. Setear el título dinámico según estado de la app
3. Detectar minimización o pérdida de foco
4. Reaccionar a cambios de tamaño nativos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Integraciones reales: clipboard nativa, font de consola y estados de ventana | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Leer y escribir el clipboard con OpenClipboard nativo · Setear el título dinámico según estado de la app · Detectar minimización o pérdida de foco · Reaccionar a cambios de tamaño nativos | lista | sí | 3-4 pasos |
| $criterios_clave | El clipboard funciona con la API nativa sin dependencias · La TUI reacciona a minimizar/restaurar | lista | sí | calidad verificable |
| $prompt_guia | Quiero agregar a RYU-TUI soporte de clipboard nativo y que la TUI detecte cuando pierde el foco o se minimiza: mostrame las APIs y la integración. | texto | no | "Casos reales de TUI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El clipboard funciona con la API nativa sin dependencias
- [ ] La TUI reacciona a minimizar/restaurar

## Ejemplos de prompts

- "Quiero agregar a RYU-TUI soporte de clipboard nativo y que la TUI detecte cuando pierde el foco o se minimiza: mostrame las APIs y la integración."
- "Aplica Casos reales de TUI (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza El clipboard funciona con la API nativa sin dependencias"
- "Revisa mi winapi-pinvoke y dime qué pasos de Casos reales de TUI me faltan en este nivel"