---
name: php8-core-performance-profiling-basico
description: Rendimiento y profiling · nivel Básico · PHP 8.3: fundamentos profesionales. Medir antes de optimizar: profiling con Xdebug/Tideways, opcache, y optimizaciones de verdad. Objetivo del nivel: medir y detectar cuellos de botella
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "performance-profiling"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Rendimiento y profiling — Básico

## Qué hace este skill

Medir antes de optimizar: profiling con Xdebug/Tideways, opcache, y optimizaciones de verdad. En este nivel se entrega: **medir y detectar cuellos de botella**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento y profiling** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Medir tiempos con microtime y logs en rutas clave
2. Configurar opcache y comprobar su efecto
3. Evitar anti-patrones: N+1 consultas y bucles con consultas dentro

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | medir y detectar cuellos de botella | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Medir tiempos con microtime y logs en rutas clave · Configurar opcache y comprobar su efecto · Evitar anti-patrones: N+1 consultas y bucles con consultas dentro | lista | sí | 3-4 pasos |
| $criterios_clave | Las rutas clave muestran tiempos medibles antes/después · Ningún bucle ejecuta una consulta por iteración | lista | sí | calidad verificable |
| $prompt_guia | Caza los cuellos de botella de mi app: mide tiempos, activa opcache y elimina el N+1 | texto | no | "Rendimiento y profiling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las rutas clave muestran tiempos medibles antes/después
- [ ] Ningún bucle ejecuta una consulta por iteración

## Ejemplos de prompts

- "Caza los cuellos de botella de mi app: mide tiempos, activa opcache y elimina el N+1"
- "Aplica Rendimiento y profiling (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Las rutas clave muestran tiempos medibles antes/después"
- "Revisa mi php8-core y dime qué pasos de Rendimiento y profiling me faltan en este nivel"