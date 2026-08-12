---
name: coroutines-async-integracion-network-basico
description: Integración con Retrofit y red · nivel Básico · Coroutines y concurrencia. Suspend functions, adapters y manejo de respuestas HTTP. Objetivo del nivel: Declarar endpoints suspend en Retrofit.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "integracion-network"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Integración con Retrofit y red — Básico

## Qué hace este skill

Suspend functions, adapters y manejo de respuestas HTTP. En este nivel se entrega: **Declarar endpoints suspend en Retrofit.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con Retrofit y red** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar el endpoint de búsqueda como suspend
2. Mapear la respuesta con un adapter
3. Manejar los códigos de error HTTP
4. Agregar los headers del cliente innertube

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Declarar endpoints suspend en Retrofit. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Declarar el endpoint de búsqueda como suspend · Mapear la respuesta con un adapter · Manejar los códigos de error HTTP · Agregar los headers del cliente innertube | lista | sí | 3-4 pasos |
| $criterios_clave | El endpoint suspend se llama desde coroutines · Los errores HTTP se mapean a dominio | lista | sí | calidad verificable |
| $prompt_guia | Convertí el cliente de red de Ryutify a Retrofit con endpoints suspend y el mapeo de errores HTTP. | texto | no | "Integración con Retrofit y red" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El endpoint suspend se llama desde coroutines
- [ ] Los errores HTTP se mapean a dominio

## Ejemplos de prompts

- "Convertí el cliente de red de Ryutify a Retrofit con endpoints suspend y el mapeo de errores HTTP."
- "Aplica Integración con Retrofit y red (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza El endpoint suspend se llama desde coroutines"
- "Revisa mi coroutines-async y dime qué pasos de Integración con Retrofit y red me faltan en este nivel"