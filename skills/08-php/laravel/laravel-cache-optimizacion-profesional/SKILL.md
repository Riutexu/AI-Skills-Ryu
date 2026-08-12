---
name: laravel-cache-optimizacion-profesional
description: Caché y optimización · nivel Profesional · Laravel 11: framework productivo. Caché intencional con Redis: tags, invalidación por eventos y presupuestos de rendimiento. Objetivo del nivel: estrategia de caché a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cache-optimizacion"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Caché y optimización — Profesional

## Qué hace este skill

Caché intencional con Redis: tags, invalidación por eventos y presupuestos de rendimiento. En este nivel se entrega: **estrategia de caché a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caché y optimización** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la estrategia de caché completa (queries, paginas, sesiones, cdns)
2. Aplicar cache stampede protection (locking) en endpoints calientes
3. Simular fallos de Redis y degradar con gracia
4. Presupuestos de TTL y coherencia documentados en ADR

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | estrategia de caché a escala | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Diseñar la estrategia de caché completa (queries, paginas, sesiones, cdns) · Aplicar cache stampede protection (locking) en endpoints calientes · Simular fallos de Redis y degradar con gracia · Presupuestos de TTL y coherencia documentados en ADR | lista | sí | 3-4 pasos |
| $criterios_clave | El stampede protection evita el thrash ante picos (prueba de carga) · La app funciona degradada si Redis cae | lista | sí | calidad verificable |
| $prompt_guia | Diseña la estrategia de caché completa de mi servicio: locking anti-stampede, degradación sin Redis y ADR | texto | no | "Caché y optimización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El stampede protection evita el thrash ante picos (prueba de carga)
- [ ] La app funciona degradada si Redis cae

## Ejemplos de prompts

- "Diseña la estrategia de caché completa de mi servicio: locking anti-stampede, degradación sin Redis y ADR"
- "Aplica Caché y optimización (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza El stampede protection evita el thrash ante picos (prueba de carga)"
- "Revisa mi laravel y dime qué pasos de Caché y optimización me faltan en este nivel"