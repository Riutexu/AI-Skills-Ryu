---
name: kotlin-core-funciones-lambdas-basico
description: Funciones y lambdas · nivel Básico · Kotlin moderno: fundamentos profesionales. Escribe funciones claras, con parámetros por defecto y lambdas que fluyen en el código. Objetivo del nivel: Declarar funciones, usar parámetros con valores por defecto y pasar lambdas como argumentos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "funciones-lambdas"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Funciones y lambdas — Básico

## Qué hace este skill

Escribe funciones claras, con parámetros por defecto y lambdas que fluyen en el código. En este nivel se entrega: **Declarar funciones, usar parámetros con valores por defecto y pasar lambdas como argumentos.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones y lambdas** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar funciones con parámetros por defecto para formatear la duración
2. Pasar lambdas a funciones estándar como map, filter y forEach
3. Usar funciones de orden superior simples con un callback de reproducción
4. Aplicar named arguments en llamadas con muchos parámetros

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Declarar funciones, usar parámetros con valores por defecto y pasar lambdas como argumentos. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Declarar funciones con parámetros por defecto para formatear la duración · Pasar lambdas a funciones estándar como map, filter y forEach · Usar funciones de orden superior simples con un callback de reproducción · Aplicar named arguments en llamadas con muchos parámetros | lista | sí | 3-4 pasos |
| $criterios_clave | Toda función de más de tres parámetros se invoca con named arguments · Las lambdas no repiten lógica que ya existe en funciones estándar | lista | sí | calidad verificable |
| $prompt_guia | Escribí una función formatearDuracion que reciba segundos y devuelva mm:ss o h:mm:ss, con parámetros por defecto, y usala con lambdas para formatear los resultados de búsqueda de Ryutify. | texto | no | "Funciones y lambdas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda función de más de tres parámetros se invoca con named arguments
- [ ] Las lambdas no repiten lógica que ya existe en funciones estándar

## Ejemplos de prompts

- "Escribí una función formatearDuracion que reciba segundos y devuelva mm:ss o h:mm:ss, con parámetros por defecto, y usala con lambdas para formatear los resultados de búsqueda de Ryutify."
- "Aplica Funciones y lambdas (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Toda función de más de tres parámetros se invoca con named arguments"
- "Revisa mi kotlin-core y dime qué pasos de Funciones y lambdas me faltan en este nivel"