---
name: coroutines-async-tests-coroutines-profesional
description: Tests de coroutines · nivel Profesional · Coroutines y concurrencia. Testea coroutines y flows con runTest y controles de tiempo. Objetivo del nivel: Estrategia de tests de concurrencia del proyecto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "tests-coroutines"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Tests de coroutines — Profesional

## Qué hace este skill

Testea coroutines y flows con runTest y controles de tiempo. En este nivel se entrega: **Estrategia de tests de concurrencia del proyecto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de coroutines** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Centralizar las reglas de dispatchers de test
2. Definir el patrón de tests por capa
3. Medir la cobertura de los flujos críticos
4. Testear las condiciones de carrera

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de tests de concurrencia del proyecto. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Centralizar las reglas de dispatchers de test · Definir el patrón de tests por capa · Medir la cobertura de los flujos críticos · Testear las condiciones de carrera | lista | sí | 3-4 pasos |
| $criterios_clave | Las reglas de test están centralizadas · Los flujos críticos tienen cobertura | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de tests de coroutines para Ryutify: reglas centralizadas, patrón por capa y cobertura de los flujos críticos. | texto | no | "Tests de coroutines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las reglas de test están centralizadas
- [ ] Los flujos críticos tienen cobertura

## Ejemplos de prompts

- "Quiero una estrategia de tests de coroutines para Ryutify: reglas centralizadas, patrón por capa y cobertura de los flujos críticos."
- "Aplica Tests de coroutines (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza Las reglas de test están centralizadas"
- "Revisa mi coroutines-async y dime qué pasos de Tests de coroutines me faltan en este nivel"