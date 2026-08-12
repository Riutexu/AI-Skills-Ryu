---
name: php8-core-pdo-base-datos-basico
description: PDO y base de datos · nivel Básico · PHP 8.3: fundamentos profesionales. Acceso a BD seguro y profesional con PDO: prepared statements, transacciones y consultas eficientes. Objetivo del nivel: conectar y hacer CRUD con PDO
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "pdo-base-datos"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# PDO y base de datos — Básico

## Qué hace este skill

Acceso a BD seguro y profesional con PDO: prepared statements, transacciones y consultas eficientes. En este nivel se entrega: **conectar y hacer CRUD con PDO**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PDO y base de datos** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Conectar con PDO (DSN, options, UTF-8) y manejar el fallo
2. Ejecutar CRUD con prepared statements siempre
3. Leer resultados con fetch modes adecuados

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | conectar y hacer CRUD con PDO | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Conectar con PDO (DSN, options, UTF-8) y manejar el fallo · Ejecutar CRUD con prepared statements siempre · Leer resultados con fetch modes adecuados | lista | sí | 3-4 pasos |
| $criterios_clave | Cero concatenación de SQL en el código · Las credenciales vienen de configuración, no del código | lista | sí | calidad verificable |
| $prompt_guia | Escribe un CRUD completo con PDO y prepared statements para mi tabla de productos | texto | no | "PDO y base de datos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cero concatenación de SQL en el código
- [ ] Las credenciales vienen de configuración, no del código

## Ejemplos de prompts

- "Escribe un CRUD completo con PDO y prepared statements para mi tabla de productos"
- "Aplica PDO y base de datos (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Cero concatenación de SQL en el código"
- "Revisa mi php8-core y dime qué pasos de PDO y base de datos me faltan en este nivel"