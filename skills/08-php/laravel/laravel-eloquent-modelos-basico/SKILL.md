---
name: laravel-eloquent-modelos-basico
description: Eloquent: modelos y relaciones · nivel Básico · Laravel 11: framework productivo. ORM bien usado: relaciones, eager loading, mutators y consultas que no filtran datos a destiempo. Objetivo del nivel: modelos y CRUD con Eloquent
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "eloquent-modelos"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Eloquent: modelos y relaciones — Básico

## Qué hace este skill

ORM bien usado: relaciones, eager loading, mutators y consultas que no filtran datos a destiempo. En este nivel se entrega: **modelos y CRUD con Eloquent**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eloquent: modelos y relaciones** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear modelos con fillable/casts correctos
2. Ejecutar CRUD con query builder y find/orFail
3. Usar with() para relaciones básicas

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | modelos y CRUD con Eloquent | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Crear modelos con fillable/casts correctos · Ejecutar CRUD con query builder y find/orFail · Usar with() para relaciones básicas | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún modelo sin fillable o con $guarded vacío en producción · El CRUD funciona sin SQL crudo | lista | sí | calidad verificable |
| $prompt_guia | Crea los modelos Eloquent de productos y categorías con relaciones y CRUD limpio | texto | no | "Eloquent: modelos y relaciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún modelo sin fillable o con $guarded vacío en producción
- [ ] El CRUD funciona sin SQL crudo

## Ejemplos de prompts

- "Crea los modelos Eloquent de productos y categorías con relaciones y CRUD limpio"
- "Aplica Eloquent: modelos y relaciones (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza Ningún modelo sin fillable o con $guarded vacío en producción"
- "Revisa mi laravel y dime qué pasos de Eloquent: modelos y relaciones me faltan en este nivel"