---
name: kotlin-core-colecciones-avanzado
description: Colecciones · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Opera listas, sets y mapas con estilo funcional y sin errores de mutabilidad. Objetivo del nivel: Combinar operaciones complejas y elegir la colección correcta según el patrón de uso.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "colecciones"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Colecciones — Avanzado

## Qué hace este skill

Opera listas, sets y mapas con estilo funcional y sin errores de mutabilidad. En este nivel se entrega: **Combinar operaciones complejas y elegir la colección correcta según el patrón de uso.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colecciones** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un merge de playlists que deduplique por videoId
2. Elegir LinkedHashMap para preservar el orden del historial de búsquedas
3. Usar associateBy para indexar canciones y evitar búsquedas lineales
4. Resolver un flatMap con distinct sobre los géneros de los álbumes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar operaciones complejas y elegir la colección correcta según el patrón de uso. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Implementar un merge de playlists que deduplique por videoId · Elegir LinkedHashMap para preservar el orden del historial de búsquedas · Usar associateBy para indexar canciones y evitar búsquedas lineales · Resolver un flatMap con distinct sobre los géneros de los álbumes | lista | sí | 3-4 pasos |
| $criterios_clave | El merge de playlists es lineal en el total de items y no pierde canciones · El historial conserva el orden de inserción y está acotado a 20 entradas | lista | sí | calidad verificable |
| $prompt_guia | Uní dos playlists de Ryutify en una sola eliminando duplicados por videoId, preservando el orden original y manteniendo buen rendimiento con 10.000 items. | texto | no | "Colecciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El merge de playlists es lineal en el total de items y no pierde canciones
- [ ] El historial conserva el orden de inserción y está acotado a 20 entradas

## Ejemplos de prompts

- "Uní dos playlists de Ryutify en una sola eliminando duplicados por videoId, preservando el orden original y manteniendo buen rendimiento con 10.000 items."
- "Aplica Colecciones (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El merge de playlists es lineal en el total de items y no pierde canciones"
- "Revisa mi kotlin-core y dime qué pasos de Colecciones me faltan en este nivel"