---
name: php-legacy-migracion-modernizacion-tipos-basico
description: Modernización de tipos y estilo · nivel Básico · Migración de PHP legado (5/7 → 8.3). Del código dinámico al tipado: docblocks a tipos, estilos modernos y herramientas. Objetivo del nivel: tipar el código nuevo
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "modernizacion-tipos"
  nivel: basico
  stack: "PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático"
---

# Modernización de tipos y estilo — Básico

## Qué hace este skill

Del código dinámico al tipado: docblocks a tipos, estilos modernos y herramientas. En este nivel se entrega: **tipar el código nuevo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Migración de PHP legado (5/7 → 8.3)** (PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Modernización de tipos y estilo** dentro de Migración de PHP legado (5/7 → 8.3).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Tipar el código nuevo desde ya
2. Añadir tipos a funciones críticas existentes
3. Adoptar PSR-12 con PHP-CS-Fixer

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | tipar el código nuevo | texto | sí | resultado medible |
| $stack | Migración de PHP legado (5/7 → 8.3) | texto | sí | 08-php/php-legacy-migracion |
| $tecnologias | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático | texto | sí | PHP 5.6/7.x → 8.3, Rector, PHPStan, análisis estático |
| $tareas_clave | Tipar el código nuevo desde ya · Añadir tipos a funciones críticas existentes · Adoptar PSR-12 con PHP-CS-Fixer | lista | sí | 3-4 pasos |
| $criterios_clave | El código nuevo está tipado · El estilo PSR-12 se aplica en los archivos tocados | lista | sí | calidad verificable |
| $prompt_guia | Tipa las funciones críticas de mi legado y aplica PSR-12 en los archivos tocados | texto | no | "Modernización de tipos y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El código nuevo está tipado
- [ ] El estilo PSR-12 se aplica en los archivos tocados

## Ejemplos de prompts

- "Tipa las funciones críticas de mi legado y aplica PSR-12 en los archivos tocados"
- "Aplica Modernización de tipos y estilo (nivel basico) a mi trabajo actual con Migración de PHP legado (5/7 → 8.3): prioriza El código nuevo está tipado"
- "Revisa mi php-legacy-migracion y dime qué pasos de Modernización de tipos y estilo me faltan en este nivel"