---
name: laravel-eloquent-modelos-profesional
description: Eloquent: modelos y relaciones · nivel Profesional · Laravel 11: framework productivo. ORM bien usado: relaciones, eager loading, mutators y consultas que no filtran datos a destiempo. Objetivo del nivel: modelado de dominio y rendimiento
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "eloquent-modelos"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Eloquent: modelos y relaciones — Profesional

## Qué hace este skill

ORM bien usado: relaciones, eager loading, mutators y consultas que no filtran datos a destiempo. En este nivel se entrega: **modelado de dominio y rendimiento**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eloquent: modelos y relaciones** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el modelo de datos como dominio: agregados y límites de relación
2. Optimizar consultas calientes con índices, raw selects y compensaciones
3. Implementar eventos de modelo (creating/updated) para reglas transversales
4. Auditar N+1 e index usage en producción con herramientas
5. Equilibrar Eloquent vs query builder para queries de reporting

6. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
7. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | modelado de dominio y rendimiento | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Diseñar el modelo de datos como dominio: agregados y límites de relación · Optimizar consultas calientes con índices, raw selects y compensaciones · Implementar eventos de modelo (creating/updated) para reglas transversales · Auditar N+1 e index usage en producción con herramientas · Equilibrar Eloquent vs query builder para queries de reporting | lista | sí | 3-4 pasos |
| $criterios_clave | Las queries calientes están indexadas y documentadas · Los eventos de modelo se usan para invariantes y no para side effects ocultos | lista | sí | calidad verificable |
| $prompt_guia | Diseña mi modelo de datos como dominio con índices para queries calientes y auditoría de N+1 en producción | texto | no | "Eloquent: modelos y relaciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las queries calientes están indexadas y documentadas
- [ ] Los eventos de modelo se usan para invariantes y no para side effects ocultos

## Ejemplos de prompts

- "Diseña mi modelo de datos como dominio con índices para queries calientes y auditoría de N+1 en producción"
- "Aplica Eloquent: modelos y relaciones (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza Las queries calientes están indexadas y documentadas"
- "Revisa mi laravel y dime qué pasos de Eloquent: modelos y relaciones me faltan en este nivel"