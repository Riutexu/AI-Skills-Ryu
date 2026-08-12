---
name: php-legacy-migracion-rendimiento-legado-basico
description: Rendimiento del legado · nivel Básico · Migración de PHP legado (5/7 → 8.3). Optimizar código antiguo sin reescribir: hot paths, queries, caché y medición. Objetivo del nivel: medir y arreglar lo fácil
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rendimiento-legado"
  nivel: basico
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Rendimiento del legado — Básico

## Qué hace este skill

Optimizar código antiguo sin reescribir: hot paths, queries, caché y medición. En este nivel se entrega: **medir y arreglar lo fácil**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento del legado** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Medir tiempos de los endpoints principales
2. Detectar N+1 y consultas repetidas
3. Activar opcache correctamente

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | medir y arreglar lo fácil | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Medir tiempos de los endpoints principales · Detectar N+1 y consultas repetidas · Activar opcache correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | Los tiempos base quedan registrados · Los N+1 obvios están corregidos | lista | sí | calidad verificable |
| $prompt_guia | Mide el rendimiento de mi legado y corrige los N+1 y el opcache | texto | no | "Rendimiento del legado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tiempos base quedan registrados
- [ ] Los N+1 obvios están corregidos

## Ejemplos de prompts

- "Mide el rendimiento de mi legado y corrige los N+1 y el opcache"
- "Aplica Rendimiento del legado (nivel basico) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza Los tiempos base quedan registrados"
- "Revisa mi php-legacy-migracion y dime qué pasos de Rendimiento del legado me faltan en este nivel"