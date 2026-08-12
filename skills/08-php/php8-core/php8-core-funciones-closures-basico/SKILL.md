---
name: php8-core-funciones-closures-basico
description: Funciones, callables y closures · nivel Básico · PHP 8.3: fundamentos profesionales. Diseñar funciones limpias, composables y reutilizables con callables, arrow functions y currying básico. Objetivo del nivel: funciones bien escritas y reutilizables
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "funciones-closures"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Funciones, callables y closures — Básico

## Qué hace este skill

Diseñar funciones limpias, composables y reutilizables con callables, arrow functions y currying básico. En este nivel se entrega: **funciones bien escritas y reutilizables**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones, callables y closures** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Refactorizar scripts con funciones de una sola responsabilidad
2. Pasar funciones como callables (usort, array_map, array_filter)
3. Escribir arrow functions cuando el cuerpo es corto

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | funciones bien escritas y reutilizables | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Refactorizar scripts con funciones de una sola responsabilidad · Pasar funciones como callables (usort, array_map, array_filter) · Escribir arrow functions cuando el cuerpo es corto | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna función supera 20 líneas ni parámetros opcionales aplastados · Bucle duplicado sustituido por array_map/filter con lógica clara | lista | sí | calidad verificable |
| $prompt_guia | Refactoriza este script en funciones de una responsabilidad usando array_map y arrow functions | texto | no | "Funciones, callables y closures" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna función supera 20 líneas ni parámetros opcionales aplastados
- [ ] Bucle duplicado sustituido por array_map/filter con lógica clara

## Ejemplos de prompts

- "Refactoriza este script en funciones de una responsabilidad usando array_map y arrow functions"
- "Aplica Funciones, callables y closures (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Ninguna función supera 20 líneas ni parámetros opcionales aplastados"
- "Revisa mi php8-core y dime qué pasos de Funciones, callables y closures me faltan en este nivel"