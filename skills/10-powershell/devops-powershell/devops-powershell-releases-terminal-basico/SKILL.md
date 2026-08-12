---
name: devops-powershell-releases-terminal-basico
description: Automatización de releases de terminal · nivel Básico · DevOps con PowerShell. Cerrar el círculo: releases de RYU-TUI con la TUI, changelog, bump de versión y publicación. Objetivo del nivel: Preparar una release manualmente con comandos verificables
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "releases-terminal"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Automatización de releases de terminal — Básico

## Qué hace este skill

Cerrar el círculo: releases de RYU-TUI con la TUI, changelog, bump de versión y publicación. En este nivel se entrega: **Preparar una release manualmente con comandos verificables**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Automatización de releases de terminal** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar los cambios desde la última release
2. Bump de versión con el criterio SemVer
3. Actualizar el changelog
4. Verificar que la suite de 18 tests pasa

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Preparar una release manualmente con comandos verificables | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Listar los cambios desde la última release · Bump de versión con el criterio SemVer · Actualizar el changelog · Verificar que la suite de 18 tests pasa | lista | sí | 3-4 pasos |
| $criterios_clave | El proceso de release está documentado en comandos · Ninguna release se prepara sin tests verdes | lista | sí | calidad verificable |
| $prompt_guia | Quiero preparar una release de RYU-TUI sin olvidarme nada: armá la secuencia de comandos para listar cambios, bumpear versión y actualizar el changelog. | texto | no | "Automatización de releases de terminal" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proceso de release está documentado en comandos
- [ ] Ninguna release se prepara sin tests verdes

## Ejemplos de prompts

- "Quiero preparar una release de RYU-TUI sin olvidarme nada: armá la secuencia de comandos para listar cambios, bumpear versión y actualizar el changelog."
- "Aplica Automatización de releases de terminal (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza El proceso de release está documentado en comandos"
- "Revisa mi devops-powershell y dime qué pasos de Automatización de releases de terminal me faltan en este nivel"