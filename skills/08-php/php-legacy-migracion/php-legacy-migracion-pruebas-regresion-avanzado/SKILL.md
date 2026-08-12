---
name: php-legacy-migracion-pruebas-regresion-avanzado
description: Pruebas de regresión de migración · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). La migración no rompe: comparación de salidas, flujos E2E y verificación por dominio. Objetivo del nivel: regresión por dominio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "pruebas-regresion"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Pruebas de regresión de migración — Avanzado

## Qué hace este skill

La migración no rompe: comparación de salidas, flujos E2E y verificación por dominio. En este nivel se entrega: **regresión por dominio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas de regresión de migración** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el conjunto E2E de regresión por dominio
2. Automatizar las comparaciones en CI
3. Verificar datos de BD (snapshots) tras migrar
4. Gestionar falsos positivos y variantes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | regresión por dominio | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Definir el conjunto E2E de regresión por dominio · Automatizar las comparaciones en CI · Verificar datos de BD (snapshots) tras migrar · Gestionar falsos positivos y variantes | lista | sí | 3-4 pasos |
| $criterios_clave | La regresión E2E corre en CI por dominio · Los datos tras migración coinciden con el snapshot | lista | sí | calidad verificable |
| $prompt_guia | Monta la regresión por dominio de mi migración: E2E en CI y snapshots de BD | texto | no | "Pruebas de regresión de migración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La regresión E2E corre en CI por dominio
- [ ] Los datos tras migración coinciden con el snapshot

## Ejemplos de prompts

- "Monta la regresión por dominio de mi migración: E2E en CI y snapshots de BD"
- "Aplica Pruebas de regresión de migración (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza La regresión E2E corre en CI por dominio"
- "Revisa mi php-legacy-migracion y dime qué pasos de Pruebas de regresión de migración me faltan en este nivel"