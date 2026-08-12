---
name: devops-powershell-despliegue-scripts-entornos-profesional
description: Despliegue de scripts a entornos · nivel Profesional · DevOps con PowerShell. Llevar la suite de scripts de dev a producción: staging, promoción y rollback de versiones. Objetivo del nivel: CD de scripts con estado: deploys idempotentes, estado declarado y auditoría completa
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "despliegue-scripts-entornos"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Despliegue de scripts a entornos — Profesional

## Qué hace este skill

Llevar la suite de scripts de dev a producción: staging, promoción y rollback de versiones. En este nivel se entrega: **CD de scripts con estado: deploys idempotentes, estado declarado y auditoría completa**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue de scripts a entornos** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Desplegar de forma idempotente y declarada
2. Verificar el estado del entorno contra lo declarado
3. Auditar cada deploy con quién, qué y cuándo
4. Probar el flujo completo en un entorno de prueba

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | CD de scripts con estado: deploys idempotentes, estado declarado y auditoría completa | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Desplegar de forma idempotente y declarada · Verificar el estado del entorno contra lo declarado · Auditar cada deploy con quién, qué y cuándo · Probar el flujo completo en un entorno de prueba | lista | sí | 3-4 pasos |
| $criterios_clave | El entorno final siempre coincide con lo declarado · Cada deploy deja auditoría completa y verificable | lista | sí | calidad verificable |
| $prompt_guia | Quiero despliegues declarativos de RYU-TUI: config deseada vs estado real, idempotencia, auditoría completa y prueba del flujo en un entorno de staging. | texto | no | "Despliegue de scripts a entornos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El entorno final siempre coincide con lo declarado
- [ ] Cada deploy deja auditoría completa y verificable

## Ejemplos de prompts

- "Quiero despliegues declarativos de RYU-TUI: config deseada vs estado real, idempotencia, auditoría completa y prueba del flujo en un entorno de staging."
- "Aplica Despliegue de scripts a entornos (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza El entorno final siempre coincide con lo declarado"
- "Revisa mi devops-powershell y dime qué pasos de Despliegue de scripts a entornos me faltan en este nivel"