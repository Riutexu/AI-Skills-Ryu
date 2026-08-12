---
name: devops-powershell-releases-terminal-profesional
description: Automatización de releases de terminal · nivel Profesional · DevOps con PowerShell. Cerrar el círculo: releases de RYU-TUI con la TUI, changelog, bump de versión y publicación. Objetivo del nivel: Release end-to-end desde la TUI: comando de release, gates y post-release checks
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "releases-terminal"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Automatización de releases de terminal — Profesional

## Qué hace este skill

Cerrar el círculo: releases de RYU-TUI con la TUI, changelog, bump de versión y publicación. En este nivel se entrega: **Release end-to-end desde la TUI: comando de release, gates y post-release checks**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Automatización de releases de terminal** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar la release como comando de la TUI
2. Correr todos los gates (tests, lint, análisis) antes de publicar
3. Ejecutar post-release checks (instalación limpia)
4. Documentar el flujo completo y el rollback

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Release end-to-end desde la TUI: comando de release, gates y post-release checks | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Integrar la release como comando de la TUI · Correr todos los gates (tests, lint, análisis) antes de publicar · Ejecutar post-release checks (instalación limpia) · Documentar el flujo completo y el rollback | lista | sí | 3-4 pasos |
| $criterios_clave | La release se dispara desde la TUI con todos los gates · Los post-release checks validan la instalación limpia | lista | sí | calidad verificable |
| $prompt_guia | Quiero que RYU-TUI se auto-releasée: comando de release en la TUI que corre los gates (18 tests, lint), publica y verifica la instalación limpia en pwsh 7 sin network. | texto | no | "Automatización de releases de terminal" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La release se dispara desde la TUI con todos los gates
- [ ] Los post-release checks validan la instalación limpia

## Ejemplos de prompts

- "Quiero que RYU-TUI se auto-releasée: comando de release en la TUI que corre los gates (18 tests, lint), publica y verifica la instalación limpia en pwsh 7 sin network."
- "Aplica Automatización de releases de terminal (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza La release se dispara desde la TUI con todos los gates"
- "Revisa mi devops-powershell y dime qué pasos de Automatización de releases de terminal me faltan en este nivel"