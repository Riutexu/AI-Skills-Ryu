---
name: kotlin-core-clases-data-classes-avanzado
description: Clases y data classes · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Modela el dominio de Ryutify con clases, data classes y objetos de forma limpia. Objetivo del nivel: Aplicar composición, herencia y tipos anidados en los modelos del dominio.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "clases-data-classes"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Clases y data classes — Avanzado

## Qué hace este skill

Modela el dominio de Ryutify con clases, data classes y objetos de forma limpia. En este nivel se entrega: **Aplicar composición, herencia y tipos anidados en los modelos del dominio.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Clases y data classes** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Componer modelos con data classes anidadas como Album con lista de canciones
2. Usar sealed class para representar estados de una canción (disponible, restringida, eliminada)
3. Definir companion object para fábricas y constantes de un modelo
4. Implementar equals semántico personalizado cuando el generado no alcanza

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar composición, herencia y tipos anidados en los modelos del dominio. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Componer modelos con data classes anidadas como Album con lista de canciones · Usar sealed class para representar estados de una canción (disponible, restringida, eliminada) · Definir companion object para fábricas y constantes de un modelo · Implementar equals semántico personalizado cuando el generado no alcanza | lista | sí | 3-4 pasos |
| $criterios_clave | El modelo Album no duplica canciones al componerse desde listas parciales · Los estados sellados se consumen con when exhaustivo en toda la app | lista | sí | calidad verificable |
| $prompt_guia | En Ryutify una canción puede estar disponible, estar geolimitada o haber sido eliminada del catálogo. Modelá eso con una sealed class y mostrá cómo la consumís en la UI. | texto | no | "Clases y data classes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El modelo Album no duplica canciones al componerse desde listas parciales
- [ ] Los estados sellados se consumen con when exhaustivo en toda la app

## Ejemplos de prompts

- "En Ryutify una canción puede estar disponible, estar geolimitada o haber sido eliminada del catálogo. Modelá eso con una sealed class y mostrá cómo la consumís en la UI."
- "Aplica Clases y data classes (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El modelo Album no duplica canciones al componerse desde listas parciales"
- "Revisa mi kotlin-core y dime qué pasos de Clases y data classes me faltan en este nivel"