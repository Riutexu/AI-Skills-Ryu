---
name: android-fundamentos-sdk-versiones-avanzado
description: Versiones de Android y SDKs · nivel Avanzado · Android y Gradle: la base de la app. Targeting, compatibilidad y adaptación a nuevas versiones de Android. Objetivo del nivel: Adaptar features por versión con compat libraries y version checks.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "sdk-versiones"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Versiones de Android y SDKs — Avanzado

## Qué hace este skill

Targeting, compatibilidad y adaptación a nuevas versiones de Android. En este nivel se entrega: **Adaptar features por versión con compat libraries y version checks.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versiones de Android y SDKs** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar las librerías de compatibilidad de AndroidX
2. Implementar los behavior changes de la target
3. Adaptar el manejo de audio a las políticas de la versión
4. Manejar runtime checks por versión de SDK

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Adaptar features por versión con compat libraries y version checks. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Usar las librerías de compatibilidad de AndroidX · Implementar los behavior changes de la target · Adaptar el manejo de audio a las políticas de la versión · Manejar runtime checks por versión de SDK | lista | sí | 3-4 pasos |
| $criterios_clave | Las features nuevas degradan con gracia en dispositivos viejos · El comportamiento de audio respeta la política de la versión target | lista | sí | calidad verificable |
| $prompt_guia | La reproducción de Ryutify cambia de comportamiento en Android 14 y superiores. Adaptá el código con version checks y compat libraries para que no se rompa nada. | texto | no | "Versiones de Android y SDKs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las features nuevas degradan con gracia en dispositivos viejos
- [ ] El comportamiento de audio respeta la política de la versión target

## Ejemplos de prompts

- "La reproducción de Ryutify cambia de comportamiento en Android 14 y superiores. Adaptá el código con version checks y compat libraries para que no se rompa nada."
- "Aplica Versiones de Android y SDKs (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Las features nuevas degradan con gracia en dispositivos viejos"
- "Revisa mi android-fundamentos y dime qué pasos de Versiones de Android y SDKs me faltan en este nivel"