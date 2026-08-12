---
name: winapi-pinvoke-informacion-sistema-profesional
description: Información del sistema · nivel Profesional · WinAPI y P/Invoke. Datos del sistema vía API: memoria, discos, batería, arquitectura y hardware con nivel de detalle nativo. Objetivo del nivel: Monitoreo nativo en la suite: muestreo, historial y visualización en la TUI
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "informacion-sistema"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Información del sistema — Profesional

## Qué hace este skill

Datos del sistema vía API: memoria, discos, batería, arquitectura y hardware con nivel de detalle nativo. En este nivel se entrega: **Monitoreo nativo en la suite: muestreo, historial y visualización en la TUI**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Información del sistema** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar muestreo periódico de recursos
2. Mantener un historial corto en memoria
3. Dibujar los datos en la TUI (uso de CPU, RAM)
4. Controlar el costo del muestreo en el render

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Monitoreo nativo en la suite: muestreo, historial y visualización en la TUI | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Implementar muestreo periódico de recursos · Mantener un historial corto en memoria · Dibujar los datos en la TUI (uso de CPU, RAM) · Controlar el costo del muestreo en el render | lista | sí | 3-4 pasos |
| $criterios_clave | El monitor de la TUI muestra datos reales y actualizados · El muestreo no degrada el rendimiento de la TUI | lista | sí | calidad verificable |
| $prompt_guia | Quiero un panel de sistema en vivo en RYU-TUI (CPU, RAM, disco) con muestreo nativo: diseñá el muestreo, el historial y que el render no se degrade. | texto | no | "Información del sistema" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El monitor de la TUI muestra datos reales y actualizados
- [ ] El muestreo no degrada el rendimiento de la TUI

## Ejemplos de prompts

- "Quiero un panel de sistema en vivo en RYU-TUI (CPU, RAM, disco) con muestreo nativo: diseñá el muestreo, el historial y que el render no se degrade."
- "Aplica Información del sistema (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza El monitor de la TUI muestra datos reales y actualizados"
- "Revisa mi winapi-pinvoke y dime qué pasos de Información del sistema me faltan en este nivel"