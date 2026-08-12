---
name: php8-core-funciones-closures-profesional
description: Funciones, callables y closures · nivel Profesional · PHP 8.3: fundamentos profesionales. Diseñar funciones limpias, composables y reutilizables con callables, arrow functions y currying básico. Objetivo del nivel: diseño funcional a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "funciones-closures"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Funciones, callables y closures — Profesional

## Qué hace este skill

Diseñar funciones limpias, composables y reutilizables con callables, arrow functions y currying básico. En este nivel se entrega: **diseño funcional a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones, callables y closures** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar un módulo funcional puro (sin estado global) dentro de la app
2. Aplicar memoización y perezosidad de forma controlada
3. Definir la frontera funcional/mutante del sistema en un ADR
4. Rendimiento: comparar coste de closures vs métodos en bucles calientes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | diseño funcional a escala | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Diseñar un módulo funcional puro (sin estado global) dentro de la app · Aplicar memoización y perezosidad de forma controlada · Definir la frontera funcional/mutante del sistema en un ADR · Rendimiento: comparar coste de closures vs métodos en bucles calientes | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo puro es testeable sin BD ni fakes · El ADR documenta la frontera y se respeta en revisiones | lista | sí | calidad verificable |
| $prompt_guia | Diseña mi módulo de cálculo de precios como código funcional puro con memoización y documenta la frontera en un ADR | texto | no | "Funciones, callables y closures" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo puro es testeable sin BD ni fakes
- [ ] El ADR documenta la frontera y se respeta en revisiones

## Ejemplos de prompts

- "Diseña mi módulo de cálculo de precios como código funcional puro con memoización y documenta la frontera en un ADR"
- "Aplica Funciones, callables y closures (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El módulo puro es testeable sin BD ni fakes"
- "Revisa mi php8-core y dime qué pasos de Funciones, callables y closures me faltan en este nivel"