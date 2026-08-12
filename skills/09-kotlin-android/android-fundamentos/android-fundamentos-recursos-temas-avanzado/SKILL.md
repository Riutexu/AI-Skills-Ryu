---
name: android-fundamentos-recursos-temas-avanzado
description: Recursos y temas · nivel Avanzado · Android y Gradle: la base de la app. Recursos de UI, temas, dark mode y localización hechos bien. Objetivo del nivel: Sistemas de temas con overlays, estilos y recursos por densidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "recursos-temas"
  nivel: avanzado
  stack: "Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests"
---

# Recursos y temas — Avanzado

## Qué hace este skill

Recursos de UI, temas, dark mode y localización hechos bien. En este nivel se entrega: **Sistemas de temas con overlays, estilos y recursos por densidad.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Android y Gradle: la base de la app** (Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Recursos y temas** dentro de Android y Gradle: la base de la app.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir estilos base con overlays por versión
2. Crear recursos por densidad y por idioma
3. Usar temas dinámicos según la portada del álbum
4. Manejar el layout en pantallas grandes y plegables

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Sistemas de temas con overlays, estilos y recursos por densidad. | texto | sí | resultado medible |
| $stack | Android y Gradle: la base de la app | texto | sí | 09-kotlin-android/android-fundamentos |
| $tecnologias | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests | texto | sí | Android Studio, Gradle Kotlin DSL, Activity, Fragment, RecyclerView, Room, manifests |
| $tareas_clave | Definir estilos base con overlays por versión · Crear recursos por densidad y por idioma · Usar temas dinámicos según la portada del álbum · Manejar el layout en pantallas grandes y plegables | lista | sí | 3-4 pasos |
| $criterios_clave | El tema dinámico se aplica sin parpadeo al cambiar de canción · La app se ve bien en tablets y en plegables | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la pantalla de reproducción de Ryutify tome los colores de la portada del álbum en runtime y que se vea bien en tablets. Implementalo con temas dinámicos y adaptativos. | texto | no | "Recursos y temas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tema dinámico se aplica sin parpadeo al cambiar de canción
- [ ] La app se ve bien en tablets y en plegables

## Ejemplos de prompts

- "Quiero que la pantalla de reproducción de Ryutify tome los colores de la portada del álbum en runtime y que se vea bien en tablets. Implementalo con temas dinámicos y adaptativos."
- "Aplica Recursos y temas (nivel avanzado) a mi trabajo actual con Android y Gradle: la base de la app: prioriza El tema dinámico se aplica sin parpadeo al cambiar de canción"
- "Revisa mi android-fundamentos y dime qué pasos de Recursos y temas me faltan en este nivel"