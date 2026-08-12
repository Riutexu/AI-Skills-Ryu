---
name: kotlin-core-estilo-tooling-basico
description: Estilo, lint y tooling · nivel Básico · Kotlin moderno: fundamentos profesionales. Código consistente y profesional con ktlint, detekt y convenciones del equipo. Objetivo del nivel: Aplicar el estilo de Kotlin y pasar los chequeos de lint locales.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "estilo-tooling"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Estilo, lint y tooling — Básico

## Qué hace este skill

Código consistente y profesional con ktlint, detekt y convenciones del equipo. En este nivel se entrega: **Aplicar el estilo de Kotlin y pasar los chequeos de lint locales.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estilo, lint y tooling** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar y correr ktlint sobre el proyecto
2. Corregir manualmente los reportes de estilo del módulo de Ryutify
3. Configurar el formateo automático en Android Studio
4. Correr detekt y entender cada tipo de hallazgo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar el estilo de Kotlin y pasar los chequeos de lint locales. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Instalar y correr ktlint sobre el proyecto · Corregir manualmente los reportes de estilo del módulo de Ryutify · Configurar el formateo automático en Android Studio · Correr detekt y entender cada tipo de hallazgo | lista | sí | 3-4 pasos |
| $criterios_clave | ktlint corre limpio sobre el módulo completo · El formateo automático del IDE produce el mismo resultado que ktlint | lista | sí | calidad verificable |
| $prompt_guia | El código de Ryutify tiene estilo inconsistente. Configurá ktlint y detekt en el proyecto, corregí los hallazgos y dejame los comandos para correrlos. | texto | no | "Estilo, lint y tooling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] ktlint corre limpio sobre el módulo completo
- [ ] El formateo automático del IDE produce el mismo resultado que ktlint

## Ejemplos de prompts

- "El código de Ryutify tiene estilo inconsistente. Configurá ktlint y detekt en el proyecto, corregí los hallazgos y dejame los comandos para correrlos."
- "Aplica Estilo, lint y tooling (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza ktlint corre limpio sobre el módulo completo"
- "Revisa mi kotlin-core y dime qué pasos de Estilo, lint y tooling me faltan en este nivel"