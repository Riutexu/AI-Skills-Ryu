---
name: coroutines-async-dispatchers-main-basico
description: Dispatchers y el hilo principal · nivel Básico · Coroutines y concurrencia. Elige el dispatcher correcto y nunca bloquees el main. Objetivo del nivel: Usar los dispatchers estándar para las tareas típicas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "dispatchers-main"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Dispatchers y el hilo principal — Básico

## Qué hace este skill

Elige el dispatcher correcto y nunca bloquees el main. En este nivel se entrega: **Usar los dispatchers estándar para las tareas típicas.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dispatchers y el hilo principal** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diferenciar Main, IO y Default
2. Mover el parseo JSON a Dispatchers.Default
3. Mover las llamadas de red a Dispatchers.IO
4. Volver al Main con withContext

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar los dispatchers estándar para las tareas típicas. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Diferenciar Main, IO y Default · Mover el parseo JSON a Dispatchers.Default · Mover las llamadas de red a Dispatchers.IO · Volver al Main con withContext | lista | sí | 3-4 pasos |
| $criterios_clave | El parseo y la red no corren en el hilo principal · La UI se actualiza desde el Main | lista | sí | calidad verificable |
| $prompt_guia | El parseo de respuestas de innertube en Ryutify corre en el hilo principal. Movelo al dispatcher correcto y verificá que la UI se actualice desde el Main. | texto | no | "Dispatchers y el hilo principal" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El parseo y la red no corren en el hilo principal
- [ ] La UI se actualiza desde el Main

## Ejemplos de prompts

- "El parseo de respuestas de innertube en Ryutify corre en el hilo principal. Movelo al dispatcher correcto y verificá que la UI se actualice desde el Main."
- "Aplica Dispatchers y el hilo principal (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza El parseo y la red no corren en el hilo principal"
- "Revisa mi coroutines-async y dime qué pasos de Dispatchers y el hilo principal me faltan en este nivel"