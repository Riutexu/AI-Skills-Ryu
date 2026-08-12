---
name: winapi-pinvoke-delegates-callbacks-basico
description: Delegates y callbacks · nivel Básico · WinAPI y P/Invoke. Callbacks de Windows a PowerShell: delegates, keep-alive, enum de ventanas y hooks de eventos. Objetivo del nivel: Definir un delegate y recibir un callback nativo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "delegates-callbacks"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Delegates y callbacks — Básico

## Qué hace este skill

Callbacks de Windows a PowerShell: delegates, keep-alive, enum de ventanas y hooks de eventos. En este nivel se entrega: **Definir un delegate y recibir un callback nativo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Delegates y callbacks** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar un delegate con Add-Type
2. Usar EnumWindows con un callback
3. Entender el flujo nativo a managed y vuelta
4. Imprimir los valores recibidos en el callback

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Definir un delegate y recibir un callback nativo | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Declarar un delegate con Add-Type · Usar EnumWindows con un callback · Entender el flujo nativo a managed y vuelta · Imprimir los valores recibidos en el callback | lista | sí | 3-4 pasos |
| $criterios_clave | Tu callback recibe llamadas de la API nativa · Enumerás ventanas con tu propio delegate | lista | sí | calidad verificable |
| $prompt_guia | Quiero enumerar todas las ventanas del sistema con EnumWindows y un callback: explicame delegates en Add-Type y armá el ejemplo funcionando. | texto | no | "Delegates y callbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tu callback recibe llamadas de la API nativa
- [ ] Enumerás ventanas con tu propio delegate

## Ejemplos de prompts

- "Quiero enumerar todas las ventanas del sistema con EnumWindows y un callback: explicame delegates en Add-Type y armá el ejemplo funcionando."
- "Aplica Delegates y callbacks (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Tu callback recibe llamadas de la API nativa"
- "Revisa mi winapi-pinvoke y dime qué pasos de Delegates y callbacks me faltan en este nivel"