---
name: devops-powershell-tiempos-retries-profesional
description: Manejo de tiempos y retries · nivel Profesional · DevOps con PowerShell. Operaciones que dependen del tiempo: timeouts, retries con backoff, esperas y jitter. Objetivo del nivel: Política de retries de la suite: clasificación de errores, métricas y reintentos observables
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tiempos-retries"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Manejo de tiempos y retries — Profesional

## Qué hace este skill

Operaciones que dependen del tiempo: timeouts, retries con backoff, esperas y jitter. En este nivel se entrega: **Política de retries de la suite: clasificación de errores, métricas y reintentos observables**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de tiempos y retries** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Clasificar errores como transitorios o permanentes
2. Centralizar el patrón de retry de la suite
3. Registrar métricas de reintentos
4. Configurar políticas por operación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de retries de la suite: clasificación de errores, métricas y reintentos observables | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Clasificar errores como transitorios o permanentes · Centralizar el patrón de retry de la suite · Registrar métricas de reintentos · Configurar políticas por operación | lista | sí | 3-4 pasos |
| $criterios_clave | La política de retries está centralizada y configurable · Los reintentos se miden y reportan | lista | sí | calidad verificable |
| $prompt_guia | Quiero una política de retries central para RYU-TUI: clasificación de errores, patrón único con backoff configurable y métricas de reintentos por operación. | texto | no | "Manejo de tiempos y retries" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política de retries está centralizada y configurable
- [ ] Los reintentos se miden y reportan

## Ejemplos de prompts

- "Quiero una política de retries central para RYU-TUI: clasificación de errores, patrón único con backoff configurable y métricas de reintentos por operación."
- "Aplica Manejo de tiempos y retries (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza La política de retries está centralizada y configurable"
- "Revisa mi devops-powershell y dime qué pasos de Manejo de tiempos y retries me faltan en este nivel"