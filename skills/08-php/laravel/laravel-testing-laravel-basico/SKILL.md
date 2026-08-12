---
name: laravel-testing-laravel-basico
description: Testing con Pest/PHPUnit · nivel Básico · Laravel 11: framework productivo. Suites de feature/unit con Pest: factories, fakes, HTTP tests y decisiones de Cobertura. Objetivo del nivel: primeros feature tests
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "testing-laravel"
  nivel: basico
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Testing con Pest/PHPUnit — Básico

## Qué hace este skill

Suites de feature/unit con Pest: factories, fakes, HTTP tests y decisiones de Cobertura. En este nivel se entrega: **primeros feature tests**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing con Pest/PHPUnit** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar Pest y tests de humo
2. Escribir feature tests de rutas con actingAs
3. Probar flujos de registro y CRUD con factories

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primeros feature tests | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Configurar Pest y tests de humo · Escribir feature tests de rutas con actingAs · Probar flujos de registro y CRUD con factories | lista | sí | 3-4 pasos |
| $criterios_clave | Las rutas críticas tienen tests que pasan · Los tests usan BD de testing aislada (RefreshDatabase) | lista | sí | calidad verificable |
| $prompt_guia | Configura Pest en mi Laravel y escribe tests de feature para registro y CRUD de productos | texto | no | "Testing con Pest/PHPUnit" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las rutas críticas tienen tests que pasan
- [ ] Los tests usan BD de testing aislada (RefreshDatabase)

## Ejemplos de prompts

- "Configura Pest en mi Laravel y escribe tests de feature para registro y CRUD de productos"
- "Aplica Testing con Pest/PHPUnit (nivel basico) a mi trabajo actual con Laravel 11: framework productivo: prioriza Las rutas críticas tienen tests que pasan"
- "Revisa mi laravel y dime qué pasos de Testing con Pest/PHPUnit me faltan en este nivel"