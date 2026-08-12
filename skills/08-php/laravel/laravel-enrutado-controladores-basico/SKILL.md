---
name: laravel-enrutado-controladores-basico
description: Enrutado y controladores · nivel Básico · Laravel 11: framework productivo. Rutas limpias, controladores delgados y REST coherente con el flujo de Laravel 11. Objetivo del nivel: rutas y controladores básicos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "enrutado-controladores"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Enrutado y controladores — Básico

## Qué hace este skill

Rutas limpias, controladores delgados y REST coherente con el flujo de Laravel 11. En este nivel se entrega: **rutas y controladores básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Enrutado y controladores** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir rutas GET/POST con controladores y closures
2. Pasar parámetros y validar formatos con constraints
3. Devolver vistas y redirecciones

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | rutas y controladores básicos | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Definir rutas GET/POST con controladores y closures · Pasar parámetros y validar formatos con constraints · Devolver vistas y redirecciones | lista | sí | 3-4 pasos |
| $criterios_clave | Cada URL del CRUD funciona con su verbo correcto · Las rutas con parámetros rechazan formatos inválidos | lista | sí | calidad verificable |
| $prompt_guia | Crea las rutas de mi CRUD de productos con controladores y constraints de parámetros | texto | no | "Enrutado y controladores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada URL del CRUD funciona con su verbo correcto
- [ ] Las rutas con parámetros rechazan formatos inválidos

## Ejemplos de prompts

- "Crea las rutas de mi CRUD de productos con controladores y constraints de parámetros"
- "Aplica Enrutado y controladores (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza Cada URL del CRUD funciona con su verbo correcto"
- "Revisa mi laravel y dime qué pasos de Enrutado y controladores me faltan en este nivel"