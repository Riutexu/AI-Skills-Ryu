---
name: android-fundamentos-proguard-r8-profesional
description: ProGuard y R8 · nivel Profesional · Android y Gradle: la base de la app. Ofuscación y reducción de código sin romper la app en release. Objetivo del nivel: Perfilar el ahorro real y el riesgo de R8 en el pipeline de release.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "proguard-r8"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# ProGuard y R8 — Profesional

## Qué hace este skill

Ofuscación y reducción de código sin romper la app en release. En este nivel se entrega: **Perfilar el ahorro real y el riesgo de R8 en el pipeline de release.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ProGuard y R8** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Medir el ahorro de tamaño por módulo
2. Mantener reglas mínimas y revisarlas en cada release
3. Automatizar la desofuscación de crash reports
4. Comparar builds con y sin R8 en el CI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Perfilar el ahorro real y el riesgo de R8 en el pipeline de release. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Medir el ahorro de tamaño por módulo · Mantener reglas mínimas y revisarlas en cada release · Automatizar la desofuscación de crash reports · Comparar builds con y sin R8 en el CI | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte de ahorro de R8 está en el CI · No hay reglas keep obsoletas en el repositorio | lista | sí | calidad verificable |
| $prompt_guia | Auditá las reglas R8 de Ryutify: eliminá keeps obsoletos, medí el ahorro por módulo y automatizá la desofuscación de crashes en el CI. | texto | no | "ProGuard y R8" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte de ahorro de R8 está en el CI
- [ ] No hay reglas keep obsoletas en el repositorio

## Ejemplos de prompts

- "Auditá las reglas R8 de Ryutify: eliminá keeps obsoletos, medí el ahorro por módulo y automatizá la desofuscación de crashes en el CI."
- "Aplica ProGuard y R8 (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El reporte de ahorro de R8 está en el CI"
- "Revisa mi android-fundamentos y dime qué pasos de ProGuard y R8 me faltan en este nivel"