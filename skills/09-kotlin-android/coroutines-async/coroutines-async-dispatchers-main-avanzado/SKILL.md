---
name: coroutines-async-dispatchers-main-avanzado
description: Dispatchers y el hilo principal · nivel Avanzado · Coroutines y concurrencia. Elige el dispatcher correcto y nunca bloquees el main. Objetivo del nivel: Dispatchers limitados y personalizados para el control fino.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "dispatchers-main"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Dispatchers y el hilo principal — Avanzado

## Qué hace este skill

Elige el dispatcher correcto y nunca bloquees el main. En este nivel se entrega: **Dispatchers limitados y personalizados para el control fino.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dispatchers y el hilo principal** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un dispatcher limitado para el cliente HTTP
2. Usar Executor como base de un dispatcher
3. Evitar el hambre de hilos con límites
4. Medir el uso de hilos con el profiler

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Dispatchers limitados y personalizados para el control fino. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Crear un dispatcher limitado para el cliente HTTP · Usar Executor como base de un dispatcher · Evitar el hambre de hilos con límites · Medir el uso de hilos con el profiler | lista | sí | 3-4 pasos |
| $criterios_clave | El dispatcher limitado no satura los hilos · El profiler muestra el uso de hilos esperado | lista | sí | calidad verificable |
| $prompt_guia | El cliente HTTP de Ryutify satura los hilos con requests paralelos. Limitá el dispatcher y medí el uso de hilos con el profiler. | texto | no | "Dispatchers y el hilo principal" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El dispatcher limitado no satura los hilos
- [ ] El profiler muestra el uso de hilos esperado

## Ejemplos de prompts

- "El cliente HTTP de Ryutify satura los hilos con requests paralelos. Limitá el dispatcher y medí el uso de hilos con el profiler."
- "Aplica Dispatchers y el hilo principal (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza El dispatcher limitado no satura los hilos"
- "Revisa mi coroutines-async y dime qué pasos de Dispatchers y el hilo principal me faltan en este nivel"