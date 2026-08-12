---
name: coroutines-async-flow-operadores-profesional
description: Flow y operadores · nivel Profesional · Coroutines y concurrencia. El toolkit de operadores de Flow para transformar streams de datos. Objetivo del nivel: Diseño de pipelines de Flow del producto: operadores propios y métricas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flow-operadores"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Flow y operadores — Profesional

## Qué hace este skill

El toolkit de operadores de Flow para transformar streams de datos. En este nivel se entrega: **Diseño de pipelines de Flow del producto: operadores propios y métricas.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flow y operadores** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear operadores propios como retryWithBackoff
2. Instrumentar los flujos con métricas
3. Documentar los pipelines por módulo
4. Testear los pipelines con flujos simulados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseño de pipelines de Flow del producto: operadores propios y métricas. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Crear operadores propios como retryWithBackoff · Instrumentar los flujos con métricas · Documentar los pipelines por módulo · Testear los pipelines con flujos simulados | lista | sí | 3-4 pasos |
| $criterios_clave | Los operadores propios tienen tests · Los pipelines críticos están instrumentados | lista | sí | calidad verificable |
| $prompt_guia | Quiero un operador propio retryWithBackoff para los flujos de red de Ryutify, con tests y métricas del pipeline de reproducción. | texto | no | "Flow y operadores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los operadores propios tienen tests
- [ ] Los pipelines críticos están instrumentados

## Ejemplos de prompts

- "Quiero un operador propio retryWithBackoff para los flujos de red de Ryutify, con tests y métricas del pipeline de reproducción."
- "Aplica Flow y operadores (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza Los operadores propios tienen tests"
- "Revisa mi coroutines-async y dime qué pasos de Flow y operadores me faltan en este nivel"