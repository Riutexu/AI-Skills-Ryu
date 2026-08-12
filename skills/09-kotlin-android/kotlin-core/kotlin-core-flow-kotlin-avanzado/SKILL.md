---
name: kotlin-core-flow-kotlin-avanzado
description: Flow y streams reactivos · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Modela flujos de datos asincrónicos: búsquedas, posición de reproducción y estados. Objetivo del nivel: Combinar flujos con operadores avanzados y manejar contrapresión.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flow-kotlin"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Flow y streams reactivos — Avanzado

## Qué hace este skill

Modela flujos de datos asincrónicos: búsquedas, posición de reproducción y estados. En este nivel se entrega: **Combinar flujos con operadores avanzados y manejar contrapresión.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flow y streams reactivos** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Combinar el estado del reproductor con el flujo de la cola usando combine
2. Debouncear la búsqueda con debounce(300)
3. Distinguir cold y hot flows y elegir el correcto según el caso
4. Manejar errores del flujo con catch y retry

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar flujos con operadores avanzados y manejar contrapresión. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Combinar el estado del reproductor con el flujo de la cola usando combine · Debouncear la búsqueda con debounce(300) · Distinguir cold y hot flows y elegir el correcto según el caso · Manejar errores del flujo con catch y retry | lista | sí | 3-4 pasos |
| $criterios_clave | La búsqueda debounceada no dispara un request por cada tecla presionada · Un error transitorio del flujo no mata la colección y reintenta | lista | sí | calidad verificable |
| $prompt_guia | La barra de búsqueda de Ryutify hace un request por cada carácter. Implementá debounce de 300ms y un catch con retry para errores de red. | texto | no | "Flow y streams reactivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La búsqueda debounceada no dispara un request por cada tecla presionada
- [ ] Un error transitorio del flujo no mata la colección y reintenta

## Ejemplos de prompts

- "La barra de búsqueda de Ryutify hace un request por cada carácter. Implementá debounce de 300ms y un catch con retry para errores de red."
- "Aplica Flow y streams reactivos (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza La búsqueda debounceada no dispara un request por cada tecla presionada"
- "Revisa mi kotlin-core y dime qué pasos de Flow y streams reactivos me faltan en este nivel"