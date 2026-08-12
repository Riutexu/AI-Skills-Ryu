---
name: coroutines-async-contextos-coroutines-basico
description: Contextos de coroutines · nivel Básico · Coroutines y concurrencia. El contexto, el job y la jerarquía que gobiernan cada coroutine. Objetivo del nivel: Entender el CoroutineContext y sus elementos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "contextos-coroutines"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Contextos de coroutines — Básico

## Qué hace este skill

El contexto, el job y la jerarquía que gobiernan cada coroutine. En este nivel se entrega: **Entender el CoroutineContext y sus elementos.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contextos de coroutines** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar Job, Dispatcher y CoroutineName en un contexto
2. Crear un contexto combinando elementos
3. Propagar el contexto a las coroutines hijas
4. Loguear el nombre de la coroutine en el debug

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender el CoroutineContext y sus elementos. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Identificar Job, Dispatcher y CoroutineName en un contexto · Crear un contexto combinando elementos · Propagar el contexto a las coroutines hijas · Loguear el nombre de la coroutine en el debug | lista | sí | 3-4 pasos |
| $criterios_clave | Las coroutines hijas heredan el contexto del padre · El nombre de coroutine aparece en los logs | lista | sí | calidad verificable |
| $prompt_guia | Los logs de Ryutify no dicen de qué coroutine viene cada línea. Agregá CoroutineName en los scopes y explicá cómo se propaga el contexto. | texto | no | "Contextos de coroutines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las coroutines hijas heredan el contexto del padre
- [ ] El nombre de coroutine aparece en los logs

## Ejemplos de prompts

- "Los logs de Ryutify no dicen de qué coroutine viene cada línea. Agregá CoroutineName en los scopes y explicá cómo se propaga el contexto."
- "Aplica Contextos de coroutines (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza Las coroutines hijas heredan el contexto del padre"
- "Revisa mi coroutines-async y dime qué pasos de Contextos de coroutines me faltan en este nivel"