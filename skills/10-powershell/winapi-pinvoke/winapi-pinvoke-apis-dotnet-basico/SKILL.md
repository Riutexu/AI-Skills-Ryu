---
name: winapi-pinvoke-apis-dotnet-basico
description: Combinación con APIs .NET · nivel Básico · WinAPI y P/Invoke. Cuando conviene .NET en vez de P/Invoke: System.IO, Process, y la frontera managed vs nativa. Objetivo del nivel: Usar clases .NET para tareas que reemplazan a cmdlets
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "apis-dotnet"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Combinación con APIs .NET — Básico

## Qué hace este skill

Cuando conviene .NET en vez de P/Invoke: System.IO, Process, y la frontera managed vs nativa. En este nivel se entrega: **Usar clases .NET para tareas que reemplazan a cmdlets**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Combinación con APIs .NET** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar [System.IO.File] para archivos con control fino
2. Usar [System.Diagnostics.Process] para procesos
3. Entender cuándo .NET rinde más que el cmdlet
4. Elegir la API correcta por tarea

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar clases .NET para tareas que reemplazan a cmdlets | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Usar [System.IO.File] para archivos con control fino · Usar [System.Diagnostics.Process] para procesos · Entender cuándo .NET rinde más que el cmdlet · Elegir la API correcta por tarea | lista | sí | 3-4 pasos |
| $criterios_clave | Elegís .NET o cmdlet según el caso con criterio · Tus llamadas .NET manejan errores de forma controlada | lista | sí | calidad verificable |
| $prompt_guia | No tengo claro cuándo usar .NET directo y cuándo el cmdlet: mostrame comparaciones File vs Get-Content y Process vs Get-Process con casos donde conviene cada uno. | texto | no | "Combinación con APIs .NET" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Elegís .NET o cmdlet según el caso con criterio
- [ ] Tus llamadas .NET manejan errores de forma controlada

## Ejemplos de prompts

- "No tengo claro cuándo usar .NET directo y cuándo el cmdlet: mostrame comparaciones File vs Get-Content y Process vs Get-Process con casos donde conviene cada uno."
- "Aplica Combinación con APIs .NET (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Elegís .NET o cmdlet según el caso con criterio"
- "Revisa mi winapi-pinvoke y dime qué pasos de Combinación con APIs .NET me faltan en este nivel"