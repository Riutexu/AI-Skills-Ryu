---
name: devops-powershell-tiempos-retries-basico
description: Manejo de tiempos y retries · nivel Básico · DevOps con PowerShell. Operaciones que dependen del tiempo: timeouts, retries con backoff, esperas y jitter. Objetivo del nivel: Esperar y reintentar operaciones simples
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tiempos-retries"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Manejo de tiempos y retries — Básico

## Qué hace este skill

Operaciones que dependen del tiempo: timeouts, retries con backoff, esperas y jitter. En este nivel se entrega: **Esperar y reintentar operaciones simples**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de tiempos y retries** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar Start-Sleep y esperar condiciones
2. Implementar un retry simple
3. Fijar timeouts con Stopwatch
4. Entender cuándo reintentar y cuándo no

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Esperar y reintentar operaciones simples | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Usar Start-Sleep y esperar condiciones · Implementar un retry simple · Fijar timeouts con Stopwatch · Entender cuándo reintentar y cuándo no | lista | sí | 3-4 pasos |
| $criterios_clave | Tus retries reintentan lo transitorio y no lo permanente · Las esperas tienen límite y se informan | lista | sí | calidad verificable |
| $prompt_guia | Mi script llama a un servicio que a veces no responde: mostrame el patrón de retry con límite de intentos y tiempo de espera. | texto | no | "Manejo de tiempos y retries" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus retries reintentan lo transitorio y no lo permanente
- [ ] Las esperas tienen límite y se informan

## Ejemplos de prompts

- "Mi script llama a un servicio que a veces no responde: mostrame el patrón de retry con límite de intentos y tiempo de espera."
- "Aplica Manejo de tiempos y retries (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Tus retries reintentan lo transitorio y no lo permanente"
- "Revisa mi devops-powershell y dime qué pasos de Manejo de tiempos y retries me faltan en este nivel"