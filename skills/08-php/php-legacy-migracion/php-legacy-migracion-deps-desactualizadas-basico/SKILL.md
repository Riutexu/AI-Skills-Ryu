---
name: php-legacy-migracion-deps-desactualizadas-basico
description: Dependencias desactualizadas · nivel Básico · Migración de PHP legado (5/7 → 8.3). Renovar dependencias de un legado: inventario, versiones soportadas y upgrades seguros. Objetivo del nivel: inventariar y priorizar
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "deps-desactualizadas"
  nivel: basico
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Dependencias desactualizadas — Básico

## Qué hace este skill

Renovar dependencias de un legado: inventario, versiones soportadas y upgrades seguros. En este nivel se entrega: **inventariar y priorizar**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias desactualizadas** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Enumerar dependencias y sus versiones
2. Detectar las sin soporte (end of life)
3. Priorizar la actualización por riesgo

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | inventariar y priorizar | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Enumerar dependencias y sus versiones · Detectar las sin soporte (end of life) · Priorizar la actualización por riesgo | lista | sí | 3-4 pasos |
| $criterios_clave | El inventario señala las sin soporte · La priorización está documentada | lista | sí | calidad verificable |
| $prompt_guia | Inventaría las dependencias de mi legado y prioriza las sin soporte | texto | no | "Dependencias desactualizadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El inventario señala las sin soporte
- [ ] La priorización está documentada

## Ejemplos de prompts

- "Inventaría las dependencias de mi legado y prioriza las sin soporte"
- "Aplica Dependencias desactualizadas (nivel basico) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El inventario señala las sin soporte"
- "Revisa mi php-legacy-migracion y dime qué pasos de Dependencias desactualizadas me faltan en este nivel"