---
name: android-fundamentos-background-work-basico
description: Background work básico · nivel Básico · Android y Gradle: la base de la app. WorkManager y servicios: tareas diferidas sin morir con la app. Objetivo del nivel: Programar tareas en segundo plano con WorkManager.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "background-work"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Background work básico — Básico

## Qué hace este skill

WorkManager y servicios: tareas diferidas sin morir con la app. En este nivel se entrega: **Programar tareas en segundo plano con WorkManager.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Background work básico** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un Worker que descargue la portada de una playlist
2. Encolar el trabajo con constraints de red
3. Observar el estado del trabajo desde la UI
4. Usar OneTimeWorkRequest

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Programar tareas en segundo plano con WorkManager. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Crear un Worker que descargue la portada de una playlist · Encolar el trabajo con constraints de red · Observar el estado del trabajo desde la UI · Usar OneTimeWorkRequest | lista | sí | 3-4 pasos |
| $criterios_clave | El worker corre aunque la app esté cerrada · La UI refleja el estado del trabajo en curso | lista | sí | calidad verificable |
| $prompt_guia | Quiero precargar las portadas de las playlists de Ryutify en background con WorkManager y que la UI muestre el progreso. | texto | no | "Background work básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El worker corre aunque la app esté cerrada
- [ ] La UI refleja el estado del trabajo en curso

## Ejemplos de prompts

- "Quiero precargar las portadas de las playlists de Ryutify en background con WorkManager y que la UI muestre el progreso."
- "Aplica Background work básico (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El worker corre aunque la app esté cerrada"
- "Revisa mi android-fundamentos y dime qué pasos de Background work básico me faltan en este nivel"