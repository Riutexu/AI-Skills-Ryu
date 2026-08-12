---
name: administracion-windows-tareas-programadas-basico
description: Tareas programadas · nivel Básico · Administración de Windows. Crear y gestionar tareas programadas con ScheduledTasks, triggers y acciones desde scripts. Objetivo del nivel: Crear y ver tareas programadas básicas con cmdlets
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tareas-programadas"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Tareas programadas — Básico

## Qué hace este skill

Crear y gestionar tareas programadas con ScheduledTasks, triggers y acciones desde scripts. En este nivel se entrega: **Crear y ver tareas programadas básicas con cmdlets**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tareas programadas** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar tareas existentes con Get-ScheduledTask
2. Crear una tarea con acción y trigger simple
3. Ejecutar y habilitar/deshabilitar tareas
4. Ver el historial de ejecuciones con Get-ScheduledTaskInfo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear y ver tareas programadas básicas con cmdlets | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Listar tareas existentes con Get-ScheduledTask · Crear una tarea con acción y trigger simple · Ejecutar y habilitar/deshabilitar tareas · Ver el historial de ejecuciones con Get-ScheduledTaskInfo | lista | sí | 3-4 pasos |
| $criterios_clave | Creás una tarea que corre a una hora fija · Sabés ver el estado y último resultado de una tarea | lista | sí | calidad verificable |
| $prompt_guia | Quiero programar mi script de respaldo para que corra todos los días a las 3 AM. Mostrame cómo crearla con ScheduledTasks, verla y probar su última ejecución. | texto | no | "Tareas programadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Creás una tarea que corre a una hora fija
- [ ] Sabés ver el estado y último resultado de una tarea

## Ejemplos de prompts

- "Quiero programar mi script de respaldo para que corra todos los días a las 3 AM. Mostrame cómo crearla con ScheduledTasks, verla y probar su última ejecución."
- "Aplica Tareas programadas (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Creás una tarea que corre a una hora fija"
- "Revisa mi administracion-windows y dime qué pasos de Tareas programadas me faltan en este nivel"