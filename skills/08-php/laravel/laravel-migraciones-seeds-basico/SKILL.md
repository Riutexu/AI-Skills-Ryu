---
name: laravel-migraciones-seeds-basico
description: Migraciones y seeds · nivel Básico · Laravel 11: framework productivo. Esquema versionado y datos de prueba reproducibles, del primer schema al deploy sin fricción. Objetivo del nivel: primeras migraciones y seeders
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "migraciones-seeds"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Migraciones y seeds — Básico

## Qué hace este skill

Esquema versionado y datos de prueba reproducibles, del primer schema al deploy sin fricción. En este nivel se entrega: **primeras migraciones y seeders**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migraciones y seeds** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear migraciones de tablas con tipos y constraints
2. Correr migrate/rollback y entender el estado
3. Sembrar datos con seeders básicos

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primeras migraciones y seeders | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Crear migraciones de tablas con tipos y constraints · Correr migrate/rollback y entender el estado · Sembrar datos con seeders básicos | lista | sí | 3-4 pasos |
| $criterios_clave | rollback + migrate reproduce el esquema desde cero · Los seeds permiten probar la app con datos realistas | lista | sí | calidad verificable |
| $prompt_guia | Crea las migraciones de mi esquema inicial y seeds realistas para desarrollo | texto | no | "Migraciones y seeds" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] rollback + migrate reproduce el esquema desde cero
- [ ] Los seeds permiten probar la app con datos realistas

## Ejemplos de prompts

- "Crea las migraciones de mi esquema inicial y seeds realistas para desarrollo"
- "Aplica Migraciones y seeds (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza rollback + migrate reproduce el esquema desde cero"
- "Revisa mi laravel y dime qué pasos de Migraciones y seeds me faltan en este nivel"