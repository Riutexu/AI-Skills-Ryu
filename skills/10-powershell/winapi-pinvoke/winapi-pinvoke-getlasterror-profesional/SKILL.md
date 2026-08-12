---
name: winapi-pinvoke-getlasterror-profesional
description: Errores GetLastError · nivel Profesional · WinAPI y P/Invoke. Los códigos de error de Win32: Marshal.GetLastWin32Error, SetLastError y errores que no son -1. Objetivo del nivel: Estrategia de errores nativos de la suite: envoltura consistente, traducción y tests de fallas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "getlasterror"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Errores GetLastError — Profesional

## Qué hace este skill

Los códigos de error de Win32: Marshal.GetLastWin32Error, SetLastError y errores que no son -1. En este nivel se entrega: **Estrategia de errores nativos de la suite: envoltura consistente, traducción y tests de fallas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores GetLastError** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un wrapper que traduzca errores nativos a excepciones propias
2. Mapear códigos comunes a mensajes accionables
3. Probar las fallas simuladas con mocks
4. Documentar la tabla de códigos por API

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de errores nativos de la suite: envoltura consistente, traducción y tests de fallas | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Crear un wrapper que traduzca errores nativos a excepciones propias · Mapear códigos comunes a mensajes accionables · Probar las fallas simuladas con mocks · Documentar la tabla de códigos por API | lista | sí | 3-4 pasos |
| $criterios_clave | Todo error nativo llega como excepción tipada con contexto · La tabla de códigos está documentada y testeada | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la capa nativa de RYU-TUI traduzca errores consistentemente: wrapper que convierta códigos Win32 en excepciones propias, tabla documentada y tests con fallas simuladas. | texto | no | "Errores GetLastError" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todo error nativo llega como excepción tipada con contexto
- [ ] La tabla de códigos está documentada y testeada

## Ejemplos de prompts

- "Quiero que la capa nativa de RYU-TUI traduzca errores consistentemente: wrapper que convierta códigos Win32 en excepciones propias, tabla documentada y tests con fallas simuladas."
- "Aplica Errores GetLastError (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza Todo error nativo llega como excepción tipada con contexto"
- "Revisa mi winapi-pinvoke y dime qué pasos de Errores GetLastError me faltan en este nivel"