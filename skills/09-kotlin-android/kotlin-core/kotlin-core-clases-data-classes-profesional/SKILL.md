---
name: kotlin-core-clases-data-classes-profesional
description: Clases y data classes · nivel Profesional · Kotlin moderno: fundamentos profesionales. Modela el dominio de Ryutify con clases, data classes y objetos de forma limpia. Objetivo del nivel: Definir el modelo de dominio del producto y sus invariantes sin acoplarse a la API.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "clases-data-classes"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Clases y data classes — Profesional

## Qué hace este skill

Modela el dominio de Ryutify con clases, data classes y objetos de forma limpia. En este nivel se entrega: **Definir el modelo de dominio del producto y sus invariantes sin acoplarse a la API.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Clases y data classes** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar modelos de red, de dominio y de UI con mappers explícitos
2. Definir invariantes: id único, duración positiva y orden de playlist estable
3. Versionar los DTOs para tolerar cambios de la respuesta innertube
4. Proteger las invariantes con init blocks y factory methods

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir el modelo de dominio del producto y sus invariantes sin acoplarse a la API. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Separar modelos de red, de dominio y de UI con mappers explícitos · Definir invariantes: id único, duración positiva y orden de playlist estable · Versionar los DTOs para tolerar cambios de la respuesta innertube · Proteger las invariantes con init blocks y factory methods | lista | sí | 3-4 pasos |
| $criterios_clave | La capa de UI nunca importa DTOs de innertube · No existe forma de construir un Song con duración negativa en todo el código base | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la capa de dominio de Ryutify no dependa de los DTOs de innertube. Diseñá los modelos de dominio y el mapeo, protegiendo invariantes como la duración positiva. | texto | no | "Clases y data classes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa de UI nunca importa DTOs de innertube
- [ ] No existe forma de construir un Song con duración negativa en todo el código base

## Ejemplos de prompts

- "Quiero que la capa de dominio de Ryutify no dependa de los DTOs de innertube. Diseñá los modelos de dominio y el mapeo, protegiendo invariantes como la duración positiva."
- "Aplica Clases y data classes (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza La capa de UI nunca importa DTOs de innertube"
- "Revisa mi kotlin-core y dime qué pasos de Clases y data classes me faltan en este nivel"