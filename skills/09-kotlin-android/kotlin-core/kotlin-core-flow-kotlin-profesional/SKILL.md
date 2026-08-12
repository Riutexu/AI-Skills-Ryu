---
name: kotlin-core-flow-kotlin-profesional
description: Flow y streams reactivos · nivel Profesional · Kotlin moderno: fundamentos profesionales. Modela flujos de datos asincrónicos: búsquedas, posición de reproducción y estados. Objetivo del nivel: Diseñar el flujo de datos de la app con hot flows y backpressure controlada.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flow-kotlin"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Flow y streams reactivos — Profesional

## Qué hace este skill

Modela flujos de datos asincrónicos: búsquedas, posición de reproducción y estados. En este nivel se entrega: **Diseñar el flujo de datos de la app con hot flows y backpressure controlada.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flow y streams reactivos** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Unificar el estado de reproducción como StateFlow y los eventos como SharedFlow
2. Definir la política de replay y buffer para eventos de UI
3. Mapear el dominio a un UI state inmutable con stateIn y sharingStarted
4. Perfilar el consumo de memoria de los flujos de larga duración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el flujo de datos de la app con hot flows y backpressure controlada. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Unificar el estado de reproducción como StateFlow y los eventos como SharedFlow · Definir la política de replay y buffer para eventos de UI · Mapear el dominio a un UI state inmutable con stateIn y sharingStarted · Perfilar el consumo de memoria de los flujos de larga duración | lista | sí | 3-4 pasos |
| $criterios_clave | El estado de reproducción es consistente entre pantalla y notificación usando el mismo StateFlow · Los eventos one-shot como el toast de error no se reemiten tras la rotación | lista | sí | calidad verificable |
| $prompt_guia | Estoy armando el flujo de estado del reproductor de Ryutify compartido entre pantalla y notificación. Diseñá la jerarquía de StateFlow y SharedFlow con stateIn, replay y política de sharing. | texto | no | "Flow y streams reactivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado de reproducción es consistente entre pantalla y notificación usando el mismo StateFlow
- [ ] Los eventos one-shot como el toast de error no se reemiten tras la rotación

## Ejemplos de prompts

- "Estoy armando el flujo de estado del reproductor de Ryutify compartido entre pantalla y notificación. Diseñá la jerarquía de StateFlow y SharedFlow con stateIn, replay y política de sharing."
- "Aplica Flow y streams reactivos (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El estado de reproducción es consistente entre pantalla y notificación usando el mismo StateFlow"
- "Revisa mi kotlin-core y dime qué pasos de Flow y streams reactivos me faltan en este nivel"