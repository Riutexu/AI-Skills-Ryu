---
name: php-legacy-migracion-phpstan-llegado-basico
description: Análisis estático del legado · nivel Básico · Migración de PHP legado (5/7 → 8.3). Dar tipos y seguridad al legado: PHPStan gradual, niveles, baseline y deuda conocida. Objetivo del nivel: primer PHPStan
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "phpstan-llegado"
  nivel: basico
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Análisis estático del legado — Básico

## Qué hace este skill

Dar tipos y seguridad al legado: PHPStan gradual, niveles, baseline y deuda conocida. En este nivel se entrega: **primer PHPStan**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Análisis estático del legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar PHPStan en nivel bajo
2. Correrlo y entender los errores
3. Crear la baseline de deuda inicial

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primer PHPStan | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Instalar PHPStan en nivel bajo · Correrlo y entender los errores · Crear la baseline de deuda inicial | lista | sí | 3-4 pasos |
| $criterios_clave | El nivel bajo corre sin bloquear el pipeline · La baseline documenta la deuda inicial | lista | sí | calidad verificable |
| $prompt_guia | Configura PHPStan en mi legado con baseline inicial de deuda | texto | no | "Análisis estático del legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El nivel bajo corre sin bloquear el pipeline
- [ ] La baseline documenta la deuda inicial

## Ejemplos de prompts

- "Configura PHPStan en mi legado con baseline inicial de deuda"
- "Aplica Análisis estático del legado (nivel basico) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El nivel bajo corre sin bloquear el pipeline"
- "Revisa mi php-legacy-migracion y dime qué pasos de Análisis estático del legado me faltan en este nivel"