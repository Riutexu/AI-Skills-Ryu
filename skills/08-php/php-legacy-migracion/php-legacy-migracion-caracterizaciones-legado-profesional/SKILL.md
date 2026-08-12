---
name: php-legacy-migracion-caracterizaciones-legado-profesional
description: Pruebas de caracterización · nivel Profesional · Migración de PHP legado (5/7 → 8.3). Proteger el comportamiento actual antes de tocar: golden tests y red de seguridad de regresión. Objetivo del nivel: seguridad de regresión a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "caracterizaciones-legado"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Pruebas de caracterización — Profesional

## Qué hace este skill

Proteger el comportamiento actual antes de tocar: golden tests y red de seguridad de regresión. En este nivel se entrega: **seguridad de regresión a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas de caracterización** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Automatizar la red de caracterización en CI
2. Definir la política de cambios de comportamiento (aprobación)
3. Medir la cobertura del legado en riesgo
4. Usar la red como entrada de la migración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | seguridad de regresión a escala | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Automatizar la red de caracterización en CI · Definir la política de cambios de comportamiento (aprobación) · Medir la cobertura del legado en riesgo · Usar la red como entrada de la migración | lista | sí | 3-4 pasos |
| $criterios_clave | La red corre en CI y bloquea regresiones · La política de cambio de comportamiento está documentada | lista | sí | calidad verificable |
| $prompt_guia | Automatiza la red de caracterización de mi legado en CI con política de aprobación de cambios | texto | no | "Pruebas de caracterización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La red corre en CI y bloquea regresiones
- [ ] La política de cambio de comportamiento está documentada

## Ejemplos de prompts

- "Automatiza la red de caracterización de mi legado en CI con política de aprobación de cambios"
- "Aplica Pruebas de caracterización (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza La red corre en CI y bloquea regresiones"
- "Revisa mi php-legacy-migracion y dime qué pasos de Pruebas de caracterización me faltan en este nivel"