---
name: devops-powershell-pipelines-ci-pwsh-profesional
description: Pipelines CI con pwsh · nivel Profesional · DevOps con PowerShell. Correr PowerShell como pipeline: shell pwsh, scripts en steps, variables y artifacts. Objetivo del nivel: Pipeline de la suite completo: gates, artifacts, aprobaciones y reportes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "pipelines-ci-pwsh"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Pipelines CI con pwsh — Profesional

## Qué hace este skill

Correr PowerShell como pipeline: shell pwsh, scripts en steps, variables y artifacts. En este nivel se entrega: **Pipeline de la suite completo: gates, artifacts, aprobaciones y reportes**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pipelines CI con pwsh** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el pipeline completo de RYU-TUI (lint, tests, publish)
2. Publicar artifacts y reportes
3. Agregar aprobaciones para el paso de release
4. Mantener tiempos de pipeline acotados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Pipeline de la suite completo: gates, artifacts, aprobaciones y reportes | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Diseñar el pipeline completo de RYU-TUI (lint, tests, publish) · Publicar artifacts y reportes · Agregar aprobaciones para el paso de release · Mantener tiempos de pipeline acotados | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline completo corre bajo los 15 minutos · Los reportes de la suite son consumibles desde el CI | lista | sí | calidad verificable |
| $prompt_guia | Quiero el pipeline completo de RYU-TUI: lint, los 18 tests, publicación de artifacts y una aprobación antes del release, todo en menos de 15 minutos. | texto | no | "Pipelines CI con pwsh" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline completo corre bajo los 15 minutos
- [ ] Los reportes de la suite son consumibles desde el CI

## Ejemplos de prompts

- "Quiero el pipeline completo de RYU-TUI: lint, los 18 tests, publicación de artifacts y una aprobación antes del release, todo en menos de 15 minutos."
- "Aplica Pipelines CI con pwsh (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza El pipeline completo corre bajo los 15 minutos"
- "Revisa mi devops-powershell y dime qué pasos de Pipelines CI con pwsh me faltan en este nivel"