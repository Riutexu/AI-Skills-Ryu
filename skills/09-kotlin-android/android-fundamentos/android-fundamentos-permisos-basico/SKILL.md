---
name: android-fundamentos-permisos-basico
description: Permisos · nivel Básico · Android y Gradle: la base de la app. Manejo de permisos runtime sin fricción y con buenos estados de denegación. Objetivo del nivel: Declarar y solicitar permisos runtime correctamente.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "permisos"
  nivel: basico
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Permisos — Básico

## Qué hace este skill

Manejo de permisos runtime sin fricción y con buenos estados de denegación. En este nivel se entrega: **Declarar y solicitar permisos runtime correctamente.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Permisos** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar los permisos necesarios en el manifiesto
2. Solicitar permisos runtime con Activity Result API
3. Manejar la concesión y la denegación
4. Solicitar el permiso de notificaciones si corresponde

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Declarar y solicitar permisos runtime correctamente. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Declarar los permisos necesarios en el manifiesto · Solicitar permisos runtime con Activity Result API · Manejar la concesión y la denegación · Solicitar el permiso de notificaciones si corresponde | lista | sí | 3-4 pasos |
| $criterios_clave | La solicitud de permisos usa la Activity Result API · La denegación muestra un mensaje y no crashea | lista | sí | calidad verificable |
| $prompt_guia | Ryutify necesita permiso de notificaciones para el control de reproducción. Implementá la solicitud runtime con Activity Result API y los estados de denegación. | texto | no | "Permisos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La solicitud de permisos usa la Activity Result API
- [ ] La denegación muestra un mensaje y no crashea

## Ejemplos de prompts

- "Ryutify necesita permiso de notificaciones para el control de reproducción. Implementá la solicitud runtime con Activity Result API y los estados de denegación."
- "Aplica Permisos (nivel basico) a mi trabajo actual con Android y Gradle: la base de la app: prioriza La solicitud de permisos usa la Activity Result API"
- "Revisa mi android-fundamentos y dime qué pasos de Permisos me faltan en este nivel"