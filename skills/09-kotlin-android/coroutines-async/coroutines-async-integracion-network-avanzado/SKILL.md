---
name: coroutines-async-integracion-network-avanzado
description: Integración con Retrofit y red · nivel Avanzado · Coroutines y concurrencia. Suspend functions, adapters y manejo de respuestas HTTP. Objetivo del nivel: Interceptores, auth y conversión de respuestas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "integracion-network"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Integración con Retrofit y red — Avanzado

## Qué hace este skill

Suspend functions, adapters y manejo de respuestas HTTP. En este nivel se entrega: **Interceptores, auth y conversión de respuestas.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con Retrofit y red** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar un interceptor de headers del cliente
2. Implementar el refresh de la sesión de YouTube
3. Usar un converter custom para las respuestas
4. Loguear los requests con el interceptor

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Interceptores, auth y conversión de respuestas. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Agregar un interceptor de headers del cliente · Implementar el refresh de la sesión de YouTube · Usar un converter custom para las respuestas · Loguear los requests con el interceptor | lista | sí | 3-4 pasos |
| $criterios_clave | Los headers se agregan en un solo lugar · El refresh de sesión no rompe los requests | lista | sí | calidad verificable |
| $prompt_guia | El cliente innertube de Ryutify necesita headers por request y un refresh de sesión cuando expira. Implementalo con interceptores. | texto | no | "Integración con Retrofit y red" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los headers se agregan en un solo lugar
- [ ] El refresh de sesión no rompe los requests

## Ejemplos de prompts

- "El cliente innertube de Ryutify necesita headers por request y un refresh de sesión cuando expira. Implementalo con interceptores."
- "Aplica Integración con Retrofit y red (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza Los headers se agregan en un solo lugar"
- "Revisa mi coroutines-async y dime qué pasos de Integración con Retrofit y red me faltan en este nivel"