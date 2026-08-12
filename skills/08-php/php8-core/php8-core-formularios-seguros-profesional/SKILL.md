---
name: php8-core-formularios-seguros-profesional
description: Formularios: validación y saneamiento · nivel Profesional · PHP 8.3: fundamentos profesionales. Formularios que no mienten: validación server-side, saneamiento de entradas y errores por campo. Objetivo del nivel: validación como contrato y defensa en profundidad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "formularios-seguros"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Formularios: validación y saneamiento — Profesional

## Qué hace este skill

Formularios que no mienten: validación server-side, saneamiento de entradas y errores por campo. En este nivel se entrega: **validación como contrato y defensa en profundidad**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Formularios: validación y saneamiento** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir validación como contrato de la API (JSON Schema + server checks)
2. Aplicar defensa en profundidad: validación cliente, servidor y BD constraint
3. Medir ataques a formularios (rate limit, honeypots, análisis de abuso)
4. Automatizar pruebas de fuzzing de formularios en CI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | validación como contrato y defensa en profundidad | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Definir validación como contrato de la API (JSON Schema + server checks) · Aplicar defensa en profundidad: validación cliente, servidor y BD constraint · Medir ataques a formularios (rate limit, honeypots, análisis de abuso) · Automatizar pruebas de fuzzing de formularios en CI | lista | sí | 3-4 pasos |
| $criterios_clave | El contrato de validación está versionado y compartido con el frontend · Fuzzing básico en CI no encuentra campos mutables no migrados | lista | sí | calidad verificable |
| $prompt_guia | Diseña la validación como contrato compartido frontend/backend con defensa en profundidad y fuzzing en CI | texto | no | "Formularios: validación y saneamiento" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El contrato de validación está versionado y compartido con el frontend
- [ ] Fuzzing básico en CI no encuentra campos mutables no migrados

## Ejemplos de prompts

- "Diseña la validación como contrato compartido frontend/backend con defensa en profundidad y fuzzing en CI"
- "Aplica Formularios: validación y saneamiento (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El contrato de validación está versionado y compartido con el frontend"
- "Revisa mi php8-core y dime qué pasos de Formularios: validación y saneamiento me faltan en este nivel"