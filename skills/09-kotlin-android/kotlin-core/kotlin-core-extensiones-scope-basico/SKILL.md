---
name: kotlin-core-extensiones-scope-basico
description: Extensiones y scope functions · nivel Básico · Kotlin moderno: fundamentos profesionales. Código idiomático con extensiones y el uso correcto de let, run, with, apply y also. Objetivo del nivel: Escribir extensiones útiles y elegir la scope function correcta.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "extensiones-scope"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Extensiones y scope functions — Básico

## Qué hace este skill

Código idiomático con extensiones y el uso correcto de let, run, with, apply y also. En este nivel se entrega: **Escribir extensiones útiles y elegir la scope function correcta.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Extensiones y scope functions** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear extensiones como String.formatearDuracion y Long.aHora
2. Usar let para evitar null-checks verbosos
3. Usar apply para configurar el ExoPlayer al inicializarlo
4. Usar also para loguear sin alterar el resultado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir extensiones útiles y elegir la scope function correcta. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Crear extensiones como String.formatearDuracion y Long.aHora · Usar let para evitar null-checks verbosos · Usar apply para configurar el ExoPlayer al inicializarlo · Usar also para loguear sin alterar el resultado | lista | sí | 3-4 pasos |
| $criterios_clave | La inicialización del player usa apply y no repite el nombre de la variable · Las extensiones de formato viven en un archivo y se reutilizan en la app | lista | sí | calidad verificable |
| $prompt_guia | Configuro el ExoPlayer de Ryutify y el código es una ensalada de asignaciones. Refactorizalo con apply y creá extensiones para formatear la duración de la canción. | texto | no | "Extensiones y scope functions" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La inicialización del player usa apply y no repite el nombre de la variable
- [ ] Las extensiones de formato viven en un archivo y se reutilizan en la app

## Ejemplos de prompts

- "Configuro el ExoPlayer de Ryutify y el código es una ensalada de asignaciones. Refactorizalo con apply y creá extensiones para formatear la duración de la canción."
- "Aplica Extensiones y scope functions (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza La inicialización del player usa apply y no repite el nombre de la variable"
- "Revisa mi kotlin-core y dime qué pasos de Extensiones y scope functions me faltan en este nivel"