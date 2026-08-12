---
name: laravel-instalacion-entorno-basico
description: Instalación y entorno de desarrollo · nivel Básico · Laravel 11: framework productivo. Levantar Laravel limpio y productivo: Sail/Docker, .env, artisan y estructura de carpetas. Objetivo del nivel: levantar Laravel y entender la estructura
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "instalacion-entorno"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Instalación y entorno de desarrollo — Básico

## Qué hace este skill

Levantar Laravel limpio y productivo: Sail/Docker, .env, artisan y estructura de carpetas. En este nivel se entrega: **levantar Laravel y entender la estructura**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Instalación y entorno de desarrollo** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear proyecto con composer create-project laravel/laravel
2. Configurar .env y correr con artisan serve (o Sail)
3. Mapear la estructura: app/, routes/, resources/, database/
4. Hacer el primer cambio de rutas y vista Blade

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | levantar Laravel y entender la estructura | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Crear proyecto con composer create-project laravel/laravel · Configurar .env y correr con artisan serve (o Sail) · Mapear la estructura: app/, routes/, resources/, database/ · Hacer el primer cambio de rutas y vista Blade | lista | sí | 3-4 pasos |
| $criterios_clave | El proyecto arranca y muestra una vista propia · El usuario explica qué contiene cada carpeta principal | lista | sí | calidad verificable |
| $prompt_guia | Levanta un Laravel 11 nuevo, explica su estructura y muéstrame una ruta + vista propias | texto | no | "Instalación y entorno de desarrollo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proyecto arranca y muestra una vista propia
- [ ] El usuario explica qué contiene cada carpeta principal

## Ejemplos de prompts

- "Levanta un Laravel 11 nuevo, explica su estructura y muéstrame una ruta + vista propias"
- "Aplica Instalación y entorno de desarrollo (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza El proyecto arranca y muestra una vista propia"
- "Revisa mi laravel y dime qué pasos de Instalación y entorno de desarrollo me faltan en este nivel"