---
name: android-fundamentos-sdk-versiones-basico
description: Versiones de Android y SDKs · nivel Básico · Android y Gradle: la base de la app. Targeting, compatibilidad y adaptación a nuevas versiones de Android. Objetivo del nivel: Configurar minSdk, compileSdk y targetSdk con criterio.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "sdk-versiones"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Versiones de Android y SDKs — Básico

## Qué hace este skill

Targeting, compatibilidad y adaptación a nuevas versiones de Android. En este nivel se entrega: **Configurar minSdk, compileSdk y targetSdk con criterio.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versiones de Android y SDKs** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Elegir minSdk según la audiencia de Ryutify
2. Configurar targetSdk y verificar las exigencias de la versión
3. Diferenciar compileSdk de targetSdk
4. Verificar que la app corre en el emulador más nuevo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar minSdk, compileSdk y targetSdk con criterio. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Elegir minSdk según la audiencia de Ryutify · Configurar targetSdk y verificar las exigencias de la versión · Diferenciar compileSdk de targetSdk · Verificar que la app corre en el emulador más nuevo | lista | sí | 3-4 pasos |
| $criterios_clave | La elección de SDKs está documentada con datos de audiencia · La app corre sin crashes en la versión más nueva | lista | sí | calidad verificable |
| $prompt_guia | Decidí el minSdk y el targetSdk de Ryutify con datos de mercado, configuralos y verificá que la app funcione en la última versión de Android. | texto | no | "Versiones de Android y SDKs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La elección de SDKs está documentada con datos de audiencia
- [ ] La app corre sin crashes en la versión más nueva

## Ejemplos de prompts

- "Decidí el minSdk y el targetSdk de Ryutify con datos de mercado, configuralos y verificá que la app funcione en la última versión de Android."
- "Aplica Versiones de Android y SDKs (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La elección de SDKs está documentada con datos de audiencia"
- "Revisa mi android-fundamentos y dime qué pasos de Versiones de Android y SDKs me faltan en este nivel"