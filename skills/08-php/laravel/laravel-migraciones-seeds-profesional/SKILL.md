---
name: laravel-migraciones-seeds-profesional
description: Migraciones y seeds · nivel Profesional · Laravel 11: framework productivo. Esquema versionado y datos de prueba reproducibles, del primer schema al deploy sin fricción. Objetivo del nivel: deploys zero-downtime
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "migraciones-seeds"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Migraciones y seeds — Profesional

## Qué hace este skill

Esquema versionado y datos de prueba reproducibles, del primer schema al deploy sin fricción. En este nivel se entrega: **deploys zero-downtime**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migraciones y seeds** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la estrategia de migración zero-downtime (expand/migrate/contract)
2. Automatizar migraciones en deploy con rollback planificado
3. Versionar datos con seeders de producción controlados (data migrations)
4. Probar migraciones contra un snapshot de producción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | deploys zero-downtime | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Diseñar la estrategia de migración zero-downtime (expand/migrate/contract) · Automatizar migraciones en deploy con rollback planificado · Versionar datos con seeders de producción controlados (data migrations) · Probar migraciones contra un snapshot de producción | lista | sí | 3-4 pasos |
| $criterios_clave | El deploy aplica migraciones sin downtime (documentado) · La prueba de migración contra snapshot no rompe datos | lista | sí | calidad verificable |
| $prompt_guia | Implementa migraciones zero-downtime con expand/migrate/contract, deploy automatizado y prueba contra snapshot | texto | no | "Migraciones y seeds" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El deploy aplica migraciones sin downtime (documentado)
- [ ] La prueba de migración contra snapshot no rompe datos

## Ejemplos de prompts

- "Implementa migraciones zero-downtime con expand/migrate/contract, deploy automatizado y prueba contra snapshot"
- "Aplica Migraciones y seeds (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza El deploy aplica migraciones sin downtime (documentado)"
- "Revisa mi laravel y dime qué pasos de Migraciones y seeds me faltan en este nivel"