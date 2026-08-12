---
name: php-legacy-migracion-rector-automatizado-profesional
description: Rector: migración automatizada · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Migrar código con reglas: Rector, rector.php, reglas por set y revisión humana. Objetivo del nivel: migración industrializada
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rector-automatizado"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Rector: migración automatizada — Profesional

## Qué hace este skill

Migrar código con reglas: Rector, rector.php, reglas por set y revisión humana. En este nivel se entrega: **migración industrializada**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rector: migración automatizada** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar Rector en el pipeline de migración con CI
2. Establecer la política de revisión de diffs (matriz de riesgo)
3. Medir la tasa de conversión por módulo
4. Documentar la estrategia de reglas propias

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | migración industrializada | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Integrar Rector en el pipeline de migración con CI · Establecer la política de revisión de diffs (matriz de riesgo) · Medir la tasa de conversión por módulo · Documentar la estrategia de reglas propias | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline de migración corre en CI sin regresiones · La tasa de conversión se reporta por módulo | lista | sí | calidad verificable |
| $prompt_guia | Industrializa la migración con Rector: CI, política de revisión y métricas por módulo | texto | no | "Rector: migración automatizada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline de migración corre en CI sin regresiones
- [ ] La tasa de conversión se reporta por módulo

## Ejemplos de prompts

- "Industrializa la migración con Rector: CI, política de revisión y métricas por módulo"
- "Aplica Rector: migración automatizada (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El pipeline de migración corre en CI sin regresiones"
- "Revisa mi php-legacy-migracion y dime qué pasos de Rector: migración automatizada me faltan en este nivel"