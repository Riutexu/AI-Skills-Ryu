---
name: coroutines-async-fanout-fanin-basico
description: Fan-out y fan-in · nivel Básico · Coroutines y concurrencia. Distribuye trabajo entre coroutines y combina resultados. Objetivo del nivel: Distribuir trabajo entre varias coroutines.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "fanout-fanin"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Fan-out y fan-in — Básico

## Qué hace este skill

Distribuye trabajo entre coroutines y combina resultados. En este nivel se entrega: **Distribuir trabajo entre varias coroutines.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fan-out y fan-in** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Distribuir el precache de portadas entre coroutines
2. Combinar los resultados con awaitAll
3. Usar mapNotNull para filtrar los fallos
4. Limitar el número de coroutines

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Distribuir trabajo entre varias coroutines. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Distribuir el precache de portadas entre coroutines · Combinar los resultados con awaitAll · Usar mapNotNull para filtrar los fallos · Limitar el número de coroutines | lista | sí | 3-4 pasos |
| $criterios_clave | El trabajo se distribuye en paralelo · Los resultados se combinan sin errores | lista | sí | calidad verificable |
| $prompt_guia | El precache de las portadas de la biblioteca de Ryutify es secuencial. Distribuilo entre coroutines y combiná los resultados. | texto | no | "Fan-out y fan-in" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El trabajo se distribuye en paralelo
- [ ] Los resultados se combinan sin errores

## Ejemplos de prompts

- "El precache de las portadas de la biblioteca de Ryutify es secuencial. Distribuilo entre coroutines y combiná los resultados."
- "Aplica Fan-out y fan-in (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza El trabajo se distribuye en paralelo"
- "Revisa mi coroutines-async y dime qué pasos de Fan-out y fan-in me faltan en este nivel"