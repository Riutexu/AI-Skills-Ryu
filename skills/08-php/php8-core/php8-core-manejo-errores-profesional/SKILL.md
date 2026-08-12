---
name: php8-core-manejo-errores-profesional
description: Manejo de errores y excepciones · nivel Profesional · PHP 8.3: fundamentos profesionales. Errores que se comportan: excepciones tipadas, logging estructurado y respuestas coherentes. Objetivo del nivel: estrategia de fallo a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "manejo-errores"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Manejo de errores y excepciones — Profesional

## Qué hace este skill

Errores que se comportan: excepciones tipadas, logging estructurado y respuestas coherentes. En este nivel se entrega: **estrategia de fallo a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores y excepciones** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la taxonomía completa de errores del servicio (dominio, integración, infra)
2. Implementar circuit breaker y retries con backoff para integraciones externas
3. Correlacionar errores en logs distribuidos (trace id) y alertar por severidad
4. Realizar un chaos test controlado de la estrategia de fallo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | estrategia de fallo a escala | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Diseñar la taxonomía completa de errores del servicio (dominio, integración, infra) · Implementar circuit breaker y retries con backoff para integraciones externas · Correlacionar errores en logs distribuidos (trace id) y alertar por severidad · Realizar un chaos test controlado de la estrategia de fallo | lista | sí | 3-4 pasos |
| $criterios_clave | Una caída de un proveedor externo no tumba el servicio (fallback o cola) · Cada request tiene trace id rastreable en Logs | lista | sí | calidad verificable |
| $prompt_guia | Diseña la estrategia de fallo de mi API: taxonomía de errores, circuit breaker, trace ids y alertas por severidad | texto | no | "Manejo de errores y excepciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Una caída de un proveedor externo no tumba el servicio (fallback o cola)
- [ ] Cada request tiene trace id rastreable en Logs

## Ejemplos de prompts

- "Diseña la estrategia de fallo de mi API: taxonomía de errores, circuit breaker, trace ids y alertas por severidad"
- "Aplica Manejo de errores y excepciones (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Una caída de un proveedor externo no tumba el servicio (fallback o cola)"
- "Revisa mi php8-core y dime qué pasos de Manejo de errores y excepciones me faltan en este nivel"