---
name: winapi-pinvoke-rendimiento-interop-profesional
description: Rendimiento de interop · nivel Profesional · WinAPI y P/Invoke. El costo de cruzar la frontera managed/nativa: minimizar llamadas, batch y caché de resultados. Objetivo del nivel: Interop optimizado con evidencia: benchmark de la capa nativa y límites documentados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rendimiento-interop"
  nivel: profesional
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Rendimiento de interop — Profesional

## Qué hace este skill

El costo de cruzar la frontera managed/nativa: minimizar llamadas, batch y caché de resultados. En este nivel se entrega: **Interop optimizado con evidencia: benchmark de la capa nativa y límites documentados**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de interop** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un benchmark de la capa de interop
2. Fijar límites de llamadas por frame
3. Optimizar los caminos críticos con datos
4. Mantener la medición en el pipeline de la suite

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Interop optimizado con evidencia: benchmark de la capa nativa y límites documentados | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Crear un benchmark de la capa de interop · Fijar límites de llamadas por frame · Optimizar los caminos críticos con datos · Mantener la medición en el pipeline de la suite | lista | sí | 3-4 pasos |
| $criterios_clave | La capa nativa tiene benchmark reproducible · El render de la TUI respeta los límites de llamadas por frame | lista | sí | calidad verificable |
| $prompt_guia | Quiero límites medibles para la capa nativa de RYU-TUI: benchmark reproducible de las llamadas, tope de llamadas por frame y la medición integrada a la suite. | texto | no | "Rendimiento de interop" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa nativa tiene benchmark reproducible
- [ ] El render de la TUI respeta los límites de llamadas por frame

## Ejemplos de prompts

- "Quiero límites medibles para la capa nativa de RYU-TUI: benchmark reproducible de las llamadas, tope de llamadas por frame y la medición integrada a la suite."
- "Aplica Rendimiento de interop (nivel profesional) a mi trabajo actual con WinAPI y P/Invoke: prioriza La capa nativa tiene benchmark reproducible"
- "Revisa mi winapi-pinvoke y dime qué pasos de Rendimiento de interop me faltan en este nivel"