---
name: kotlin-core-delegacion-profesional
description: Delegación · nivel Profesional · Kotlin moderno: fundamentos profesionales. Aprovecha delegados lazy, observable y por clase para código conciso. Objetivo del nivel: Eliminar boilerplate repetido con delegados propios bien documentados.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "delegacion"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Delegación — Profesional

## Qué hace este skill

Aprovecha delegados lazy, observable y por clase para código conciso. En este nivel se entrega: **Eliminar boilerplate repetido con delegados propios bien documentados.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Delegación** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un delegado de preferencias tipadas con get y set automático
2. Auditar el código en busca de patrones repetidos que deleguen a un delegado
3. Garantizar thread-safety en delegados usados desde coroutines
4. Documentar con kdoc el contrato de cada delegado interno

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Eliminar boilerplate repetido con delegados propios bien documentados. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Crear un delegado de preferencias tipadas con get y set automático · Auditar el código en busca de patrones repetidos que deleguen a un delegado · Garantizar thread-safety en delegados usados desde coroutines · Documentar con kdoc el contrato de cada delegado interno | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las preferencias de Ryutify se leen y escriben con el mismo delegado tipado · Los delegados compartidos son thread-safe y están testeados con coroutines | lista | sí | calidad verificable |
| $prompt_guia | En Ryutify accedo a preferencias con getString y getInt por todos lados. Creá delegados tipados para preferencias y migrá todos los accesos, con tests incluidos. | texto | no | "Delegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las preferencias de Ryutify se leen y escriben con el mismo delegado tipado
- [ ] Los delegados compartidos son thread-safe y están testeados con coroutines

## Ejemplos de prompts

- "En Ryutify accedo a preferencias con getString y getInt por todos lados. Creá delegados tipados para preferencias y migrá todos los accesos, con tests incluidos."
- "Aplica Delegación (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Todas las preferencias de Ryutify se leen y escriben con el mismo delegado tipado"
- "Revisa mi kotlin-core y dime qué pasos de Delegación me faltan en este nivel"