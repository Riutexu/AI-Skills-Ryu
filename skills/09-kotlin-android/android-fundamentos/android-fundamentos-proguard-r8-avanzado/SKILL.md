---
name: android-fundamentos-proguard-r8-avanzado
description: ProGuard y R8 · nivel Avanzado · Android y Gradle: la base de la app. Ofuscación y reducción de código sin romper la app en release. Objetivo del nivel: Reglas de keep y compatibilidad con librerías que usan reflexión.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "proguard-r8"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# ProGuard y R8 — Avanzado

## Qué hace este skill

Ofuscación y reducción de código sin romper la app en release. En este nivel se entrega: **Reglas de keep y compatibilidad con librerías que usan reflexión.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ProGuard y R8** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar reglas keep para los modelos serializados
2. Configurar las consumer rules de las librerías del player
3. Testear el release ofuscado en un device real
4. Resolver stacktraces ofuscados con los mapping files

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reglas de keep y compatibilidad con librerías que usan reflexión. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Agregar reglas keep para los modelos serializados · Configurar las consumer rules de las librerías del player · Testear el release ofuscado en un device real · Resolver stacktraces ofuscados con los mapping files | lista | sí | 3-4 pasos |
| $criterios_clave | La serialización JSON sigue funcionando con R8 · Los crash reports se desofuscan con el mapping | lista | sí | calidad verificable |
| $prompt_guia | Con R8 activo el parseo de innertube en Ryutify se rompe. Agregá las reglas keep para la serialización y subí el mapping al crash reporter. | texto | no | "ProGuard y R8" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La serialización JSON sigue funcionando con R8
- [ ] Los crash reports se desofuscan con el mapping

## Ejemplos de prompts

- "Con R8 activo el parseo de innertube en Ryutify se rompe. Agregá las reglas keep para la serialización y subí el mapping al crash reporter."
- "Aplica ProGuard y R8 (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La serialización JSON sigue funcionando con R8"
- "Revisa mi android-fundamentos y dime qué pasos de ProGuard y R8 me faltan en este nivel"