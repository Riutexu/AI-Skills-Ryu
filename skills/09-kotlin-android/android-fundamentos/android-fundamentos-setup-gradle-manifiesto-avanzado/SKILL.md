---
name: android-fundamentos-setup-gradle-manifiesto-avanzado
description: Setup de Gradle y manifiesto · nivel Avanzado · Android y Gradle: la base de la app. Proyecto desde cero con Kotlin DSL, versionado de dependencias y manifiesto correcto. Objetivo del nivel: Organizar dependencias por módulo y mantener el build reproducible.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "setup-gradle-manifiesto"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Setup de Gradle y manifiesto — Avanzado

## Qué hace este skill

Proyecto desde cero con Kotlin DSL, versionado de dependencias y manifiesto correcto. En este nivel se entrega: **Organizar dependencias por módulo y mantener el build reproducible.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Setup de Gradle y manifiesto** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar dependencias por módulo y por tipo de build
2. Configurar flavors de debug y release con endpoints distintos
3. Centralizar versiones en el version catalog
4. Fijar las versiones de Gradle y plugins para builds reproducibles

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Organizar dependencias por módulo y mantener el build reproducible. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Separar dependencias por módulo y por tipo de build · Configurar flavors de debug y release con endpoints distintos · Centralizar versiones en el version catalog · Fijar las versiones de Gradle y plugins para builds reproducibles | lista | sí | 3-4 pasos |
| $criterios_clave | Cambiar una versión de librería se hace en un solo archivo · El build debug y release se comportan distinto solo en lo configurado | lista | sí | calidad verificable |
| $prompt_guia | La configuración de Gradle de Ryutify es un archivo gigante. Refactorizala: version catalog, flavors debug y release con endpoints distintos y dependencias por módulo. | texto | no | "Setup de Gradle y manifiesto" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cambiar una versión de librería se hace en un solo archivo
- [ ] El build debug y release se comportan distinto solo en lo configurado

## Ejemplos de prompts

- "La configuración de Gradle de Ryutify es un archivo gigante. Refactorizala: version catalog, flavors debug y release con endpoints distintos y dependencias por módulo."
- "Aplica Setup de Gradle y manifiesto (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza Cambiar una versión de librería se hace en un solo archivo"
- "Revisa mi android-fundamentos y dime qué pasos de Setup de Gradle y manifiesto me faltan en este nivel"