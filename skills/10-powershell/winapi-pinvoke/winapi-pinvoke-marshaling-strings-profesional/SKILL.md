---
name: winapi-pinvoke-marshaling-strings-profesional
description: Marshaling de strings · nivel Profesional · WinAPI y P/Invoke. Ansi vs Unicode, LPWSTR/LPSTR, StringBuilder y los bugs clásicos de strings en P/Invoke. Objetivo del nivel: Helpers de strings de la suite: conversión centralizada, límites documentados y tests con strings difíciles
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "marshaling-strings"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Marshaling de strings — Profesional

## Qué hace este skill

Ansi vs Unicode, LPWSTR/LPSTR, StringBuilder y los bugs clásicos de strings en P/Invoke. En este nivel se entrega: **Helpers de strings de la suite: conversión centralizada, límites documentados y tests con strings difíciles**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Marshaling de strings** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear helpers de marshaling de strings reutilizables
2. Definir límites de longitud y documentarlos
3. Testear con strings vacíos, largos y multibyte
4. Estandarizar el patrón en toda la capa de interop

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Helpers de strings de la suite: conversión centralizada, límites documentados y tests con strings difíciles | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Crear helpers de marshaling de strings reutilizables · Definir límites de longitud y documentarlos · Testear con strings vacíos, largos y multibyte · Estandarizar el patrón en toda la capa de interop | lista | sí | 3-4 pasos |
| $criterios_clave | Toda la capa de interop usa los mismos helpers de strings · Los casos difíciles (vacío, largo, unicode) están testeados | lista | sí | calidad verificable |
| $prompt_guia | Quiero helpers de strings para la capa de interop de RYU-TUI: patrones estandarizados para buffers, límites documentados y tests con strings vacías, largas y con caracteres especiales. | texto | no | "Marshaling de strings" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda la capa de interop usa los mismos helpers de strings
- [ ] Los casos difíciles (vacío, largo, unicode) están testeados

## Ejemplos de prompts

- "Quiero helpers de strings para la capa de interop de RYU-TUI: patrones estandarizados para buffers, límites documentados y tests con strings vacías, largas y con caracteres especiales."
- "Aplica Marshaling de strings (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza Toda la capa de interop usa los mismos helpers de strings"
- "Revisa mi winapi-pinvoke y dime qué pasos de Marshaling de strings me faltan en este nivel"