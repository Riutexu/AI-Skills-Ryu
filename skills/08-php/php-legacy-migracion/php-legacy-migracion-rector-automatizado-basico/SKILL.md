---
name: php-legacy-migracion-rector-automatizado-basico
description: Rector: migración automatizada · nivel Básico · Migración de PHP legado (5/7 → 8.3). Migrar código con reglas: Rector, rector.php, reglas por set y revisión humana. Objetivo del nivel: primeras reglas Rector
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rector-automatizado"
  nivel: basico
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Rector: migración automatizada — Básico

## Qué hace este skill

Migrar código con reglas: Rector, rector.php, reglas por set y revisión humana. En este nivel se entrega: **primeras reglas Rector**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rector: migración automatizada** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar Rector y configurar rector.php
2. Aplicar sets básicos (php73/php80)
3. Revisar el diff generado con criterio

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primeras reglas Rector | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Instalar Rector y configurar rector.php · Aplicar sets básicos (php73/php80) · Revisar el diff generado con criterio | lista | sí | 3-4 pasos |
| $criterios_clave | Los sets básicos se aplican sin romper tests · El diff se revisa y entiende línea a línea | lista | sí | calidad verificable |
| $prompt_guia | Configura Rector y aplica los sets de PHP 7.3/8.0 a mi proyecto | texto | no | "Rector: migración automatizada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los sets básicos se aplican sin romper tests
- [ ] El diff se revisa y entiende línea a línea

## Ejemplos de prompts

- "Configura Rector y aplica los sets de PHP 7.3/8.0 a mi proyecto"
- "Aplica Rector: migración automatizada (nivel basico) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los sets básicos se aplican sin romper tests"
- "Revisa mi php-legacy-migracion y dime qué pasos de Rector: migración automatizada me faltan en este nivel"