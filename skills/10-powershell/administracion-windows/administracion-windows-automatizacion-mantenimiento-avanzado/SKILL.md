---
name: administracion-windows-automatizacion-mantenimiento-avanzado
description: Automatización de mantenimiento · nivel Avanzado · Administración de Windows. Rutinas de mantenimiento: limpieza de temporales, actualizaciones, discos y reportes periódicos. Objetivo del nivel: Mantenimiento con políticas: retención por antigüedad, excepciones y -WhatIf
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "automatizacion-mantenimiento"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Automatización de mantenimiento — Avanzado

## Qué hace este skill

Rutinas de mantenimiento: limpieza de temporales, actualizaciones, discos y reportes periódicos. En este nivel se entrega: **Mantenimiento con políticas: retención por antigüedad, excepciones y -WhatIf**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Automatización de mantenimiento** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Borrar por antigüedad con -WhatIf previo
2. Definir carpetas protegidas en config
3. Programar el mantenimiento con tareas
4. Mantener un historial de las limpiezas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mantenimiento con políticas: retención por antigüedad, excepciones y -WhatIf | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Borrar por antigüedad con -WhatIf previo · Definir carpetas protegidas en config · Programar el mantenimiento con tareas · Mantener un historial de las limpiezas | lista | sí | 3-4 pasos |
| $criterios_clave | El script nunca toca las carpetas protegidas · Cada corrida deja registro de qué se borró | lista | sí | calidad verificable |
| $prompt_guia | Quiero un mantenimiento mensual de RYU-TUI: borra logs y temporales de más de 30 días, respeta una lista de carpetas protegidas, y registra cada limpieza con -WhatIf de prueba. | texto | no | "Automatización de mantenimiento" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El script nunca toca las carpetas protegidas
- [ ] Cada corrida deja registro de qué se borró

## Ejemplos de prompts

- "Quiero un mantenimiento mensual de RYU-TUI: borra logs y temporales de más de 30 días, respeta una lista de carpetas protegidas, y registra cada limpieza con -WhatIf de prueba."
- "Aplica Automatización de mantenimiento (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza El script nunca toca las carpetas protegidas"
- "Revisa mi administracion-windows y dime qué pasos de Automatización de mantenimiento me faltan en este nivel"