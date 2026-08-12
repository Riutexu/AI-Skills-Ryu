---
name: laravel-blade-templates-basico
description: Blade y plantillas · nivel Básico · Laravel 11: framework productivo. Vistas componibles y seguras con Blade: layouts, componentes, slots y escape automático. Objetivo del nivel: layouts y directivas básicas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "blade-templates"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Blade y plantillas — Básico

## Qué hace este skill

Vistas componibles y seguras con Blade: layouts, componentes, slots y escape automático. En este nivel se entrega: **layouts y directivas básicas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Blade y plantillas** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear layouts con @extends/@section o components
2. Usar @if/@foreach/@forelse y variables
3. Escapar salida con {{ }} y explicar por qué

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | layouts y directivas básicas | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Crear layouts con @extends/@section o components · Usar @if/@foreach/@forelse y variables · Escapar salida con {{ }} y explicar por qué | lista | sí | 3-4 pasos |
| $criterios_clave | Las vistas reutilizan layout sin duplicar HTML · Ninguna salida sin escapar en las plantillas | lista | sí | calidad verificable |
| $prompt_guia | Refactoriza mis vistas con un layout Blade y directivas @if/@foreach sin duplicar HTML | texto | no | "Blade y plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las vistas reutilizan layout sin duplicar HTML
- [ ] Ninguna salida sin escapar en las plantillas

## Ejemplos de prompts

- "Refactoriza mis vistas con un layout Blade y directivas @if/@foreach sin duplicar HTML"
- "Aplica Blade y plantillas (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza Las vistas reutilizan layout sin duplicar HTML"
- "Revisa mi laravel y dime qué pasos de Blade y plantillas me faltan en este nivel"