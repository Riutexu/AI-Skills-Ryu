---
name: coroutines-async-fanout-fanin-avanzado
description: Fan-out y fan-in · nivel Avanzado · Coroutines y concurrencia. Distribuye trabajo entre coroutines y combina resultados. Objetivo del nivel: Fan-out con limitación y manejo de fallos parciales.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "fanout-fanin"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Fan-out y fan-in — Avanzado

## Qué hace este skill

Distribuye trabajo entre coroutines y combina resultados. En este nivel se entrega: **Fan-out con limitación y manejo de fallos parciales.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fan-out y fan-in** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar un semáforo para limitar el fan-out
2. Manejar los fallos individuales con supervisorScope
3. Agregar el progreso del fan-out
4. Cancelar el fan-out al salir de la pantalla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Fan-out con limitación y manejo de fallos parciales. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Usar un semáforo para limitar el fan-out · Manejar los fallos individuales con supervisorScope · Agregar el progreso del fan-out · Cancelar el fan-out al salir de la pantalla | lista | sí | 3-4 pasos |
| $criterios_clave | El fan-out respeta el límite de concurrencia · Un fallo individual no cancela el resto | lista | sí | calidad verificable |
| $prompt_guia | El fan-out de Ryutify lanza 50 coroutines a la vez. Limitá la concurrencia con un semáforo y manejá los fallos parciales. | texto | no | "Fan-out y fan-in" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El fan-out respeta el límite de concurrencia
- [ ] Un fallo individual no cancela el resto

## Ejemplos de prompts

- "El fan-out de Ryutify lanza 50 coroutines a la vez. Limitá la concurrencia con un semáforo y manejá los fallos parciales."
- "Aplica Fan-out y fan-in (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza El fan-out respeta el límite de concurrencia"
- "Revisa mi coroutines-async y dime qué pasos de Fan-out y fan-in me faltan en este nivel"