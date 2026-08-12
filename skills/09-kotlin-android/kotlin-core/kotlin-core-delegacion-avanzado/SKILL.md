---
name: kotlin-core-delegacion-avanzado
description: Delegación · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Aprovecha delegados lazy, observable y por clase para código conciso. Objetivo del nivel: Combinar delegados estándar y personalizados para gestión de estado.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "delegacion"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Delegación — Avanzado

## Qué hace este skill

Aprovecha delegados lazy, observable y por clase para código conciso. En este nivel se entrega: **Combinar delegados estándar y personalizados para gestión de estado.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Delegación** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar observable() para persistir el estado de la cola al cambiarla
2. Combinar mutableStateOf con delegados en el estado de Compose
3. Crear un delegado que valide los datos al setearlos
4. Usar rememberSaveable con delegados para sobrevivir a la rotación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar delegados estándar y personalizados para gestión de estado. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Usar observable() para persistir el estado de la cola al cambiarla · Combinar mutableStateOf con delegados en el estado de Compose · Crear un delegado que valide los datos al setearlos · Usar rememberSaveable con delegados para sobrevivir a la rotación | lista | sí | 3-4 pasos |
| $criterios_clave | El estado de la cola se persiste automáticamente al cambiar · Un valor inválido no puede setearse en el delegado de validación | lista | sí | calidad verificable |
| $prompt_guia | Quiero que cada vez que cambie la cola de reproducción de Ryutify se guarde automáticamente en preferencias. Implementalo con un delegado observable y mostrá la persistencia. | texto | no | "Delegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado de la cola se persiste automáticamente al cambiar
- [ ] Un valor inválido no puede setearse en el delegado de validación

## Ejemplos de prompts

- "Quiero que cada vez que cambie la cola de reproducción de Ryutify se guarde automáticamente en preferencias. Implementalo con un delegado observable y mostrá la persistencia."
- "Aplica Delegación (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El estado de la cola se persiste automáticamente al cambiar"
- "Revisa mi kotlin-core y dime qué pasos de Delegación me faltan en este nivel"