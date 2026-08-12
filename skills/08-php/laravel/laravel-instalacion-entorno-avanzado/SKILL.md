---
name: laravel-instalacion-entorno-avanzado
description: Instalación y entorno de desarrollo · nivel Avanzado · Laravel 11: framework productivo. Levantar Laravel limpio y productivo: Sail/Docker, .env, artisan y estructura de carpetas. Objetivo del nivel: Sail limpio y configuración por entornos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "instalacion-entorno"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Instalación y entorno de desarrollo — Avanzado

## Qué hace este skill

Levantar Laravel limpio y productivo: Sail/Docker, .env, artisan y estructura de carpetas. En este nivel se entrega: **Sail limpio y configuración por entornos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Instalación y entorno de desarrollo** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Montar el entorno con Laravel Sail (MySQL, Redis, Mailpit)
2. Separar configuración por entorno (.env.dev/.prod) correctamente
3. Configurar Colaboradores de carpeta y service providers propios
4. Ejecutar migrations/seeders desde cero reproducibles

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Sail limpio y configuración por entornos | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Montar el entorno con Laravel Sail (MySQL, Redis, Mailpit) · Separar configuración por entorno (.env.dev/.prod) correctamente · Configurar Colaboradores de carpeta y service providers propios · Ejecutar migrations/seeders desde cero reproducibles | lista | sí | 3-4 pasos |
| $criterios_clave | clone + sail up -d + migrate reproduce el proyecto en 5 min · Ningún secreto en archivos versionados | lista | sí | calidad verificable |
| $prompt_guia | Monta mi entorno Laravel con Sail reproducible en otra máquina, con seeds y configs por entorno | texto | no | "Instalación y entorno de desarrollo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] clone + sail up -d + migrate reproduce el proyecto en 5 min
- [ ] Ningún secreto en archivos versionados

## Ejemplos de prompts

- "Monta mi entorno Laravel con Sail reproducible en otra máquina, con seeds y configs por entorno"
- "Aplica Instalación y entorno de desarrollo (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza clone + sail up -d + migrate reproduce el proyecto en 5 min"
- "Revisa mi laravel y dime qué pasos de Instalación y entorno de desarrollo me faltan en este nivel"