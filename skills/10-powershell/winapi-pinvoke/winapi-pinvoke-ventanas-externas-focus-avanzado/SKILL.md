---
name: winapi-pinvoke-ventanas-externas-focus-avanzado
description: Ventanas externas y focus · nivel Avanzado · WinAPI y P/Invoke. Manipular ventanas de otras apps: enumeración, foco, minimizar, y respetar al usuario. Objetivo del nivel: Acciones sobre ventanas: foco, minimizar, restaurar y cierre por comando
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ventanas-externas-focus"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Ventanas externas y focus — Avanzado

## Qué hace este skill

Manipular ventanas de otras apps: enumeración, foco, minimizar, y respetar al usuario. En este nivel se entrega: **Acciones sobre ventanas: foco, minimizar, restaurar y cierre por comando**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ventanas externas y focus** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Traer una ventana al frente respetando las reglas de foco
2. Minimizar y restaurar con ShowWindow
3. Cerrar ventanas con SendMessage WM_CLOSE
4. Verificar el estado de la ventana antes y después

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Acciones sobre ventanas: foco, minimizar, restaurar y cierre por comando | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Traer una ventana al frente respetando las reglas de foco · Minimizar y restaurar con ShowWindow · Cerrar ventanas con SendMessage WM_CLOSE · Verificar el estado de la ventana antes y después | lista | sí | 3-4 pasos |
| $criterios_clave | Las acciones sobre ventanas se verifican post-ejecución · No robás foco cuando la app no lo pide | lista | sí | calidad verificable |
| $prompt_guia | Quiero que RYU-TUI pueda traer al frente, minimizar o cerrar ventanas de otras apps desde el menú: mostrame ShowWindow, WM_CLOSE y verificación de estado. | texto | no | "Ventanas externas y focus" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las acciones sobre ventanas se verifican post-ejecución
- [ ] No robás foco cuando la app no lo pide

## Ejemplos de prompts

- "Quiero que RYU-TUI pueda traer al frente, minimizar o cerrar ventanas de otras apps desde el menú: mostrame ShowWindow, WM_CLOSE y verificación de estado."
- "Aplica Ventanas externas y focus (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Las acciones sobre ventanas se verifican post-ejecución"
- "Revisa mi winapi-pinvoke y dime qué pasos de Ventanas externas y focus me faltan en este nivel"