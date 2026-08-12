---
name: php8-core-arrays-colecciones-avanzado
description: Arrays y colecciones · nivel Avanzado · PHP 8.3: fundamentos profesionales. Dominar arrays, colecciones tipo y transformaciones declarativas sobre datos reales. Objetivo del nivel: colecciones tipo y DTOs
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "arrays-colecciones"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Arrays y colecciones — Avanzado

## Qué hace este skill

Dominar arrays, colecciones tipo y transformaciones declarativas sobre datos reales. En este nivel se entrega: **colecciones tipo y DTOs**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y colecciones** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar colecciones tipadas (clases con métodos de dominio) en vez de arrays sueltos
2. Implementar operaciones encadenables (map, filter, reduce) sobre colecciones propias
3. Agrupar y agregar datos (groupBy, sum, average) sin SQL duplicado
4. Ordenar y paginar colecciones grandes con memoria acotada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | colecciones tipo y DTOs | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Modelar colecciones tipadas (clases con métodos de dominio) en vez de arrays sueltos · Implementar operaciones encadenables (map, filter, reduce) sobre colecciones propias · Agrupar y agregar datos (groupBy, sum, average) sin SQL duplicado · Ordenar y paginar colecciones grandes con memoria acotada | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún array sin tipo atraviesa la frontera del dominio · Las agregaciones se prueban de forma unitaria | lista | sí | calidad verificable |
| $prompt_guia | Modela mis listas de pedidos como colecciones tipadas encadenables con groupBy y agregaciones | texto | no | "Arrays y colecciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún array sin tipo atraviesa la frontera del dominio
- [ ] Las agregaciones se prueban de forma unitaria

## Ejemplos de prompts

- "Modela mis listas de pedidos como colecciones tipadas encadenables con groupBy y agregaciones"
- "Aplica Arrays y colecciones (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Ningún array sin tipo atraviesa la frontera del dominio"
- "Revisa mi php8-core y dime qué pasos de Arrays y colecciones me faltan en este nivel"