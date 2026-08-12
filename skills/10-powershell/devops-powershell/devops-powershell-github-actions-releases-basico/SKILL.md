---
name: devops-powershell-github-actions-releases-basico
description: GitHub Actions y releases · nivel Básico · DevOps con PowerShell. Workflows que usan PowerShell: acciones, releases de GitHub, tags y publicación automática. Objetivo del nivel: Crear un workflow de GitHub Actions que corre PowerShell
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "github-actions-releases"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# GitHub Actions y releases — Básico

## Qué hace este skill

Workflows que usan PowerShell: acciones, releases de GitHub, tags y publicación automática. En este nivel se entrega: **Crear un workflow de GitHub Actions que corre PowerShell**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **GitHub Actions y releases** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un workflow YAML con job de pwsh
2. Correr un script del repo
3. Usar acciones de checkout y setup
4. Ver los logs de ejecución

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un workflow de GitHub Actions que corre PowerShell | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Crear un workflow YAML con job de pwsh · Correr un script del repo · Usar acciones de checkout y setup · Ver los logs de ejecución | lista | sí | 3-4 pasos |
| $criterios_clave | Tu workflow corre scripts del repo en cada push · Sabés leer los logs de una corrida | lista | sí | calidad verificable |
| $prompt_guia | Quiero un workflow de GitHub Actions que corra mis scripts: armá el YAML con pwsh, checkout y la ejecución de mi script de tests. | texto | no | "GitHub Actions y releases" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tu workflow corre scripts del repo en cada push
- [ ] Sabés leer los logs de una corrida

## Ejemplos de prompts

- "Quiero un workflow de GitHub Actions que corra mis scripts: armá el YAML con pwsh, checkout y la ejecución de mi script de tests."
- "Aplica GitHub Actions y releases (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Tu workflow corre scripts del repo en cada push"
- "Revisa mi devops-powershell y dime qué pasos de GitHub Actions y releases me faltan en este nivel"