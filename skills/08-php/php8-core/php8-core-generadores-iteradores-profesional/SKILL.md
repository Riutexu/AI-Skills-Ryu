---
name: php8-core-generadores-iteradores-profesional
description: Generadores e iteradores · nivel Profesional · PHP 8.3: fundamentos profesionales. Procesar datos grandes sin explotar la memoria con generators, iterators y yield. Objetivo del nivel: streaming a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "generadores-iteradores"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Generadores e iteradores — Profesional

## Qué hace este skill

Procesar datos grandes sin explotar la memoria con generators, iterators y yield. En este nivel se entrega: **streaming a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generadores e iteradores** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar pipelines de streaming (leer-transformar-escribir) con memoria acotada
2. Manejar backpressure y cancelación en pipelines largos
3. Combinar generadores con corrutinas de Swoole/Fiber cuando aporta
4. Medir el peak memory en producción y fijar budgets

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | streaming a escala | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Diseñar pipelines de streaming (leer-transformar-escribir) con memoria acotada · Manejar backpressure y cancelación en pipelines largos · Combinar generadores con corrutinas de Swoole/Fiber cuando aporta · Medir el peak memory en producción y fijar budgets | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline procesa 10M de filas con memoria < 256MB · Peak memory medible y documentado en el README del módulo | lista | sí | calidad verificable |
| $prompt_guia | Diseña un pipeline de streaming para exportar 10M de filas con memoria acotada y medición de peak | texto | no | "Generadores e iteradores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline procesa 10M de filas con memoria < 256MB
- [ ] Peak memory medible y documentado en el README del módulo

## Ejemplos de prompts

- "Diseña un pipeline de streaming para exportar 10M de filas con memoria acotada y medición de peak"
- "Aplica Generadores e iteradores (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El pipeline procesa 10M de filas con memoria < 256MB"
- "Revisa mi php8-core y dime qué pasos de Generadores e iteradores me faltan en este nivel"