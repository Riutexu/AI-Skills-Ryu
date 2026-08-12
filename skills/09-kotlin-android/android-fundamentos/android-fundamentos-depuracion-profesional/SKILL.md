---
name: android-fundamentos-depuracion-profesional
description: Depuración y profiling · nivel Profesional · Android y Gradle: la base de la app. Encontrar bugs y problemas de rendimiento con las herramientas de Android Studio. Objetivo del nivel: Sistema de depuración del proyecto: logs estructurados, tracing y reproducción de bugs.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "depuracion"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Depuración y profiling — Profesional

## Qué hace este skill

Encontrar bugs y problemas de rendimiento con las herramientas de Android Studio. En este nivel se entrega: **Sistema de depuración del proyecto: logs estructurados, tracing y reproducción de bugs.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Depuración y profiling** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar logging estructurado con niveles y tags por módulo
2. Agregar tracing de rendimiento a las funciones calientes
3. Crear escenarios de reproducción de bugs con datos de prueba
4. Integrar la depuración con el crash reporting

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sistema de depuración del proyecto: logs estructurados, tracing y reproducción de bugs. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Implementar logging estructurado con niveles y tags por módulo · Agregar tracing de rendimiento a las funciones calientes · Crear escenarios de reproducción de bugs con datos de prueba · Integrar la depuración con el crash reporting | lista | sí | 3-4 pasos |
| $criterios_clave | Un bug de reproducción se reproduce con el escenario documentado · Los traces cubren las funciones calientes del player | lista | sí | calidad verificable |
| $prompt_guia | Quiero un sistema de depuración para Ryutify: logs estructurados por módulo, tracing de las funciones calientes y escenarios de prueba para reproducir bugs de reproducción. | texto | no | "Depuración y profiling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un bug de reproducción se reproduce con el escenario documentado
- [ ] Los traces cubren las funciones calientes del player

## Ejemplos de prompts

- "Quiero un sistema de depuración para Ryutify: logs estructurados por módulo, tracing de las funciones calientes y escenarios de prueba para reproducir bugs de reproducción."
- "Aplica Depuración y profiling (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Un bug de reproducción se reproduce con el escenario documentado"
- "Revisa mi android-fundamentos y dime qué pasos de Depuración y profiling me faltan en este nivel"