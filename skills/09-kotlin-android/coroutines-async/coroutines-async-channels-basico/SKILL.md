---
name: coroutines-async-channels-basico
description: Channels · nivel Básico · Coroutines y concurrencia. Comunicación entre coroutines con canales tipados. Objetivo del nivel: Crear y usar un Channel básico entre coroutines.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "channels"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Channels — Básico

## Qué hace este skill

Comunicación entre coroutines con canales tipados. En este nivel se entrega: **Crear y usar un Channel básico entre coroutines.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Channels** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un Channel de eventos
2. Enviar y recibir con send y receive
3. Cerrar el canal correctamente
4. Elegir el buffer adecuado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear y usar un Channel básico entre coroutines. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Crear un Channel de eventos · Enviar y recibir con send y receive · Cerrar el canal correctamente · Elegir el buffer adecuado | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos se reciben en orden · El cierre del canal no crashea | lista | sí | calidad verificable |
| $prompt_guia | Quiero pasar eventos de la pantalla al servicio de reproducción de Ryutify con un Channel. Implementalo con el buffer correcto. | texto | no | "Channels" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos se reciben en orden
- [ ] El cierre del canal no crashea

## Ejemplos de prompts

- "Quiero pasar eventos de la pantalla al servicio de reproducción de Ryutify con un Channel. Implementalo con el buffer correcto."
- "Aplica Channels (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza Los eventos se reciben en orden"
- "Revisa mi coroutines-async y dime qué pasos de Channels me faltan en este nivel"