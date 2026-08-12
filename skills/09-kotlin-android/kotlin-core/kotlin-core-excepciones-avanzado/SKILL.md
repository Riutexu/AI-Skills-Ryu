---
name: kotlin-core-excepciones-avanzado
description: Excepciones · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Manejo de errores por excepción: cuándo lanzar, cómo propagar y cómo traducir. Objetivo del nivel: Diseñar excepciones propias con jerarquía y metadatos de contexto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "excepciones"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Excepciones — Avanzado

## Qué hace este skill

Manejo de errores por excepción: cuándo lanzar, cómo propagar y cómo traducir. En este nivel se entrega: **Diseñar excepciones propias con jerarquía y metadatos de contexto.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Excepciones** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear excepciones de dominio: StreamNoDisponible, RateLimit y ParseError
2. Agregar contexto: videoId, código HTTP y causa raíz
3. Encadenar causas preservando el stack trace
4. Mapear excepciones de la capa de datos a las de dominio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Diseñar excepciones propias con jerarquía y metadatos de contexto. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Crear excepciones de dominio: StreamNoDisponible, RateLimit y ParseError · Agregar contexto: videoId, código HTTP y causa raíz · Encadenar causas preservando el stack trace · Mapear excepciones de la capa de datos a las de dominio | lista | sí | 3-4 pasos |
| $criterios_clave | El crash reporter muestra el videoId y el endpoint en cada error de stream · Las excepciones de dominio se mapean desde cualquier capa sin perder la causa | lista | sí | calidad verificable |
| $prompt_guia | Cuando un video no tiene stream disponible en Ryutify, el log no dice cuál era. Creá una jerarquía de excepciones con contexto y mapeala en la capa de datos. | texto | no | "Excepciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El crash reporter muestra el videoId y el endpoint en cada error de stream
- [ ] Las excepciones de dominio se mapean desde cualquier capa sin perder la causa

## Ejemplos de prompts

- "Cuando un video no tiene stream disponible en Ryutify, el log no dice cuál era. Creá una jerarquía de excepciones con contexto y mapeala en la capa de datos."
- "Aplica Excepciones (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El crash reporter muestra el videoId y el endpoint en cada error de stream"
- "Revisa mi kotlin-core y dime qué pasos de Excepciones me faltan en este nivel"