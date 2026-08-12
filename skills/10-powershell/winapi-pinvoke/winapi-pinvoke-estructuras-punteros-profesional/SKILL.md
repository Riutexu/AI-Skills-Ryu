---
name: winapi-pinvoke-estructuras-punteros-profesional
description: Estructuras y punteros · nivel Profesional · WinAPI y P/Invoke. Declarar structs, marshaling, punteros y buffers en Add-Type sin pisar memoria. Objetivo del nivel: Interop con memoria segura: helpers de marshaling, sanity checks y cero crashes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "estructuras-punteros"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Estructuras y punteros — Profesional

## Qué hace este skill

Declarar structs, marshaling, punteros y buffers en Add-Type sin pisar memoria. En este nivel se entrega: **Interop con memoria segura: helpers de marshaling, sanity checks y cero crashes**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructuras y punteros** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear helpers de marshal con validación de tamaños
2. Verificar Longitud de buffers antes de copiar
3. Probar los helpers contra APIs de tamaño variable
4. Garantizar liberación de memoria en todos los caminos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Interop con memoria segura: helpers de marshaling, sanity checks y cero crashes | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Crear helpers de marshal con validación de tamaños · Verificar Longitud de buffers antes de copiar · Probar los helpers contra APIs de tamaño variable · Garantizar liberación de memoria en todos los caminos | lista | sí | 3-4 pasos |
| $criterios_clave | Un buffer de tamaño equivocado falla con mensaje, no con crash · Los helpers de memoria están probados en todos los caminos | lista | sí | calidad verificable |
| $prompt_guia | Quiero helpers de marshaling seguros para la capa de interop de RYU-TUI: validación de tamaños, liberación garantizada y tests para buffers de tamaño variable. | texto | no | "Estructuras y punteros" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un buffer de tamaño equivocado falla con mensaje, no con crash
- [ ] Los helpers de memoria están probados en todos los caminos

## Ejemplos de prompts

- "Quiero helpers de marshaling seguros para la capa de interop de RYU-TUI: validación de tamaños, liberación garantizada y tests para buffers de tamaño variable."
- "Aplica Estructuras y punteros (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza Un buffer de tamaño equivocado falla con mensaje, no con crash"
- "Revisa mi winapi-pinvoke y dime qué pasos de Estructuras y punteros me faltan en este nivel"