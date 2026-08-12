---
name: coroutines-async-estructuras-concurrentes-profesional
description: Estructura concurrente y paralelismo · nivel Profesional · Coroutines y concurrencia. async, await y paralelismo controlado dentro de la estructura. Objetivo del nivel: Modelo de concurrencia del producto: estrategias y rendimiento.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "estructuras-concurrentes"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Estructura concurrente y paralelismo — Profesional

## Qué hace este skill

async, await y paralelismo controlado dentro de la estructura. En este nivel se entrega: **Modelo de concurrencia del producto: estrategias y rendimiento.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructura concurrente y paralelismo** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar el modelo de concurrencia de cada pantalla
2. Definir el presupuesto de concurrencia del cliente
3. Medir el tiempo de carga con paralelismo
4. Elegir entre paralelismo, secuencialidad y cancelación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Modelo de concurrencia del producto: estrategias y rendimiento. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Documentar el modelo de concurrencia de cada pantalla · Definir el presupuesto de concurrencia del cliente · Medir el tiempo de carga con paralelismo · Elegir entre paralelismo, secuencialidad y cancelación | lista | sí | 3-4 pasos |
| $criterios_clave | El modelo de concurrencia está documentado · El presupuesto de concurrencia se respeta | lista | sí | calidad verificable |
| $prompt_guia | Quiero un modelo de concurrencia documentado para Ryutify: qué se paraleliza, cuántos requests a la vez y cómo se mide. | texto | no | "Estructura concurrente y paralelismo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El modelo de concurrencia está documentado
- [ ] El presupuesto de concurrencia se respeta

## Ejemplos de prompts

- "Quiero un modelo de concurrencia documentado para Ryutify: qué se paraleliza, cuántos requests a la vez y cómo se mide."
- "Aplica Estructura concurrente y paralelismo (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza El modelo de concurrencia está documentado"
- "Revisa mi coroutines-async y dime qué pasos de Estructura concurrente y paralelismo me faltan en este nivel"