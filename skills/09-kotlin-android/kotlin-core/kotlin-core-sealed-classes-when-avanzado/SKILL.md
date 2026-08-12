---
name: kotlin-core-sealed-classes-when-avanzado
description: Sealed classes y when · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Modela estados y errores con sealed classes y when exhaustivo. Objetivo del nivel: Representar resultados y errores con sealed classes parametrizadas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "sealed-classes-when"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Sealed classes y when — Avanzado

## Qué hace este skill

Modela estados y errores con sealed classes y when exhaustivo. En este nivel se entrega: **Representar resultados y errores con sealed classes parametrizadas.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sealed classes y when** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar el resultado de búsqueda como sellado: Exito, Vacio y Error
2. Agregar payload a cada rama: datos, mensaje y código de error
3. Aplicar el patrón de mapeo de errores de la capa de datos
4. Consumir ramas anidadas con when dentro de when

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Representar resultados y errores con sealed classes parametrizadas. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Modelar el resultado de búsqueda como sellado: Exito, Vacio y Error · Agregar payload a cada rama: datos, mensaje y código de error · Aplicar el patrón de mapeo de errores de la capa de datos · Consumir ramas anidadas con when dentro de when | lista | sí | 3-4 pasos |
| $criterios_clave | El resultado de búsqueda transporta datos y error con su causa en cada rama · Ningún caso de error cae en la rama de éxito | lista | sí | calidad verificable |
| $prompt_guia | La búsqueda de Ryutify devuelve a veces vacío, a veces éxito con canciones y a veces error de red. Modelalo con una sealed class genérica y mostrá el manejo en el ViewModel. | texto | no | "Sealed classes y when" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El resultado de búsqueda transporta datos y error con su causa en cada rama
- [ ] Ningún caso de error cae en la rama de éxito

## Ejemplos de prompts

- "La búsqueda de Ryutify devuelve a veces vacío, a veces éxito con canciones y a veces error de red. Modelalo con una sealed class genérica y mostrá el manejo en el ViewModel."
- "Aplica Sealed classes y when (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El resultado de búsqueda transporta datos y error con su causa en cada rama"
- "Revisa mi kotlin-core y dime qué pasos de Sealed classes y when me faltan en este nivel"