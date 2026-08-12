---
name: kotlin-core-extensiones-scope-avanzado
description: Extensiones y scope functions · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Código idiomático con extensiones y el uso correcto de let, run, with, apply y also. Objetivo del nivel: Componer extensiones y scope functions sin abusar ni oscurecer el código.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "extensiones-scope"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Extensiones y scope functions — Avanzado

## Qué hace este skill

Código idiomático con extensiones y el uso correcto de let, run, with, apply y also. En este nivel se entrega: **Componer extensiones y scope functions sin abusar ni oscurecer el código.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Extensiones y scope functions** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Encadenar scope functions con criterio en un pipeline de parsing
2. Crear extensiones con receiver genérico para la capa de red
3. Detectar en code review el abuso de run y let que reduce legibilidad
4. Usar scope functions con receivers nullable de forma segura

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Componer extensiones y scope functions sin abusar ni oscurecer el código. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Encadenar scope functions con criterio en un pipeline de parsing · Crear extensiones con receiver genérico para la capa de red · Detectar en code review el abuso de run y let que reduce legibilidad · Usar scope functions con receivers nullable de forma segura | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline de parsing de innertube usa a lo sumo dos scope functions por función · Las extensiones de red se reutilizan en búsqueda, detalle y playlists | lista | sí | calidad verificable |
| $prompt_guia | En el parser de innertube se me acumularon let y run anidados que no se entienden. Refactorizá el pipeline con extensiones con nombre claro y menos scope functions. | texto | no | "Extensiones y scope functions" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline de parsing de innertube usa a lo sumo dos scope functions por función
- [ ] Las extensiones de red se reutilizan en búsqueda, detalle y playlists

## Ejemplos de prompts

- "En el parser de innertube se me acumularon let y run anidados que no se entienden. Refactorizá el pipeline con extensiones con nombre claro y menos scope functions."
- "Aplica Extensiones y scope functions (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El pipeline de parsing de innertube usa a lo sumo dos scope functions por función"
- "Revisa mi kotlin-core y dime qué pasos de Extensiones y scope functions me faltan en este nivel"