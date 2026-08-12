---
name: coroutines-async-estructuras-concurrentes-basico
description: Estructura concurrente y paralelismo · nivel Básico · Coroutines y concurrencia. async, await y paralelismo controlado dentro de la estructura. Objetivo del nivel: Ejecutar tareas en paralelo con async y await.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "estructuras-concurrentes"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Estructura concurrente y paralelismo — Básico

## Qué hace este skill

async, await y paralelismo controlado dentro de la estructura. En este nivel se entrega: **Ejecutar tareas en paralelo con async y await.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructura concurrente y paralelismo** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Lanzar dos fetchs en paralelo con async
2. Combinar los resultados con await
3. Elegir entre async y launch
4. Manejar el fallo de una de las tareas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Ejecutar tareas en paralelo con async y await. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Lanzar dos fetchs en paralelo con async · Combinar los resultados con await · Elegir entre async y launch · Manejar el fallo de una de las tareas | lista | sí | 3-4 pasos |
| $criterios_clave | Los dos fetchs corren en paralelo y se combinan · El fallo de una tarea propaga el error | lista | sí | calidad verificable |
| $prompt_guia | La pantalla de inicio de Ryutify carga dos secciones que podrían ir en paralelo. Usá async y await para cargarlas juntas. | texto | no | "Estructura concurrente y paralelismo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los dos fetchs corren en paralelo y se combinan
- [ ] El fallo de una tarea propaga el error

## Ejemplos de prompts

- "La pantalla de inicio de Ryutify carga dos secciones que podrían ir en paralelo. Usá async y await para cargarlas juntas."
- "Aplica Estructura concurrente y paralelismo (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza Los dos fetchs corren en paralelo y se combinan"
- "Revisa mi coroutines-async y dime qué pasos de Estructura concurrente y paralelismo me faltan en este nivel"