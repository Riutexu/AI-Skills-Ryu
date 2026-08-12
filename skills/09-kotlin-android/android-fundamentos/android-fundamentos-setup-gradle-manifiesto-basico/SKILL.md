---
name: android-fundamentos-setup-gradle-manifiesto-basico
description: Setup de Gradle y manifiesto · nivel Básico · Android y Gradle: la base de la app. Proyecto desde cero con Kotlin DSL, versionado de dependencias y manifiesto correcto. Objetivo del nivel: Crear un proyecto Android con Gradle Kotlin DSL y un manifiesto mínimo funcional.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "setup-gradle-manifiesto"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Setup de Gradle y manifiesto — Básico

## Qué hace este skill

Proyecto desde cero con Kotlin DSL, versionado de dependencias y manifiesto correcto. En este nivel se entrega: **Crear un proyecto Android con Gradle Kotlin DSL y un manifiesto mínimo funcional.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Setup de Gradle y manifiesto** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el proyecto con la estructura de módulos app y core
2. Configurar build.gradle.kts con Kotlin DSL y version catalog
3. Declarar la Activity principal en el manifiesto
4. Configurar minSdk, targetSdk y compileSdk coherentes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un proyecto Android con Gradle Kotlin DSL y un manifiesto mínimo funcional. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Crear el proyecto con la estructura de módulos app y core · Configurar build.gradle.kts con Kotlin DSL y version catalog · Declarar la Activity principal en el manifiesto · Configurar minSdk, targetSdk y compileSdk coherentes | lista | sí | 3-4 pasos |
| $criterios_clave | El proyecto compila con assembleDebug sin warnings de SDK · El manifiesto declara exactamente las Activitys de la app | lista | sí | calidad verificable |
| $prompt_guia | Armame el proyecto base de Ryutify con Gradle Kotlin DSL, version catalog y dos módulos, app y core. Que compile limpio desde cero. | texto | no | "Setup de Gradle y manifiesto" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proyecto compila con assembleDebug sin warnings de SDK
- [ ] El manifiesto declara exactamente las Activitys de la app

## Ejemplos de prompts

- "Armame el proyecto base de Ryutify con Gradle Kotlin DSL, version catalog y dos módulos, app y core. Que compile limpio desde cero."
- "Aplica Setup de Gradle y manifiesto (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El proyecto compila con assembleDebug sin warnings de SDK"
- "Revisa mi android-fundamentos y dime qué pasos de Setup de Gradle y manifiesto me faltan en este nivel"