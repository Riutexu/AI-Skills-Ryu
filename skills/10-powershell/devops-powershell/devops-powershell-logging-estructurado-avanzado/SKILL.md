---
name: devops-powershell-logging-estructurado-avanzado
description: Logging estructurado · nivel Avanzado · DevOps con PowerShell. Logs que se pueden analizar: formato estructurado, niveles, contexto y consumibles por máquinas. Objetivo del nivel: Logs JSON y contexto: campos estructurados, correlación y redacción de datos sensibles
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logging-estructurado"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Logging estructurado — Avanzado

## Qué hace este skill

Logs que se pueden analizar: formato estructurado, niveles, contexto y consumibles por máquinas. En este nivel se entrega: **Logs JSON y contexto: campos estructurados, correlación y redacción de datos sensibles**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging estructurado** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir logs en JSON por línea
2. Agregar campos de contexto (script, sesión, usuario)
3. Redactar secretos en los logs
4. Filtrar y analizar los logs con PowerShell

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Logs JSON y contexto: campos estructurados, correlación y redacción de datos sensibles | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Escribir logs en JSON por línea · Agregar campos de contexto (script, sesión, usuario) · Redactar secretos en los logs · Filtrar y analizar los logs con PowerShell | lista | sí | 3-4 pasos |
| $criterios_clave | Tus logs se pueden filtrar por campos JSON · Ningún secreto aparece en los logs | lista | sí | calidad verificable |
| $prompt_guia | Quiero logs JSON por línea para RYU-TUI: campos de contexto, redacción de secretos y un ejemplo de análisis con ConvertFrom-Json. | texto | no | "Logging estructurado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus logs se pueden filtrar por campos JSON
- [ ] Ningún secreto aparece en los logs

## Ejemplos de prompts

- "Quiero logs JSON por línea para RYU-TUI: campos de contexto, redacción de secretos y un ejemplo de análisis con ConvertFrom-Json."
- "Aplica Logging estructurado (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza Tus logs se pueden filtrar por campos JSON"
- "Revisa mi devops-powershell y dime qué pasos de Logging estructurado me faltan en este nivel"