---
name: coroutines-async-tests-coroutines-basico
description: Tests de coroutines · nivel Básico · Coroutines y concurrencia. Testea coroutines y flows con runTest y controles de tiempo. Objetivo del nivel: Escribir tests de coroutines con runTest.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "tests-coroutines"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Tests de coroutines — Básico

## Qué hace este skill

Testea coroutines y flows con runTest y controles de tiempo. En este nivel se entrega: **Escribir tests de coroutines con runTest.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de coroutines** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar las dependencias de test de coroutines
2. Testear una suspend function con runTest
3. Testear un Flow con toList
4. Reemplazar los dispatchers en los tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir tests de coroutines con runTest. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Configurar las dependencias de test de coroutines · Testear una suspend function con runTest · Testear un Flow con toList · Reemplazar los dispatchers en los tests | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests corren sin esperas reales · Los dispatchers se reemplazan en los tests | lista | sí | calidad verificable |
| $prompt_guia | Escribí los primeros tests de las coroutines de Ryutify con runTest y toList, sin esperas reales. | texto | no | "Tests de coroutines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests corren sin esperas reales
- [ ] Los dispatchers se reemplazan en los tests

## Ejemplos de prompts

- "Escribí los primeros tests de las coroutines de Ryutify con runTest y toList, sin esperas reales."
- "Aplica Tests de coroutines (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza Los tests corren sin esperas reales"
- "Revisa mi coroutines-async y dime qué pasos de Tests de coroutines me faltan en este nivel"