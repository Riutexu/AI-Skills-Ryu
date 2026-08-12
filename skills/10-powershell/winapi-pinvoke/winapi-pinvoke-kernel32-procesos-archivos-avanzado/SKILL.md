---
name: winapi-pinvoke-kernel32-procesos-archivos-avanzado
description: kernel32 (procesos y archivos) · nivel Avanzado · WinAPI y P/Invoke. Las APIs de kernel32 que valen la pena: info de procesos, handles, archivos y rendimiento. Objetivo del nivel: Handles y estructuras: OpenProcess, enum de procesos y campos no triviales
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "kernel32-procesos-archivos"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# kernel32 (procesos y archivos) — Avanzado

## Qué hace este skill

Las APIs de kernel32 que valen la pena: info de procesos, handles, archivos y rendimiento. En este nivel se entrega: **Handles y estructuras: OpenProcess, enum de procesos y campos no triviales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **kernel32 (procesos y archivos)** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar OpenProcess y CloseHandle
2. Leer estructuras con campos anidados
3. Obtener el nombre de un proceso por PID con EnumProcesses
4. Cerrar handles correctamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Handles y estructuras: OpenProcess, enum de procesos y campos no triviales | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Declarar OpenProcess y CloseHandle · Leer estructuras con campos anidados · Obtener el nombre de un proceso por PID con EnumProcesses · Cerrar handles correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | Tus llamadas abren y cierran handles sin fugas · Leés estructuras complejas sin corromperlas | lista | sí | calidad verificable |
| $prompt_guia | Necesito obtener info de un proceso específico que los cmdlets no me dan: mostrame OpenProcess, CloseHandle y cómo leer una estructura compleja de kernel32. | texto | no | "kernel32 (procesos y archivos)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus llamadas abren y cierran handles sin fugas
- [ ] Leés estructuras complejas sin corromperlas

## Ejemplos de prompts

- "Necesito obtener info de un proceso específico que los cmdlets no me dan: mostrame OpenProcess, CloseHandle y cómo leer una estructura compleja de kernel32."
- "Aplica kernel32 (procesos y archivos) (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Tus llamadas abren y cierran handles sin fugas"
- "Revisa mi winapi-pinvoke y dime qué pasos de kernel32 (procesos y archivos) me faltan en este nivel"