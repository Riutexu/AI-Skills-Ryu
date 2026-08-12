---
name: kotlin-core-funciones-lambdas-profesional
description: Funciones y lambdas · nivel Profesional · Kotlin moderno: fundamentos profesionales. Escribe funciones claras, con parámetros por defecto y lambdas que fluyen en el código. Objetivo del nivel: Diseñar una API interna funcional coherente para el módulo de reproducción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "funciones-lambdas"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Funciones y lambdas — Profesional

## Qué hace este skill

Escribe funciones claras, con parámetros por defecto y lambdas que fluyen en el código. En este nivel se entrega: **Diseñar una API interna funcional coherente para el módulo de reproducción.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones y lambdas** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir una mini DSL interna para construir la cola de reproducción
2. Modelar el pipeline de datos como funciones puras componibles
3. Documentar el contrato de cada lambda pública del SDK interno
4. Reducir anidamiento de lambdas eligiendo scope functions con criterio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar una API interna funcional coherente para el módulo de reproducción. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Definir una mini DSL interna para construir la cola de reproducción · Modelar el pipeline de datos como funciones puras componibles · Documentar el contrato de cada lambda pública del SDK interno · Reducir anidamiento de lambdas eligiendo scope functions con criterio | lista | sí | 3-4 pasos |
| $criterios_clave | Construir una playlist de 200 canciones con la DSL no requiere más de 15 líneas · Cada función pública del pipeline tiene un único propósito testeable | lista | sí | calidad verificable |
| $prompt_guia | Quiero una mini DSL para armar la cola de reproducción de Ryutify tipo cola { repetir(off); cancion(song1); saltear(3) }. Diseñala con lambdas con receiver y mostrala funcionando. | texto | no | "Funciones y lambdas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Construir una playlist de 200 canciones con la DSL no requiere más de 15 líneas
- [ ] Cada función pública del pipeline tiene un único propósito testeable

## Ejemplos de prompts

- "Quiero una mini DSL para armar la cola de reproducción de Ryutify tipo cola { repetir(off); cancion(song1); saltear(3) }. Diseñala con lambdas con receiver y mostrala funcionando."
- "Aplica Funciones y lambdas (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Construir una playlist de 200 canciones con la DSL no requiere más de 15 líneas"
- "Revisa mi kotlin-core y dime qué pasos de Funciones y lambdas me faltan en este nivel"