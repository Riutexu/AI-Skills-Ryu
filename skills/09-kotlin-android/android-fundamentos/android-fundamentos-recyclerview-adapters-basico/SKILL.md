---
name: android-fundamentos-recyclerview-adapters-basico
description: RecyclerView y adapters · nivel Básico · Android y Gradle: la base de la app. Listas eficientes con RecyclerView, ViewBinding y DiffUtil. Objetivo del nivel: Construir una lista con RecyclerView, adapter y ViewBinding.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "recyclerview-adapters"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# RecyclerView y adapters — Básico

## Qué hace este skill

Listas eficientes con RecyclerView, ViewBinding y DiffUtil. En este nivel se entrega: **Construir una lista con RecyclerView, adapter y ViewBinding.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **RecyclerView y adapters** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el layout de la fila de canción y su ViewHolder
2. Implementar el adapter con el patrón estándar
3. Conectar la lista de resultados de búsqueda
4. Manejar el click en cada fila

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Construir una lista con RecyclerView, adapter y ViewBinding. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Crear el layout de la fila de canción y su ViewHolder · Implementar el adapter con el patrón estándar · Conectar la lista de resultados de búsqueda · Manejar el click en cada fila | lista | sí | 3-4 pasos |
| $criterios_clave | La lista de resultados scrollea a 60fps con 100 canciones · El click en una canción dispara la reproducción | lista | sí | calidad verificable |
| $prompt_guia | Armá la lista de resultados de búsqueda de Ryutify con RecyclerView, ViewBinding y DiffUtil, con click en cada fila que arranque la reproducción. | texto | no | "RecyclerView y adapters" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La lista de resultados scrollea a 60fps con 100 canciones
- [ ] El click en una canción dispara la reproducción

## Ejemplos de prompts

- "Armá la lista de resultados de búsqueda de Ryutify con RecyclerView, ViewBinding y DiffUtil, con click en cada fila que arranque la reproducción."
- "Aplica RecyclerView y adapters (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La lista de resultados scrollea a 60fps con 100 canciones"
- "Revisa mi android-fundamentos y dime qué pasos de RecyclerView y adapters me faltan en este nivel"