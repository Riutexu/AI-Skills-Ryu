---
name: coroutines-async-integracion-network-profesional
description: Integración con Retrofit y red · nivel Profesional · Coroutines y concurrencia. Suspend functions, adapters y manejo de respuestas HTTP. Objetivo del nivel: Capa de red del producto: contrato, resiliencia y métricas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "integracion-network"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Integración con Retrofit y red — Profesional

## Qué hace este skill

Suspend functions, adapters y manejo de respuestas HTTP. En este nivel se entrega: **Capa de red del producto: contrato, resiliencia y métricas.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con Retrofit y red** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato de la capa de red
2. Agregar métricas de latencia por endpoint
3. Aislar la red del resto de la app
4. Testear la capa con un servidor simulado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de red del producto: contrato, resiliencia y métricas. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Definir el contrato de la capa de red · Agregar métricas de latencia por endpoint · Aislar la red del resto de la app · Testear la capa con un servidor simulado | lista | sí | 3-4 pasos |
| $criterios_clave | La capa de red está aislada y documentada · Las métricas de latencia por endpoint están en la telemetría | lista | sí | calidad verificable |
| $prompt_guia | Quiero una capa de red aislada para Ryutify con contrato documentado, métricas de latencia por endpoint y tests con servidor simulado. | texto | no | "Integración con Retrofit y red" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa de red está aislada y documentada
- [ ] Las métricas de latencia por endpoint están en la telemetría

## Ejemplos de prompts

- "Quiero una capa de red aislada para Ryutify con contrato documentado, métricas de latencia por endpoint y tests con servidor simulado."
- "Aplica Integración con Retrofit y red (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza La capa de red está aislada y documentada"
- "Revisa mi coroutines-async y dime qué pasos de Integración con Retrofit y red me faltan en este nivel"