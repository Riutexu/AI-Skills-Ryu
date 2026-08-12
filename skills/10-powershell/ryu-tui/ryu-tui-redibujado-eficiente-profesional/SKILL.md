---
name: ryu-tui-redibujado-eficiente-profesional
description: Redibujado eficiente · nivel Profesional · RYU-TUI: interfaces de terminal. Parpadeo, buffer, regiones sucias y la disciplina de no redibujar lo que no cambió. Objetivo del nivel: Renderizador con dirty regions, throttling y perfilado del ciclo de frame
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "redibujado-eficiente"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Redibujado eficiente — Profesional

## Qué hace este skill

Parpadeo, buffer, regiones sucias y la disciplina de no redibujar lo que no cambió. En este nivel se entrega: **Renderizador con dirty regions, throttling y perfilado del ciclo de frame**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Redibujado eficiente** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar marcas de región sucia por panel
2. Agregar throttling para redibujos de alta frecuencia
3. Perfilar el ciclo completo con Measure-Command
4. Asegurar una tasa de frames estable en scroll rápido

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Renderizador con dirty regions, throttling y perfilado del ciclo de frame | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Implementar marcas de región sucia por panel · Agregar throttling para redibujos de alta frecuencia · Perfilar el ciclo completo con Measure-Command · Asegurar una tasa de frames estable en scroll rápido | lista | sí | 3-4 pasos |
| $criterios_clave | El scroll de una lista larga no parpadea ni va lento · Los redibujos se agrupan y limitan a los necesarios | lista | sí | calidad verificable |
| $prompt_guia | Quiero que el scroll de listas en ryu-tui.ps1 sea fluido: regions sucias por panel, throttling de updates y un perfilado del ciclo de frame. Diseñá el renderizador y mostrá las mediciones. | texto | no | "Redibujado eficiente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El scroll de una lista larga no parpadea ni va lento
- [ ] Los redibujos se agrupan y limitan a los necesarios

## Ejemplos de prompts

- "Quiero que el scroll de listas en ryu-tui.ps1 sea fluido: regions sucias por panel, throttling de updates y un perfilado del ciclo de frame. Diseñá el renderizador y mostrá las mediciones."
- "Aplica Redibujado eficiente (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El scroll de una lista larga no parpadea ni va lento"
- "Revisa mi ryu-tui y dime qué pasos de Redibujado eficiente me faltan en este nivel"