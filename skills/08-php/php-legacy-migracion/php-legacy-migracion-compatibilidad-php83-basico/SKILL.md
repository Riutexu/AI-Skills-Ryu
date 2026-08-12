---
name: php-legacy-migracion-compatibilidad-php83-basico
description: Compatibilidad con PHP 8.3 · nivel Básico · Migración de PHP legado (5/7 → 8.3). Los cambios de PHP 8 que rompen: funciones removidas, semántica y extensiones ausentes. Objetivo del nivel: cambios que rompen conocidos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "compatibilidad-php83"
  nivel: basico
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Compatibilidad con PHP 8.3 — Básico

## Qué hace este skill

Los cambios de PHP 8 que rompen: funciones removidas, semántica y extensiones ausentes. En este nivel se entrega: **cambios que rompen conocidos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Compatibilidad con PHP 8.3** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar funciones removidas y deprecadas
2. Ajustar sintaxis antigua (constructores legacy, var)
3. Correr el proyecto en 8.3 y capturar errores

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | cambios que rompen conocidos | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Listar funciones removidas y deprecadas · Ajustar sintaxis antigua (constructores legacy, var) · Correr el proyecto en 8.3 y capturar errores | lista | sí | 3-4 pasos |
| $criterios_clave | Los errores de arranque en 8.3 están documentados · La sintaxis antigua central está corregida | lista | sí | calidad verificable |
| $prompt_guia | Ajusta mi proyecto a PHP 8.3: funciones removidas, sintaxis antigua y errores de arranque | texto | no | "Compatibilidad con PHP 8.3" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los errores de arranque en 8.3 están documentados
- [ ] La sintaxis antigua central está corregida

## Ejemplos de prompts

- "Ajusta mi proyecto a PHP 8.3: funciones removidas, sintaxis antigua y errores de arranque"
- "Aplica Compatibilidad con PHP 8.3 (nivel basico) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los errores de arranque en 8.3 están documentados"
- "Revisa mi php-legacy-migracion y dime qué pasos de Compatibilidad con PHP 8.3 me faltan en este nivel"