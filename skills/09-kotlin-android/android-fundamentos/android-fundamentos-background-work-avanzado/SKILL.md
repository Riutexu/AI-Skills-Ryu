---
name: android-fundamentos-background-work-avanzado
description: Background work básico · nivel Avanzado · Android y Gradle: la base de la app. WorkManager y servicios: tareas diferidas sin morir con la app. Objetivo del nivel: Cadenas de trabajo, periodicidad y políticas de reintento.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "background-work"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Background work básico — Avanzado

## Qué hace este skill

WorkManager y servicios: tareas diferidas sin morir con la app. En este nivel se entrega: **Cadenas de trabajo, periodicidad y políticas de reintento.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Background work básico** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Encadenar workers con doff
2. Programar la limpieza periódica de la caché
3. Configurar backoff y políticas de reintento
4. Manejar el resultado de cada paso de la cadena

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Cadenas de trabajo, periodicidad y políticas de reintento. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Encadenar workers con doff · Programar la limpieza periódica de la caché · Configurar backoff y políticas de reintento · Manejar el resultado de cada paso de la cadena | lista | sí | 3-4 pasos |
| $criterios_clave | La cadena de sincronización corre en orden y reporta los fallos · La limpieza periódica respeta la política de red | lista | sí | calidad verificable |
| $prompt_guia | Encadená en Ryutify: descargar favoritos de red, guardarlos en Room y luego limpiar la caché vieja, con periodicidad y reintentos configurados. | texto | no | "Background work básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cadena de sincronización corre en orden y reporta los fallos
- [ ] La limpieza periódica respeta la política de red

## Ejemplos de prompts

- "Encadená en Ryutify: descargar favoritos de red, guardarlos en Room y luego limpiar la caché vieja, con periodicidad y reintentos configurados."
- "Aplica Background work básico (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La cadena de sincronización corre en orden y reporta los fallos"
- "Revisa mi android-fundamentos y dime qué pasos de Background work básico me faltan en este nivel"