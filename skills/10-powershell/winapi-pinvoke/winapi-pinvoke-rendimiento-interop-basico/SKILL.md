---
name: winapi-pinvoke-rendimiento-interop-basico
description: Rendimiento de interop · nivel Básico · WinAPI y P/Invoke. El costo de cruzar la frontera managed/nativa: minimizar llamadas, batch y caché de resultados. Objetivo del nivel: Medir el costo de las llamadas P/Invoke
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rendimiento-interop"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Rendimiento de interop — Básico

## Qué hace este skill

El costo de cruzar la frontera managed/nativa: minimizar llamadas, batch y caché de resultados. En este nivel se entrega: **Medir el costo de las llamadas P/Invoke**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de interop** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cronometrar llamadas nativas con Measure-Command
2. Comparar una llamada vs un millón en loop
3. Detectar overhead por llamada
4. Entender por qué no llamar APIs en loops calientes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Medir el costo de las llamadas P/Invoke | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Cronometrar llamadas nativas con Measure-Command · Comparar una llamada vs un millón en loop · Detectar overhead por llamada · Entender por qué no llamar APIs en loops calientes | lista | sí | 3-4 pasos |
| $criterios_clave | Conocés el costo real de cada llamada nativa · Evitás llamadas nativas dentro de loops calientes | lista | sí | calidad verificable |
| $prompt_guia | Quiero saber cuánto cuesta llamar APIs nativas desde PowerShell: medí una llamada suelta contra un millón en loop y mostrame el overhead real. | texto | no | "Rendimiento de interop" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Conocés el costo real de cada llamada nativa
- [ ] Evitás llamadas nativas dentro de loops calientes

## Ejemplos de prompts

- "Quiero saber cuánto cuesta llamar APIs nativas desde PowerShell: medí una llamada suelta contra un millón en loop y mostrame el overhead real."
- "Aplica Rendimiento de interop (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Conocés el costo real de cada llamada nativa"
- "Revisa mi winapi-pinvoke y dime qué pasos de Rendimiento de interop me faltan en este nivel"