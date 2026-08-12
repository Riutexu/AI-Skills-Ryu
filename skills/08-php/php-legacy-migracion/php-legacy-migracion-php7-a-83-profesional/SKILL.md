---
name: php-legacy-migracion-php7-a-83-profesional
description: Migración de PHP 7 a 8.3 · nivel Profesional · Migración de PHP legado (5/7 → 8.3). El salto 7.x → 8.x: cambios de comportamiento, match, named arguments y enum adoptados. Objetivo del nivel: salto completo gestionado
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "php7-a-83"
  nivel: profesional
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Migración de PHP 7 a 8.3 — Profesional

## Qué hace este skill

El salto 7.x → 8.x: cambios de comportamiento, match, named arguments y enum adoptados. En este nivel se entrega: **salto completo gestionado**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migración de PHP 7 a 8.3** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la lista completa de cambios 7→8 del proyecto
2. Coordinar el salto con la red de caracterización
3. Verificar con análisis estático y pruebas de carga
4. Documentar la migración para futuras versiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | salto completo gestionado | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Definir la lista completa de cambios 7→8 del proyecto · Coordinar el salto con la red de caracterización · Verificar con análisis estático y pruebas de carga · Documentar la migración para futuras versiones | lista | sí | 3-4 pasos |
| $criterios_clave | El salto se ejecuta sin regresiones medibles · La guía de migración queda documentada | lista | sí | calidad verificable |
| $prompt_guia | Coordina el salto completo de mi proyecto de PHP 7 a 8.3 con red de seguridad y documentación | texto | no | "Migración de PHP 7 a 8.3" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El salto se ejecuta sin regresiones medibles
- [ ] La guía de migración queda documentada

## Ejemplos de prompts

- "Coordina el salto completo de mi proyecto de PHP 7 a 8.3 con red de seguridad y documentación"
- "Aplica Migración de PHP 7 a 8.3 (nivel profesional) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El salto se ejecuta sin regresiones medibles"
- "Revisa mi php-legacy-migracion y dime qué pasos de Migración de PHP 7 a 8.3 me faltan en este nivel"