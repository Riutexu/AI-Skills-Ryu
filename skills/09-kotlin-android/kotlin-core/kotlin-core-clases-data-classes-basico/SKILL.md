---
name: kotlin-core-clases-data-classes-basico
description: Clases y data classes · nivel Básico · Kotlin moderno: fundamentos profesionales. Modela el dominio de Ryutify con clases, data classes y objetos de forma limpia. Objetivo del nivel: Crear clases, data classes y objetos para modelar entidades del dominio.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "clases-data-classes"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Clases y data classes — Básico

## Qué hace este skill

Modela el dominio de Ryutify con clases, data classes y objetos de forma limpia. En este nivel se entrega: **Crear clases, data classes y objetos para modelar entidades del dominio.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Clases y data classes** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir data classes para Song, Album y Artist con propiedades val
2. Usar copy() para crear variantes de un estado de reproducción
3. Distinguir clases, data classes, enum class y object en un ejemplo concreto
4. Aprovechar equals, hashCode y toString generados para comparar canciones de la cola

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear clases, data classes y objetos para modelar entidades del dominio. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Definir data classes para Song, Album y Artist con propiedades val · Usar copy() para crear variantes de un estado de reproducción · Distinguir clases, data classes, enum class y object en un ejemplo concreto · Aprovechar equals, hashCode y toString generados para comparar canciones de la cola | lista | sí | 3-4 pasos |
| $criterios_clave | Las entidades del dominio son inmutables y usan val en todas sus propiedades · Las comparaciones de igualdad entre canciones pasan con equals generado | lista | sí | calidad verificable |
| $prompt_guia | Modelá la entidad Song de Ryutify como data class con id, título, artista, duración y url de miniatura, y mostrá cómo usás copy para marcar una canción como favorita. | texto | no | "Clases y data classes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las entidades del dominio son inmutables y usan val en todas sus propiedades
- [ ] Las comparaciones de igualdad entre canciones pasan con equals generado

## Ejemplos de prompts

- "Modelá la entidad Song de Ryutify como data class con id, título, artista, duración y url de miniatura, y mostrá cómo usás copy para marcar una canción como favorita."
- "Aplica Clases y data classes (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Las entidades del dominio son inmutables y usan val en todas sus propiedades"
- "Revisa mi kotlin-core y dime qué pasos de Clases y data classes me faltan en este nivel"