---
name: android-fundamentos-recyclerview-adapters-avanzado
description: RecyclerView y adapters · nivel Avanzado · Android y Gradle: la base de la app. Listas eficientes con RecyclerView, ViewBinding y DiffUtil. Objetivo del nivel: Listas heterogéneas, estados de carga y actualizaciones eficientes con DiffUtil.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "recyclerview-adapters"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# RecyclerView y adapters — Avanzado

## Qué hace este skill

Listas eficientes con RecyclerView, ViewBinding y DiffUtil. En este nivel se entrega: **Listas heterogéneas, estados de carga y actualizaciones eficientes con DiffUtil.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **RecyclerView y adapters** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar DiffUtil con callbacks de item y de content
2. Implementar una lista heterogénea con tipos de ítem distintos
3. Agregar el footer de carga al llegar al final
4. Actualizar el estado de favorito de una fila sin recargar la lista

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Listas heterogéneas, estados de carga y actualizaciones eficientes con DiffUtil. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Usar DiffUtil con callbacks de item y de content · Implementar una lista heterogénea con tipos de ítem distintos · Agregar el footer de carga al llegar al final · Actualizar el estado de favorito de una fila sin recargar la lista | lista | sí | 3-4 pasos |
| $criterios_clave | Marcar favorito en una fila no recarga la lista completa · El scroll infinito carga el siguiente bloque sin saltos | lista | sí | calidad verificable |
| $prompt_guia | La búsqueda de Ryutify necesita scroll infinito con footer de carga y filas de distinto tipo, canción, artista y playlist. Implementalo con DiffUtil y un adapter heterogéneo. | texto | no | "RecyclerView y adapters" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Marcar favorito en una fila no recarga la lista completa
- [ ] El scroll infinito carga el siguiente bloque sin saltos

## Ejemplos de prompts

- "La búsqueda de Ryutify necesita scroll infinito con footer de carga y filas de distinto tipo, canción, artista y playlist. Implementalo con DiffUtil y un adapter heterogéneo."
- "Aplica RecyclerView y adapters (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Marcar favorito en una fila no recarga la lista completa"
- "Revisa mi android-fundamentos y dime qué pasos de RecyclerView y adapters me faltan en este nivel"