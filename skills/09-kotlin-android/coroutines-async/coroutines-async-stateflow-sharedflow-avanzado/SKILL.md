---
name: coroutines-async-stateflow-sharedflow-avanzado
description: StateFlow y SharedFlow · nivel Avanzado · Coroutines y concurrencia. Los hot flows: estado compartido y eventos one-shot. Objetivo del nivel: Eventos one-shot con SharedFlow y políticas de replay.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "stateflow-sharedflow"
  nivel: avanzado
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# StateFlow y SharedFlow — Avanzado

## Qué hace este skill

Los hot flows: estado compartido y eventos one-shot. En este nivel se entrega: **Eventos one-shot con SharedFlow y políticas de replay.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **StateFlow y SharedFlow** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un SharedFlow de eventos con replay cero
2. Consumir los eventos una sola vez
3. Elegir el buffer y la política de sharing
4. Manejar los eventos perdidos en la rotación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Eventos one-shot con SharedFlow y políticas de replay. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Crear un SharedFlow de eventos con replay cero · Consumir los eventos una sola vez · Elegir el buffer y la política de sharing · Manejar los eventos perdidos en la rotación | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos no se reemiten tras la rotación · El buffer no pierde eventos relevantes | lista | sí | calidad verificable |
| $prompt_guia | Los toasts de error de Ryutify se repiten al rotar la pantalla. Pasá los eventos one-shot a SharedFlow con replay cero y manejá la rotación. | texto | no | "StateFlow y SharedFlow" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos no se reemiten tras la rotación
- [ ] El buffer no pierde eventos relevantes

## Ejemplos de prompts

- "Los toasts de error de Ryutify se repiten al rotar la pantalla. Pasá los eventos one-shot a SharedFlow con replay cero y manejá la rotación."
- "Aplica StateFlow y SharedFlow (nivel avanzado) a mi trabajo actual con Coroutines y concurrencia: prioriza Los eventos no se reemiten tras la rotación"
- "Revisa mi coroutines-async y dime qué pasos de StateFlow y SharedFlow me faltan en este nivel"