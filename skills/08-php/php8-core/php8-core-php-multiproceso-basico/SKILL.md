---
name: php8-core-php-multiproceso-basico
description: Multiproceso y colas · nivel Básico · PHP 8.3: fundamentos profesionales. Procesos en paralelo y colas de trabajo: pcntl, forking y consumo controlado de tareas. Objetivo del nivel: entender procesos y ejecutar tareas en segundo plano
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "php-multiproceso"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Multiproceso y colas — Básico

## Qué hace este skill

Procesos en paralelo y colas de trabajo: pcntl, forking y consumo controlado de tareas. En este nivel se entrega: **entender procesos y ejecutar tareas en segundo plano**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Multiproceso y colas** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ejecutar scripts CLI en segundo plano desde la web
2. Explicar procesos, pids y control de finalización
3. Crear un cron simple de mantenimiento

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | entender procesos y ejecutar tareas en segundo plano | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Ejecutar scripts CLI en segundo plano desde la web · Explicar procesos, pids y control de finalización · Crear un cron simple de mantenimiento | lista | sí | 3-4 pasos |
| $criterios_clave | El script en segundo plano corre y termina aislado de la request · Los logs del proceso son accesibles | lista | sí | calidad verificable |
| $prompt_guia | Ejecuta mi script de export en segundo plano desde la web y registra sus logs | texto | no | "Multiproceso y colas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El script en segundo plano corre y termina aislado de la request
- [ ] Los logs del proceso son accesibles

## Ejemplos de prompts

- "Ejecuta mi script de export en segundo plano desde la web y registra sus logs"
- "Aplica Multiproceso y colas (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El script en segundo plano corre y termina aislado de la request"
- "Revisa mi php8-core y dime qué pasos de Multiproceso y colas me faltan en este nivel"