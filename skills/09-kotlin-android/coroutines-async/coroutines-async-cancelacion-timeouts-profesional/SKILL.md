---
name: coroutines-async-cancelacion-timeouts-profesional
description: Cancelación y timeouts · nivel Profesional · Coroutines y concurrencia. Cancela coroutines de forma cooperativa y evita operaciones eternas. Objetivo del nivel: Política de cancelación del producto: consistencia y recuperación.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "cancelacion-timeouts"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Cancelación y timeouts — Profesional

## Qué hace este skill

Cancela coroutines de forma cooperativa y evita operaciones eternas. En este nivel se entrega: **Política de cancelación del producto: consistencia y recuperación.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cancelación y timeouts** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los timeouts por operación crítica
2. Garantizar que la cancelación no deja estado inconsistente
3. Manejar la cancelación durante la reproducción
4. Testear los escenarios de cancelación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de cancelación del producto: consistencia y recuperación. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Definir los timeouts por operación crítica · Garantizar que la cancelación no deja estado inconsistente · Manejar la cancelación durante la reproducción · Testear los escenarios de cancelación | lista | sí | 3-4 pasos |
| $criterios_clave | Una cancelación nunca deja el player en estado inconsistente · Los timeouts están definidos y testeados | lista | sí | calidad verificable |
| $prompt_guia | Cuando cancelo una carga en Ryutify el player queda en un estado raro. Asegurate de que la cancelación sea consistente y definí los timeouts por operación. | texto | no | "Cancelación y timeouts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Una cancelación nunca deja el player en estado inconsistente
- [ ] Los timeouts están definidos y testeados

## Ejemplos de prompts

- "Cuando cancelo una carga en Ryutify el player queda en un estado raro. Asegurate de que la cancelación sea consistente y definí los timeouts por operación."
- "Aplica Cancelación y timeouts (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza Una cancelación nunca deja el player en estado inconsistente"
- "Revisa mi coroutines-async y dime qué pasos de Cancelación y timeouts me faltan en este nivel"