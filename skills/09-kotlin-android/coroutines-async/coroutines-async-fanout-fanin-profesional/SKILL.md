---
name: coroutines-async-fanout-fanin-profesional
description: Fan-out y fan-in · nivel Profesional · Coroutines y concurrencia. Distribuye trabajo entre coroutines y combina resultados. Objetivo del nivel: Patrones de distribución del producto: prioridades y métricas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "fanout-fanin"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Fan-out y fan-in — Profesional

## Qué hace este skill

Distribuye trabajo entre coroutines y combina resultados. En este nivel se entrega: **Patrones de distribución del producto: prioridades y métricas.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fan-out y fan-in** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de fan-out por operación
2. Priorizar los trabajos críticos en la distribución
3. Medir el tiempo total de los fan-outs
4. Documentar los patrones de distribución

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Patrones de distribución del producto: prioridades y métricas. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Definir la política de fan-out por operación · Priorizar los trabajos críticos en la distribución · Medir el tiempo total de los fan-outs · Documentar los patrones de distribución | lista | sí | 3-4 pasos |
| $criterios_clave | Los trabajos críticos tienen prioridad en la distribución · Los fan-outs están medidos | lista | sí | calidad verificable |
| $prompt_guia | Quiero una política de fan-out para Ryutify: límites por operación, prioridad al precache de la siguiente canción y métricas de tiempo. | texto | no | "Fan-out y fan-in" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los trabajos críticos tienen prioridad en la distribución
- [ ] Los fan-outs están medidos

## Ejemplos de prompts

- "Quiero una política de fan-out para Ryutify: límites por operación, prioridad al precache de la siguiente canción y métricas de tiempo."
- "Aplica Fan-out y fan-in (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza Los trabajos críticos tienen prioridad en la distribución"
- "Revisa mi coroutines-async y dime qué pasos de Fan-out y fan-in me faltan en este nivel"