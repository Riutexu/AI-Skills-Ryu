---
name: laravel-testing-laravel-profesional
description: Testing con Pest/PHPUnit · nivel Profesional · Laravel 11: framework productivo. Suites de feature/unit con Pest: factories, fakes, HTTP tests y decisiones de Cobertura. Objetivo del nivel: calidad de suite y CI
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "testing-laravel"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Testing con Pest/PHPUnit — Profesional

## Qué hace este skill

Suites de feature/unit con Pest: factories, fakes, HTTP tests y decisiones de Cobertura. En este nivel se entrega: **calidad de suite y CI**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing con Pest/PHPUnit** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir estrategia de testing del equipo (pirámide + umbrales)
2. Medir cobertura y mutation testing en módulos críticos
3. Paralelizar la suite en CI y fijar tiempos umbral
4. Test de contratos y flujos end-to-end mínimos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | calidad de suite y CI | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Definir estrategia de testing del equipo (pirámide + umbrales) · Medir cobertura y mutation testing en módulos críticos · Paralelizar la suite en CI y fijar tiempos umbral · Test de contratos y flujos end-to-end mínimos | lista | sí | 3-4 pasos |
| $criterios_clave | La suite en CI es paralela, <3 min y con umbral de cobertura · Los módulos críticos pasan mutation testing | lista | sí | calidad verificable |
| $prompt_guia | Diseña la estrategia de testing de mi equipo Laravel: pirámide, cobertura en CI, paralelización y e2e mínimos | texto | no | "Testing con Pest/PHPUnit" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La suite en CI es paralela, <3 min y con umbral de cobertura
- [ ] Los módulos críticos pasan mutation testing

## Ejemplos de prompts

- "Diseña la estrategia de testing de mi equipo Laravel: pirámide, cobertura en CI, paralelización y e2e mínimos"
- "Aplica Testing con Pest/PHPUnit (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza La suite en CI es paralela, <3 min y con umbral de cobertura"
- "Revisa mi laravel y dime qué pasos de Testing con Pest/PHPUnit me faltan en este nivel"