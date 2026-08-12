---
name: android-fundamentos-background-work-profesional
description: Background work básico · nivel Profesional · Android y Gradle: la base de la app. WorkManager y servicios: tareas diferidas sin morir con la app. Objetivo del nivel: Estrategia de background del producto: qué se sincroniza, cuándo y con cuánta batería.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "background-work"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Background work básico — Profesional

## Qué hace este skill

WorkManager y servicios: tareas diferidas sin morir con la app. En este nivel se entrega: **Estrategia de background del producto: qué se sincroniza, cuándo y con cuánta batería.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Background work básico** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de sincronización de la biblioteca offline
2. Medir el consumo de batería de los workers
3. Elegir entre WorkManager, servicios y coroutines según el caso
4. Documentar el calendario de tareas de background

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de background del producto: qué se sincroniza, cuándo y con cuánta batería. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Definir la política de sincronización de la biblioteca offline · Medir el consumo de batería de los workers · Elegir entre WorkManager, servicios y coroutines según el caso · Documentar el calendario de tareas de background | lista | sí | 3-4 pasos |
| $criterios_clave | El consumo de batería de los workers está dentro del presupuesto definido · La biblioteca offline se sincroniza en la ventana acordada | lista | sí | calidad verificable |
| $prompt_guia | Quiero biblioteca offline en Ryutify con sincronización programada sin gastar batería. Diseñá la estrategia de background con WorkManager y medí el consumo. | texto | no | "Background work básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El consumo de batería de los workers está dentro del presupuesto definido
- [ ] La biblioteca offline se sincroniza en la ventana acordada

## Ejemplos de prompts

- "Quiero biblioteca offline en Ryutify con sincronización programada sin gastar batería. Diseñá la estrategia de background con WorkManager y medí el consumo."
- "Aplica Background work básico (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El consumo de batería de los workers está dentro del presupuesto definido"
- "Revisa mi android-fundamentos y dime qué pasos de Background work básico me faltan en este nivel"