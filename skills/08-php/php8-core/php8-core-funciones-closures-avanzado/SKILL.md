---
name: php8-core-funciones-closures-avanzado
description: Funciones, callables y closures · nivel Avanzado · PHP 8.3: fundamentos profesionales. Diseñar funciones limpias, composables y reutilizables con callables, arrow functions y currying básico. Objetivo del nivel: closures con estado y primeros ciudadanos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "funciones-closures"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Funciones, callables y closures — Avanzado

## Qué hace este skill

Diseñar funciones limpias, composables y reutilizables con callables, arrow functions y currying básico. En este nivel se entrega: **closures con estado y primeros ciudadanos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones, callables y closures** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar closures con use() para capturar estado de forma controlada
2. Implementar una mini-composición de funciones con pipe propio
3. Aplicar callables tipados (callable, Closure param) con type hints
4. Crear fábricas de funciones: configurar y devolver comportamientos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | closures con estado y primeros ciudadanos | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Usar closures con use() para capturar estado de forma controlada · Implementar una mini-composición de funciones con pipe propio · Aplicar callables tipados (callable, Closure param) con type hints · Crear fábricas de funciones: configurar y devolver comportamientos | lista | sí | 3-4 pasos |
| $criterios_clave | El paso de funciones está tipado y comprensible en el código resultante · La composición pipe se usa en al menos un pipeline real | lista | sí | calidad verificable |
| $prompt_guia | Refactoriza mi pipeline de procesamiento de pedidos a composición de funciones con closures tipados y use() | texto | no | "Funciones, callables y closures" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El paso de funciones está tipado y comprensible en el código resultante
- [ ] La composición pipe se usa en al menos un pipeline real

## Ejemplos de prompts

- "Refactoriza mi pipeline de procesamiento de pedidos a composición de funciones con closures tipados y use()"
- "Aplica Funciones, callables y closures (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El paso de funciones está tipado y comprensible en el código resultante"
- "Revisa mi php8-core y dime qué pasos de Funciones, callables y closures me faltan en este nivel"