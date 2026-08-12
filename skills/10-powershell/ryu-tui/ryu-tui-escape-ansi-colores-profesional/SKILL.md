---
name: ryu-tui-escape-ansi-colores-profesional
description: Escape ANSI y colores · nivel Profesional · RYU-TUI: interfaces de terminal. Códigos de escape, colores 16/256/truecolor, fondos, estilos y limpieza de pantalla portable. Objetivo del nivel: Sistema de tema completo: paleta configurable, compatibilidad y sin artefactos de escape en logs
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "escape-ansi-colores"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Escape ANSI y colores — Profesional

## Qué hace este skill

Códigos de escape, colores 16/256/truecolor, fondos, estilos y limpieza de pantalla portable. En este nivel se entrega: **Sistema de tema completo: paleta configurable, compatibilidad y sin artefactos de escape en logs**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Escape ANSI y colores** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar un tema de PowerShell (PersonalConsole) que pinte prompts y errores
2. Hacer la paleta configurable por JSON
3. Garantizar que los escapes no ensucien outputs a archivo
4. Probar el tema en Windows Terminal y Consola clásica

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sistema de tema completo: paleta configurable, compatibilidad y sin artefactos de escape en logs | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Diseñar un tema de PowerShell (PersonalConsole) que pinte prompts y errores · Hacer la paleta configurable por JSON · Garantizar que los escapes no ensucien outputs a archivo · Probar el tema en Windows Terminal y Consola clásica | lista | sí | 3-4 pasos |
| $criterios_clave | El tema se aplica y se revierte sin reiniciar pwsh · Redirigir salida a archivo no deja códigos basura | lista | sí | calidad verificable |
| $prompt_guia | Quiero un tema personal de PowerShell para RYU-TUI que coloree prompt, errores y advertencias de forma consistente, con la paleta en un JSON y que al redirigir a archivo no aparezcan escapes raros. Armámelo. | texto | no | "Escape ANSI y colores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tema se aplica y se revierte sin reiniciar pwsh
- [ ] Redirigir salida a archivo no deja códigos basura

## Ejemplos de prompts

- "Quiero un tema personal de PowerShell para RYU-TUI que coloree prompt, errores y advertencias de forma consistente, con la paleta en un JSON y que al redirigir a archivo no aparezcan escapes raros. Armámelo."
- "Aplica Escape ANSI y colores (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El tema se aplica y se revierte sin reiniciar pwsh"
- "Revisa mi ryu-tui y dime qué pasos de Escape ANSI y colores me faltan en este nivel"