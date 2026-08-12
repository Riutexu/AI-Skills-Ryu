---
name: winapi-pinvoke-delegates-callbacks-avanzado
description: Delegates y callbacks · nivel Avanzado · WinAPI y P/Invoke. Callbacks de Windows a PowerShell: delegates, keep-alive, enum de ventanas y hooks de eventos. Objetivo del nivel: Estado y lifetime: mantener el delegate vivo, capturar estado en closures y sincronizar
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "delegates-callbacks"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Delegates y callbacks — Avanzado

## Qué hace este skill

Callbacks de Windows a PowerShell: delegates, keep-alive, enum de ventanas y hooks de eventos. En este nivel se entrega: **Estado y lifetime: mantener el delegate vivo, capturar estado en closures y sincronizar**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Delegates y callbacks** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Evitar que el GC se lleve el delegate (keep-alive)
2. Capturar estado en el callback
3. Recolectar resultados del callback en colecciones
4. Entender threading: el callback corre en hilo nativo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Estado y lifetime: mantener el delegate vivo, capturar estado en closures y sincronizar | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Evitar que el GC se lleve el delegate (keep-alive) · Capturar estado en el callback · Recolectar resultados del callback en colecciones · Entender threading: el callback corre en hilo nativo | lista | sí | 3-4 pasos |
| $criterios_clave | El callback no desaparece a mitad de la enumeración · Los resultados del callback se recolectan sin perder datos | lista | sí | calidad verificable |
| $prompt_guia | Mi callback de EnumWindows se pierde a mitad de la enumeración: explicame el keep-alive del delegate y cómo recolectar los resultados de forma segura. | texto | no | "Delegates y callbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El callback no desaparece a mitad de la enumeración
- [ ] Los resultados del callback se recolectan sin perder datos

## Ejemplos de prompts

- "Mi callback de EnumWindows se pierde a mitad de la enumeración: explicame el keep-alive del delegate y cómo recolectar los resultados de forma segura."
- "Aplica Delegates y callbacks (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza El callback no desaparece a mitad de la enumeración"
- "Revisa mi winapi-pinvoke y dime qué pasos de Delegates y callbacks me faltan en este nivel"