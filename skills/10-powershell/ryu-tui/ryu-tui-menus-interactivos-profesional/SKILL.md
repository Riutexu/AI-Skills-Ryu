---
name: ryu-tui-menus-interactivos-profesional
description: Menús interactivos · nivel Profesional · RYU-TUI: interfaces de terminal. Menús navegables con flechas, selección, atajos y estados de foco, estilo lo que se ve en RYU-TUI. Objetivo del nivel: Framework de menús declarativo: modelo de datos, render y acciones separados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "menus-interactivos"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Menús interactivos — Profesional

## Qué hace este skill

Menús navegables con flechas, selección, atajos y estados de foco, estilo lo que se ve en RYU-TUI. En este nivel se entrega: **Framework de menús declarativo: modelo de datos, render y acciones separados**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Menús interactivos** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir menús como datos (arrays de opciones con acciones)
2. Implementar foco con modo de búsqueda por teclado
3. Soportar páginas cuando hay más opciones que altura
4. Probar la lógica de selección sin terminal con Pester

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Framework de menús declarativo: modelo de datos, render y acciones separados | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Definir menús como datos (arrays de opciones con acciones) · Implementar foco con modo de búsqueda por teclado · Soportar páginas cuando hay más opciones que altura · Probar la lógica de selección sin terminal con Pester | lista | sí | 3-4 pasos |
| $criterios_clave | Agregar una opción al menú es solo tocar el modelo de datos · La lógica de navegación tiene tests que corren headless | lista | sí | calidad verificable |
| $prompt_guia | Quiero convertir los menús de RYU-TUI en un framework declarativo: opciones como datos con acciones, paginación si no entran, búsqueda por teclado y tests de la lógica sin terminal. Diseñámelo. | texto | no | "Menús interactivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Agregar una opción al menú es solo tocar el modelo de datos
- [ ] La lógica de navegación tiene tests que corren headless

## Ejemplos de prompts

- "Quiero convertir los menús de RYU-TUI en un framework declarativo: opciones como datos con acciones, paginación si no entran, búsqueda por teclado y tests de la lógica sin terminal. Diseñámelo."
- "Aplica Menús interactivos (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Agregar una opción al menú es solo tocar el modelo de datos"
- "Revisa mi ryu-tui y dime qué pasos de Menús interactivos me faltan en este nivel"