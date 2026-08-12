---
name: coroutines-async-casos-produccion-avanzado
description: Casos de producción · nivel Avanzado · Coroutines y concurrencia. Problemas reales de concurrencia y sus soluciones en Ryutify. Objetivo del nivel: Resolver problemas de concurrencia en escenarios complejos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "casos-produccion"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Casos de producción — Avanzado

## Qué hace este skill

Problemas reales de concurrencia y sus soluciones en Ryutify. En este nivel se entrega: **Resolver problemas de concurrencia en escenarios complejos.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos de producción** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar la interacción entre búsqueda y reproducción
2. Resolver la carrera del precache con la reproducción
3. Manejar la reconexión de la UI al servicio
4. Evitar la doble suscripción a los flujos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Resolver problemas de concurrencia en escenarios complejos. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Manejar la interacción entre búsqueda y reproducción · Resolver la carrera del precache con la reproducción · Manejar la reconexión de la UI al servicio · Evitar la doble suscripción a los flujos | lista | sí | 3-4 pasos |
| $criterios_clave | El precache no interfiere con la reproducción · La reconexión de la UI no duplica el estado | lista | sí | calidad verificable |
| $prompt_guia | El precache de Ryutify pisa a la canción que está sonando. Resolvé la carrera entre precache y reproducción y la reconexión de la UI. | texto | no | "Casos de producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El precache no interfiere con la reproducción
- [ ] La reconexión de la UI no duplica el estado

## Ejemplos de prompts

- "El precache de Ryutify pisa a la canción que está sonando. Resolvé la carrera entre precache y reproducción y la reconexión de la UI."
- "Aplica Casos de producción (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza El precache no interfiere con la reproducción"
- "Revisa mi coroutines-async y dime qué pasos de Casos de producción me faltan en este nivel"