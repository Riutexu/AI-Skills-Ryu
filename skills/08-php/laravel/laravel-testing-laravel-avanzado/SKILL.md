---
name: laravel-testing-laravel-avanzado
description: Testing con Pest/PHPUnit · nivel Avanzado · Laravel 11: framework productivo. Suites de feature/unit con Pest: factories, fakes, HTTP tests y decisiones de Cobertura. Objetivo del nivel: fakes, mocks y casos de dominio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "testing-laravel"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Testing con Pest/PHPUnit — Avanzado

## Qué hace este skill

Suites de feature/unit con Pest: factories, fakes, HTTP tests y decisiones de Cobertura. En este nivel se entrega: **fakes, mocks y casos de dominio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing con Pest/PHPUnit** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar fakes de Notification, Mail, Queue y Storage
2. Probar jobs y scheduler con asserts de encolado
3. Probar reglas de dominio y policies
4. Organizar suites por dominio y velocidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | fakes, mocks y casos de dominio | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Usar fakes de Notification, Mail, Queue y Storage · Probar jobs y scheduler con asserts de encolado · Probar reglas de dominio y policies · Organizar suites por dominio y velocidad | lista | sí | 3-4 pasos |
| $criterios_clave | Los side effects (mail/cola) se verifican con fakes · La suite principal corre en <1 minuto | lista | sí | calidad verificable |
| $prompt_guia | Fortalece mis tests con fakes de mail/cola, asserts de jobs y pruebas de policies | texto | no | "Testing con Pest/PHPUnit" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los side effects (mail/cola) se verifican con fakes
- [ ] La suite principal corre en <1 minuto

## Ejemplos de prompts

- "Fortalece mis tests con fakes de mail/cola, asserts de jobs y pruebas de policies"
- "Aplica Testing con Pest/PHPUnit (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Los side effects (mail/cola) se verifican con fakes"
- "Revisa mi laravel y dime qué pasos de Testing con Pest/PHPUnit me faltan en este nivel"