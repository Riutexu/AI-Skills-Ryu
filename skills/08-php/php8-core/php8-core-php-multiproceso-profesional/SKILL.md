---
name: php8-core-php-multiproceso-profesional
description: Multiproceso y colas · nivel Profesional · PHP 8.3: fundamentos profesionales. Procesos en paralelo y colas de trabajo: pcntl, forking y consumo controlado de tareas. Objetivo del nivel: colas de trabajo y arquitectura de tareas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "php-multiproceso"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Multiproceso y colas — Profesional

## Qué hace este skill

Procesos en paralelo y colas de trabajo: pcntl, forking y consumo controlado de tareas. En este nivel se entrega: **colas de trabajo y arquitectura de tareas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Multiproceso y colas** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar un worker de colas (Redis/BDB) con prioridades y retries
2. Implementar idempotencia y deduplicación de tareas
3. Montar supervisión (supervisord) y escalado de workers
4. Diseñar el contrato de tareas: payload versionado y TTLs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | colas de trabajo y arquitectura de tareas | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Diseñar un worker de colas (Redis/BDB) con prioridades y retries · Implementar idempotencia y deduplicación de tareas · Montar supervisión (supervisord) y escalado de workers · Diseñar el contrato de tareas: payload versionado y TTLs | lista | sí | 3-4 pasos |
| $criterios_clave | Una tarea fallida se reintenta con backoff y no duplica efectos · Los workers escalan/drenan bajo demanda sin pérdida de mensajes | lista | sí | calidad verificable |
| $prompt_guia | Diseña la arquitectura de colas de mi aplicación: workers supervisados, idempotencia, retries con backoff y payloads versionados | texto | no | "Multiproceso y colas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Una tarea fallida se reintenta con backoff y no duplica efectos
- [ ] Los workers escalan/drenan bajo demanda sin pérdida de mensajes

## Ejemplos de prompts

- "Diseña la arquitectura de colas de mi aplicación: workers supervisados, idempotencia, retries con backoff y payloads versionados"
- "Aplica Multiproceso y colas (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Una tarea fallida se reintenta con backoff y no duplica efectos"
- "Revisa mi php8-core y dime qué pasos de Multiproceso y colas me faltan en este nivel"