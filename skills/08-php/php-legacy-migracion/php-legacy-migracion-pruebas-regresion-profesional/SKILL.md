---
name: php-legacy-migracion-pruebas-regresion-profesional
description: Pruebas de regresión de migración · nivel Profesional · Migración de PHP legado (5/7 → 8.3). La migración no rompe: comparación de salidas, flujos E2E y verificación por dominio. Objetivo del nivel: verificación continua
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "pruebas-regresion"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Pruebas de regresión de migración — Profesional

## Qué hace este skill

La migración no rompe: comparación de salidas, flujos E2E y verificación por dominio. En este nivel se entrega: **verificación continua**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas de regresión de migración** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la estrategia de verificación continua de la migración
2. Correlacionar regresiones con el commit que las causó
3. Medir la cobertura de flujos verificados
4. Automatizar el reporte ejecutivo de la migración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | verificación continua | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Diseñar la estrategia de verificación continua de la migración · Correlacionar regresiones con el commit que las causó · Medir la cobertura de flujos verificados · Automatizar el reporte ejecutivo de la migración | lista | sí | 3-4 pasos |
| $criterios_clave | Las regresiones se bisectan al commit causante · El reporte ejecutivo refleja el estado real | lista | sí | calidad verificable |
| $prompt_guia | Diseña la verificación continua de mi migración: bisect, cobertura y reporte ejecutivo | texto | no | "Pruebas de regresión de migración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las regresiones se bisectan al commit causante
- [ ] El reporte ejecutivo refleja el estado real

## Ejemplos de prompts

- "Diseña la verificación continua de mi migración: bisect, cobertura y reporte ejecutivo"
- "Aplica Pruebas de regresión de migración (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Las regresiones se bisectan al commit causante"
- "Revisa mi php-legacy-migracion y dime qué pasos de Pruebas de regresión de migración me faltan en este nivel"