---
name: coroutines-async-stateflow-sharedflow-basico
description: StateFlow y SharedFlow · nivel Básico · Coroutines y concurrencia. Los hot flows: estado compartido y eventos one-shot. Objetivo del nivel: Exponer estado con StateFlow en el ViewModel.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "stateflow-sharedflow"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# StateFlow y SharedFlow — Básico

## Qué hace este skill

Los hot flows: estado compartido y eventos one-shot. En este nivel se entrega: **Exponer estado con StateFlow en el ViewModel.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **StateFlow y SharedFlow** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Exponer un StateFlow desde el ViewModel
2. Actualizar el estado con la última emisión
3. Recolectar el estado en la UI
4. Comparar con LiveData

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Exponer estado con StateFlow en el ViewModel. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Exponer un StateFlow desde el ViewModel · Actualizar el estado con la última emisión · Recolectar el estado en la UI · Comparar con LiveData | lista | sí | 3-4 pasos |
| $criterios_clave | La UI recibe el último estado al recolectar · El estado no se duplica en la UI | lista | sí | calidad verificable |
| $prompt_guia | Exponé el estado del player de Ryutify como StateFlow desde el ViewModel y recolectalo en la UI. | texto | no | "StateFlow y SharedFlow" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI recibe el último estado al recolectar
- [ ] El estado no se duplica en la UI

## Ejemplos de prompts

- "Exponé el estado del player de Ryutify como StateFlow desde el ViewModel y recolectalo en la UI."
- "Aplica StateFlow y SharedFlow (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza La UI recibe el último estado al recolectar"
- "Revisa mi coroutines-async y dime qué pasos de StateFlow y SharedFlow me faltan en este nivel"