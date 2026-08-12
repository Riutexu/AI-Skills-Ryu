---
name: android-fundamentos-depuracion-basico
description: Depuración y profiling · nivel Básico · Android y Gradle: la base de la app. Encontrar bugs y problemas de rendimiento con las herramientas de Android Studio. Objetivo del nivel: Usar el debugger, logcat y breakpoints de forma efectiva.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "depuracion"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Depuración y profiling — Básico

## Qué hace este skill

Encontrar bugs y problemas de rendimiento con las herramientas de Android Studio. En este nivel se entrega: **Usar el debugger, logcat y breakpoints de forma efectiva.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Depuración y profiling** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Depurar un crash con breakpoints y stacktrace
2. Filtrar y colorear logcat por tag
3. Usar el Layout Inspector para revisar la UI
4. Reproducir un bug de reproducción con logs dirigidos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar el debugger, logcat y breakpoints de forma efectiva. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Depurar un crash con breakpoints y stacktrace · Filtrar y colorear logcat por tag · Usar el Layout Inspector para revisar la UI · Reproducir un bug de reproducción con logs dirigidos | lista | sí | 3-4 pasos |
| $criterios_clave | El bug reportado se encuentra y corrige con el debugger · Los logs del player usan tags consistentes | lista | sí | calidad verificable |
| $prompt_guia | El player de Ryutify se traba después de diez canciones y no logramos encontrarlo. Guiame en la depuración con breakpoints y logs dirigidos. | texto | no | "Depuración y profiling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El bug reportado se encuentra y corrige con el debugger
- [ ] Los logs del player usan tags consistentes

## Ejemplos de prompts

- "El player de Ryutify se traba después de diez canciones y no logramos encontrarlo. Guiame en la depuración con breakpoints y logs dirigidos."
- "Aplica Depuración y profiling (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El bug reportado se encuentra y corrige con el debugger"
- "Revisa mi android-fundamentos y dime qué pasos de Depuración y profiling me faltan en este nivel"