---
name: laravel-eloquent-modelos-avanzado
description: Eloquent: modelos y relaciones · nivel Avanzado · Laravel 11: framework productivo. ORM bien usado: relaciones, eager loading, mutators y consultas que no filtran datos a destiempo. Objetivo del nivel: relaciones complejas y queries seguras
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "eloquent-modelos"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Eloquent: modelos y relaciones — Avanzado

## Qué hace este skill

ORM bien usado: relaciones, eager loading, mutators y consultas que no filtran datos a destiempo. En este nivel se entrega: **relaciones complejas y queries seguras**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eloquent: modelos y relaciones** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar relaciones many-to-many con pivots y dondePivot
2. Usar eager loading con condiciones y selección de columnas
3. Aplicar mutators, accessors y casts de dominio
4. Evitar el N+1 con withCount y subqueries

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | relaciones complejas y queries seguras | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Implementar relaciones many-to-many con pivots y dondePivot · Usar eager loading con condiciones y selección de columnas · Aplicar mutators, accessors y casts de dominio · Evitar el N+1 con withCount y subqueries | lista | sí | 3-4 pasos |
| $criterios_clave | Un índice de listado no dispara N+1 (verificado con Telescope) · Las relaciones complejas se prueban en tests | lista | sí | calidad verificable |
| $prompt_guia | Modela mis relaciones many-to-many con pivots, mutators y eager loading sin N+1 (verificado) | texto | no | "Eloquent: modelos y relaciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un índice de listado no dispara N+1 (verificado con Telescope)
- [ ] Las relaciones complejas se prueban en tests

## Ejemplos de prompts

- "Modela mis relaciones many-to-many con pivots, mutators y eager loading sin N+1 (verificado)"
- "Aplica Eloquent: modelos y relaciones (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Un índice de listado no dispara N+1 (verificado con Telescope)"
- "Revisa mi laravel y dime qué pasos de Eloquent: modelos y relaciones me faltan en este nivel"