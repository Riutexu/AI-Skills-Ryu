---
name: coroutines-async-estructuras-concurrentes-avanzado
description: Estructura concurrente y paralelismo · nivel Avanzado · Coroutines y concurrencia. async, await y paralelismo controlado dentro de la estructura. Objetivo del nivel: Paralelismo con límites y manejo de resultados parciales.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "estructuras-concurrentes"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Estructura concurrente y paralelismo — Avanzado

## Qué hace este skill

async, await y paralelismo controlado dentro de la estructura. En este nivel se entrega: **Paralelismo con límites y manejo de resultados parciales.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructura concurrente y paralelismo** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar coroutineScope para el paralelismo estructurado
2. Limitar el paralelismo con semáforos
3. Manejar resultados parciales con supervisorScope
4. Agregar el estado de cada subtarea a la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Paralelismo con límites y manejo de resultados parciales. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Usar coroutineScope para el paralelismo estructurado · Limitar el paralelismo con semáforos · Manejar resultados parciales con supervisorScope · Agregar el estado de cada subtarea a la UI | lista | sí | 3-4 pasos |
| $criterios_clave | El paralelismo está limitado al presupuesto · Un fallo parcial no mata las otras tareas | lista | sí | calidad verificable |
| $prompt_guia | La carga del home de Ryutify lanza diez requests a la vez y la red se satura. Limitá el paralelismo y manejá los resultados parciales. | texto | no | "Estructura concurrente y paralelismo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El paralelismo está limitado al presupuesto
- [ ] Un fallo parcial no mata las otras tareas

## Ejemplos de prompts

- "La carga del home de Ryutify lanza diez requests a la vez y la red se satura. Limitá el paralelismo y manejá los resultados parciales."
- "Aplica Estructura concurrente y paralelismo (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza El paralelismo está limitado al presupuesto"
- "Revisa mi coroutines-async y dime qué pasos de Estructura concurrente y paralelismo me faltan en este nivel"