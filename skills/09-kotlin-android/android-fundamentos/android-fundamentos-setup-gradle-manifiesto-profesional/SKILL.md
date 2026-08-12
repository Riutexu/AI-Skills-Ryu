---
name: android-fundamentos-setup-gradle-manifiesto-profesional
description: Setup de Gradle y manifiesto · nivel Profesional · Android y Gradle: la base de la app. Proyecto desde cero con Kotlin DSL, versionado de dependencias y manifiesto correcto. Objetivo del nivel: Blindar el build: build cache, configuración declarativa y CI reproducible.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "setup-gradle-manifiesto"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Setup de Gradle y manifiesto — Profesional

## Qué hace este skill

Proyecto desde cero con Kotlin DSL, versionado de dependencias y manifiesto correcto. En este nivel se entrega: **Blindar el build: build cache, configuración declarativa y CI reproducible.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Setup de Gradle y manifiesto** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Activar y verificar el build cache y el configuration cache
2. Crear un perfil de build para medir los tiempos
3. Configurar el manifiesto con placeholders por flavor
4. Documentar el proceso de build para el onboarding del equipo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Blindar el build: build cache, configuración declarativa y CI reproducible. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Activar y verificar el build cache y el configuration cache · Crear un perfil de build para medir los tiempos · Configurar el manifiesto con placeholders por flavor · Documentar el proceso de build para el onboarding del equipo | lista | sí | 3-4 pasos |
| $criterios_clave | El build incremental debug baja de 2 minutos a menos de 40 segundos · El mismo commit compila igual en CI y en local | lista | sí | calidad verificable |
| $prompt_guia | El build de Ryutify tarda tres minutos y la configuración no se entiende. Optimizalo con configuration cache, perfiles de build y documentá el pipeline para el equipo. | texto | no | "Setup de Gradle y manifiesto" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El build incremental debug baja de 2 minutos a menos de 40 segundos
- [ ] El mismo commit compila igual en CI y en local

## Ejemplos de prompts

- "El build de Ryutify tarda tres minutos y la configuración no se entiende. Optimizalo con configuration cache, perfiles de build y documentá el pipeline para el equipo."
- "Aplica Setup de Gradle y manifiesto (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El build incremental debug baja de 2 minutos a menos de 40 segundos"
- "Revisa mi android-fundamentos y dime qué pasos de Setup de Gradle y manifiesto me faltan en este nivel"