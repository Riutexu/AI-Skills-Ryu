---
name: devops-powershell-tiempos-retries-avanzado
description: Manejo de tiempos y retries · nivel Avanzado · DevOps con PowerShell. Operaciones que dependen del tiempo: timeouts, retries con backoff, esperas y jitter. Objetivo del nivel: Backoff exponencial, jitter y espera de condiciones del sistema
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tiempos-retries"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Manejo de tiempos y retries — Avanzado

## Qué hace este skill

Operaciones que dependen del tiempo: timeouts, retries con backoff, esperas y jitter. En este nivel se entrega: **Backoff exponencial, jitter y espera de condiciones del sistema**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de tiempos y retries** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar backoff exponencial
2. Agregar jitter para evitar sincronía
3. Esperar una condición con timeout total
4. Distinguir errores transitorios de permanentes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Backoff exponencial, jitter y espera de condiciones del sistema | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Implementar backoff exponencial · Agregar jitter para evitar sincronía · Esperar una condición con timeout total · Distinguir errores transitorios de permanentes | lista | sí | 3-4 pasos |
| $criterios_clave | El backoff reduce la carga sobre el servicio · Las esperas de condición tienen timeout global | lista | sí | calidad verificable |
| $prompt_guia | Varios scripts reintentan al mismo tiempo y el servicio se satura: mostrame backoff exponencial con jitter y cómo esperar condiciones con timeout global. | texto | no | "Manejo de tiempos y retries" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El backoff reduce la carga sobre el servicio
- [ ] Las esperas de condición tienen timeout global

## Ejemplos de prompts

- "Varios scripts reintentan al mismo tiempo y el servicio se satura: mostrame backoff exponencial con jitter y cómo esperar condiciones con timeout global."
- "Aplica Manejo de tiempos y retries (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza El backoff reduce la carga sobre el servicio"
- "Revisa mi devops-powershell y dime qué pasos de Manejo de tiempos y retries me faltan en este nivel"