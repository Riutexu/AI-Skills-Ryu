---
name: winapi-pinvoke-estructuras-punteros-avanzado
description: Estructuras y punteros · nivel Avanzado · WinAPI y P/Invoke. Declarar structs, marshaling, punteros y buffers en Add-Type sin pisar memoria. Objetivo del nivel: Punteros y buffers: IntPtr, Marshal.AllocHGlobal y lectura de memoria nativa
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "estructuras-punteros"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Estructuras y punteros — Avanzado

## Qué hace este skill

Declarar structs, marshaling, punteros y buffers en Add-Type sin pisar memoria. En este nivel se entrega: **Punteros y buffers: IntPtr, Marshal.AllocHGlobal y lectura de memoria nativa**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructuras y punteros** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Reservar memoria con Marshal.AllocHGlobal
2. Escribir y leer buffers nativos con Marshal.Copy
3. Trabajar con punteros a strings y arrays
4. Liberar la memoria siempre con try/finally

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Punteros y buffers: IntPtr, Marshal.AllocHGlobal y lectura de memoria nativa | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Reservar memoria con Marshal.AllocHGlobal · Escribir y leer buffers nativos con Marshal.Copy · Trabajar con punteros a strings y arrays · Liberar la memoria siempre con try/finally | lista | sí | 3-4 pasos |
| $criterios_clave | Toda memoria nativa reservada se libera · Leés y escribís buffers nativos sin excepciones | lista | sí | calidad verificable |
| $prompt_guia | Una API me pide un buffer de salida: mostrame cómo reservar memoria con AllocHGlobal, copiar datos y liberar todo sin que quede una fuga. | texto | no | "Estructuras y punteros" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda memoria nativa reservada se libera
- [ ] Leés y escribís buffers nativos sin excepciones

## Ejemplos de prompts

- "Una API me pide un buffer de salida: mostrame cómo reservar memoria con AllocHGlobal, copiar datos y liberar todo sin que quede una fuga."
- "Aplica Estructuras y punteros (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Toda memoria nativa reservada se libera"
- "Revisa mi winapi-pinvoke y dime qué pasos de Estructuras y punteros me faltan en este nivel"