---
name: php-legacy-migracion-compatibilidad-php83-avanzado
description: Compatibilidad con PHP 8.3 · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). Los cambios de PHP 8 que rompen: funciones removidas, semántica y extensiones ausentes. Objetivo del nivel: semántica cambiada
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "compatibilidad-php83"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Compatibilidad con PHP 8.3 — Avanzado

## Qué hace este skill

Los cambios de PHP 8 que rompen: funciones removidas, semántica y extensiones ausentes. En este nivel se entrega: **semántica cambiada**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Compatibilidad con PHP 8.3** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ajustar semánticas cambiadas (comparaciones, JSON, string
2. Migrar de mysql_* a PDO/mysqli completo
3. Adaptar cambios de las extensiones usadas (GD, Curl)
4. Manejar warning-turned-exception en el flujo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | semántica cambiada | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Ajustar semánticas cambiadas (comparaciones, JSON, string · Migrar de mysql_* a PDO/mysqli completo · Adaptar cambios de las extensiones usadas (GD, Curl) · Manejar warning-turned-exception en el flujo | lista | sí | 3-4 pasos |
| $criterios_clave | Las comparaciones y JSON funcionan con semántica 8.3 · Cero mysql_* en el código (grep) | lista | sí | calidad verificable |
| $prompt_guia | Adapta mi legado a la semántica de PHP 8.3: mysql_* a PDO, comparaciones y extensiones | texto | no | "Compatibilidad con PHP 8.3" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las comparaciones y JSON funcionan con semántica 8.3
- [ ] Cero mysql_* en el código (grep)

## Ejemplos de prompts

- "Adapta mi legado a la semántica de PHP 8.3: mysql_* a PDO, comparaciones y extensiones"
- "Aplica Compatibilidad con PHP 8.3 (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Las comparaciones y JSON funcionan con semántica 8.3"
- "Revisa mi php-legacy-migracion y dime qué pasos de Compatibilidad con PHP 8.3 me faltan en este nivel"