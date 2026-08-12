---
name: winapi-pinvoke-apis-dotnet-profesional
description: Combinación con APIs .NET · nivel Profesional · WinAPI y P/Invoke. Cuando conviene .NET en vez de P/Invoke: System.IO, Process, y la frontera managed vs nativa. Objetivo del nivel: Capa de sistema unificada: decidir por capa (cmdlet/.NET/nativa), documentar y mantener coherencia
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "apis-dotnet"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Combinación con APIs .NET — Profesional

## Qué hace este skill

Cuando conviene .NET en vez de P/Invoke: System.IO, Process, y la frontera managed vs nativa. En este nivel se entrega: **Capa de sistema unificada: decidir por capa (cmdlet/.NET/nativa), documentar y mantener coherencia**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Combinación con APIs .NET** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir reglas de qué capa usar para cada tarea
2. Centralizar las llamadas de sistema de la suite
3. Probar la coherencia de resultados entre capas
4. Documentar las decisiones por componente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de sistema unificada: decidir por capa (cmdlet/.NET/nativa), documentar y mantener coherencia | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Definir reglas de qué capa usar para cada tarea · Centralizar las llamadas de sistema de la suite · Probar la coherencia de resultados entre capas · Documentar las decisiones por componente | lista | sí | 3-4 pasos |
| $criterios_clave | Cada tarea de la suite tiene su capa decidida y documentada · Las capas intercambiables dan resultados consistentes | lista | sí | calidad verificable |
| $prompt_guia | Quiero reglas claras de capa para RYU-TUI (cmdlet vs .NET vs nativo): definí el criterio por tipo de tarea, centralizá las llamadas y documentá cada decisión. | texto | no | "Combinación con APIs .NET" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada tarea de la suite tiene su capa decidida y documentada
- [ ] Las capas intercambiables dan resultados consistentes

## Ejemplos de prompts

- "Quiero reglas claras de capa para RYU-TUI (cmdlet vs .NET vs nativo): definí el criterio por tipo de tarea, centralizá las llamadas y documentá cada decisión."
- "Aplica Combinación con APIs .NET (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza Cada tarea de la suite tiene su capa decidida y documentada"
- "Revisa mi winapi-pinvoke y dime qué pasos de Combinación con APIs .NET me faltan en este nivel"