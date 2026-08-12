---
name: devops-powershell-github-actions-releases-profesional
description: GitHub Actions y releases · nivel Profesional · DevOps con PowerShell. Workflows que usan PowerShell: acciones, releases de GitHub, tags y publicación automática. Objetivo del nivel: CD de la suite: publish a galería y feeds, verificación post-release y matrices completas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "github-actions-releases"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# GitHub Actions y releases — Profesional

## Qué hace este skill

Workflows que usan PowerShell: acciones, releases de GitHub, tags y publicación automática. En este nivel se entrega: **CD de la suite: publish a galería y feeds, verificación post-release y matrices completas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **GitHub Actions y releases** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Publicar el módulo a PSGallery desde el workflow
2. Verificar la release publicada automáticamente
3. Correr la matriz completa antes del publish
4. Documentar el flujo de rollback de una release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | CD de la suite: publish a galería y feeds, verificación post-release y matrices completas | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Publicar el módulo a PSGallery desde el workflow · Verificar la release publicada automáticamente · Correr la matriz completa antes del publish · Documentar el flujo de rollback de una release | lista | sí | 3-4 pasos |
| $criterios_clave | El publish se hace desde el CI con verificación posterior · Una release mala se puede retirar con un proceso documentado | lista | sí | calidad verificable |
| $prompt_guia | Quiero CD para RYU-TUI: publish del módulo a la galería desde GitHub Actions, verificación automática de la instalación y un proceso documentado de rollback. | texto | no | "GitHub Actions y releases" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El publish se hace desde el CI con verificación posterior
- [ ] Una release mala se puede retirar con un proceso documentado

## Ejemplos de prompts

- "Quiero CD para RYU-TUI: publish del módulo a la galería desde GitHub Actions, verificación automática de la instalación y un proceso documentado de rollback."
- "Aplica GitHub Actions y releases (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza El publish se hace desde el CI con verificación posterior"
- "Revisa mi devops-powershell y dime qué pasos de GitHub Actions y releases me faltan en este nivel"