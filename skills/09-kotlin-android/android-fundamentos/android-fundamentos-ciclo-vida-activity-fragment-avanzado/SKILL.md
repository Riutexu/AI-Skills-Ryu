---
name: android-fundamentos-ciclo-vida-activity-fragment-avanzado
description: Ciclo de vida de Activity y Fragment · nivel Avanzado · Android y Gradle: la base de la app. Domina cuándo se crea, pausa y destruye cada pantalla para no perder estado. Objetivo del nivel: Coordinar fragmentos y estado con ViewModel y SavedStateHandle.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "ciclo-vida-activity-fragment"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Ciclo de vida de Activity y Fragment — Avanzado

## Qué hace este skill

Domina cuándo se crea, pausa y destruye cada pantalla para no perder estado. En este nivel se entrega: **Coordinar fragmentos y estado con ViewModel y SavedStateHandle.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ciclo de vida de Activity y Fragment** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar la pantalla en fragmentos con su propio estado
2. Compartir el ViewModel entre fragmentos del mismo host
3. Guardar el estado transitorio con onSaveInstanceState
4. Manejar el reingreso a la app tras la muerte del proceso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Coordinar fragmentos y estado con ViewModel y SavedStateHandle. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Separar la pantalla en fragmentos con su propio estado · Compartir el ViewModel entre fragmentos del mismo host · Guardar el estado transitorio con onSaveInstanceState · Manejar el reingreso a la app tras la muerte del proceso | lista | sí | 3-4 pasos |
| $criterios_clave | El ViewModel compartido no se crea dos veces entre fragmentos · Tras matar el proceso, la app vuelve a la canción que sonaba | lista | sí | calidad verificable |
| $prompt_guia | La pantalla de reproducción de Ryutify tiene tabs y cada cambio de tab pierde estado. Compartí el ViewModel entre fragmentos y persistí la canción en curso contra la muerte del proceso. | texto | no | "Ciclo de vida de Activity y Fragment" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El ViewModel compartido no se crea dos veces entre fragmentos
- [ ] Tras matar el proceso, la app vuelve a la canción que sonaba

## Ejemplos de prompts

- "La pantalla de reproducción de Ryutify tiene tabs y cada cambio de tab pierde estado. Compartí el ViewModel entre fragmentos y persistí la canción en curso contra la muerte del proceso."
- "Aplica Ciclo de vida de Activity y Fragment (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El ViewModel compartido no se crea dos veces entre fragmentos"
- "Revisa mi android-fundamentos y dime qué pasos de Ciclo de vida de Activity y Fragment me faltan en este nivel"