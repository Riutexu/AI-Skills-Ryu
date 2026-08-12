---
name: coroutines-async-contextos-coroutines-profesional
description: Contextos de coroutines · nivel Profesional · Coroutines y concurrencia. El contexto, el job y la jerarquía que gobiernan cada coroutine. Objetivo del nivel: Definir los contextos canónicos del proyecto y su documentación.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "contextos-coroutines"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Contextos de coroutines — Profesional

## Qué hace este skill

El contexto, el job y la jerarquía que gobiernan cada coroutine. En este nivel se entrega: **Definir los contextos canónicos del proyecto y su documentación.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contextos de coroutines** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Centralizar los contextos con nombre en un archivo
2. Documentar cuándo se usa cada dispatcher
3. Auditar los contextos hardcodeados
4. Definir la política de contexto para el CI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir los contextos canónicos del proyecto y su documentación. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Centralizar los contextos con nombre en un archivo · Documentar cuándo se usa cada dispatcher · Auditar los contextos hardcodeados · Definir la política de contexto para el CI | lista | sí | 3-4 pasos |
| $criterios_clave | Todos los scopes usan los contextos centralizados · La documentación de contextos está completa | lista | sí | calidad verificable |
| $prompt_guia | Quiero centralizar los contextos de coroutines de Ryutify con nombre, documentar cada dispatcher y auditar los hardcodeados. | texto | no | "Contextos de coroutines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todos los scopes usan los contextos centralizados
- [ ] La documentación de contextos está completa

## Ejemplos de prompts

- "Quiero centralizar los contextos de coroutines de Ryutify con nombre, documentar cada dispatcher y auditar los hardcodeados."
- "Aplica Contextos de coroutines (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza Todos los scopes usan los contextos centralizados"
- "Revisa mi coroutines-async y dime qué pasos de Contextos de coroutines me faltan en este nivel"