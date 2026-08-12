---
name: kotlin-core-funciones-lambdas-avanzado
description: Funciones y lambdas · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Escribe funciones claras, con parámetros por defecto y lambdas que fluyen en el código. Objetivo del nivel: Crear funciones de orden superior reutilizables con lambdas con receiver y trailing lambda.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "funciones-lambdas"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Funciones y lambdas — Avanzado

## Qué hace este skill

Escribe funciones claras, con parámetros por defecto y lambdas que fluyen en el código. En este nivel se entrega: **Crear funciones de orden superior reutilizables con lambdas con receiver y trailing lambda.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones y lambdas** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar una función de orden superior para medir el tiempo de operaciones de red
2. Usar trailing lambda y receiver en builders de configuración
3. Encadenar funciones puras para transformar una lista de videos en la cola
4. Evitar capturas mutables dentro de lambdas usadas en coroutines

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Crear funciones de orden superior reutilizables con lambdas con receiver y trailing lambda. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Implementar una función de orden superior para medir el tiempo de operaciones de red · Usar trailing lambda y receiver en builders de configuración · Encadenar funciones puras para transformar una lista de videos en la cola · Evitar capturas mutables dentro de lambdas usadas en coroutines | lista | sí | 3-4 pasos |
| $criterios_clave | La función medirTiempo no deja estado global y sirve para red y base de datos · Ninguna lambda captura una variable var modificada fuera de contexto de coroutine | lista | sí | calidad verificable |
| $prompt_guia | Necesito una función medirTiempo que envuelva cualquier bloque y loguee cuánto tardó, para comparar el tiempo de respuesta de la API innertube contra la caché local de Ryutify. | texto | no | "Funciones y lambdas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La función medirTiempo no deja estado global y sirve para red y base de datos
- [ ] Ninguna lambda captura una variable var modificada fuera de contexto de coroutine

## Ejemplos de prompts

- "Necesito una función medirTiempo que envuelva cualquier bloque y loguee cuánto tardó, para comparar el tiempo de respuesta de la API innertube contra la caché local de Ryutify."
- "Aplica Funciones y lambdas (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza La función medirTiempo no deja estado global y sirve para red y base de datos"
- "Revisa mi kotlin-core y dime qué pasos de Funciones y lambdas me faltan en este nivel"