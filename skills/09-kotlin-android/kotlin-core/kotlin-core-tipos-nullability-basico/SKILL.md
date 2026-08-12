---
name: kotlin-core-tipos-nullability-basico
description: Tipos y nullability · nivel Básico · Kotlin moderno: fundamentos profesionales. Domina el sistema de tipos y la seguridad ante nulos, la raíz de los crash en Android. Objetivo del nivel: Declarar tipos seguros y distinguir nullable de no nullable en el código del día a día.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "tipos-nullability"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Tipos y nullability — Básico

## Qué hace este skill

Domina el sistema de tipos y la seguridad ante nulos, la raíz de los crash en Android. En este nivel se entrega: **Declarar tipos seguros y distinguir nullable de no nullable en el código del día a día.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos y nullability** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Tipar variables, parámetros y retornos de funciones con y sin nullable
2. Usar elvis, safe call y not-null en un ejemplo de metadata de una canción
3. Convertir un modelo con campos nullable a objetos con valores por defecto
4. Evitar el uso de !! salvo en casos justificados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Declarar tipos seguros y distinguir nullable de no nullable en el código del día a día. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Tipar variables, parámetros y retornos de funciones con y sin nullable · Usar elvis, safe call y not-null en un ejemplo de metadata de una canción · Convertir un modelo con campos nullable a objetos con valores por defecto · Evitar el uso de !! salvo en casos justificados | lista | sí | 3-4 pasos |
| $criterios_clave | El código compila sin warnings de platform types · No aparece ningún !! sin comentario de justificación | lista | sí | calidad verificable |
| $prompt_guia | Refactorizá esta función que parsea metadata de una canción de YouTube para que devuelva tipos nullable explícitos en vez de String con valores vacíos. | texto | no | "Tipos y nullability" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El código compila sin warnings de platform types
- [ ] No aparece ningún !! sin comentario de justificación

## Ejemplos de prompts

- "Refactorizá esta función que parsea metadata de una canción de YouTube para que devuelva tipos nullable explícitos en vez de String con valores vacíos."
- "Aplica Tipos y nullability (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El código compila sin warnings de platform types"
- "Revisa mi kotlin-core y dime qué pasos de Tipos y nullability me faltan en este nivel"