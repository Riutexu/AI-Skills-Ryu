---
name: administracion-windows-tareas-programadas-profesional
description: Tareas programadas · nivel Profesional · Administración de Windows. Crear y gestionar tareas programadas con ScheduledTasks, triggers y acciones desde scripts. Objetivo del nivel: Deploy de tareas como código: definiciones en JSON, registración y validación de resultados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tareas-programadas"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Tareas programadas — Profesional

## Qué hace este skill

Crear y gestionar tareas programadas con ScheduledTasks, triggers y acciones desde scripts. En este nivel se entrega: **Deploy de tareas como código: definiciones en JSON, registración y validación de resultados**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tareas programadas** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir tareas en JSON y registrarlas desde un script
2. Chequear el exit code y el resultado de cada corrida
3. Recolectar el historial de fallas de una tarea
4. Reemplazar versiones de tareas sin duplicados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Deploy de tareas como código: definiciones en JSON, registración y validación de resultados | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Definir tareas en JSON y registrarlas desde un script · Chequear el exit code y el resultado de cada corrida · Recolectar el historial de fallas de una tarea · Reemplazar versiones de tareas sin duplicados | lista | sí | 3-4 pasos |
| $criterios_clave | Las tareas se despliegan desde config y no a mano · Las corridas fallidas se detectan y reportan | lista | sí | calidad verificable |
| $prompt_guia | Quiero versionar las tareas programadas de RYU-TUI como JSON y un script que las registre/actualice idempotentemente, chequeando resultados de corridas fallidas. Diseñámelo. | texto | no | "Tareas programadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las tareas se despliegan desde config y no a mano
- [ ] Las corridas fallidas se detectan y reportan

## Ejemplos de prompts

- "Quiero versionar las tareas programadas de RYU-TUI como JSON y un script que las registre/actualice idempotentemente, chequeando resultados de corridas fallidas. Diseñámelo."
- "Aplica Tareas programadas (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza Las tareas se despliegan desde config y no a mano"
- "Revisa mi administracion-windows y dime qué pasos de Tareas programadas me faltan en este nivel"