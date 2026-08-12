---
name: android-fundamentos-permisos-avanzado
description: Permisos · nivel Avanzado · Android y Gradle: la base de la app. Manejo de permisos runtime sin fricción y con buenos estados de denegación. Objetivo del nivel: Flujos de racionalización y manejo de denegaciones persistentes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "permisos"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Permisos — Avanzado

## Qué hace este skill

Manejo de permisos runtime sin fricción y con buenos estados de denegación. En este nivel se entrega: **Flujos de racionalización y manejo de denegaciones persistentes.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Permisos** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mostrar racionalización antes de la solicitud
2. Detectar la denegación persistente y llevar a ajustes
3. Degradar funcionalidad cuando no hay permiso
4. Manejar permisos de fondo específicos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Flujos de racionalización y manejo de denegaciones persistentes. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Mostrar racionalización antes de la solicitud · Detectar la denegación persistente y llevar a ajustes · Degradar funcionalidad cuando no hay permiso · Manejar permisos de fondo específicos | lista | sí | 3-4 pasos |
| $criterios_clave | El usuario que deniega entiende por qué se pide el permiso · Sin permiso la app funciona degradada sin crashear | lista | sí | calidad verificable |
| $prompt_guia | Si el usuario niega dos veces el permiso de notificaciones en Ryutify quiero llevarlo a ajustes con un mensaje claro y que la app siga funcionando sin el control en la barra. | texto | no | "Permisos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El usuario que deniega entiende por qué se pide el permiso
- [ ] Sin permiso la app funciona degradada sin crashear

## Ejemplos de prompts

- "Si el usuario niega dos veces el permiso de notificaciones en Ryutify quiero llevarlo a ajustes con un mensaje claro y que la app siga funcionando sin el control en la barra."
- "Aplica Permisos (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El usuario que deniega entiende por qué se pide el permiso"
- "Revisa mi android-fundamentos y dime qué pasos de Permisos me faltan en este nivel"