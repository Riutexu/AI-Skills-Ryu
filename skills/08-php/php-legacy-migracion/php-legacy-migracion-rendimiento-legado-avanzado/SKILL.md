---
name: php-legacy-migracion-rendimiento-legado-avanzado
description: Rendimiento del legado · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). Optimizar código antiguo sin reescribir: hot paths, queries, caché y medición. Objetivo del nivel: hot paths y caché
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rendimiento-legado"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Rendimiento del legado — Avanzado

## Qué hace este skill

Optimizar código antiguo sin reescribir: hot paths, queries, caché y medición. En este nivel se entrega: **hot paths y caché**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento del legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar hot paths con profiling
2. Cachear resultados costosos con invalidación
3. Optimizar las queries dominantes
4. Mejorar la latencia p95 medible

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | hot paths y caché | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Identificar hot paths con profiling · Cachear resultados costosos con invalidación · Optimizar las queries dominantes · Mejorar la latencia p95 medible | lista | sí | 3-4 pasos |
| $criterios_clave | Los hot paths están identificados y optimizados · La p95 mejora respecto a la línea base | lista | sí | calidad verificable |
| $prompt_guia | Optimiza los hot paths de mi legado con profiling y caché con invalidación | texto | no | "Rendimiento del legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los hot paths están identificados y optimizados
- [ ] La p95 mejora respecto a la línea base

## Ejemplos de prompts

- "Optimiza los hot paths de mi legado con profiling y caché con invalidación"
- "Aplica Rendimiento del legado (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los hot paths están identificados y optimizados"
- "Revisa mi php-legacy-migracion y dime qué pasos de Rendimiento del legado me faltan en este nivel"