---
name: laravel-autenticacion-laravel-avanzado
description: Autenticación y autorización · nivel Avanzado · Laravel 11: framework productivo. Login seguro, guards, roles y políticas con el flujo estándar de Laravel (y Breeze/Fortify). Objetivo del nivel: roles, permisos y políticas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "autenticacion-laravel"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Autenticación y autorización — Avanzado

## Qué hace este skill

Login seguro, guards, roles y políticas con el flujo estándar de Laravel (y Breeze/Fortify). En este nivel se entrega: **roles, permisos y políticas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Autenticación y autorización** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar roles/permisos con spatie/laravel-permission o propio
2. Definir políticas (Policy) por modelo con gates
3. Aplicar can-checks en Blade y rutas
4. Proteger acciones en API con policies

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | roles, permisos y políticas | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Modelar roles/permisos con spatie/laravel-permission o propio · Definir políticas (Policy) por modelo con gates · Aplicar can-checks en Blade y rutas · Proteger acciones en API con policies | lista | sí | 3-4 pasos |
| $criterios_clave | Cada acción sensible pasa por una policy, no por if de rol disperso · Los tests cubren permisos denegados y concedidos | lista | sí | calidad verificable |
| $prompt_guia | Implementa roles y permisos con policies por modelo, checks en Blade y rutas protegidas | texto | no | "Autenticación y autorización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada acción sensible pasa por una policy, no por if de rol disperso
- [ ] Los tests cubren permisos denegados y concedidos

## Ejemplos de prompts

- "Implementa roles y permisos con policies por modelo, checks en Blade y rutas protegidas"
- "Aplica Autenticación y autorización (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Cada acción sensible pasa por una policy, no por if de rol disperso"
- "Revisa mi laravel y dime qué pasos de Autenticación y autorización me faltan en este nivel"