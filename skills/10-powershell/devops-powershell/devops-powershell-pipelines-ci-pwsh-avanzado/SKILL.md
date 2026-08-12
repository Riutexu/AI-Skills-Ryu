---
name: devops-powershell-pipelines-ci-pwsh-avanzado
description: Pipelines CI con pwsh · nivel Avanzado · DevOps con PowerShell. Correr PowerShell como pipeline: shell pwsh, scripts en steps, variables y artifacts. Objetivo del nivel: Pipelines de scripts: steps reutilizables, secretos en variables y matrices
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "pipelines-ci-pwsh"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Pipelines CI con pwsh — Avanzado

## Qué hace este skill

Correr PowerShell como pipeline: shell pwsh, scripts en steps, variables y artifacts. En este nivel se entrega: **Pipelines de scripts: steps reutilizables, secretos en variables y matrices**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pipelines CI con pwsh** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir steps con scripts parametrizados
2. Manejar secretos con variables del pipeline
3. Correr en matriz de versiones (pwsh 7, PS 5.1)
4. Publicar logs útiles para debug

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Pipelines de scripts: steps reutilizables, secretos en variables y matrices | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Definir steps con scripts parametrizados · Manejar secretos con variables del pipeline · Correr en matriz de versiones (pwsh 7, PS 5.1) · Publicar logs útiles para debug | lista | sí | 3-4 pasos |
| $criterios_clave | Los secretos del pipeline llegan sin exponerse en logs · La matriz corre en todas las versiones soportadas | lista | sí | calidad verificable |
| $prompt_guia | Quiero un pipeline reutilizable para mis scripts: steps parametrizados, secretos en variables del CI y una matriz con pwsh 7 y Windows PowerShell 5.1. | texto | no | "Pipelines CI con pwsh" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los secretos del pipeline llegan sin exponerse en logs
- [ ] La matriz corre en todas las versiones soportadas

## Ejemplos de prompts

- "Quiero un pipeline reutilizable para mis scripts: steps parametrizados, secretos en variables del CI y una matriz con pwsh 7 y Windows PowerShell 5.1."
- "Aplica Pipelines CI con pwsh (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza Los secretos del pipeline llegan sin exponerse en logs"
- "Revisa mi devops-powershell y dime qué pasos de Pipelines CI con pwsh me faltan en este nivel"