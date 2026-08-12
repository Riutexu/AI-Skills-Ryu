---
name: coroutines-async-retry-backoff-profesional
description: Retry y backoff · nivel Profesional · Coroutines y concurrencia. Reintenta las operaciones fallidas con backoff controlado. Objetivo del nivel: Política de reintentos del producto: presupuesto y monitoreo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "retry-backoff"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Retry y backoff — Profesional

## Qué hace este skill

Reintenta las operaciones fallidas con backoff controlado. En este nivel se entrega: **Política de reintentos del producto: presupuesto y monitoreo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Retry y backoff** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el presupuesto de reintentos por operación
2. Monitorear la tasa de reintentos en la telemetría
3. Ajustar la política con los datos
4. Documentar la matriz de reintentos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de reintentos del producto: presupuesto y monitoreo. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Definir el presupuesto de reintentos por operación · Monitorear la tasa de reintentos en la telemetría · Ajustar la política con los datos · Documentar la matriz de reintentos | lista | sí | 3-4 pasos |
| $criterios_clave | La matriz de reintentos está documentada · La telemetría muestra la tasa de reintentos | lista | sí | calidad verificable |
| $prompt_guia | Quiero una política de reintentos para Ryutify con presupuesto por operación, monitoreo en la telemetría y ajustes con datos. | texto | no | "Retry y backoff" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La matriz de reintentos está documentada
- [ ] La telemetría muestra la tasa de reintentos

## Ejemplos de prompts

- "Quiero una política de reintentos para Ryutify con presupuesto por operación, monitoreo en la telemetría y ajustes con datos."
- "Aplica Retry y backoff (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza La matriz de reintentos está documentada"
- "Revisa mi coroutines-async y dime qué pasos de Retry y backoff me faltan en este nivel"