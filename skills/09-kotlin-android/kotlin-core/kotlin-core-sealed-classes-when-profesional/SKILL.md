---
name: kotlin-core-sealed-classes-when-profesional
description: Sealed classes y when · nivel Profesional · Kotlin moderno: fundamentos profesionales. Modela estados y errores con sealed classes y when exhaustivo. Objetivo del nivel: Definir un modelo de errores de dominio unificado para toda la app.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "sealed-classes-when"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Sealed classes y when — Profesional

## Qué hace este skill

Modela estados y errores con sealed classes y when exhaustivo. En este nivel se entrega: **Definir un modelo de errores de dominio unificado para toda la app.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sealed classes y when** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una sealed class de errores con red, decodificación y contenido
2. Mapear cada excepción de las capas de datos a ese modelo
3. Traducir errores de dominio a mensajes de UI en un solo lugar
4. Documentar el contrato para evitar ramas duplicadas en el futuro

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir un modelo de errores de dominio unificado para toda la app. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Crear una sealed class de errores con red, decodificación y contenido · Mapear cada excepción de las capas de datos a ese modelo · Traducir errores de dominio a mensajes de UI en un solo lugar · Documentar el contrato para evitar ramas duplicadas en el futuro | lista | sí | 3-4 pasos |
| $criterios_clave | El 100% de los errores que llegan a la UI pertenecen al modelo de dominio · Cada rama nueva de error tiene su mensaje de UI y su test | lista | sí | calidad verificable |
| $prompt_guia | Quiero un modelo de errores unificado para Ryutify: red, rate limit de YouTube, contenido no disponible y decodificación. Diseñá la sealed class, el mapeo y los mensajes de usuario. | texto | no | "Sealed classes y when" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El 100% de los errores que llegan a la UI pertenecen al modelo de dominio
- [ ] Cada rama nueva de error tiene su mensaje de UI y su test

## Ejemplos de prompts

- "Quiero un modelo de errores unificado para Ryutify: red, rate limit de YouTube, contenido no disponible y decodificación. Diseñá la sealed class, el mapeo y los mensajes de usuario."
- "Aplica Sealed classes y when (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El 100% de los errores que llegan a la UI pertenecen al modelo de dominio"
- "Revisa mi kotlin-core y dime qué pasos de Sealed classes y when me faltan en este nivel"