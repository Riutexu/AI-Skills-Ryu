---
name: php-legacy-migracion-rendimiento-legado-profesional
description: Rendimiento del legado · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Optimizar código antiguo sin reescribir: hot paths, queries, caché y medición. Objetivo del nivel: rendimiento sostenible
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rendimiento-legado"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Rendimiento del legado — Profesional

## Qué hace este skill

Optimizar código antiguo sin reescribir: hot paths, queries, caché y medición. En este nivel se entrega: **rendimiento sostenible**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento del legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer presupuestos de rendimiento del legado
2. Migrar los cuellos de botella a la arquitectura nueva
3. Monitorizar el rendimiento en producción
4. Reportar el retorno de la optimización

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | rendimiento sostenible | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Establecer presupuestos de rendimiento del legado · Migrar los cuellos de botella a la arquitectura nueva · Monitorizar el rendimiento en producción · Reportar el retorno de la optimización | lista | sí | 3-4 pasos |
| $criterios_clave | Los presupuestos se monitorizan · El informe muestra el retorno de la optimización | lista | sí | calidad verificable |
| $prompt_guia | Gestiona el rendimiento de mi legado con presupuestos, monitorización y reporte de retorno | texto | no | "Rendimiento del legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los presupuestos se monitorizan
- [ ] El informe muestra el retorno de la optimización

## Ejemplos de prompts

- "Gestiona el rendimiento de mi legado con presupuestos, monitorización y reporte de retorno"
- "Aplica Rendimiento del legado (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los presupuestos se monitorizan"
- "Revisa mi php-legacy-migracion y dime qué pasos de Rendimiento del legado me faltan en este nivel"