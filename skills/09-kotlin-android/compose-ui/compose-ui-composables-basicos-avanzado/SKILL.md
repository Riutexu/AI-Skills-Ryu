---
name: compose-ui-composables-basicos-avanzado
description: Composables básicos · nivel Avanzado · Jetpack Compose: UI declarativa. Primeros pasos con la UI declarativa: text, column, row y botones. Objetivo del nivel: Reutilizar composables con parámetros, defaults y composición.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "composables-basicos"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Composables básicos — Avanzado

## Qué hace este skill

Primeros pasos con la UI declarativa: text, column, row y botones. En este nivel se entrega: **Reutilizar composables con parámetros, defaults y composición.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Composables básicos** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el composable reusable FilaCancion
2. Usar parámetros con valores por defecto
3. Encapsular la card del álbum como composable
4. Componer y anidar composables sin duplicar estado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reutilizar composables con parámetros, defaults y composición. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Crear el composable reusable FilaCancion · Usar parámetros con valores por defecto · Encapsular la card del álbum como composable · Componer y anidar composables sin duplicar estado | lista | sí | 3-4 pasos |
| $criterios_clave | FilaCancion se usa en búsqueda, biblioteca y playlists · Ningún composable duplica lógica que ya vive en otro | lista | sí | calidad verificable |
| $prompt_guia | Extraé el composable FilaCancion de Ryutify para reutilizarlo en búsqueda, biblioteca y playlists con parámetros por defecto. | texto | no | "Composables básicos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] FilaCancion se usa en búsqueda, biblioteca y playlists
- [ ] Ningún composable duplica lógica que ya vive en otro

## Ejemplos de prompts

- "Extraé el composable FilaCancion de Ryutify para reutilizarlo en búsqueda, biblioteca y playlists con parámetros por defecto."
- "Aplica Composables básicos (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza FilaCancion se usa en búsqueda, biblioteca y playlists"
- "Revisa mi compose-ui y dime qué pasos de Composables básicos me faltan en este nivel"