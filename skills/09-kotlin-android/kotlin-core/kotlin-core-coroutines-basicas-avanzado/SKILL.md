---
name: kotlin-core-coroutines-basicas-avanzado
description: Coroutines básicas · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Primeros pasos con suspend functions y lanzamiento de coroutines dentro de la app. Objetivo del nivel: Controlar el ciclo de vida de las coroutines y sus excepciones con supervisión.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "coroutines-basicas"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Coroutines básicas — Avanzado

## Qué hace este skill

Primeros pasos con suspend functions y lanzamiento de coroutines dentro de la app. En este nivel se entrega: **Controlar el ciclo de vida de las coroutines y sus excepciones con supervisión.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coroutines básicas** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un scope propio para el reproductor que no muera con el ViewModel
2. Manejar excepciones de coroutines con CoroutineExceptionHandler
3. Distinguir launch de async y propagar errores con supervisión
4. Prevenir fugas cancelando las coroutines al destruir la pantalla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Controlar el ciclo de vida de las coroutines y sus excepciones con supervisión. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Crear un scope propio para el reproductor que no muera con el ViewModel · Manejar excepciones de coroutines con CoroutineExceptionHandler · Distinguir launch de async y propagar errores con supervisión · Prevenir fugas cancelando las coroutines al destruir la pantalla | lista | sí | 3-4 pasos |
| $criterios_clave | El scope del reproductor sobrevive a la rotación de pantalla · Un fallo en el fetch de sugerencias no cancela la reproducción en curso | lista | sí | calidad verificable |
| $prompt_guia | Cuando falla la búsqueda de sugerencias se me cancela la reproducción en curso de Ryutify. Revisá la jerarquía de scopes y corregí la propagación de errores con supervisión. | texto | no | "Coroutines básicas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El scope del reproductor sobrevive a la rotación de pantalla
- [ ] Un fallo en el fetch de sugerencias no cancela la reproducción en curso

## Ejemplos de prompts

- "Cuando falla la búsqueda de sugerencias se me cancela la reproducción en curso de Ryutify. Revisá la jerarquía de scopes y corregí la propagación de errores con supervisión."
- "Aplica Coroutines básicas (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El scope del reproductor sobrevive a la rotación de pantalla"
- "Revisa mi kotlin-core y dime qué pasos de Coroutines básicas me faltan en este nivel"