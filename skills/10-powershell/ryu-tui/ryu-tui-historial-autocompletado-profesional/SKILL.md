---
name: ryu-tui-historial-autocompletado-profesional
description: Historial y autocompletado · nivel Profesional · RYU-TUI: interfaces de terminal. Historial de entradas, navegación con flechas, autocompletado por prefijo y búsqueda. Objetivo del nivel: Historial persistente con búsqueda, frecuencia y limpieza, más modo de búsqueda Ctrl+R
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "historial-autocompletado"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Historial y autocompletado — Profesional

## Qué hace este skill

Historial de entradas, navegación con flechas, autocompletado por prefijo y búsqueda. En este nivel se entrega: **Historial persistente con búsqueda, frecuencia y limpieza, más modo de búsqueda Ctrl+R**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Historial y autocompletado** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Persistir el historial a archivo entre sesiones
2. Implementar búsqueda con Ctrl+R estilo reversa
3. Ordenar sugerencias por frecuencia de uso
4. Limitar y podar el historial guardado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Historial persistente con búsqueda, frecuencia y limpieza, más modo de búsqueda Ctrl+R | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Persistir el historial a archivo entre sesiones · Implementar búsqueda con Ctrl+R estilo reversa · Ordenar sugerencias por frecuencia de uso · Limitar y podar el historial guardado | lista | sí | 3-4 pasos |
| $criterios_clave | El historial sobrevive al reinicio de la sesión · Ctrl+R encuentra la entrada correcta con pocas teclas | lista | sí | calidad verificable |
| $prompt_guia | Quiero historial persistente en ryu-tui.ps1 con Ctrl+R para buscar, sugerencias ordenadas por uso y un máximo de 500 entradas. Diseñá el formato de archivo y la poda. | texto | no | "Historial y autocompletado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El historial sobrevive al reinicio de la sesión
- [ ] Ctrl+R encuentra la entrada correcta con pocas teclas

## Ejemplos de prompts

- "Quiero historial persistente en ryu-tui.ps1 con Ctrl+R para buscar, sugerencias ordenadas por uso y un máximo de 500 entradas. Diseñá el formato de archivo y la poda."
- "Aplica Historial y autocompletado (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El historial sobrevive al reinicio de la sesión"
- "Revisa mi ryu-tui y dime qué pasos de Historial y autocompletado me faltan en este nivel"