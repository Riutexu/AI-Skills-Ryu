---
name: php8-core-arrays-colecciones-profesional
description: Arrays y colecciones · nivel Profesional · PHP 8.3: fundamentos profesionales. Dominar arrays, colecciones tipo y transformaciones declarativas sobre datos reales. Objetivo del nivel: rendimiento y semántica de datos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "arrays-colecciones"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Arrays y colecciones — Profesional

## Qué hace este skill

Dominar arrays, colecciones tipo y transformaciones declarativas sobre datos reales. En este nivel se entrega: **rendimiento y semántica de datos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y colecciones** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Medir y optimizar operaciones sobre conjuntos grandes (memoria vs CPU)
2. Sustituir bucles O(n²) por índices o hash tables propias
3. Diseñar contratos de colecciones para librerías públicas (inmutable vs mutable)
4. Comparar colecciones con generadores para streaming de datos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | rendimiento y semántica de datos | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Medir y optimizar operaciones sobre conjuntos grandes (memoria vs CPU) · Sustituir bucles O(n²) por índices o hash tables propias · Diseñar contratos de colecciones para librerías públicas (inmutable vs mutable) · Comparar colecciones con generadores para streaming de datos | lista | sí | 3-4 pasos |
| $criterios_clave | La operación sobre 1M de registros cabe en memoria acotada · Los benchmarks comparan antes/después y se documentan | lista | sí | calidad verificable |
| $prompt_guia | Optimiza mi procesamiento de 1M de registros: índices propios, memoria acotada y benchmark documentado | texto | no | "Arrays y colecciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La operación sobre 1M de registros cabe en memoria acotada
- [ ] Los benchmarks comparan antes/después y se documentan

## Ejemplos de prompts

- "Optimiza mi procesamiento de 1M de registros: índices propios, memoria acotada y benchmark documentado"
- "Aplica Arrays y colecciones (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza La operación sobre 1M de registros cabe en memoria acotada"
- "Revisa mi php8-core y dime qué pasos de Arrays y colecciones me faltan en este nivel"