---
name: php8-core-arrays-colecciones-basico
description: Arrays y colecciones · nivel Básico · PHP 8.3: fundamentos profesionales. Dominar arrays, colecciones tipo y transformaciones declarativas sobre datos reales. Objetivo del nivel: operar arrays con confianza
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "arrays-colecciones"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Arrays y colecciones — Básico

## Qué hace este skill

Dominar arrays, colecciones tipo y transformaciones declarativas sobre datos reales. En este nivel se entrega: **operar arrays con confianza**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y colecciones** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Recorrer y transformar arrays con foreach, array_map y array_filter
2. Combinar arrays (merge, spread) sin errores de claves
3. Ordenar con usort/comparadores de forma estable y predecible

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | operar arrays con confianza | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Recorrer y transformar arrays con foreach, array_map y array_filter · Combinar arrays (merge, spread) sin errores de claves · Ordenar con usort/comparadores de forma estable y predecible | lista | sí | 3-4 pasos |
| $criterios_clave | Las transformaciones son declarativas (sin foreach anidados) · Los casos de claves numéricas vs de texto están resueltos | lista | sí | calidad verificable |
| $prompt_guia | Transforma esta lista de productos en un array asociativo con array_map/filter y ordénala por precio | texto | no | "Arrays y colecciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las transformaciones son declarativas (sin foreach anidados)
- [ ] Los casos de claves numéricas vs de texto están resueltos

## Ejemplos de prompts

- "Transforma esta lista de productos en un array asociativo con array_map/filter y ordénala por precio"
- "Aplica Arrays y colecciones (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Las transformaciones son declarativas (sin foreach anidados)"
- "Revisa mi php8-core y dime qué pasos de Arrays y colecciones me faltan en este nivel"