---
name: devops-powershell-pipelines-ci-pwsh-basico
description: Pipelines CI con pwsh · nivel Básico · DevOps con PowerShell. Correr PowerShell como pipeline: shell pwsh, scripts en steps, variables y artifacts. Objetivo del nivel: Correr un script PowerShell en un pipeline CI
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "pipelines-ci-pwsh"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Pipelines CI con pwsh — Básico

## Qué hace este skill

Correr PowerShell como pipeline: shell pwsh, scripts en steps, variables y artifacts. En este nivel se entrega: **Correr un script PowerShell en un pipeline CI**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pipelines CI con pwsh** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar un job con pwsh como shell
2. Correr un script .ps1 en el pipeline
3. Pasar variables del pipeline al script
4. Controlar el exit code

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Correr un script PowerShell en un pipeline CI | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Configurar un job con pwsh como shell · Correr un script .ps1 en el pipeline · Pasar variables del pipeline al script · Controlar el exit code | lista | sí | 3-4 pasos |
| $criterios_clave | Tu script corre en el CI con sus parámetros · Un script que falla hace fallar el pipeline | lista | sí | calidad verificable |
| $prompt_guia | Quiero correr mis scripts de PowerShell en el CI: mostrame cómo configurar pwsh como shell, pasar variables y que el pipeline falle si el script falla. | texto | no | "Pipelines CI con pwsh" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tu script corre en el CI con sus parámetros
- [ ] Un script que falla hace fallar el pipeline

## Ejemplos de prompts

- "Quiero correr mis scripts de PowerShell en el CI: mostrame cómo configurar pwsh como shell, pasar variables y que el pipeline falle si el script falla."
- "Aplica Pipelines CI con pwsh (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Tu script corre en el CI con sus parámetros"
- "Revisa mi devops-powershell y dime qué pasos de Pipelines CI con pwsh me faltan en este nivel"