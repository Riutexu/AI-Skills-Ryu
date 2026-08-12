---
name: android-fundamentos-navegacion-pantallas-avanzado
description: Navegación entre pantallas · nivel Avanzado · Android y Gradle: la base de la app. Flujos de navegación claros y con estado preservado entre pantallas. Objetivo del nivel: Navegación con argumentos tipados y flujos de error.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "navegacion-pantallas"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Navegación entre pantallas — Avanzado

## Qué hace este skill

Flujos de navegación claros y con estado preservado entre pantallas. En este nivel se entrega: **Navegación con argumentos tipados y flujos de error.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Navegación entre pantallas** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar argumentos tipados en la navegación
2. Definir los deep links de la app
3. Manejar la navegación ante estados de error
4. Evitar pantallas duplicadas en el back stack

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Navegación con argumentos tipados y flujos de error. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Usar argumentos tipados en la navegación · Definir los deep links de la app · Manejar la navegación ante estados de error · Evitar pantallas duplicadas en el back stack | lista | sí | 3-4 pasos |
| $criterios_clave | Los deep links abren la canción correcta desde una URL · Un error de carga no duplica pantallas en el stack | lista | sí | calidad verificable |
| $prompt_guia | Quiero deep links en Ryutify tipo ryutify://cancion/VIDEOID y navegación tipada sin strings sueltos. Implementalo y manejá los estados de error. | texto | no | "Navegación entre pantallas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los deep links abren la canción correcta desde una URL
- [ ] Un error de carga no duplica pantallas en el stack

## Ejemplos de prompts

- "Quiero deep links en Ryutify tipo ryutify://cancion/VIDEOID y navegación tipada sin strings sueltos. Implementalo y manejá los estados de error."
- "Aplica Navegación entre pantallas (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Los deep links abren la canción correcta desde una URL"
- "Revisa mi android-fundamentos y dime qué pasos de Navegación entre pantallas me faltan en este nivel"