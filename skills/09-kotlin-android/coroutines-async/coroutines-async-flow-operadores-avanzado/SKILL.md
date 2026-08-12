---
name: coroutines-async-flow-operadores-avanzado
description: Flow y operadores · nivel Avanzado · Coroutines y concurrencia. El toolkit de operadores de Flow para transformar streams de datos. Objetivo del nivel: Operadores de tiempo y de transformación compleja.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flow-operadores"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Flow y operadores — Avanzado

## Qué hace este skill

El toolkit de operadores de Flow para transformar streams de datos. En este nivel se entrega: **Operadores de tiempo y de transformación compleja.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flow y operadores** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Debouncear la búsqueda con debounce
2. Usar flatMapLatest para la última búsqueda
3. Manejar errores con catch y retry
4. Agregar transformación con transform y emit

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Operadores de tiempo y de transformación compleja. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Debouncear la búsqueda con debounce · Usar flatMapLatest para la última búsqueda · Manejar errores con catch y retry · Agregar transformación con transform y emit | lista | sí | 3-4 pasos |
| $criterios_clave | Solo el último request de búsqueda llega a la red · El retry con backoff funciona ante errores transitorios | lista | sí | calidad verificable |
| $prompt_guia | La búsqueda de Ryutify dispara requests viejos que pisan a los nuevos. Usá debounce y flatMapLatest y agregá retry con backoff. | texto | no | "Flow y operadores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Solo el último request de búsqueda llega a la red
- [ ] El retry con backoff funciona ante errores transitorios

## Ejemplos de prompts

- "La búsqueda de Ryutify dispara requests viejos que pisan a los nuevos. Usá debounce y flatMapLatest y agregá retry con backoff."
- "Aplica Flow y operadores (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza Solo el último request de búsqueda llega a la red"
- "Revisa mi coroutines-async y dime qué pasos de Flow y operadores me faltan en este nivel"