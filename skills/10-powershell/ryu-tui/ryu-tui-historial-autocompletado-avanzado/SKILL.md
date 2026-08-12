---
name: ryu-tui-historial-autocompletado-avanzado
description: Historial y autocompletado · nivel Avanzado · RYU-TUI: interfaces de terminal. Historial de entradas, navegación con flechas, autocompletado por prefijo y búsqueda. Objetivo del nivel: Autocompletado por prefijo con sugerencias y manejo del cursor
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "historial-autocompletado"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Historial y autocompletado — Avanzado

## Qué hace este skill

Historial de entradas, navegación con flechas, autocompletado por prefijo y búsqueda. En este nivel se entrega: **Autocompletado por prefijo con sugerencias y manejo del cursor**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Historial y autocompletado** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Completar por prefijo con Tab
2. Mostrar sugerencias en una línea auxiliar
3. Ciclar entre múltiples coincidencias
4. Colocar el cursor después del autocompletado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Autocompletado por prefijo con sugerencias y manejo del cursor | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Completar por prefijo con Tab · Mostrar sugerencias en una línea auxiliar · Ciclar entre múltiples coincidencias · Colocar el cursor después del autocompletado | lista | sí | 3-4 pasos |
| $criterios_clave | Tab completa el único match y cicla entre varios · El cursor queda en la posición correcta tras completar | lista | sí | calidad verificable |
| $prompt_guia | Quiero autocompletado estilo terminal en RYU-TUI: Tab completa por prefijo desde la lista de comandos, y si hay varios matches los ciclo. Mostrame el manejo del cursor en cada caso. | texto | no | "Historial y autocompletado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tab completa el único match y cicla entre varios
- [ ] El cursor queda en la posición correcta tras completar

## Ejemplos de prompts

- "Quiero autocompletado estilo terminal en RYU-TUI: Tab completa por prefijo desde la lista de comandos, y si hay varios matches los ciclo. Mostrame el manejo del cursor en cada caso."
- "Aplica Historial y autocompletado (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Tab completa el único match y cicla entre varios"
- "Revisa mi ryu-tui y dime qué pasos de Historial y autocompletado me faltan en este nivel"