---
name: kotlin-core-tipos-nullability-avanzado
description: Tipos y nullability · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Domina el sistema de tipos y la seguridad ante nulos, la raíz de los crash en Android. Objetivo del nivel: Trabajar con platform types, tipos anotados y genéricos nullable de forma idiomática.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "tipos-nullability"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Tipos y nullability — Avanzado

## Qué hace este skill

Domina el sistema de tipos y la seguridad ante nulos, la raíz de los crash en Android. En este nivel se entrega: **Trabajar con platform types, tipos anotados y genéricos nullable de forma idiomática.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos y nullability** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Analizar los platform types que llegan del SDK de Android y blindar los bordes
2. Definir extensiones para normalizar nulos en los modelos de la API innertube
3. Usar genéricos con parámetros nullable y bounds en un mapper de datos
4. Aplicar anotaciones de nullability en interfaces de interoperabilidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Trabajar con platform types, tipos anotados y genéricos nullable de forma idiomática. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Analizar los platform types que llegan del SDK de Android y blindar los bordes · Definir extensiones para normalizar nulos en los modelos de la API innertube · Usar genéricos con parámetros nullable y bounds en un mapper de datos · Aplicar anotaciones de nullability en interfaces de interoperabilidad | lista | sí | 3-4 pasos |
| $criterios_clave | Las APIs públicas del módulo no exponen platform types · El mapa de YouTubeResponse a dominio maneja cada campo ausente con un caso explícito | lista | sí | calidad verificable |
| $prompt_guia | Los modelos que parseo de innertube llegan con campos que a veces faltan. Hacé un mapper seguro que convierta la respuesta en mi modelo de dominio sin que se pueda colar un NPE. | texto | no | "Tipos y nullability" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las APIs públicas del módulo no exponen platform types
- [ ] El mapa de YouTubeResponse a dominio maneja cada campo ausente con un caso explícito

## Ejemplos de prompts

- "Los modelos que parseo de innertube llegan con campos que a veces faltan. Hacé un mapper seguro que convierta la respuesta en mi modelo de dominio sin que se pueda colar un NPE."
- "Aplica Tipos y nullability (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Las APIs públicas del módulo no exponen platform types"
- "Revisa mi kotlin-core y dime qué pasos de Tipos y nullability me faltan en este nivel"