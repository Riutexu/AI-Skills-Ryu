---
name: winapi-pinvoke-marshaling-strings-basico
description: Marshaling de strings · nivel Básico · WinAPI y P/Invoke. Ansi vs Unicode, LPWSTR/LPSTR, StringBuilder y los bugs clásicos de strings en P/Invoke. Objetivo del nivel: Pasar y recibir strings en llamadas P/Invoke correctamente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "marshaling-strings"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Marshaling de strings — Básico

## Qué hace este skill

Ansi vs Unicode, LPWSTR/LPSTR, StringBuilder y los bugs clásicos de strings en P/Invoke. En este nivel se entrega: **Pasar y recibir strings en llamadas P/Invoke correctamente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Marshaling de strings** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Entender CharSet.Ansi vs CharSet.Unicode
2. Recibir strings con StringBuilder
3. Pasar strings como parámetros
4. Evitar strings cortados por buffers chicos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Pasar y recibir strings en llamadas P/Invoke correctamente | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Entender CharSet.Ansi vs CharSet.Unicode · Recibir strings con StringBuilder · Pasar strings como parámetros · Evitar strings cortados por buffers chicos | lista | sí | 3-4 pasos |
| $criterios_clave | Los strings vuelven completos, sin cortarse · Usás el CharSet correcto para cada API | lista | sí | calidad verificable |
| $prompt_guia | Mis strings de P/Invoke vuelven cortados o con caracteres raros: explicame CharSet y StringBuilder con un ejemplo de GetWindowText bien hecho. | texto | no | "Marshaling de strings" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los strings vuelven completos, sin cortarse
- [ ] Usás el CharSet correcto para cada API

## Ejemplos de prompts

- "Mis strings de P/Invoke vuelven cortados o con caracteres raros: explicame CharSet y StringBuilder con un ejemplo de GetWindowText bien hecho."
- "Aplica Marshaling de strings (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Los strings vuelven completos, sin cortarse"
- "Revisa mi winapi-pinvoke y dime qué pasos de Marshaling de strings me faltan en este nivel"