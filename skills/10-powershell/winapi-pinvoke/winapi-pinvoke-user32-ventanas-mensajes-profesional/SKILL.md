---
name: winapi-pinvoke-user32-ventanas-mensajes-profesional
description: user32 (ventanas y mensajes) · nivel Profesional · WinAPI y P/Invoke. Las APIs de ventanas: FindWindow, SetForegroundWindow, mensajes WM_ y comportamiento de la UI. Objetivo del nivel: Capa de control de ventanas para la suite: foco gestionado, hooks de eventos y tests con apps de prueba
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "user32-ventanas-mensajes"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# user32 (ventanas y mensajes) — Profesional

## Qué hace este skill

Las APIs de ventanas: FindWindow, SetForegroundWindow, mensajes WM_ y comportamiento de la UI. En este nivel se entrega: **Capa de control de ventanas para la suite: foco gestionado, hooks de eventos y tests con apps de prueba**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **user32 (ventanas y mensajes)** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir un módulo de control de ventanas con API estable
2. Manejar el foco y el proceso detrás de la ventana
3. Soportar SetWinEventHook para eventos de ventanas
4. Testear con una app de prueba controlable

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de control de ventanas para la suite: foco gestionado, hooks de eventos y tests con apps de prueba | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Construir un módulo de control de ventanas con API estable · Manejar el foco y el proceso detrás de la ventana · Soportar SetWinEventHook para eventos de ventanas · Testear con una app de prueba controlable | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo de ventanas se testea con una app de prueba · El foco se maneja sin robar foco al usuario por error | lista | sí | calidad verificable |
| $prompt_guia | Quiero un módulo de control de ventanas para RYU-TUI: API estable, manejo de foco respetuoso, eventos de ventana con hooks y tests contra una app de prueba. | texto | no | "user32 (ventanas y mensajes)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo de ventanas se testea con una app de prueba
- [ ] El foco se maneja sin robar foco al usuario por error

## Ejemplos de prompts

- "Quiero un módulo de control de ventanas para RYU-TUI: API estable, manejo de foco respetuoso, eventos de ventana con hooks y tests contra una app de prueba."
- "Aplica user32 (ventanas y mensajes) (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza El módulo de ventanas se testea con una app de prueba"
- "Revisa mi winapi-pinvoke y dime qué pasos de user32 (ventanas y mensajes) me faltan en este nivel"