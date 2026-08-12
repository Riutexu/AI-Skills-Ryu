---
name: winapi-pinvoke-getlasterror-avanzado
description: Errores GetLastError · nivel Avanzado · WinAPI y P/Invoke. Los códigos de error de Win32: Marshal.GetLastWin32Error, SetLastError y errores que no son -1. Objetivo del nivel: Errores que engañan: fallas que devuelven NULL o 0 sin marcar GetLastError
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "getlasterror"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Errores GetLastError — Avanzado

## Qué hace este skill

Los códigos de error de Win32: Marshal.GetLastWin32Error, SetLastError y errores que no son -1. En este nivel se entrega: **Errores que engañan: fallas que devuelven NULL o 0 sin marcar GetLastError**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores GetLastError** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar llamadas que fallan sin setear GetLastError
2. Distinguir fallo real de valor válido (0, NULL)
3. Verificar precondiciones antes de llamar
4. Documentar los códigos esperables por API

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Errores que engañan: fallas que devuelven NULL o 0 sin marcar GetLastError | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Detectar llamadas que fallan sin setear GetLastError · Distinguir fallo real de valor válido (0, NULL) · Verificar precondiciones antes de llamar · Documentar los códigos esperables por API | lista | sí | 3-4 pasos |
| $criterios_clave | Nunca interpretás un NULL como error cuando es un valor válido · Las precondiciones se chequean antes de la llamada | lista | sí | calidad verificable |
| $prompt_guia | Algunas APIs devuelven 0 o NULL sin setear GetLastError y mi manejo de errores me engaña: ayudame a distinguir fallos reales y a chequear precondiciones. | texto | no | "Errores GetLastError" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Nunca interpretás un NULL como error cuando es un valor válido
- [ ] Las precondiciones se chequean antes de la llamada

## Ejemplos de prompts

- "Algunas APIs devuelven 0 o NULL sin setear GetLastError y mi manejo de errores me engaña: ayudame a distinguir fallos reales y a chequear precondiciones."
- "Aplica Errores GetLastError (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Nunca interpretás un NULL como error cuando es un valor válido"
- "Revisa mi winapi-pinvoke y dime qué pasos de Errores GetLastError me faltan en este nivel"