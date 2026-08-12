---
name: laravel-colas-jobs-laravel-basico
description: Colas, jobs y scheduled tasks · nivel Básico · Laravel 11: framework productivo. Trabajo en segundo plano con colas Redis, jobs versionados y cron programado con scheduler. Objetivo del nivel: primer job y cola local
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "colas-jobs-laravel"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Colas, jobs y scheduled tasks — Básico

## Qué hace este skill

Trabajo en segundo plano con colas Redis, jobs versionados y cron programado con scheduler. En este nivel se entrega: **primer job y cola local**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colas, jobs y scheduled tasks** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un Job y encolarlo con dispatch
2. Configurar driver de cola (sync en dev, database para probar)
3. Correr el worker local
4. Explicar cuándo una tarea debe ir a cola

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primer job y cola local | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Crear un Job y encolarlo con dispatch · Configurar driver de cola (sync en dev, database para probar) · Correr el worker local · Explicar cuándo una tarea debe ir a cola | lista | sí | 3-4 pasos |
| $criterios_clave | La tarea pesada sale de la request y el worker la procesa · El estado del job es observable (queued/failed) | lista | sí | calidad verificable |
| $prompt_guia | Envía mi export de PDF a una cola con un Job Laravel y worker local | texto | no | "Colas, jobs y scheduled tasks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La tarea pesada sale de la request y el worker la procesa
- [ ] El estado del job es observable (queued/failed)

## Ejemplos de prompts

- "Envía mi export de PDF a una cola con un Job Laravel y worker local"
- "Aplica Colas, jobs y scheduled tasks (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza La tarea pesada sale de la request y el worker la procesa"
- "Revisa mi laravel y dime qué pasos de Colas, jobs y scheduled tasks me faltan en este nivel"