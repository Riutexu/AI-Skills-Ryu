---
name: coroutines-async-cancelacion-timeouts-avanzado
description: Cancelación y timeouts · nivel Avanzado · Coroutines y concurrencia. Cancela coroutines de forma cooperativa y evita operaciones eternas. Objetivo del nivel: Timeouts, no cancelables controlados y estados de cancelación.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "cancelacion-timeouts"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Cancelación y timeouts — Avanzado

## Qué hace este skill

Cancela coroutines de forma cooperativa y evita operaciones eternas. En este nivel se entrega: **Timeouts, no cancelables controlados y estados de cancelación.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cancelación y timeouts** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar withTimeout y withTimeoutOrNull
2. Definir las operaciones no cancelables con NonCancellable
3. Convertir la cancelación en un estado de la UI
4. Distinguir CancellationException del resto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Timeouts, no cancelables controlados y estados de cancelación. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Usar withTimeout y withTimeoutOrNull · Definir las operaciones no cancelables con NonCancellable · Convertir la cancelación en un estado de la UI · Distinguir CancellationException del resto | lista | sí | 3-4 pasos |
| $criterios_clave | Una búsqueda que cuelga falla con timeout · La cancelación no se traga como error | lista | sí | calidad verificable |
| $prompt_guia | Algunas búsquedas de Ryutify se cuelgan para siempre. Agregá timeouts con withTimeoutOrNull y tratá la cancelación como estado, no como error. | texto | no | "Cancelación y timeouts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Una búsqueda que cuelga falla con timeout
- [ ] La cancelación no se traga como error

## Ejemplos de prompts

- "Algunas búsquedas de Ryutify se cuelgan para siempre. Agregá timeouts con withTimeoutOrNull y tratá la cancelación como estado, no como error."
- "Aplica Cancelación y timeouts (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza Una búsqueda que cuelga falla con timeout"
- "Revisa mi coroutines-async y dime qué pasos de Cancelación y timeouts me faltan en este nivel"