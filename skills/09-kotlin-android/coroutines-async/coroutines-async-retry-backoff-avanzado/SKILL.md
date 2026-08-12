---
name: coroutines-async-retry-backoff-avanzado
description: Retry y backoff · nivel Avanzado · Coroutines y concurrencia. Reintenta las operaciones fallidas con backoff controlado. Objetivo del nivel: Backoff exponencial con jitter y reintentos inteligentes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "retry-backoff"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Retry y backoff — Avanzado

## Qué hace este skill

Reintenta las operaciones fallidas con backoff controlado. En este nivel se entrega: **Backoff exponencial con jitter y reintentos inteligentes.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Retry y backoff** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar el backoff exponencial con jitter
2. Reintentar solo errores recuperables
3. Usar el jitter para no sincronizar los reintentos
4. Exponer el número de reintento en los logs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Backoff exponencial con jitter y reintentos inteligentes. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Implementar el backoff exponencial con jitter · Reintentar solo errores recuperables · Usar el jitter para no sincronizar los reintentos · Exponer el número de reintento en los logs | lista | sí | 3-4 pasos |
| $criterios_clave | El backoff crece exponencialmente con jitter · Los errores no recuperables no se reintentan | lista | sí | calidad verificable |
| $prompt_guia | Los reintentos de Ryutify se sincronizan y vuelven a fallar juntos. Implementá backoff exponencial con jitter y reintentá solo lo recuperable. | texto | no | "Retry y backoff" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El backoff crece exponencialmente con jitter
- [ ] Los errores no recuperables no se reintentan

## Ejemplos de prompts

- "Los reintentos de Ryutify se sincronizan y vuelven a fallar juntos. Implementá backoff exponencial con jitter y reintentá solo lo recuperable."
- "Aplica Retry y backoff (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza El backoff crece exponencialmente con jitter"
- "Revisa mi coroutines-async y dime qué pasos de Retry y backoff me faltan en este nivel"