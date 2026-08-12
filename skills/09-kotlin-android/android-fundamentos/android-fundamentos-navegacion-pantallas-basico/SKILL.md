---
name: android-fundamentos-navegacion-pantallas-basico
description: Navegación entre pantallas · nivel Básico · Android y Gradle: la base de la app. Flujos de navegación claros y con estado preservado entre pantallas. Objetivo del nivel: Navegar entre pantallas con intents y resultados.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "navegacion-pantallas"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Navegación entre pantallas — Básico

## Qué hace este skill

Flujos de navegación claros y con estado preservado entre pantallas. En este nivel se entrega: **Navegar entre pantallas con intents y resultados.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Navegación entre pantallas** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la navegación de Home al Reproductor con un Intent
2. Pasar el videoId como extra
3. Volver con resultados como marcar favorito
4. Manejar el botón back del sistema

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Navegar entre pantallas con intents y resultados. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Crear la navegación de Home al Reproductor con un Intent · Pasar el videoId como extra · Volver con resultados como marcar favorito · Manejar el botón back del sistema | lista | sí | 3-4 pasos |
| $criterios_clave | Abrir una canción desde la lista navega al reproductor con su id · El back vuelve a la lista preservando el scroll | lista | sí | calidad verificable |
| $prompt_guia | Navegá desde la lista de resultados de Ryutify a la pantalla del reproductor pasando el videoId y volvé con back preservando el scroll. | texto | no | "Navegación entre pantallas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Abrir una canción desde la lista navega al reproductor con su id
- [ ] El back vuelve a la lista preservando el scroll

## Ejemplos de prompts

- "Navegá desde la lista de resultados de Ryutify a la pantalla del reproductor pasando el videoId y volvé con back preservando el scroll."
- "Aplica Navegación entre pantallas (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Abrir una canción desde la lista navega al reproductor con su id"
- "Revisa mi android-fundamentos y dime qué pasos de Navegación entre pantallas me faltan en este nivel"