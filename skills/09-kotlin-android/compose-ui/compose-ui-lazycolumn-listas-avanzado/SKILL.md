---
name: compose-ui-lazycolumn-listas-avanzado
description: Listas con LazyColumn · nivel Avanzado · Jetpack Compose: UI declarativa. Listas eficientes y de todo tipo con LazyColumn y LazyGrid. Objetivo del nivel: Listas complejas: sticky headers, grids y carga paginada.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "lazycolumn-listas"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Listas con LazyColumn — Avanzado

## Qué hace este skill

Listas eficientes y de todo tipo con LazyColumn y LazyGrid. En este nivel se entrega: **Listas complejas: sticky headers, grids y carga paginada.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Listas con LazyColumn** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar sticky headers por artista
2. Crear la grilla de álbumes con LazyVerticalGrid
3. Implementar la carga paginada al llegar al final
4. Manejar el scroll hasta una canción determinada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Listas complejas: sticky headers, grids y carga paginada. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Agregar sticky headers por artista · Crear la grilla de álbumes con LazyVerticalGrid · Implementar la carga paginada al llegar al final · Manejar el scroll hasta una canción determinada | lista | sí | 3-4 pasos |
| $criterios_clave | Los headers se mantienen fijos al scrollear · La carga paginada no salta la posición del usuario | lista | sí | calidad verificable |
| $prompt_guia | La biblioteca de Ryutify necesita agruparse por artista con sticky headers y la sección de álbumes en grilla con carga paginada. | texto | no | "Listas con LazyColumn" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los headers se mantienen fijos al scrollear
- [ ] La carga paginada no salta la posición del usuario

## Ejemplos de prompts

- "La biblioteca de Ryutify necesita agruparse por artista con sticky headers y la sección de álbumes en grilla con carga paginada."
- "Aplica Listas con LazyColumn (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Los headers se mantienen fijos al scrollear"
- "Revisa mi compose-ui y dime qué pasos de Listas con LazyColumn me faltan en este nivel"