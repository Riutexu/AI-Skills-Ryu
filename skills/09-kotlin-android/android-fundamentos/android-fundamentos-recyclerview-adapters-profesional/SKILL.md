---
name: android-fundamentos-recyclerview-adapters-profesional
description: RecyclerView y adapters · nivel Profesional · Android y Gradle: la base de la app. Listas eficientes con RecyclerView, ViewBinding y DiffUtil. Objetivo del nivel: Listas complejas y rendimiento: paging, bindings livianos y sin reciclaje erróneo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "recyclerview-adapters"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# RecyclerView y adapters — Profesional

## Qué hace este skill

Listas eficientes con RecyclerView, ViewBinding y DiffUtil. En este nivel se entrega: **Listas complejas y rendimiento: paging, bindings livianos y sin reciclaje erróneo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **RecyclerView y adapters** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Migrar la biblioteca de canciones a Paging 3
2. Eliminar trabajo pesado en onBindViewHolder
3. Usar payloads para actualizaciones parciales
4. Perfilar el reciclaje de vistas en sesiones largas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Listas complejas y rendimiento: paging, bindings livianos y sin reciclaje erróneo. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Migrar la biblioteca de canciones a Paging 3 · Eliminar trabajo pesado en onBindViewHolder · Usar payloads para actualizaciones parciales · Perfilar el reciclaje de vistas en sesiones largas | lista | sí | 3-4 pasos |
| $criterios_clave | La biblioteca con 50.000 canciones scrollea estable · El profiler muestra cero trabajo pesado en el hilo principal durante el scroll | lista | sí | calidad verificable |
| $prompt_guia | La biblioteca de Ryutify se laguea con muchas canciones. Migrala a Paging 3, eliminá el trabajo del onBind y perfila el scroll con el profiler. | texto | no | "RecyclerView y adapters" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La biblioteca con 50.000 canciones scrollea estable
- [ ] El profiler muestra cero trabajo pesado en el hilo principal durante el scroll

## Ejemplos de prompts

- "La biblioteca de Ryutify se laguea con muchas canciones. Migrala a Paging 3, eliminá el trabajo del onBind y perfila el scroll con el profiler."
- "Aplica RecyclerView y adapters (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La biblioteca con 50.000 canciones scrollea estable"
- "Revisa mi android-fundamentos y dime qué pasos de RecyclerView y adapters me faltan en este nivel"