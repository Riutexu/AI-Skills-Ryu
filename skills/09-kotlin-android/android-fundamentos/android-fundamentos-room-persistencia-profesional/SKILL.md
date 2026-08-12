---
name: android-fundamentos-room-persistencia-profesional
description: Room y persistencia · nivel Profesional · Android y Gradle: la base de la app. Base de datos local para historial, favoritos y caché de biblioteca. Objetivo del nivel: Caché local completa con sincronización y limpieza de datos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "room-persistencia"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Room y persistencia — Profesional

## Qué hace este skill

Base de datos local para historial, favoritos y caché de biblioteca. En este nivel se entrega: **Caché local completa con sincronización y limpieza de datos.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Room y persistencia** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar caché de respuestas de innertube con TTL en Room
2. Definir la política de limpieza de la caché
3. Sincronizar favoritos entre red y local
4. Perfilar el tamaño de la base en dispositivos viejos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Caché local completa con sincronización y limpieza de datos. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Implementar caché de respuestas de innertube con TTL en Room · Definir la política de limpieza de la caché · Sincronizar favoritos entre red y local · Perfilar el tamaño de la base en dispositivos viejos | lista | sí | 3-4 pasos |
| $criterios_clave | Las respuestas cacheadas expiran según su TTL y se purgan solas · La base no supera el tamaño acordado tras 30 días de uso | lista | sí | calidad verificable |
| $prompt_guia | Quiero cachear las respuestas de innertube en Room con TTL para el modo sin datos de Ryutify. Diseñá el esquema, la expiración y la limpieza automática. | texto | no | "Room y persistencia" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las respuestas cacheadas expiran según su TTL y se purgan solas
- [ ] La base no supera el tamaño acordado tras 30 días de uso

## Ejemplos de prompts

- "Quiero cachear las respuestas de innertube en Room con TTL para el modo sin datos de Ryutify. Diseñá el esquema, la expiración y la limpieza automática."
- "Aplica Room y persistencia (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Las respuestas cacheadas expiran según su TTL y se purgan solas"
- "Revisa mi android-fundamentos y dime qué pasos de Room y persistencia me faltan en este nivel"