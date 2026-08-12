---
name: android-fundamentos-depuracion-avanzado
description: Depuración y profiling · nivel Avanzado · Android y Gradle: la base de la app. Encontrar bugs y problemas de rendimiento con las herramientas de Android Studio. Objetivo del nivel: Perfilar CPU, memoria y red para encontrar cuellos de botella.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "depuracion"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Depuración y profiling — Avanzado

## Qué hace este skill

Encontrar bugs y problemas de rendimiento con las herramientas de Android Studio. En este nivel se entrega: **Perfilar CPU, memoria y red para encontrar cuellos de botella.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Depuración y profiling** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Perfilar el uso de CPU durante el scroll de la biblioteca
2. Detectar fugas de memoria con el Memory Profiler
3. Analizar las llamadas de red del cliente innertube
4. Usar heap dump para encontrar objetos retenidos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Perfilar CPU, memoria y red para encontrar cuellos de botella. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Perfilar el uso de CPU durante el scroll de la biblioteca · Detectar fugas de memoria con el Memory Profiler · Analizar las llamadas de red del cliente innertube · Usar heap dump para encontrar objetos retenidos | lista | sí | 3-4 pasos |
| $criterios_clave | El profiler identifica el objeto retenido responsable de la fuga · Las llamadas de red redundantes se eliminan con los datos del profiler | lista | sí | calidad verificable |
| $prompt_guia | Ryutify se traba al scrollear la biblioteca y creo que hay una fuga de memoria. Perfilá CPU y memoria, encontrá el objeto retenido y mostrá la solución. | texto | no | "Depuración y profiling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El profiler identifica el objeto retenido responsable de la fuga
- [ ] Las llamadas de red redundantes se eliminan con los datos del profiler

## Ejemplos de prompts

- "Ryutify se traba al scrollear la biblioteca y creo que hay una fuga de memoria. Perfilá CPU y memoria, encontrá el objeto retenido y mostrá la solución."
- "Aplica Depuración y profiling (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El profiler identifica el objeto retenido responsable de la fuga"
- "Revisa mi android-fundamentos y dime qué pasos de Depuración y profiling me faltan en este nivel"