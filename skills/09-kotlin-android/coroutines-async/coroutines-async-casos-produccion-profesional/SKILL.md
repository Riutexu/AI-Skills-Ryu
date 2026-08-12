---
name: coroutines-async-casos-produccion-profesional
description: Casos de producción · nivel Profesional · Coroutines y concurrencia. Problemas reales de concurrencia y sus soluciones en Ryutify. Objetivo del nivel: Resolver incidentes de concurrencia reales con metodología.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "casos-produccion"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Casos de producción — Profesional

## Qué hace este skill

Problemas reales de concurrencia y sus soluciones en Ryutify. En este nivel se entrega: **Resolver incidentes de concurrencia reales con metodología.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos de producción** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Investigar un deadlock o starvation reportado
2. Usar el thread dump para encontrar el bloqueo
3. Aplicar la solución y medir la mejora
4. Documentar el incidente y la lección aprendida

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Resolver incidentes de concurrencia reales con metodología. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Investigar un deadlock o starvation reportado · Usar el thread dump para encontrar el bloqueo · Aplicar la solución y medir la mejora · Documentar el incidente y la lección aprendida | lista | sí | 3-4 pasos |
| $criterios_clave | El incidente se documenta con causa y solución · La medición confirma la mejora | lista | sí | calidad verificable |
| $prompt_guia | Reportaron que Ryutify se congela tras una hora de uso. Investigá el incidente con thread dumps, encontrá la condición de carrera y documentá la solución. | texto | no | "Casos de producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El incidente se documenta con causa y solución
- [ ] La medición confirma la mejora

## Ejemplos de prompts

- "Reportaron que Ryutify se congela tras una hora de uso. Investigá el incidente con thread dumps, encontrá la condición de carrera y documentá la solución."
- "Aplica Casos de producción (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza El incidente se documenta con causa y solución"
- "Revisa mi coroutines-async y dime qué pasos de Casos de producción me faltan en este nivel"