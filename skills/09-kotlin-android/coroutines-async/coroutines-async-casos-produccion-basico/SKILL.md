---
name: coroutines-async-casos-produccion-basico
description: Casos de producción · nivel Básico · Coroutines y concurrencia. Problemas reales de concurrencia y sus soluciones en Ryutify. Objetivo del nivel: Resolver problemas simples de concurrencia del día a día.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "casos-produccion"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Casos de producción — Básico

## Qué hace este skill

Problemas reales de concurrencia y sus soluciones en Ryutify. En este nivel se entrega: **Resolver problemas simples de concurrencia del día a día.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos de producción** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Evitar la carrera en el estado de la cola
2. Serializar las actualizaciones del player
3. Evitar el doble click de reproducción
4. Manejar el estado de carga concurrente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Resolver problemas simples de concurrencia del día a día. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Evitar la carrera en el estado de la cola · Serializar las actualizaciones del player · Evitar el doble click de reproducción · Manejar el estado de carga concurrente | lista | sí | 3-4 pasos |
| $criterios_clave | La cola no se corrompe con acciones rápidas · El doble click no duplica la reproducción | lista | sí | calidad verificable |
| $prompt_guia | Los clicks rápidos en Ryutify lanzan la canción dos veces. Serializá la acción de reproducción y evitá la carrera de la cola. | texto | no | "Casos de producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cola no se corrompe con acciones rápidas
- [ ] El doble click no duplica la reproducción

## Ejemplos de prompts

- "Los clicks rápidos en Ryutify lanzan la canción dos veces. Serializá la acción de reproducción y evitá la carrera de la cola."
- "Aplica Casos de producción (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza La cola no se corrompe con acciones rápidas"
- "Revisa mi coroutines-async y dime qué pasos de Casos de producción me faltan en este nivel"