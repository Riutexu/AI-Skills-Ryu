---
name: android-fundamentos-navegacion-pantallas-profesional
description: Navegación entre pantallas · nivel Profesional · Android y Gradle: la base de la app. Flujos de navegación claros y con estado preservado entre pantallas. Objetivo del nivel: Diseñar el grafo de navegación del producto y el flujo de retorno correcto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "navegacion-pantallas"
  nivel: profesional
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Navegación entre pantallas — Profesional

## Qué hace este skill

Flujos de navegación claros y con estado preservado entre pantallas. En este nivel se entrega: **Diseñar el grafo de navegación del producto y el flujo de retorno correcto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Navegación entre pantallas** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar el grafo de navegación completo
2. Definir el flujo de retorno a la sesión de escucha
3. Integrar la navegación con el estado del player
4. Testear el back stack en escenarios de proceso muerto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el grafo de navegación del producto y el flujo de retorno correcto. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Documentar el grafo de navegación completo · Definir el flujo de retorno a la sesión de escucha · Integrar la navegación con el estado del player · Testear el back stack en escenarios de proceso muerto | lista | sí | 3-4 pasos |
| $criterios_clave | El back desde cualquier pantalla devuelve al lugar esperado · El flujo de retorno restaura la sesión de escucha activa | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el grafo de navegación completo de Ryutify: home, búsqueda, reproductor y playlist, con flujo de retorno que restaure la sesión de escucha y maneje el proceso muerto. | texto | no | "Navegación entre pantallas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El back desde cualquier pantalla devuelve al lugar esperado
- [ ] El flujo de retorno restaura la sesión de escucha activa

## Ejemplos de prompts

- "Diseñá el grafo de navegación completo de Ryutify: home, búsqueda, reproductor y playlist, con flujo de retorno que restaure la sesión de escucha y maneje el proceso muerto."
- "Aplica Navegación entre pantallas (nivel profesional) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El back desde cualquier pantalla devuelve al lugar esperado"
- "Revisa mi android-fundamentos y dime qué pasos de Navegación entre pantallas me faltan en este nivel"