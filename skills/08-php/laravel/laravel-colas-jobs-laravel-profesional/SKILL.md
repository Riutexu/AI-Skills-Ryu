---
name: laravel-colas-jobs-laravel-profesional
description: Colas, jobs y scheduled tasks · nivel Profesional · Laravel 11: framework productivo. Trabajo en segundo plano con colas Redis, jobs versionados y cron programado con scheduler. Objetivo del nivel: arquitectura de procesamiento
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "colas-jobs-laravel"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Colas, jobs y scheduled tasks — Profesional

## Qué hace este skill

Trabajo en segundo plano con colas Redis, jobs versionados y cron programado con scheduler. En este nivel se entrega: **arquitectura de procesamiento**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colas, jobs y scheduled tasks** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el flujo completo event -> job -> notification con idempotencia
2. Escalar workers horizontalmente y supervisar colas (Horizon)
3. Definir contratos de payload versionados y jobs compatibles atrás
4. Prioridades y rate limiting por cola de negocio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | arquitectura de procesamiento | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Diseñar el flujo completo event -> job -> notification con idempotencia · Escalar workers horizontalmente y supervisar colas (Horizon) · Definir contratos de payload versionados y jobs compatibles atrás · Prioridades y rate limiting por cola de negocio | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos encadenan jobs idempotentes sin duplicación · Horizon monitoriza colas y workers con alertas | lista | sí | calidad verificable |
| $prompt_guia | Diseña mi arquitectura de procesamiento: eventos a jobs idempotentes, Horizon escalado y payloads versionados | texto | no | "Colas, jobs y scheduled tasks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos encadenan jobs idempotentes sin duplicación
- [ ] Horizon monitoriza colas y workers con alertas

## Ejemplos de prompts

- "Diseña mi arquitectura de procesamiento: eventos a jobs idempotentes, Horizon escalado y payloads versionados"
- "Aplica Colas, jobs y scheduled tasks (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza Los eventos encadenan jobs idempotentes sin duplicación"
- "Revisa mi laravel y dime qué pasos de Colas, jobs y scheduled tasks me faltan en este nivel"