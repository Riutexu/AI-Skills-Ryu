---
name: kotlin-core-colecciones-profesional
description: Colecciones · nivel Profesional · Kotlin moderno: fundamentos profesionales. Opera listas, sets y mapas con estilo funcional y sin errores de mutabilidad. Objetivo del nivel: Diseñar estructuras de datos a medida y perfilar el uso de colecciones en memoria.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "colecciones"
  nivel: profesional
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Colecciones — Profesional

## Qué hace este skill

Opera listas, sets y mapas con estilo funcional y sin errores de mutabilidad. En este nivel se entrega: **Diseñar estructuras de datos a medida y perfilar el uso de colecciones en memoria.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Colecciones** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un cache LRU de miniaturas con LinkedHashMap y accessOrder
2. Medir el footprint en memoria de la cola con 500 canciones
3. Definir operaciones in place solo donde sea seguro y documentado
4. Aplicar sequences para pipelines de datos pesados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar estructuras de datos a medida y perfilar el uso de colecciones en memoria. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Implementar un cache LRU de miniaturas con LinkedHashMap y accessOrder · Medir el footprint en memoria de la cola con 500 canciones · Definir operaciones in place solo donde sea seguro y documentado · Aplicar sequences para pipelines de datos pesados | lista | sí | 3-4 pasos |
| $criterios_clave | El cache LRU expulsa la entrada menos usada y mantiene máximo 200 entradas · El pipeline de filtrado con sequences no crea listas intermedias | lista | sí | calidad verificable |
| $prompt_guia | El historial y las playlists grandes de Ryutify gastan memoria de más. Revisá el uso de colecciones en el repositorio y aplicá sequences o estructuras más eficientes donde haga falta. | texto | no | "Colecciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El cache LRU expulsa la entrada menos usada y mantiene máximo 200 entradas
- [ ] El pipeline de filtrado con sequences no crea listas intermedias

## Ejemplos de prompts

- "El historial y las playlists grandes de Ryutify gastan memoria de más. Revisá el uso de colecciones en el repositorio y aplicá sequences o estructuras más eficientes donde haga falta."
- "Aplica Colecciones (nivel profesional) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El cache LRU expulsa la entrada menos usada y mantiene máximo 200 entradas"
- "Revisa mi kotlin-core y dime qué pasos de Colecciones me faltan en este nivel"