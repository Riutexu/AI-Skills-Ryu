---
name: php-legacy-migracion-diagnostico-legado-profesional
description: Diagnóstico de código legado · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Saber qué hay antes de tocar: inventario, deuda, dependencias y riesgos de la migración. Objetivo del nivel: estrategia de migración
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "diagnostico-legado"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Diagnóstico de código legado — Profesional

## Qué hace este skill

Saber qué hay antes de tocar: inventario, deuda, dependencias y riesgos de la migración. En este nivel se entrega: **estrategia de migración**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Diagnóstico de código legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la estrategia (big bang vs incremental) con criterio
2. Identificar módulos críticos y su red de dependencias
3. Definir hitos, riesgos y criterios de salida
4. Presentar el plan con métricas y presupuesto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | estrategia de migración | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Diseñar la estrategia (big bang vs incremental) con criterio · Identificar módulos críticos y su red de dependencias · Definir hitos, riesgos y criterios de salida · Presentar el plan con métricas y presupuesto | lista | sí | 3-4 pasos |
| $criterios_clave | La estrategia está justificada con riesgo por módulo · Los hitos tienen criterios de salida medibles | lista | sí | calidad verificable |
| $prompt_guia | Diseña la estrategia de migración de mi legado a PHP 8.3 con hitos y gestión de riesgo | texto | no | "Diagnóstico de código legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La estrategia está justificada con riesgo por módulo
- [ ] Los hitos tienen criterios de salida medibles

## Ejemplos de prompts

- "Diseña la estrategia de migración de mi legado a PHP 8.3 con hitos y gestión de riesgo"
- "Aplica Diagnóstico de código legado (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza La estrategia está justificada con riesgo por módulo"
- "Revisa mi php-legacy-migracion y dime qué pasos de Diagnóstico de código legado me faltan en este nivel"