---
name: devops-powershell-despliegue-scripts-entornos-avanzado
description: Despliegue de scripts a entornos · nivel Avanzado · DevOps con PowerShell. Llevar la suite de scripts de dev a producción: staging, promoción y rollback de versiones. Objetivo del nivel: Promoción entre entornos: dev a staging a prod con gates y validaciones
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "despliegue-scripts-entornos"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Despliegue de scripts a entornos — Avanzado

## Qué hace este skill

Llevar la suite de scripts de dev a producción: staging, promoción y rollback de versiones. En este nivel se entrega: **Promoción entre entornos: dev a staging a prod con gates y validaciones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue de scripts a entornos** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el flujo de promoción entre entornos
2. Validar en staging antes de pasar a prod
3. Desplegar con rollback automático ante falla
4. Diferenciar config por entorno

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Promoción entre entornos: dev a staging a prod con gates y validaciones | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Definir el flujo de promoción entre entornos · Validar en staging antes de pasar a prod · Desplegar con rollback automático ante falla · Diferenciar config por entorno | lista | sí | 3-4 pasos |
| $criterios_clave | Nada llega a prod sin pasar por staging verde · El rollback ante falla está automatizado | lista | sí | calidad verificable |
| $prompt_guia | Quiero el flujo dev a staging a prod para RYU-TUI: validaciones en cada paso, gate manual en prod y rollback automático si la verificación falla. | texto | no | "Despliegue de scripts a entornos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Nada llega a prod sin pasar por staging verde
- [ ] El rollback ante falla está automatizado

## Ejemplos de prompts

- "Quiero el flujo dev a staging a prod para RYU-TUI: validaciones en cada paso, gate manual en prod y rollback automático si la verificación falla."
- "Aplica Despliegue de scripts a entornos (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza Nada llega a prod sin pasar por staging verde"
- "Revisa mi devops-powershell y dime qué pasos de Despliegue de scripts a entornos me faltan en este nivel"