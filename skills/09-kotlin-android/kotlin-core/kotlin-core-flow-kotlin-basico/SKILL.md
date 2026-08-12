---
name: kotlin-core-flow-kotlin-basico
description: Flow y streams reactivos · nivel Básico · Kotlin moderno: fundamentos profesionales. Modela flujos de datos asincrónicos: búsquedas, posición de reproducción y estados. Objetivo del nivel: Crear y consumir Flows básicos con flow, collect y operadores simples.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flow-kotlin"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Flow y streams reactivos — Básico

## Qué hace este skill

Modela flujos de datos asincrónicos: búsquedas, posición de reproducción y estados. En este nivel se entrega: **Crear y consumir Flows básicos con flow, collect y operadores simples.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flow y streams reactivos** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Emitir resultados de búsqueda con un flow builder
2. Transformar el flujo de posición del reproductor con map
3. Consumir el flujo con collect en el ViewModel
4. Convertir una llamada suspend en Flow con flowOf o callbackFlow

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear y consumir Flows básicos con flow, collect y operadores simples. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Emitir resultados de búsqueda con un flow builder · Transformar el flujo de posición del reproductor con map · Consumir el flujo con collect en el ViewModel · Convertir una llamada suspend en Flow con flowOf o callbackFlow | lista | sí | 3-4 pasos |
| $criterios_clave | El flujo de posición emite valores cada segundo sin tocar el hilo de UI · El collect se cancela al destruir el ViewModel | lista | sí | calidad verificable |
| $prompt_guia | El reproductor de Ryutify me expone la posición en ms por callback. Convertilo en un Flow que emita cada segundo y mostralo en el ViewModel con el progreso de la barra. | texto | no | "Flow y streams reactivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El flujo de posición emite valores cada segundo sin tocar el hilo de UI
- [ ] El collect se cancela al destruir el ViewModel

## Ejemplos de prompts

- "El reproductor de Ryutify me expone la posición en ms por callback. Convertilo en un Flow que emita cada segundo y mostralo en el ViewModel con el progreso de la barra."
- "Aplica Flow y streams reactivos (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El flujo de posición emite valores cada segundo sin tocar el hilo de UI"
- "Revisa mi kotlin-core y dime qué pasos de Flow y streams reactivos me faltan en este nivel"