---
name: android-fundamentos-room-persistencia-basico
description: Room y persistencia · nivel Básico · Android y Gradle: la base de la app. Base de datos local para historial, favoritos y caché de biblioteca. Objetivo del nivel: Configurar Room con entidades, DAOs y un repositorio simple.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "room-persistencia"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Room y persistencia — Básico

## Qué hace este skill

Base de datos local para historial, favoritos y caché de biblioteca. En este nivel se entrega: **Configurar Room con entidades, DAOs y un repositorio simple.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Room y persistencia** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la entidad CancionFavorita y su DAO
2. Definir la base de datos y su versión
3. Insertar y consultar favoritos con coroutines
4. Exponer Flow desde el DAO para reactividad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar Room con entidades, DAOs y un repositorio simple. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Crear la entidad CancionFavorita y su DAO · Definir la base de datos y su versión · Insertar y consultar favoritos con coroutines · Exponer Flow desde el DAO para reactividad | lista | sí | 3-4 pasos |
| $criterios_clave | Marcar un favorito persiste y aparece tras reiniciar la app · La consulta de favoritos emite cambios sin refresco manual | lista | sí | calidad verificable |
| $prompt_guia | Implementá los favoritos de Ryutify con Room: entidad, DAO con Flow, base de datos, y que el cambio se refleje en la UI sin refrescar. | texto | no | "Room y persistencia" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Marcar un favorito persiste y aparece tras reiniciar la app
- [ ] La consulta de favoritos emite cambios sin refresco manual

## Ejemplos de prompts

- "Implementá los favoritos de Ryutify con Room: entidad, DAO con Flow, base de datos, y que el cambio se refleje en la UI sin refrescar."
- "Aplica Room y persistencia (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Marcar un favorito persiste y aparece tras reiniciar la app"
- "Revisa mi android-fundamentos y dime qué pasos de Room y persistencia me faltan en este nivel"