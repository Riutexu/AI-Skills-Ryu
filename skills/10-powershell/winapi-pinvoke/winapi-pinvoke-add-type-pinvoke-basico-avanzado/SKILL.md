---
name: winapi-pinvoke-add-type-pinvoke-basico-avanzado
description: Add-Type y P/Invoke básico · nivel Avanzado · WinAPI y P/Invoke. Declarar funciones Win32 en PowerShell con Add-Type y llamarlas desde scripts. Objetivo del nivel: Declaraciones correctas: tipos exactos, CharSet, CallingConvention y EntryPoint
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "add-type-pinvoke-basico"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Add-Type y P/Invoke básico — Avanzado

## Qué hace este skill

Declarar funciones Win32 en PowerShell con Add-Type y llamarlas desde scripts. En este nivel se entrega: **Declaraciones correctas: tipos exactos, CharSet, CallingConvention y EntryPoint**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Add-Type y P/Invoke básico** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mapear tipos C a tipos .NET correctamente
2. Usar EntryPoint para nombres alternativos
3. Especificar CharSet y CallingConvention
4. Verificar que la declaración no rompe la pila

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Declaraciones correctas: tipos exactos, CharSet, CallingConvention y EntryPoint | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Mapear tipos C a tipos .NET correctamente · Usar EntryPoint para nombres alternativos · Especificar CharSet y CallingConvention · Verificar que la declaración no rompe la pila | lista | sí | 3-4 pasos |
| $criterios_clave | Tus declaraciones usan los tipos exactos de la API · Las llamadas no cuelgan ni corrompen memoria | lista | sí | calidad verificable |
| $prompt_guia | Mis llamadas a API a veces devuelven basura: explicame cómo mapear los tipos C correctamente en Add-Type (CharSet, CallingConvention, EntryPoint) con ejemplos. | texto | no | "Add-Type y P/Invoke básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus declaraciones usan los tipos exactos de la API
- [ ] Las llamadas no cuelgan ni corrompen memoria

## Ejemplos de prompts

- "Mis llamadas a API a veces devuelven basura: explicame cómo mapear los tipos C correctamente en Add-Type (CharSet, CallingConvention, EntryPoint) con ejemplos."
- "Aplica Add-Type y P/Invoke básico (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Tus declaraciones usan los tipos exactos de la API"
- "Revisa mi winapi-pinvoke y dime qué pasos de Add-Type y P/Invoke básico me faltan en este nivel"