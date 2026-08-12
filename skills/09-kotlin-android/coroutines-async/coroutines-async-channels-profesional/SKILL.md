---
name: coroutines-async-channels-profesional
description: Channels · nivel Profesional · Coroutines y concurrencia. Comunicación entre coroutines con canales tipados. Objetivo del nivel: Diseño de comunicación entre procesos internos del producto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "channels"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Channels — Profesional

## Qué hace este skill

Comunicación entre coroutines con canales tipados. En este nivel se entrega: **Diseño de comunicación entre procesos internos del producto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Channels** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los canales entre el servicio y la UI
2. Documentar los contratos de los canales
3. Manejar la desconexión del consumidor
4. Testear los canales con coroutines

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseño de comunicación entre procesos internos del producto. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Definir los canales entre el servicio y la UI · Documentar los contratos de los canales · Manejar la desconexión del consumidor · Testear los canales con coroutines | lista | sí | 3-4 pasos |
| $criterios_clave | Los contratos de canal están documentados · La desconexión del consumidor no pierde el estado | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la comunicación por canales entre el servicio de reproducción de Ryutify y la UI, con contratos documentados y tests. | texto | no | "Channels" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los contratos de canal están documentados
- [ ] La desconexión del consumidor no pierde el estado

## Ejemplos de prompts

- "Diseñá la comunicación por canales entre el servicio de reproducción de Ryutify y la UI, con contratos documentados y tests."
- "Aplica Channels (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza Los contratos de canal están documentados"
- "Revisa mi coroutines-async y dime qué pasos de Channels me faltan en este nivel"