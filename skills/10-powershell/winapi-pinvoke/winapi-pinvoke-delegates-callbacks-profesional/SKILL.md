---
name: winapi-pinvoke-delegates-callbacks-profesional
description: Delegates y callbacks · nivel Profesional · WinAPI y P/Invoke. Callbacks de Windows a PowerShell: delegates, keep-alive, enum de ventanas y hooks de eventos. Objetivo del nivel: Capa de callbacks robusta: hooks de eventos del sistema y manejo de threading en la suite
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "delegates-callbacks"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Delegates y callbacks — Profesional

## Qué hace este skill

Callbacks de Windows a PowerShell: delegates, keep-alive, enum de ventanas y hooks de eventos. En este nivel se entrega: **Capa de callbacks robusta: hooks de eventos del sistema y manejo de threading en la suite**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Delegates y callbacks** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar SetWinEventHook con delegate permanente
2. Gestionar el ciclo de vida del hook
3. Sincronizar eventos nativos con la UI de la TUI
4. Probar los callbacks con eventos sintéticos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de callbacks robusta: hooks de eventos del sistema y manejo de threading en la suite | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Usar SetWinEventHook con delegate permanente · Gestionar el ciclo de vida del hook · Sincronizar eventos nativos con la UI de la TUI · Probar los callbacks con eventos sintéticos | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos del sistema llegan a la TUI sin cuelgues · El hook se libera correctamente al salir | lista | sí | calidad verificable |
| $prompt_guia | Quiero recibir eventos de cambio de ventana en RYU-TUI con SetWinEventHook: manejá el lifetime del delegate, sincronizá con la UI y probalo con eventos sintéticos. | texto | no | "Delegates y callbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos del sistema llegan a la TUI sin cuelgues
- [ ] El hook se libera correctamente al salir

## Ejemplos de prompts

- "Quiero recibir eventos de cambio de ventana en RYU-TUI con SetWinEventHook: manejá el lifetime del delegate, sincronizá con la UI y probalo con eventos sintéticos."
- "Aplica Delegates y callbacks (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza Los eventos del sistema llegan a la TUI sin cuelgues"
- "Revisa mi winapi-pinvoke y dime qué pasos de Delegates y callbacks me faltan en este nivel"