---
name: devops-powershell-releases-terminal-avanzado
description: Automatización de releases de terminal · nivel Avanzado · DevOps con PowerShell. Cerrar el círculo: releases de RYU-TUI con la TUI, changelog, bump de versión y publicación. Objetivo del nivel: Script de release semi-automático: bump, changelog, tags y publicación
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "releases-terminal"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Automatización de releases de terminal — Avanzado

## Qué hace este skill

Cerrar el círculo: releases de RYU-TUI con la TUI, changelog, bump de versión y publicación. En este nivel se entrega: **Script de release semi-automático: bump, changelog, tags y publicación**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Automatización de releases de terminal** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir un script release.ps1 que bumpea la versión
2. Generar el changelog de la sección nueva
3. Crear el tag y publicar la release
4. Verificar la release publicada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Script de release semi-automático: bump, changelog, tags y publicación | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Escribir un script release.ps1 que bumpea la versión · Generar el changelog de la sección nueva · Crear el tag y publicar la release · Verificar la release publicada | lista | sí | 3-4 pasos |
| $criterios_clave | El script de release genera tag y release con un comando · La versión nueva queda reflejada en todo el proyecto | lista | sí | calidad verificable |
| $prompt_guia | Quiero un release.ps1 para RYU-TUI: bump de versión según conventional commits, changelog, tag y release de GitHub en un solo comando. | texto | no | "Automatización de releases de terminal" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El script de release genera tag y release con un comando
- [ ] La versión nueva queda reflejada en todo el proyecto

## Ejemplos de prompts

- "Quiero un release.ps1 para RYU-TUI: bump de versión según conventional commits, changelog, tag y release de GitHub en un solo comando."
- "Aplica Automatización de releases de terminal (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza El script de release genera tag y release con un comando"
- "Revisa mi devops-powershell y dime qué pasos de Automatización de releases de terminal me faltan en este nivel"