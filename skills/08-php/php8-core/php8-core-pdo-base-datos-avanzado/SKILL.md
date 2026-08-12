---
name: php8-core-pdo-base-datos-avanzado
description: PDO y base de datos · nivel Avanzado · PHP 8.3: fundamentos profesionales. Acceso a BD seguro y profesional con PDO: prepared statements, transacciones y consultas eficientes. Objetivo del nivel: transacciones, joins y consultas eficientes
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "pdo-base-datos"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# PDO y base de datos — Avanzado

## Qué hace este skill

Acceso a BD seguro y profesional con PDO: prepared statements, transacciones y consultas eficientes. En este nivel se entrega: **transacciones, joins y consultas eficientes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PDO y base de datos** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar transacciones con rollback automático ante fallo
2. Optimizar joins y paginación (keyset vs offset) para tablas grandes
3. Usar consultas nombradas (named placeholders) y reutilización de statements
4. Modelar el acceso con repositorios en vez de SQL disperso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | transacciones, joins y consultas eficientes | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Implementar transacciones con rollback automático ante fallo · Optimizar joins y paginación (keyset vs offset) para tablas grandes · Usar consultas nombradas (named placeholders) y reutilización de statements · Modelar el acceso con repositorios en vez de SQL disperso | lista | sí | 3-4 pasos |
| $criterios_clave | Las operaciones multi-tabla son atómicas (rollback probado) · La paginación no degrada con 100k registros | lista | sí | calidad verificable |
| $prompt_guia | Implementa un repositorio de pedidos con transacciones, joins eficientes y paginación keyset | texto | no | "PDO y base de datos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las operaciones multi-tabla son atómicas (rollback probado)
- [ ] La paginación no degrada con 100k registros

## Ejemplos de prompts

- "Implementa un repositorio de pedidos con transacciones, joins eficientes y paginación keyset"
- "Aplica PDO y base de datos (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Las operaciones multi-tabla son atómicas (rollback probado)"
- "Revisa mi php8-core y dime qué pasos de PDO y base de datos me faltan en este nivel"