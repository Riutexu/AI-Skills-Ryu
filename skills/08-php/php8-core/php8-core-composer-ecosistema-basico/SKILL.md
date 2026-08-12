---
name: php8-core-composer-ecosistema-basico
description: Composer: dependencias y autoload · nivel Básico · PHP 8.3: fundamentos profesionales. Instalar, versionar y organizar dependencias con Composer: autoload PSR-4, scripts y auditoría. Objetivo del nivel: instalar paquetes y entender autoload
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "composer-ecosistema"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Composer: dependencias y autoload — Básico

## Qué hace este skill

Instalar, versionar y organizar dependencias con Composer: autoload PSR-4, scripts y auditoría. En este nivel se entrega: **instalar paquetes y entender autoload**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Composer: dependencias y autoload** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear composer.json básico con autoload PSR-4 de una carpeta
2. Instalar un paquete (p. ej. vlucas/phpdotenv) y usarlo
3. Explicar vendor/, composer.lock y por qué se commitea el lock

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | instalar paquetes y entender autoload | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Crear composer.json básico con autoload PSR-4 de una carpeta · Instalar un paquete (p. ej. vlucas/phpdotenv) y usarlo · Explicar vendor/, composer.lock y por qué se commitea el lock | lista | sí | 3-4 pasos |
| $criterios_clave | El autoload propio carga clases sin requiere manuales · composer install reproduce el entorno desde el lock | lista | sí | calidad verificable |
| $prompt_guia | Prepara composer.json con autoload PSR-4, instala phpdotenv y ponme un .env de ejemplo | texto | no | "Composer: dependencias y autoload" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El autoload propio carga clases sin requiere manuales
- [ ] composer install reproduce el entorno desde el lock

## Ejemplos de prompts

- "Prepara composer.json con autoload PSR-4, instala phpdotenv y ponme un .env de ejemplo"
- "Aplica Composer: dependencias y autoload (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El autoload propio carga clases sin requiere manuales"
- "Revisa mi php8-core y dime qué pasos de Composer: dependencias y autoload me faltan en este nivel"