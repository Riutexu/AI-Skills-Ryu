---
name: administracion-windows-tareas-programadas-avanzado
description: Tareas programadas · nivel Avanzado · Administración de Windows. Crear y gestionar tareas programadas con ScheduledTasks, triggers y acciones desde scripts. Objetivo del nivel: Triggers complejos, condiciones y tareas con usuario/servicio específico
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tareas-programadas"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Tareas programadas — Avanzado

## Qué hace este skill

Crear y gestionar tareas programadas con ScheduledTasks, triggers y acciones desde scripts. En este nivel se entrega: **Triggers complejos, condiciones y tareas con usuario/servicio específico**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tareas programadas** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Triggers por día de semana, inicio de sesión y eventos
2. Configurar condiciones de energía e inactividad
3. Correr la tarea con otra cuenta
4. Pasar argumentos y working directory a la acción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Triggers complejos, condiciones y tareas con usuario/servicio específico | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Triggers por día de semana, inicio de sesión y eventos · Configurar condiciones de energía e inactividad · Correr la tarea con otra cuenta · Pasar argumentos y working directory a la acción | lista | sí | 3-4 pasos |
| $criterios_clave | La tarea corre solo con las condiciones que definiste · El script destino recibe argumentos correctamente | lista | sí | calidad verificable |
| $prompt_guia | Mi tarea de backup debe correr solo si la máquina está enchufada y en red, como SYSTEM, pasándole argumentos a mi script. Armame la tarea con esas condiciones y verificá. | texto | no | "Tareas programadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La tarea corre solo con las condiciones que definiste
- [ ] El script destino recibe argumentos correctamente

## Ejemplos de prompts

- "Mi tarea de backup debe correr solo si la máquina está enchufada y en red, como SYSTEM, pasándole argumentos a mi script. Armame la tarea con esas condiciones y verificá."
- "Aplica Tareas programadas (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza La tarea corre solo con las condiciones que definiste"
- "Revisa mi administracion-windows y dime qué pasos de Tareas programadas me faltan en este nivel"