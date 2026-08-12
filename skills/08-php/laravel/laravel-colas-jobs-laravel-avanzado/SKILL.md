---
name: laravel-colas-jobs-laravel-avanzado
description: Colas, jobs y scheduled tasks · nivel Avanzado · Laravel 11: framework productivo. Trabajo en segundo plano con colas Redis, jobs versionados y cron programado con scheduler. Objetivo del nivel: retries, timeouts y scheduling
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "colas-jobs-laravel"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Colas, jobs y scheduled tasks — Avanzado

## Qué hace este skill

Trabajo en segundo plano con colas Redis, jobs versionados y cron programado con scheduler. En este nivel se entrega: **retries, timeouts y scheduling**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colas, jobs y scheduled tasks** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar retries con backoff, attempts y timeouts por job
2. Manejar failed_jobs y política de reintentos
3. Programar tareas con $schedule (cron gestionado)
4. Encadenar jobs (chains) y batches con progreso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | retries, timeouts y scheduling | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Configurar retries con backoff, attempts y timeouts por job · Manejar failed_jobs y política de reintentos · Programar tareas con $schedule (cron gestionado) · Encadenar jobs (chains) y batches con progreso | lista | sí | 3-4 pasos |
| $criterios_clave | Un job que falla se reintenta con backoff y termina en failed_jobs · Los batches reportan progreso real | lista | sí | calidad verificable |
| $prompt_guia | Refuerza mis jobs con retries/backoff, failed_jobs y scheduler, y encadena el flujo de import con batches | texto | no | "Colas, jobs y scheduled tasks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un job que falla se reintenta con backoff y termina en failed_jobs
- [ ] Los batches reportan progreso real

## Ejemplos de prompts

- "Refuerza mis jobs con retries/backoff, failed_jobs y scheduler, y encadena el flujo de import con batches"
- "Aplica Colas, jobs y scheduled tasks (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Un job que falla se reintenta con backoff y termina en failed_jobs"
- "Revisa mi laravel y dime qué pasos de Colas, jobs y scheduled tasks me faltan en este nivel"