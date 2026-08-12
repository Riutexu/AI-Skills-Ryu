---
name: php-legacy-migracion-modernizacion-incremental-profesional
description: Modernización incremental · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Mejorar sin reescribir: estrangulador, módulos nuevos sobre arquitectura nueva y migración progresiva. Objetivo del nivel: modernización como programa
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "modernizacion-incremental"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Modernización incremental — Profesional

## Qué hace este skill

Mejorar sin reescribir: estrangulador, módulos nuevos sobre arquitectura nueva y migración progresiva. En este nivel se entrega: **modernización como programa**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Modernización incremental** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el roadmap de modernización (módulos, plazos, riesgos)
2. Definir la arquitectura destino (estructura, convenciones, testing)
3. Medir el progreso (deuda, cobertura, coste de cambios)
4. Gestionar la transición del equipo y el conocimiento

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | modernización como programa | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Diseñar el roadmap de modernización (módulos, plazos, riesgos) · Definir la arquitectura destino (estructura, convenciones, testing) · Medir el progreso (deuda, cobertura, coste de cambios) · Gestionar la transición del equipo y el conocimiento | lista | sí | 3-4 pasos |
| $criterios_clave | El roadmap tiene métricas y revisiones periódicas · La arquitectura destino está documentada y aceptada | lista | sí | calidad verificable |
| $prompt_guia | Dirige la modernización de mi plataforma como programa con arquitectura destino y métricas | texto | no | "Modernización incremental" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El roadmap tiene métricas y revisiones periódicas
- [ ] La arquitectura destino está documentada y aceptada

## Ejemplos de prompts

- "Dirige la modernización de mi plataforma como programa con arquitectura destino y métricas"
- "Aplica Modernización incremental (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El roadmap tiene métricas y revisiones periódicas"
- "Revisa mi php-legacy-migracion y dime qué pasos de Modernización incremental me faltan en este nivel"