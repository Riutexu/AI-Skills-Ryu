---
name: android-fundamentos-procesos-configuracion-avanzado
description: Procesos y configuración de la app · nivel Avanzado · Android y Gradle: la base de la app. Entiende el modelo de procesos de Android y cómo configurar la app globalmente. Objetivo del nivel: Manejar el reinicio de procesos, multiproceso y configuración por estado.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "procesos-configuracion"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Procesos y configuración de la app — Avanzado

## Qué hace este skill

Entiende el modelo de procesos de Android y cómo configurar la app globalmente. En este nivel se entrega: **Manejar el reinicio de procesos, multiproceso y configuración por estado.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Procesos y configuración de la app** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Entender cuándo Android mata y recrea procesos
2. Guardar y restaurar estado ante el recreado del proceso
3. Separar el proceso del servicio de audio si hace falta
4. Usar configuration qualifiers para los recursos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar el reinicio de procesos, multiproceso y configuración por estado. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Entender cuándo Android mata y recrea procesos · Guardar y restaurar estado ante el recreado del proceso · Separar el proceso del servicio de audio si hace falta · Usar configuration qualifiers para los recursos | lista | sí | 3-4 pasos |
| $criterios_clave | La app restaura su estado tras el recreado del proceso · El proceso del audio y el de la UI no duplican estado crítico | lista | sí | calidad verificable |
| $prompt_guia | Cuando Android mata el proceso de Ryutify en background, al volver se pierde la pantalla. Diseñá la restauración de estado completa para el recreado de procesos. | texto | no | "Procesos y configuración de la app" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La app restaura su estado tras el recreado del proceso
- [ ] El proceso del audio y el de la UI no duplican estado crítico

## Ejemplos de prompts

- "Cuando Android mata el proceso de Ryutify en background, al volver se pierde la pantalla. Diseñá la restauración de estado completa para el recreado de procesos."
- "Aplica Procesos y configuración de la app (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La app restaura su estado tras el recreado del proceso"
- "Revisa mi android-fundamentos y dime qué pasos de Procesos y configuración de la app me faltan en este nivel"