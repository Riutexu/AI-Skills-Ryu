---
name: android-fundamentos-procesos-configuracion-basico
description: Procesos y configuración de la app · nivel Básico · Android y Gradle: la base de la app. Entiende el modelo de procesos de Android y cómo configurar la app globalmente. Objetivo del nivel: Crear la clase Application y la configuración global de la app.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "procesos-configuracion"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Procesos y configuración de la app — Básico

## Qué hace este skill

Entiende el modelo de procesos de Android y cómo configurar la app globalmente. En este nivel se entrega: **Crear la clase Application y la configuración global de la app.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Procesos y configuración de la app** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la clase Application de Ryutify
2. Inicializar el grafo de dependencias en onCreate
3. Registrar la Application en el manifiesto
4. Compartir el Application context de forma controlada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear la clase Application y la configuración global de la app. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Crear la clase Application de Ryutify · Inicializar el grafo de dependencias en onCreate · Registrar la Application en el manifiesto · Compartir el Application context de forma controlada | lista | sí | 3-4 pasos |
| $criterios_clave | La Application se registra en el manifiesto y se instancia una sola vez · El grafo de dependencias está disponible en toda la app | lista | sí | calidad verificable |
| $prompt_guia | Necesito una Application class para Ryutify donde se inicialice el contenedor de dependencias y se registre en el manifiesto. Hacela. | texto | no | "Procesos y configuración de la app" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La Application se registra en el manifiesto y se instancia una sola vez
- [ ] El grafo de dependencias está disponible en toda la app

## Ejemplos de prompts

- "Necesito una Application class para Ryutify donde se inicialice el contenedor de dependencias y se registre en el manifiesto. Hacela."
- "Aplica Procesos y configuración de la app (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La Application se registra en el manifiesto y se instancia una sola vez"
- "Revisa mi android-fundamentos y dime qué pasos de Procesos y configuración de la app me faltan en este nivel"