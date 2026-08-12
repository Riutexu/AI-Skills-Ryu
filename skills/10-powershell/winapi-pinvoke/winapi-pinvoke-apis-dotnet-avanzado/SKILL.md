---
name: winapi-pinvoke-apis-dotnet-avanzado
description: Combinación con APIs .NET · nivel Avanzado · WinAPI y P/Invoke. Cuando conviene .NET en vez de P/Invoke: System.IO, Process, y la frontera managed vs nativa. Objetivo del nivel: APIs .NET que no tienen cmdlet: memoria, encoding, crypto y networking fino
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "apis-dotnet"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Combinación con APIs .NET — Avanzado

## Qué hace este skill

Cuando conviene .NET en vez de P/Invoke: System.IO, Process, y la frontera managed vs nativa. En este nivel se entrega: **APIs .NET que no tienen cmdlet: memoria, encoding, crypto y networking fino**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Combinación con APIs .NET** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar [System.Text.Encoding] para encodings raros
2. Usar crypto con [System.Security.Cryptography]
3. Controlar sockets con .NET puro
4. Medir la ganancia frente a alternativas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | APIs .NET que no tienen cmdlet: memoria, encoding, crypto y networking fino | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Usar [System.Text.Encoding] para encodings raros · Usar crypto con [System.Security.Cryptography] · Controlar sockets con .NET puro · Medir la ganancia frente a alternativas | lista | sí | 3-4 pasos |
| $criterios_clave | Resolvés tareas sin cmdlet con .NET puro · Las soluciones .NET están justificadas por medición | lista | sí | calidad verificable |
| $prompt_guia | Necesito leer archivos con encoding raro y hashear contenidos grandes: mostrame las clases .NET que resuelven esto y compará la performance con Get-FileHash. | texto | no | "Combinación con APIs .NET" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Resolvés tareas sin cmdlet con .NET puro
- [ ] Las soluciones .NET están justificadas por medición

## Ejemplos de prompts

- "Necesito leer archivos con encoding raro y hashear contenidos grandes: mostrame las clases .NET que resuelven esto y compará la performance con Get-FileHash."
- "Aplica Combinación con APIs .NET (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Resolvés tareas sin cmdlet con .NET puro"
- "Revisa mi winapi-pinvoke y dime qué pasos de Combinación con APIs .NET me faltan en este nivel"