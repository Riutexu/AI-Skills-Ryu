---
name: php8-core-performance-profiling-avanzado
description: Rendimiento y profiling · nivel Avanzado · PHP 8.3: fundamentos profesionales. Medir antes de optimizar: profiling con Xdebug/Tideways, opcache, y optimizaciones de verdad. Objetivo del nivel: profiling real y caché
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "performance-profiling"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Rendimiento y profiling — Avanzado

## Qué hace este skill

Medir antes de optimizar: profiling con Xdebug/Tideways, opcache, y optimizaciones de verdad. En este nivel se entrega: **profiling real y caché**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento y profiling** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Perfilar con Xdebug profiler y leer los flame graphs
2. Cachéar con Redis: resultados costosos e invalidation por eventos
3. Optimizar consultas y cargas ansiosas (eager loading)
4. Analizar p85/p95 de latencia con muestras reales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | profiling real y caché | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Perfilar con Xdebug profiler y leer los flame graphs · Cachéar con Redis: resultados costosos e invalidation por eventos · Optimizar consultas y cargas ansiosas (eager loading) · Analizar p85/p95 de latencia con muestras reales | lista | sí | 3-4 pasos |
| $criterios_clave | El flame graph identifica el top-3 de funciones costosas y se actúa sobre ellas · La invalidation de caché no produce datos obsoletos en pruebas | lista | sí | calidad verificable |
| $prompt_guia | Perfila mi aplicación con Xdebug, propón el top-3 de optimizaciones y añade caché Redis con invalidación por eventos | texto | no | "Rendimiento y profiling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El flame graph identifica el top-3 de funciones costosas y se actúa sobre ellas
- [ ] La invalidation de caché no produce datos obsoletos en pruebas

## Ejemplos de prompts

- "Perfila mi aplicación con Xdebug, propón el top-3 de optimizaciones y añade caché Redis con invalidación por eventos"
- "Aplica Rendimiento y profiling (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El flame graph identifica el top-3 de funciones costosas y se actúa sobre ellas"
- "Revisa mi php8-core y dime qué pasos de Rendimiento y profiling me faltan en este nivel"