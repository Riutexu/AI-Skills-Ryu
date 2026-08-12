---
name: android-fundamentos-room-persistencia-avanzado
description: Room y persistencia · nivel Avanzado · Android y Gradle: la base de la app. Base de datos local para historial, favoritos y caché de biblioteca. Objetivo del nivel: Relaciones, índices y migraciones de esquema sin perder datos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "room-persistencia"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Room y persistencia — Avanzado

## Qué hace este skill

Base de datos local para historial, favoritos y caché de biblioteca. En este nivel se entrega: **Relaciones, índices y migraciones de esquema sin perder datos.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Room y persistencia** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar la relación playlist-canciones con tablas intermedias
2. Agregar índices a las consultas calientes del historial
3. Escribir migraciones con tests de esquema
4. Usar transacciones para operaciones atómicas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Relaciones, índices y migraciones de esquema sin perder datos. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Modelar la relación playlist-canciones con tablas intermedias · Agregar índices a las consultas calientes del historial · Escribir migraciones con tests de esquema · Usar transacciones para operaciones atómicas | lista | sí | 3-4 pasos |
| $criterios_clave | Las migraciones conservan los favoritos del usuario · La consulta del historial por fecha usa el índice definido | lista | sí | calidad verificable |
| $prompt_guia | La playlist de Ryutify necesita relación con canciones y el historial busca por fecha. Modelalo con Room, índices y migraciones testeadas. | texto | no | "Room y persistencia" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las migraciones conservan los favoritos del usuario
- [ ] La consulta del historial por fecha usa el índice definido

## Ejemplos de prompts

- "La playlist de Ryutify necesita relación con canciones y el historial busca por fecha. Modelalo con Room, índices y migraciones testeadas."
- "Aplica Room y persistencia (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Las migraciones conservan los favoritos del usuario"
- "Revisa mi android-fundamentos y dime qué pasos de Room y persistencia me faltan en este nivel"