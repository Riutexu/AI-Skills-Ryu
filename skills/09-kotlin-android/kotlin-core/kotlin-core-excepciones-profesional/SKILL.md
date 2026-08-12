---
name: kotlin-core-excepciones-profesional
description: Excepciones · nivel Profesional · Kotlin moderno: fundamentos profesionales. Manejo de errores por excepción: cuándo lanzar, cómo propagar y cómo traducir. Objetivo del nivel: Definir la estrategia global de errores: cuándo fallar y cuándo degradar.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "excepciones"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Excepciones — Profesional

## Qué hace este skill

Manejo de errores por excepción: cuándo lanzar, cómo propagar y cómo traducir. En este nivel se entrega: **Definir la estrategia global de errores: cuándo fallar y cuándo degradar.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Excepciones** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Clasificar errores recuperables e irreparables en cada flujo
2. Definir degradación: fallback a radio similar si el stream falla
3. Fijar la política de logs y métricas para cada tipo de excepción
4. Documentar el contrato de errores del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la estrategia global de errores: cuándo fallar y cuándo degradar. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Clasificar errores recuperables e irreparables en cada flujo · Definir degradación: fallback a radio similar si el stream falla · Fijar la política de logs y métricas para cada tipo de excepción · Documentar el contrato de errores del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Un stream roto no mata la cola: Ryutify salta a la siguiente canción con un aviso · Las métricas separan errores recuperados de fallos de sesión | lista | sí | calidad verificable |
| $prompt_guia | Quiero que si un stream falla, Ryutify pruebe la siguiente canción de la cola y recién después avise al usuario. Definí la clasificación de errores y la política de degradación del player. | texto | no | "Excepciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un stream roto no mata la cola: Ryutify salta a la siguiente canción con un aviso
- [ ] Las métricas separan errores recuperados de fallos de sesión

## Ejemplos de prompts

- "Quiero que si un stream falla, Ryutify pruebe la siguiente canción de la cola y recién después avise al usuario. Definí la clasificación de errores y la política de degradación del player."
- "Aplica Excepciones (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Un stream roto no mata la cola: Ryutify salta a la siguiente canción con un aviso"
- "Revisa mi kotlin-core y dime qué pasos de Excepciones me faltan en este nivel"