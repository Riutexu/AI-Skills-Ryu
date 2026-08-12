---
name: winapi-pinvoke-kernel32-procesos-archivos-profesional
description: kernel32 (procesos y archivos) · nivel Profesional · WinAPI y P/Invoke. Las APIs de kernel32 que valen la pena: info de procesos, handles, archivos y rendimiento. Objetivo del nivel: Interop de producción: manejo de fallas, permisos y abstracción sobre las APIs nativas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "kernel32-procesos-archivos"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# kernel32 (procesos y archivos) — Profesional

## Qué hace este skill

Las APIs de kernel32 que valen la pena: info de procesos, handles, archivos y rendimiento. En este nivel se entrega: **Interop de producción: manejo de fallas, permisos y abstracción sobre las APIs nativas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **kernel32 (procesos y archivos)** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar códigos de retorno y GetLastError
2. Manejar ACCESS_DENIED con degradación elegante
3. Envolver las APIs en funciones PowerShell tipadas
4. Probar el wrapper con Pester usando mocks

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Interop de producción: manejo de fallas, permisos y abstracción sobre las APIs nativas | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Verificar códigos de retorno y GetLastError · Manejar ACCESS_DENIED con degradación elegante · Envolver las APIs en funciones PowerShell tipadas · Probar el wrapper con Pester usando mocks | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún call nativo falla silenciosamente · Los errores de permisos se reportan con contexto | lista | sí | calidad verificable |
| $prompt_guia | Quiero envolver las llamadas a kernel32 de RYU-TUI en una capa tipada con verificación de errores y tests: mostrame el patrón de wrapper con GetLastError. | texto | no | "kernel32 (procesos y archivos)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún call nativo falla silenciosamente
- [ ] Los errores de permisos se reportan con contexto

## Ejemplos de prompts

- "Quiero envolver las llamadas a kernel32 de RYU-TUI en una capa tipada con verificación de errores y tests: mostrame el patrón de wrapper con GetLastError."
- "Aplica kernel32 (procesos y archivos) (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza Ningún call nativo falla silenciosamente"
- "Revisa mi winapi-pinvoke y dime qué pasos de kernel32 (procesos y archivos) me faltan en este nivel"