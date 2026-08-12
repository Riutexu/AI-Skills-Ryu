---
name: winapi-pinvoke-getlasterror-basico
description: Errores GetLastError · nivel Básico · WinAPI y P/Invoke. Los códigos de error de Win32: Marshal.GetLastWin32Error, SetLastError y errores que no son -1. Objetivo del nivel: Capturar el error nativo después de una llamada fallida
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "getlasterror"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Errores GetLastError — Básico

## Qué hace este skill

Los códigos de error de Win32: Marshal.GetLastWin32Error, SetLastError y errores que no son -1. En este nivel se entrega: **Capturar el error nativo después de una llamada fallida**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores GetLastError** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar SetLastError=true en DllImport
2. Leer el error con Marshal.GetLastWin32Error
3. Traducir el código a mensaje con [ComponentModel.Win32Exception]
4. Verificar el error justo después de la llamada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Capturar el error nativo después de una llamada fallida | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Declarar SetLastError=true en DllImport · Leer el error con Marshal.GetLastWin32Error · Traducir el código a mensaje con [ComponentModel.Win32Exception] · Verificar el error justo después de la llamada | lista | sí | 3-4 pasos |
| $criterios_clave | Capturás el error Win32 después de cada llamada · Convertís el código en un mensaje legible | lista | sí | calidad verificable |
| $prompt_guia | Mis llamadas nativas fallan y no sé por qué: mostrame SetLastError, GetLastWin32Error y cómo traducir el código a un mensaje que entienda. | texto | no | "Errores GetLastError" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Capturás el error Win32 después de cada llamada
- [ ] Convertís el código en un mensaje legible

## Ejemplos de prompts

- "Mis llamadas nativas fallan y no sé por qué: mostrame SetLastError, GetLastWin32Error y cómo traducir el código a un mensaje que entienda."
- "Aplica Errores GetLastError (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Capturás el error Win32 después de cada llamada"
- "Revisa mi winapi-pinvoke y dime qué pasos de Errores GetLastError me faltan en este nivel"