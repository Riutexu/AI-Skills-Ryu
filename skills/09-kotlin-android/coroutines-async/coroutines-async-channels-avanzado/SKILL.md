---
name: coroutines-async-channels-avanzado
description: Channels · nivel Avanzado · Coroutines y concurrencia. Comunicación entre coroutines con canales tipados. Objetivo del nivel: Estrategias de backpressure y tipos de canal.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "channels"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Channels — Avanzado

## Qué hace este skill

Comunicación entre coroutines con canales tipados. En este nivel se entrega: **Estrategias de backpressure y tipos de canal.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Channels** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Elegir entre RENDEZVOUS, BUFFERED y CONFLATED
2. Manejar la contrapresión del consumidor
3. Usar la extensión produce y consume
4. Convertir un canal en Flow con consumeAsFlow

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Estrategias de backpressure y tipos de canal. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Elegir entre RENDEZVOUS, BUFFERED y CONFLATED · Manejar la contrapresión del consumidor · Usar la extensión produce y consume · Convertir un canal en Flow con consumeAsFlow | lista | sí | 3-4 pasos |
| $criterios_clave | El consumidor lento no acumula eventos infinitos · El canal se convierte a Flow sin pérdida | lista | sí | calidad verificable |
| $prompt_guia | El canal de eventos de Ryutify acumula mensajes cuando el consumidor es lento. Elegí la estrategia de backpressure correcta y convertilo a Flow. | texto | no | "Channels" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El consumidor lento no acumula eventos infinitos
- [ ] El canal se convierte a Flow sin pérdida

## Ejemplos de prompts

- "El canal de eventos de Ryutify acumula mensajes cuando el consumidor es lento. Elegí la estrategia de backpressure correcta y convertilo a Flow."
- "Aplica Channels (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza El consumidor lento no acumula eventos infinitos"
- "Revisa mi coroutines-async y dime qué pasos de Channels me faltan en este nivel"