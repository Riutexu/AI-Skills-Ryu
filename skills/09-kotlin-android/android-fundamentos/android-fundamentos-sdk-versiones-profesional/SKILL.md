---
name: android-fundamentos-sdk-versiones-profesional
description: Versiones de Android y SDKs · nivel Profesional · Android y Gradle: la base de la app. Targeting, compatibilidad y adaptación a nuevas versiones de Android. Objetivo del nivel: Plan de adopción de versiones y matriz de testing del producto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "sdk-versiones"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Versiones de Android y SDKs — Profesional

## Qué hace este skill

Targeting, compatibilidad y adaptación a nuevas versiones de Android. En este nivel se entrega: **Plan de adopción de versiones y matriz de testing del producto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versiones de Android y SDKs** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Armar la matriz de testing por versión y API level
2. Planificar la subida de targetSdk con análisis de riesgo
3. Automatizar pruebas en las versiones soportadas
4. Documentar los behavior changes por versión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Plan de adopción de versiones y matriz de testing del producto. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Armar la matriz de testing por versión y API level · Planificar la subida de targetSdk con análisis de riesgo · Automatizar pruebas en las versiones soportadas · Documentar los behavior changes por versión | lista | sí | 3-4 pasos |
| $criterios_clave | La matriz cubre todas las versiones soportadas · La subida de targetSdk no rompe la reproducción en ninguna versión | lista | sí | calidad verificable |
| $prompt_guia | Armá la matriz de testing de Ryutify por versiones, el plan de subida de targetSdk y automatizá las pruebas de reproducción en cada API level. | texto | no | "Versiones de Android y SDKs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La matriz cubre todas las versiones soportadas
- [ ] La subida de targetSdk no rompe la reproducción en ninguna versión

## Ejemplos de prompts

- "Armá la matriz de testing de Ryutify por versiones, el plan de subida de targetSdk y automatizá las pruebas de reproducción en cada API level."
- "Aplica Versiones de Android y SDKs (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La matriz cubre todas las versiones soportadas"
- "Revisa mi android-fundamentos y dime qué pasos de Versiones de Android y SDKs me faltan en este nivel"