---
name: coroutines-async-stateflow-sharedflow-profesional
description: StateFlow y SharedFlow · nivel Profesional · Coroutines y concurrencia. Los hot flows: estado compartido y eventos one-shot. Objetivo del nivel: Arquitectura de hot flows del producto: consistencia y contraerrores.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "stateflow-sharedflow"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# StateFlow y SharedFlow — Profesional

## Qué hace este skill

Los hot flows: estado compartido y eventos one-shot. En este nivel se entrega: **Arquitectura de hot flows del producto: consistencia y contraerrores.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **StateFlow y SharedFlow** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir qué es estado y qué es evento en la app
2. Centralizar la creación de SharedFlows de eventos
3. Garantizar la consistencia entre múltiples recolectores
4. Testear el comportamiento de sharing

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Arquitectura de hot flows del producto: consistencia y contraerrores. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Definir qué es estado y qué es evento en la app · Centralizar la creación de SharedFlows de eventos · Garantizar la consistencia entre múltiples recolectores · Testear el comportamiento de sharing | lista | sí | 3-4 pasos |
| $criterios_clave | La app distingue estado y evento en todas las pantallas · Los múltiples recolectores ven estados consistentes | lista | sí | calidad verificable |
| $prompt_guia | Quiero definir en Ryutify qué es estado y qué es evento en cada pantalla y centralizar los SharedFlow de eventos para que nunca se reemitan. | texto | no | "StateFlow y SharedFlow" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La app distingue estado y evento en todas las pantallas
- [ ] Los múltiples recolectores ven estados consistentes

## Ejemplos de prompts

- "Quiero definir en Ryutify qué es estado y qué es evento en cada pantalla y centralizar los SharedFlow de eventos para que nunca se reemitan."
- "Aplica StateFlow y SharedFlow (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza La app distingue estado y evento en todas las pantallas"
- "Revisa mi coroutines-async y dime qué pasos de StateFlow y SharedFlow me faltan en este nivel"