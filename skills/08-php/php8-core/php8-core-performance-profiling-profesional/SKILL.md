---
name: php8-core-performance-profiling-profesional
description: Rendimiento y profiling · nivel Profesional · PHP 8.3: fundamentos profesionales. Medir antes de optimizar: profiling con Xdebug/Tideways, opcache, y optimizaciones de verdad. Objetivo del nivel: presupuesto de rendimiento y escalado
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "performance-profiling"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Rendimiento y profiling — Profesional

## Qué hace este skill

Medir antes de optimizar: profiling con Xdebug/Tideways, opcache, y optimizaciones de verdad. En este nivel se entrega: **presupuesto de rendimiento y escalado**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento y profiling** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir presupuestos de latencia (SLOs) por endpoint
2. Realizar pruebas de carga (k6/AB) con umbrales aceptables
3. Optimizaciones de infra: opcache tuning, PHP-FPM pools, OPCache preloading
4. Analizar costos de escalado horizontal vs optimización
5. Producir un informe ejecutivo de rendimiento

6. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
7. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | presupuesto de rendimiento y escalado | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Definir presupuestos de latencia (SLOs) por endpoint · Realizar pruebas de carga (k6/AB) con umbrales aceptables · Optimizaciones de infra: opcache tuning, PHP-FPM pools, OPCache preloading · Analizar costos de escalado horizontal vs optimización · Producir un informe ejecutivo de rendimiento | lista | sí | 3-4 pasos |
| $criterios_clave | Los SLOs de latencia se monitorizan en producción (percentiles) · El informe ejecutivo compara coste de escalar vs optimizar | lista | sí | calidad verificable |
| $prompt_guia | Define SLOs de latencia para mi API, haz pruebas de carga con k6 y produce el informe de optimización ejecutivo | texto | no | "Rendimiento y profiling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los SLOs de latencia se monitorizan en producción (percentiles)
- [ ] El informe ejecutivo compara coste de escalar vs optimizar

## Ejemplos de prompts

- "Define SLOs de latencia para mi API, haz pruebas de carga con k6 y produce el informe de optimización ejecutivo"
- "Aplica Rendimiento y profiling (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Los SLOs de latencia se monitorizan en producción (percentiles)"
- "Revisa mi php8-core y dime qué pasos de Rendimiento y profiling me faltan en este nivel"