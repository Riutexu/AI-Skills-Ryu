---
name: kotlin-core-colecciones-basico
description: Colecciones · nivel Básico · Kotlin moderno: fundamentos profesionales. Opera listas, sets y mapas con estilo funcional y sin errores de mutabilidad. Objetivo del nivel: Usar operaciones básicas de colecciones: map, filter, first, sortedBy y groupBy.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "colecciones"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Colecciones — Básico

## Qué hace este skill

Opera listas, sets y mapas con estilo funcional y sin errores de mutabilidad. En este nivel se entrega: **Usar operaciones básicas de colecciones: map, filter, first, sortedBy y groupBy.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colecciones** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Filtrar y transformar la lista de resultados de búsqueda con map y filter
2. Obtener la canción más larga de una playlist con sortedBy
3. Agrupar canciones por artista con groupBy
4. Evitar mutar listas: usar operadores que devuelven colecciones nuevas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar operaciones básicas de colecciones: map, filter, first, sortedBy y groupBy. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Filtrar y transformar la lista de resultados de búsqueda con map y filter · Obtener la canción más larga de una playlist con sortedBy · Agrupar canciones por artista con groupBy · Evitar mutar listas: usar operadores que devuelven colecciones nuevas | lista | sí | 3-4 pasos |
| $criterios_clave | Las colecciones originales no se modifican en ninguna operación · El manejo de listas vacías no lanza excepciones inesperadas | lista | sí | calidad verificable |
| $prompt_guia | Dada la lista de resultados de búsqueda de Ryutify, filtrá las canciones de menos de un minuto, ordenalas por duración y agrupalas por artista usando operadores estándar de Kotlin. | texto | no | "Colecciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las colecciones originales no se modifican en ninguna operación
- [ ] El manejo de listas vacías no lanza excepciones inesperadas

## Ejemplos de prompts

- "Dada la lista de resultados de búsqueda de Ryutify, filtrá las canciones de menos de un minuto, ordenalas por duración y agrupalas por artista usando operadores estándar de Kotlin."
- "Aplica Colecciones (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Las colecciones originales no se modifican en ninguna operación"
- "Revisa mi kotlin-core y dime qué pasos de Colecciones me faltan en este nivel"