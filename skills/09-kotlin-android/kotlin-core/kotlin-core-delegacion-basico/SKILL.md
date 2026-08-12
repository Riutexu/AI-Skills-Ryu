---
name: kotlin-core-delegacion-basico
description: Delegación · nivel Básico · Kotlin moderno: fundamentos profesionales. Aprovecha delegados lazy, observable y por clase para código conciso. Objetivo del nivel: Usar by lazy y delegados de AndroidX en los objetos de la app.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "delegacion"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Delegación — Básico

## Qué hace este skill

Aprovecha delegados lazy, observable y por clase para código conciso. En este nivel se entrega: **Usar by lazy y delegados de AndroidX en los objetos de la app.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Delegación** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Inicializar el cliente HTTP con by lazy
2. Usar delegated properties de AndroidX para obtener el ViewModel
3. Delegar una interfaz a una implementación con by
4. Crear un delegado observable simple para un contador

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar by lazy y delegados de AndroidX en los objetos de la app. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Inicializar el cliente HTTP con by lazy · Usar delegated properties de AndroidX para obtener el ViewModel · Delegar una interfaz a una implementación con by · Crear un delegado observable simple para un contador | lista | sí | 3-4 pasos |
| $criterios_clave | El cliente HTTP se crea una única vez y bajo demanda · La creación del ViewModel no se duplica entre Activity y Fragment | lista | sí | calidad verificable |
| $prompt_guia | Inicializá el cliente HTTP de Ryutify con by lazy y usá delegados para el ViewModel y sus dependencias en la Activity. | texto | no | "Delegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El cliente HTTP se crea una única vez y bajo demanda
- [ ] La creación del ViewModel no se duplica entre Activity y Fragment

## Ejemplos de prompts

- "Inicializá el cliente HTTP de Ryutify con by lazy y usá delegados para el ViewModel y sus dependencias en la Activity."
- "Aplica Delegación (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El cliente HTTP se crea una única vez y bajo demanda"
- "Revisa mi kotlin-core y dime qué pasos de Delegación me faltan en este nivel"