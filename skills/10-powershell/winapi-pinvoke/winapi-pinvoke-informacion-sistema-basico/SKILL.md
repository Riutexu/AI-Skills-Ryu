---
name: winapi-pinvoke-informacion-sistema-basico
description: Información del sistema · nivel Básico · WinAPI y P/Invoke. Datos del sistema vía API: memoria, discos, batería, arquitectura y hardware con nivel de detalle nativo. Objetivo del nivel: Obtener datos del sistema que PowerShell no da directo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "informacion-sistema"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Información del sistema — Básico

## Qué hace este skill

Datos del sistema vía API: memoria, discos, batería, arquitectura y hardware con nivel de detalle nativo. En este nivel se entrega: **Obtener datos del sistema que PowerShell no da directo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Información del sistema** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer memoria física con GlobalMemoryStatusEx
2. Obtener arquitectura y núcleos con GetNativeSystemInfo
3. Consultar estado de batería con GetSystemPowerStatus
4. Comparar con las opciones de CIM

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Obtener datos del sistema que PowerShell no da directo | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Leer memoria física con GlobalMemoryStatusEx · Obtener arquitectura y núcleos con GetNativeSystemInfo · Consultar estado de batería con GetSystemPowerStatus · Comparar con las opciones de CIM | lista | sí | 3-4 pasos |
| $criterios_clave | Obtenés datos nativos que los cmdlets no exponen · Sabés cuándo la API es la única opción | lista | sí | calidad verificable |
| $prompt_guia | Quiero datos de sistema que Get-CimInstance no me da completo: mostrame GlobalMemoryStatusEx, GetSystemPowerStatus y cuándo conviene la API nativa. | texto | no | "Información del sistema" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Obtenés datos nativos que los cmdlets no exponen
- [ ] Sabés cuándo la API es la única opción

## Ejemplos de prompts

- "Quiero datos de sistema que Get-CimInstance no me da completo: mostrame GlobalMemoryStatusEx, GetSystemPowerStatus y cuándo conviene la API nativa."
- "Aplica Información del sistema (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Obtenés datos nativos que los cmdlets no exponen"
- "Revisa mi winapi-pinvoke y dime qué pasos de Información del sistema me faltan en este nivel"