---
name: php-legacy-migracion-php7-a-83-avanzado
description: Migración de PHP 7 a 8.3 · nivel Avanzado · Migración de PHP legado (5/7 → 8.3). El salto 7.x → 8.x: cambios de comportamiento, match, named arguments y enum adoptados. Objetivo del nivel: adoptar PHP 8
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "php7-a-83"
  nivel: avanzado
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Migración de PHP 7 a 8.3 — Avanzado

## Qué hace este skill

El salto 7.x → 8.x: cambios de comportamiento, match, named arguments y enum adoptados. En este nivel se entrega: **adoptar PHP 8**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migración de PHP 7 a 8.3** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Introducir enums para estados de dominio
2. Usar readonly y constructor promotion en el código nuevo
3. Aplicar nullsafe y match en módulos migrados
4. Migrar funciones de fecha/string cambiadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | adoptar PHP 8 | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Introducir enums para estados de dominio · Usar readonly y constructor promotion en el código nuevo · Aplicar nullsafe y match en módulos migrados · Migrar funciones de fecha/string cambiadas | lista | sí | 3-4 pasos |
| $criterios_clave | Los módulos migrados usan enums y readonly donde aplica · Las funciones cambiadas están actualizadas | lista | sí | calidad verificable |
| $prompt_guia | Adopta PHP 8 en mis módulos migrados: enums, readonly, nullsafe y constructor promotion | texto | no | "Migración de PHP 7 a 8.3" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los módulos migrados usan enums y readonly donde aplica
- [ ] Las funciones cambiadas están actualizadas

## Ejemplos de prompts

- "Adopta PHP 8 en mis módulos migrados: enums, readonly, nullsafe y constructor promotion"
- "Aplica Migración de PHP 7 a 8.3 (nivel avanzado) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los módulos migrados usan enums y readonly donde aplica"
- "Revisa mi php-legacy-migracion y dime qué pasos de Migración de PHP 7 a 8.3 me faltan en este nivel"