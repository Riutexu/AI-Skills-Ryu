---
name: coroutines-async-retry-backoff-basico
description: Retry y backoff · nivel Básico · Coroutines y concurrencia. Reintenta las operaciones fallidas con backoff controlado. Objetivo del nivel: Reintentar operaciones fallidas con retry simple.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "retry-backoff"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Retry y backoff — Básico

## Qué hace este skill

Reintenta las operaciones fallidas con backoff controlado. En este nivel se entrega: **Reintentar operaciones fallidas con retry simple.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Retry y backoff** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Aplicar retry a una llamada de red
2. Limitar el número de reintentos
3. Distinguir errores recuperables
4. Mostrar el estado de reintento en la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Reintentar operaciones fallidas con retry simple. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Aplicar retry a una llamada de red · Limitar el número de reintentos · Distinguir errores recuperables · Mostrar el estado de reintento en la UI | lista | sí | 3-4 pasos |
| $criterios_clave | Los errores transitorios se reintentan · El reintento fallido muestra un estado claro | lista | sí | calidad verificable |
| $prompt_guia | Las llamadas a innertube de Ryutify fallan por red a veces. Agregá retry con límite y un estado de reintento en la UI. | texto | no | "Retry y backoff" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los errores transitorios se reintentan
- [ ] El reintento fallido muestra un estado claro

## Ejemplos de prompts

- "Las llamadas a innertube de Ryutify fallan por red a veces. Agregá retry con límite y un estado de reintento en la UI."
- "Aplica Retry y backoff (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza Los errores transitorios se reintentan"
- "Revisa mi coroutines-async y dime qué pasos de Retry y backoff me faltan en este nivel"