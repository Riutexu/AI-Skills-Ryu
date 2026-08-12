---
name: kotlin-core-generics-profesional
description: Generics · nivel Profesional · Kotlin moderno: fundamentos profesionales. Código reutilizable con tipos genéricos, bounds y variantes. Objetivo del nivel: Definir una arquitectura de tipos genéricos para la capa de datos completa.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "generics"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Generics — Profesional

## Qué hace este skill

Código reutilizable con tipos genéricos, bounds y variantes. En este nivel se entrega: **Definir una arquitectura de tipos genéricos para la capa de datos completa.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generics** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un repositorio genérico base con operaciones CRUD tipadas
2. Modelar el paginado genérico para búsquedas y continuaciones de YouTube
3. Garantizar type safety en la serialización JSON de respuestas
4. Escribir tests que verifiquen la variación de tipos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir una arquitectura de tipos genéricos para la capa de datos completa. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Crear un repositorio genérico base con operaciones CRUD tipadas · Modelar el paginado genérico para búsquedas y continuaciones de YouTube · Garantizar type safety en la serialización JSON de respuestas · Escribir tests que verifiquen la variación de tipos | lista | sí | 3-4 pasos |
| $criterios_clave | El repositorio base tipa entradas y salidas sin unchecked casts · El paginado genérico se usa en búsqueda, playlists y continuaciones sin duplicación | lista | sí | calidad verificable |
| $prompt_guia | Quiero un repositorio genérico tipado para todas las entidades de Ryutify con paginado incluido, y que el paginado sirva para las continuaciones de innertube. Diseñalo e implementalo. | texto | no | "Generics" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El repositorio base tipa entradas y salidas sin unchecked casts
- [ ] El paginado genérico se usa en búsqueda, playlists y continuaciones sin duplicación

## Ejemplos de prompts

- "Quiero un repositorio genérico tipado para todas las entidades de Ryutify con paginado incluido, y que el paginado sirva para las continuaciones de innertube. Diseñalo e implementalo."
- "Aplica Generics (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El repositorio base tipa entradas y salidas sin unchecked casts"
- "Revisa mi kotlin-core y dime qué pasos de Generics me faltan en este nivel"