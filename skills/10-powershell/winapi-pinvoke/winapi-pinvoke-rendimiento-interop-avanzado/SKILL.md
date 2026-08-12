---
name: winapi-pinvoke-rendimiento-interop-avanzado
description: Rendimiento de interop · nivel Avanzado · WinAPI y P/Invoke. El costo de cruzar la frontera managed/nativa: minimizar llamadas, batch y caché de resultados. Objetivo del nivel: Batch y caché: traer datos de a lotes y cachear resultados que no cambian
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rendimiento-interop"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Rendimiento de interop — Avanzado

## Qué hace este skill

El costo de cruzar la frontera managed/nativa: minimizar llamadas, batch y caché de resultados. En este nivel se entrega: **Batch y caché: traer datos de a lotes y cachear resultados que no cambian**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de interop** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Reemplazar llamadas por ventana con EnumWindows en lote
2. Cachear datos estáticos del sistema
3. Invalidar el caché cuando el dato cambia
4. Comparar el antes y después con mediciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Batch y caché: traer datos de a lotes y cachear resultados que no cambian | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Reemplazar llamadas por ventana con EnumWindows en lote · Cachear datos estáticos del sistema · Invalidar el caché cuando el dato cambia · Comparar el antes y después con mediciones | lista | sí | 3-4 pasos |
| $criterios_clave | Las enumeraciones se hacen en una sola pasada · Los datos que no cambian se cachean y se invalidan bien | lista | sí | calidad verificable |
| $prompt_guia | Mi TUI llama APIs nativas por cada ventana y va lenta: mostrame cómo batch con EnumWindows, cachear lo que no cambia y medir la mejora. | texto | no | "Rendimiento de interop" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las enumeraciones se hacen en una sola pasada
- [ ] Los datos que no cambian se cachean y se invalidan bien

## Ejemplos de prompts

- "Mi TUI llama APIs nativas por cada ventana y va lenta: mostrame cómo batch con EnumWindows, cachear lo que no cambia y medir la mejora."
- "Aplica Rendimiento de interop (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza Las enumeraciones se hacen en una sola pasada"
- "Revisa mi winapi-pinvoke y dime qué pasos de Rendimiento de interop me faltan en este nivel"