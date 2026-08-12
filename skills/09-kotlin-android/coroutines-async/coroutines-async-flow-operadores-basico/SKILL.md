---
name: coroutines-async-flow-operadores-basico
description: Flow y operadores · nivel Básico · Coroutines y concurrencia. El toolkit de operadores de Flow para transformar streams de datos. Objetivo del nivel: Aplicar los operadores más comunes de Flow.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flow-operadores"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Flow y operadores — Básico

## Qué hace este skill

El toolkit de operadores de Flow para transformar streams de datos. En este nivel se entrega: **Aplicar los operadores más comunes de Flow.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flow y operadores** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Transformar flujos con map y filter
2. Combinar dos flujos con combine
3. Reducir emisiones con distinctUntilChanged
4. Agregar el estado de carga a un flujo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar los operadores más comunes de Flow. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Transformar flujos con map y filter · Combinar dos flujos con combine · Reducir emisiones con distinctUntilChanged · Agregar el estado de carga a un flujo | lista | sí | 3-4 pasos |
| $criterios_clave | Las emisiones duplicadas se filtran · El estado de carga se emite antes de los datos | lista | sí | calidad verificable |
| $prompt_guia | El flujo del player de Ryutify emite valores duplicados. Aplicá distinctUntilChanged y combiná los flujos de estado y cola con combine. | texto | no | "Flow y operadores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las emisiones duplicadas se filtran
- [ ] El estado de carga se emite antes de los datos

## Ejemplos de prompts

- "El flujo del player de Ryutify emite valores duplicados. Aplicá distinctUntilChanged y combiná los flujos de estado y cola con combine."
- "Aplica Flow y operadores (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza Las emisiones duplicadas se filtran"
- "Revisa mi coroutines-async y dime qué pasos de Flow y operadores me faltan en este nivel"