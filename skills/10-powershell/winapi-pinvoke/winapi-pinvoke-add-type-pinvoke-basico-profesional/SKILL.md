---
name: winapi-pinvoke-add-type-pinvoke-basico-profesional
description: Add-Type y P/Invoke básico · nivel Profesional · WinAPI y P/Invoke. Declarar funciones Win32 en PowerShell con Add-Type y llamarlas desde scripts. Objetivo del nivel: Gestión de interop en una suite: capa única de Add-Type, caché de tipos y compatibilidad
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "add-type-pinvoke-basico"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Add-Type y P/Invoke básico — Profesional

## Qué hace este skill

Declarar funciones Win32 en PowerShell con Add-Type y llamarlas desde scripts. En este nivel se entrega: **Gestión de interop en una suite: capa única de Add-Type, caché de tipos y compatibilidad**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Add-Type y P/Invoke básico** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Centralizar todas las declaraciones en un módulo
2. Evitar definir el mismo tipo dos veces (TypeExists)
3. Manejar PS 5.1 vs pwsh 7 en interop
4. Documentar cada API usada con su origen

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gestión de interop en una suite: capa única de Add-Type, caché de tipos y compatibilidad | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Centralizar todas las declaraciones en un módulo · Evitar definir el mismo tipo dos veces (TypeExists) · Manejar PS 5.1 vs pwsh 7 en interop · Documentar cada API usada con su origen | lista | sí | 3-4 pasos |
| $criterios_clave | La capa de interop se carga una sola vez sin errores · Cada API está documentada con su fuente de referencia | lista | sí | calidad verificable |
| $prompt_guia | Quiero una capa de interop única para RYU-TUI: todas las APIs declaradas en un módulo, sin tipos duplicados al recargar y compatible PS 5.1 y pwsh 7. | texto | no | "Add-Type y P/Invoke básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa de interop se carga una sola vez sin errores
- [ ] Cada API está documentada con su fuente de referencia

## Ejemplos de prompts

- "Quiero una capa de interop única para RYU-TUI: todas las APIs declaradas en un módulo, sin tipos duplicados al recargar y compatible PS 5.1 y pwsh 7."
- "Aplica Add-Type y P/Invoke básico (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza La capa de interop se carga una sola vez sin errores"
- "Revisa mi winapi-pinvoke y dime qué pasos de Add-Type y P/Invoke básico me faltan en este nivel"