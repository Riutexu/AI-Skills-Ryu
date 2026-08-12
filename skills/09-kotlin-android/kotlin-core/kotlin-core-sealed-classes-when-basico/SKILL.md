---
name: kotlin-core-sealed-classes-when-basico
description: Sealed classes y when · nivel Básico · Kotlin moderno: fundamentos profesionales. Modela estados y errores con sealed classes y when exhaustivo. Objetivo del nivel: Definir sealed classes simples y usar when para cubrir todos los casos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "sealed-classes-when"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Sealed classes y when — Básico

## Qué hace este skill

Modela estados y errores con sealed classes y when exhaustivo. En este nivel se entrega: **Definir sealed classes simples y usar when para cubrir todos los casos.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sealed classes y when** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar el estado de reproducción: Reproduciendo, Pausado, Detenido y Cargando
2. Consumir el estado con when exhaustivo en la UI
3. Agregar un caso nuevo y verificar que el compilador marca los when incompletos
4. Usar when como expresión para devolver textos de UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Definir sealed classes simples y usar when para cubrir todos los casos. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Modelar el estado de reproducción: Reproduciendo, Pausado, Detenido y Cargando · Consumir el estado con when exhaustivo en la UI · Agregar un caso nuevo y verificar que el compilador marca los when incompletos · Usar when como expresión para devolver textos de UI | lista | sí | 3-4 pasos |
| $criterios_clave | El when sobre el estado de reproducción no tiene rama else · Agregar una rama nueva rompe la compilación de los when que la ignoran | lista | sí | calidad verificable |
| $prompt_guia | Modelá el estado de reproducción de Ryutify con una sealed class y mostrá cómo la pantalla actual la consume con when exhaustivo para el botón de play y pausa. | texto | no | "Sealed classes y when" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El when sobre el estado de reproducción no tiene rama else
- [ ] Agregar una rama nueva rompe la compilación de los when que la ignoran

## Ejemplos de prompts

- "Modelá el estado de reproducción de Ryutify con una sealed class y mostrá cómo la pantalla actual la consume con when exhaustivo para el botón de play y pausa."
- "Aplica Sealed classes y when (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El when sobre el estado de reproducción no tiene rama else"
- "Revisa mi kotlin-core y dime qué pasos de Sealed classes y when me faltan en este nivel"