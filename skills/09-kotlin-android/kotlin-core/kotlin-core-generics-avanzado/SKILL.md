---
name: kotlin-core-generics-avanzado
description: Generics · nivel Avanzado · Kotlin moderno: fundamentos profesionales. Código reutilizable con tipos genéricos, bounds y variantes. Objetivo del nivel: Aplicar bounds, out e in para APIs genéricas seguras.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "generics"
  nivel: avanzado
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Generics — Avanzado

## Qué hace este skill

Código reutilizable con tipos genéricos, bounds y variantes. En este nivel se entrega: **Aplicar bounds, out e in para APIs genéricas seguras.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generics** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar upper bounds para restringir un comparador a Comparable
2. Diferenciar out e in en funciones y clases genéricas
3. Aplicar star projection cuando el tipo exacto no importa
4. Usar reified en funciones inline para inspeccionar tipos en runtime

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar bounds, out e in para APIs genéricas seguras. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Usar upper bounds para restringir un comparador a Comparable · Diferenciar out e in en funciones y clases genéricas · Aplicar star projection cuando el tipo exacto no importa · Usar reified en funciones inline para inspeccionar tipos en runtime | lista | sí | 3-4 pasos |
| $criterios_clave | La API genérica del repositorio no produce cast inseguros · El uso de reified está justificado y no evade el sistema de tipos | lista | sí | calidad verificable |
| $prompt_guia | Mi repositorio genérico de Ryutify tiene cast inseguros. Rediseñalo con out e in, upper bounds y una función reified donde haga falta, eliminando los unchecked warnings. | texto | no | "Generics" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La API genérica del repositorio no produce cast inseguros
- [ ] El uso de reified está justificado y no evade el sistema de tipos

## Ejemplos de prompts

- "Mi repositorio genérico de Ryutify tiene cast inseguros. Rediseñalo con out e in, upper bounds y una función reified donde haga falta, eliminando los unchecked warnings."
- "Aplica Generics (nivel avanzado) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza La API genérica del repositorio no produce cast inseguros"
- "Revisa mi kotlin-core y dime qué pasos de Generics me faltan en este nivel"