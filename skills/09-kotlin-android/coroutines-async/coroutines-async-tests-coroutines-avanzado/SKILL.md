---
name: coroutines-async-tests-coroutines-avanzado
description: Tests de coroutines · nivel Avanzado · Coroutines y concurrencia. Testea coroutines y flows con runTest y controles de tiempo. Objetivo del nivel: Control de tiempo virtual y testing de operadores.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "tests-coroutines"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Tests de coroutines — Avanzado

## Qué hace este skill

Testea coroutines y flows con runTest y controles de tiempo. En este nivel se entrega: **Control de tiempo virtual y testing de operadores.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de coroutines** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Avanzar el tiempo virtual con advanceTimeBy
2. Testear el debounce sin esperar real
3. Testear el retry con backoff
4. Testear la cancelación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Control de tiempo virtual y testing de operadores. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Avanzar el tiempo virtual con advanceTimeBy · Testear el debounce sin esperar real · Testear el retry con backoff · Testear la cancelación | lista | sí | 3-4 pasos |
| $criterios_clave | El debounce se testea con tiempo virtual · La cancelación se verifica en los tests | lista | sí | calidad verificable |
| $prompt_guia | Testeá el debounce de la búsqueda y el retry con backoff de Ryutify usando el tiempo virtual de runTest. | texto | no | "Tests de coroutines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El debounce se testea con tiempo virtual
- [ ] La cancelación se verifica en los tests

## Ejemplos de prompts

- "Testeá el debounce de la búsqueda y el retry con backoff de Ryutify usando el tiempo virtual de runTest."
- "Aplica Tests de coroutines (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza El debounce se testea con tiempo virtual"
- "Revisa mi coroutines-async y dime qué pasos de Tests de coroutines me faltan en este nivel"