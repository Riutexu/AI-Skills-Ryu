---
name: php-legacy-migracion-deps-desactualizadas-avanzado
description: Dependencias desactualizadas · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). Renovar dependencias de un legado: inventario, versiones soportadas y upgrades seguros. Objetivo del nivel: upgrades seguros
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "deps-desactualizadas"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Dependencias desactualizadas — Avanzado

## Qué hace este skill

Renovar dependencias de un legado: inventario, versiones soportadas y upgrades seguros. En este nivel se entrega: **upgrades seguros**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias desactualizadas** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Actualizar por pasos con compatibilidad verificada
2. Usar la red de caracterización antes de cada upgrade
3. Actualizar frameworks/libs con guías oficiales
4. Documentar breaking changes aplicados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | upgrades seguros | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Actualizar por pasos con compatibilidad verificada · Usar la red de caracterización antes de cada upgrade · Actualizar frameworks/libs con guías oficiales · Documentar breaking changes aplicados | lista | sí | 3-4 pasos |
| $criterios_clave | Cada upgrade pasa la red de tests · Los breaking changes están documentados | lista | sí | calidad verificable |
| $prompt_guia | Actualiza las dependencias de mi legado con verificación de compatibilidad y red de tests | texto | no | "Dependencias desactualizadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada upgrade pasa la red de tests
- [ ] Los breaking changes están documentados

## Ejemplos de prompts

- "Actualiza las dependencias de mi legado con verificación de compatibilidad y red de tests"
- "Aplica Dependencias desactualizadas (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Cada upgrade pasa la red de tests"
- "Revisa mi php-legacy-migracion y dime qué pasos de Dependencias desactualizadas me faltan en este nivel"