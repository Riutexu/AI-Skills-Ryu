---
name: ryu-tui-redibujado-eficiente-basico
description: Redibujado eficiente · nivel Básico · RYU-TUI: interfaces de terminal. Parpadeo, buffer, regiones sucias y la disciplina de no redibujar lo que no cambió. Objetivo del nivel: Redibujar solo lo que cambia en vez de limpiar toda la pantalla
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "redibujado-eficiente"
  nivel: basico
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Redibujado eficiente — Básico

## Qué hace este skill

Parpadeo, buffer, regiones sucias y la disciplina de no redibujar lo que no cambió. En este nivel se entrega: **Redibujar solo lo que cambia en vez de limpiar toda la pantalla**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Redibujado eficiente** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar cuándo tu UI parpadea y por qué
2. Guardar y restaurar posición de cursor
3. Actualizar solo la línea que cambió
4. Comparar redibujado total vs parcial

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Redibujar solo lo que cambia en vez de limpiar toda la pantalla | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Identificar cuándo tu UI parpadea y por qué · Guardar y restaurar posición de cursor · Actualizar solo la línea que cambió · Comparar redibujado total vs parcial | lista | sí | 3-4 pasos |
| $criterios_clave | Tu UI no limpia la pantalla entera en cada update · Sabés qué líneas redibujar para cada cambio de estado | lista | sí | calidad verificable |
| $prompt_guia | Mi TUI parpadea porque limpio la pantalla a cada cambio. Mostrame cómo redibujar solo las líneas que cambiaron y cuándo usar guardar/restaurar posición de cursor. | texto | no | "Redibujado eficiente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tu UI no limpia la pantalla entera en cada update
- [ ] Sabés qué líneas redibujar para cada cambio de estado

## Ejemplos de prompts

- "Mi TUI parpadea porque limpio la pantalla a cada cambio. Mostrame cómo redibujar solo las líneas que cambiaron y cuándo usar guardar/restaurar posición de cursor."
- "Aplica Redibujado eficiente (nivel basico) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Tu UI no limpia la pantalla entera en cada update"
- "Revisa mi ryu-tui y dime qué pasos de Redibujado eficiente me faltan en este nivel"