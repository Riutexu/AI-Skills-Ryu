---
name: php8-core-pdo-base-datos-profesional
description: PDO y base de datos · nivel Profesional · PHP 8.3: fundamentos profesionales. Acceso a BD seguro y profesional con PDO: prepared statements, transacciones y consultas eficientes. Objetivo del nivel: altura, pooling y vigilancia
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "pdo-base-datos"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# PDO y base de datos — Profesional

## Qué hace este skill

Acceso a BD seguro y profesional con PDO: prepared statements, transacciones y consultas eficientes. En este nivel se entrega: **altura, pooling y vigilancia**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PDO y base de datos** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar pool/limites de conexiones y tiempos de espera
2. Instrumentar queries lentas (slow query log + explicación en código)
3. Implementar retry acotado para deadlocks y transacciones fallidas
4. Proteger la BD de picos: backpressure y colas de escritura

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | altura, pooling y vigilancia | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Configurar pool/limites de conexiones y tiempos de espera · Instrumentar queries lentas (slow query log + explicación en código) · Implementar retry acotado para deadlocks y transacciones fallidas · Proteger la BD de picos: backpressure y colas de escritura | lista | sí | 3-4 pasos |
| $criterios_clave | No hay conexiones agotadas en pruebas de carga · Cada query >X ms queda registrada con contexto | lista | sí | calidad verificable |
| $prompt_guia | Escala mi capa de datos: pooling, slow query tracking y backpressure ante picos de escritura | texto | no | "PDO y base de datos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay conexiones agotadas en pruebas de carga
- [ ] Cada query >X ms queda registrada con contexto

## Ejemplos de prompts

- "Escala mi capa de datos: pooling, slow query tracking y backpressure ante picos de escritura"
- "Aplica PDO y base de datos (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza No hay conexiones agotadas en pruebas de carga"
- "Revisa mi php8-core y dime qué pasos de PDO y base de datos me faltan en este nivel"