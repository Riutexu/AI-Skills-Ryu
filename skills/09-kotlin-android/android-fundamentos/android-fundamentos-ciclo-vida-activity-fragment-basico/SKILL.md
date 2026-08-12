---
name: android-fundamentos-ciclo-vida-activity-fragment-basico
description: Ciclo de vida de Activity y Fragment · nivel Básico · Android y Gradle: la base de la app. Domina cuándo se crea, pausa y destruye cada pantalla para no perder estado. Objetivo del nivel: Conocer el ciclo de vida de Activity y Fragment y responder a cada estado.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "ciclo-vida-activity-fragment"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Ciclo de vida de Activity y Fragment — Básico

## Qué hace este skill

Domina cuándo se crea, pausa y destruye cada pantalla para no perder estado. En este nivel se entrega: **Conocer el ciclo de vida de Activity y Fragment y responder a cada estado.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ciclo de vida de Activity y Fragment** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mapear el ciclo de vida de la Activity de reproducción
2. Usar onPause para pausar el player al salir de la app
3. Reanudar en onResume con el estado correcto
4. Distinguir rotación de cierre real de la Activity

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Conocer el ciclo de vida de Activity y Fragment y responder a cada estado. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Mapear el ciclo de vida de la Activity de reproducción · Usar onPause para pausar el player al salir de la app · Reanudar en onResume con el estado correcto · Distinguir rotación de cierre real de la Activity | lista | sí | 3-4 pasos |
| $criterios_clave | El player se pausa en onPause y reanuda en onResume sin reiniciarse · La rotación no duplica ni pierde el estado de la UI | lista | sí | calidad verificable |
| $prompt_guia | Cuando minimizo Ryutify el audio sigue sonando pero quiero pausarlo al salir de la app y reanudarlo al volver. Implementalo con el ciclo de vida de la Activity. | texto | no | "Ciclo de vida de Activity y Fragment" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El player se pausa en onPause y reanuda en onResume sin reiniciarse
- [ ] La rotación no duplica ni pierde el estado de la UI

## Ejemplos de prompts

- "Cuando minimizo Ryutify el audio sigue sonando pero quiero pausarlo al salir de la app y reanudarlo al volver. Implementalo con el ciclo de vida de la Activity."
- "Aplica Ciclo de vida de Activity y Fragment (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El player se pausa en onPause y reanuda en onResume sin reiniciarse"
- "Revisa mi android-fundamentos y dime qué pasos de Ciclo de vida de Activity y Fragment me faltan en este nivel"