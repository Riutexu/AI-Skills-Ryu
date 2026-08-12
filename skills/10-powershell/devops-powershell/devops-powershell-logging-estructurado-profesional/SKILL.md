---
name: devops-powershell-logging-estructurado-profesional
description: Logging estructurado · nivel Profesional · DevOps con PowerShell. Logs que se pueden analizar: formato estructurado, niveles, contexto y consumibles por máquinas. Objetivo del nivel: Sistema de logging de la suite: librería propia, rotación, niveles por módulo y agregación
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logging-estructurado"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Logging estructurado — Profesional

## Qué hace este skill

Logs que se pueden analizar: formato estructurado, niveles, contexto y consumibles por máquinas. En este nivel se entrega: **Sistema de logging de la suite: librería propia, rotación, niveles por módulo y agregación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging estructurado** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la librería de logging de la suite
2. Configurar niveles y destinos por módulo
3. Implementar rotación y retención
4. Preparar los logs para un agregador

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sistema de logging de la suite: librería propia, rotación, niveles por módulo y agregación | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Crear la librería de logging de la suite · Configurar niveles y destinos por módulo · Implementar rotación y retención · Preparar los logs para un agregador | lista | sí | 3-4 pasos |
| $criterios_clave | Todos los módulos loguean con la misma librería · Los logs están listos para ingestión por agregador | lista | sí | calidad verificable |
| $prompt_guia | Quiero la librería de logging definitiva de RYU-TUI: niveles por módulo, rotación automática, redacción de secretos y salida lista para un agregador. | texto | no | "Logging estructurado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todos los módulos loguean con la misma librería
- [ ] Los logs están listos para ingestión por agregador

## Ejemplos de prompts

- "Quiero la librería de logging definitiva de RYU-TUI: niveles por módulo, rotación automática, redacción de secretos y salida lista para un agregador."
- "Aplica Logging estructurado (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza Todos los módulos loguean con la misma librería"
- "Revisa mi devops-powershell y dime qué pasos de Logging estructurado me faltan en este nivel"