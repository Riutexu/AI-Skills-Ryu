---
name: android-fundamentos-proguard-r8-basico
description: ProGuard y R8 · nivel Básico · Android y Gradle: la base de la app. Ofuscación y reducción de código sin romper la app en release. Objetivo del nivel: Habilitar R8 y entender los archivos de reglas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "proguard-r8"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# ProGuard y R8 — Básico

## Qué hace este skill

Ofuscación y reducción de código sin romper la app en release. En este nivel se entrega: **Habilitar R8 y entender los archivos de reglas.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ProGuard y R8** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Activar minifyEnabled y shrinkResources en release
2. Entender proguard-rules.pro y las consumer rules
3. Probar el build release con R8
4. Verificar el tamaño final del APK

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Habilitar R8 y entender los archivos de reglas. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Activar minifyEnabled y shrinkResources en release · Entender proguard-rules.pro y las consumer rules · Probar el build release con R8 · Verificar el tamaño final del APK | lista | sí | 3-4 pasos |
| $criterios_clave | El release compila y corre con R8 activado · El APK release es menor al debug | lista | sí | calidad verificable |
| $prompt_guia | Activá R8 en el release de Ryutify con shrinkResources y verificá que la app funcione con la ofuscación. | texto | no | "ProGuard y R8" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El release compila y corre con R8 activado
- [ ] El APK release es menor al debug

## Ejemplos de prompts

- "Activá R8 en el release de Ryutify con shrinkResources y verificá que la app funcione con la ofuscación."
- "Aplica ProGuard y R8 (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El release compila y corre con R8 activado"
- "Revisa mi android-fundamentos y dime qué pasos de ProGuard y R8 me faltan en este nivel"