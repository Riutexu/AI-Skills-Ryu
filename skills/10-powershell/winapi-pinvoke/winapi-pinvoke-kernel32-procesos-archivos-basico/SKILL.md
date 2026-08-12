---
name: winapi-pinvoke-kernel32-procesos-archivos-basico
description: kernel32 (procesos y archivos) · nivel Básico · WinAPI y P/Invoke. Las APIs de kernel32 que valen la pena: info de procesos, handles, archivos y rendimiento. Objetivo del nivel: Usar APIs de kernel32 para info que PowerShell no expone directo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "kernel32-procesos-archivos"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# kernel32 (procesos y archivos) — Básico

## Qué hace este skill

Las APIs de kernel32 que valen la pena: info de procesos, handles, archivos y rendimiento. En este nivel se entrega: **Usar APIs de kernel32 para info que PowerShell no expone directo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **kernel32 (procesos y archivos)** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar GetProcessTimes o GetSystemInfo
2. Obtener uptime real del sistema
3. Leer información de memoria física
4. Comparar con los cmdlets equivalentes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar APIs de kernel32 para info que PowerShell no expone directo | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Declarar GetProcessTimes o GetSystemInfo · Obtener uptime real del sistema · Leer información de memoria física · Comparar con los cmdlets equivalentes | lista | sí | 3-4 pasos |
| $criterios_clave | Obtenés datos de sistema que los cmdlets no dan · Entendés cuándo conviene P/Invoke y cuándo no | lista | sí | calidad verificable |
| $prompt_guia | Quiero saber cuándo conviene bajar a kernel32 en vez de usar cmdlets: mostrame ejemplos de GetSystemInfo y uptime real y comparalo con Get-CimInstance. | texto | no | "kernel32 (procesos y archivos)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Obtenés datos de sistema que los cmdlets no dan
- [ ] Entendés cuándo conviene P/Invoke y cuándo no

## Ejemplos de prompts

- "Quiero saber cuándo conviene bajar a kernel32 en vez de usar cmdlets: mostrame ejemplos de GetSystemInfo y uptime real y comparalo con Get-CimInstance."
- "Aplica kernel32 (procesos y archivos) (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Obtenés datos de sistema que los cmdlets no dan"
- "Revisa mi winapi-pinvoke y dime qué pasos de kernel32 (procesos y archivos) me faltan en este nivel"