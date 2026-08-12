---
name: winapi-pinvoke-user32-ventanas-mensajes-avanzado
description: user32 (ventanas y mensajes) · nivel Avanzado · WinAPI y P/Invoke. Las APIs de ventanas: FindWindow, SetForegroundWindow, mensajes WM_ y comportamiento de la UI. Objetivo del nivel: Mensajes de Windows: SendMessage/PostMessage, WM_ comunes y ventanas hijas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "user32-ventanas-mensajes"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# user32 (ventanas y mensajes) — Avanzado

## Qué hace este skill

Las APIs de ventanas: FindWindow, SetForegroundWindow, mensajes WM_ y comportamiento de la UI. En este nivel se entrega: **Mensajes de Windows: SendMessage/PostMessage, WM_ comunes y ventanas hijas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **user32 (ventanas y mensajes)** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Enviar mensajes con SendMessage y PostMessage
2. Cerrar o minimizar ventanas por mensaje WM_
3. Encontrar ventanas hijas con EnumChildWindows
4. Entender la diferencia entre Send y Post

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mensajes de Windows: SendMessage/PostMessage, WM_ comunes y ventanas hijas | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Enviar mensajes con SendMessage y PostMessage · Cerrar o minimizar ventanas por mensaje WM_ · Encontrar ventanas hijas con EnumChildWindows · Entender la diferencia entre Send y Post | lista | sí | 3-4 pasos |
| $criterios_clave | Controlás ventanas de apps por mensajes sin tocar su UI · Sabés cuándo usar SendMessage vs PostMessage | lista | sí | calidad verificable |
| $prompt_guia | Quiero minimizar y restaurar la ventana de una app externa desde mi TUI: mostrame SendMessage/PostMessage con los WM_ correctos y cómo enumerar ventanas hijas. | texto | no | "user32 (ventanas y mensajes)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Controlás ventanas de apps por mensajes sin tocar su UI
- [ ] Sabés cuándo usar SendMessage vs PostMessage

## Ejemplos de prompts

- "Quiero minimizar y restaurar la ventana de una app externa desde mi TUI: mostrame SendMessage/PostMessage con los WM_ correctos y cómo enumerar ventanas hijas."
- "Aplica user32 (ventanas y mensajes) (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Controlás ventanas de apps por mensajes sin tocar su UI"
- "Revisa mi winapi-pinvoke y dime qué pasos de user32 (ventanas y mensajes) me faltan en este nivel"