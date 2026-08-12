---
name: winapi-pinvoke-marshaling-strings-avanzado
description: Marshaling de strings · nivel Avanzado · WinAPI y P/Invoke. Ansi vs Unicode, LPWSTR/LPSTR, StringBuilder y los bugs clásicos de strings en P/Invoke. Objetivo del nivel: Buffers dinámicos: doble llamada con tamaño, cadenas largas y encoding
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "marshaling-strings"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Marshaling de strings — Avanzado

## Qué hace este skill

Ansi vs Unicode, LPWSTR/LPSTR, StringBuilder y los bugs clásicos de strings en P/Invoke. En este nivel se entrega: **Buffers dinámicos: doble llamada con tamaño, cadenas largas y encoding**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Marshaling de strings** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar el patrón de llamar dos veces para el tamaño
2. Manejar strings de longitud variable (rutas largas)
3. Controlar el encoding con Marshal.PtrToStringUni
4. Soportar nombres con caracteres Unicode

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Buffers dinámicos: doble llamada con tamaño, cadenas largas y encoding | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Implementar el patrón de llamar dos veces para el tamaño · Manejar strings de longitud variable (rutas largas) · Controlar el encoding con Marshal.PtrToStringUni · Soportar nombres con caracteres Unicode | lista | sí | 3-4 pasos |
| $criterios_clave | Las cadenas largas se traen completas con doble llamada · Los caracteres Unicode no se corrompen | lista | sí | calidad verificable |
| $prompt_guia | GetWindowText me corta títulos largos: mostrame el patrón de doble llamada para el tamaño, buffers dinámicos y manejo de Unicode. | texto | no | "Marshaling de strings" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las cadenas largas se traen completas con doble llamada
- [ ] Los caracteres Unicode no se corrompen

## Ejemplos de prompts

- "GetWindowText me corta títulos largos: mostrame el patrón de doble llamada para el tamaño, buffers dinámicos y manejo de Unicode."
- "Aplica Marshaling de strings (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Las cadenas largas se traen completas con doble llamada"
- "Revisa mi winapi-pinvoke y dime qué pasos de Marshaling de strings me faltan en este nivel"