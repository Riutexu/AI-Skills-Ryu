---
name: laravel-instalacion-entorno-profesional
description: Instalación y entorno de desarrollo · nivel Profesional · Laravel 11: framework productivo. Levantar Laravel limpio y productivo: Sail/Docker, .env, artisan y estructura de carpetas. Objetivo del nivel: bootstrap de equipos y estándares
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "instalacion-entorno"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Instalación y entorno de desarrollo — Profesional

## Qué hace este skill

Levantar Laravel limpio y productivo: Sail/Docker, .env, artisan y estructura de carpetas. En este nivel se entrega: **bootstrap de equipos y estándares**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Instalación y entorno de desarrollo** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir estándares de proyecto: Pest, Pint, PHPStan en CI
2. Estructurar features modularmente (módulos vs monolito organizado)
3. Automatizar el setup con Makefile o scripts de proyecto
4. Documentar onboarding: requisitos, flujo de deploy y cheats de verificación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | bootstrap de equipos y estándares | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Definir estándares de proyecto: Pest, Pint, PHPStan en CI · Estructurar features modularmente (módulos vs monolito organizado) · Automatizar el setup con Makefile o scripts de proyecto · Documentar onboarding: requisitos, flujo de deploy y cheats de verificación | lista | sí | 3-4 pasos |
| $criterios_clave | Un dev nuevo pasa de clone a feature con tests verdes <30 min · CI ejecuta lint, análisis estático y tests en cada PR | lista | sí | calidad verificable |
| $prompt_guia | Diseña el bootstrap de equipo para mi Laravel: estándares en CI, módulos y onboarding reproducible | texto | no | "Instalación y entorno de desarrollo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un dev nuevo pasa de clone a feature con tests verdes <30 min
- [ ] CI ejecuta lint, análisis estático y tests en cada PR

## Ejemplos de prompts

- "Diseña el bootstrap de equipo para mi Laravel: estándares en CI, módulos y onboarding reproducible"
- "Aplica Instalación y entorno de desarrollo (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza Un dev nuevo pasa de clone a feature con tests verdes <30 min"
- "Revisa mi laravel y dime qué pasos de Instalación y entorno de desarrollo me faltan en este nivel"