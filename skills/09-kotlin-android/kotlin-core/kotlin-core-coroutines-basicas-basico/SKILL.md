---
name: kotlin-core-coroutines-basicas-basico
description: Coroutines básicas · nivel Básico · Kotlin moderno: fundamentos profesionales. Primeros pasos con suspend functions y lanzamiento de coroutines dentro de la app. Objetivo del nivel: Escribir suspend functions y lanzar coroutines desde el ViewModel sin bloquear la UI.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "coroutines-basicas"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Coroutines básicas — Básico

## Qué hace este skill

Primeros pasos con suspend functions y lanzamiento de coroutines dentro de la app. En este nivel se entrega: **Escribir suspend functions y lanzar coroutines desde el ViewModel sin bloquear la UI.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coroutines básicas** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Convertir el fetch de búsqueda en suspend function
2. Lanzar coroutines con viewModelScope.launch
3. Actualizar el estado de carga con withContext(Dispatchers.IO)
4. Encadenar llamadas suspend con orden garantizado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir suspend functions y lanzar coroutines desde el ViewModel sin bloquear la UI. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Convertir el fetch de búsqueda en suspend function · Lanzar coroutines con viewModelScope.launch · Actualizar el estado de carga con withContext(Dispatchers.IO) · Encadenar llamadas suspend con orden garantizado | lista | sí | 3-4 pasos |
| $criterios_clave | La búsqueda no bloquea el hilo principal: la UI sigue respondiendo durante el fetch · El resultado de la búsqueda se publica en el estado del ViewModel | lista | sí | calidad verificable |
| $prompt_guia | La búsqueda de Ryutify está bloqueando la UI con callbacks anidados. Convertila a coroutines con suspend functions y viewModelScope, manteniendo el indicador de carga. | texto | no | "Coroutines básicas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La búsqueda no bloquea el hilo principal: la UI sigue respondiendo durante el fetch
- [ ] El resultado de la búsqueda se publica en el estado del ViewModel

## Ejemplos de prompts

- "La búsqueda de Ryutify está bloqueando la UI con callbacks anidados. Convertila a coroutines con suspend functions y viewModelScope, manteniendo el indicador de carga."
- "Aplica Coroutines básicas (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza La búsqueda no bloquea el hilo principal: la UI sigue respondiendo durante el fetch"
- "Revisa mi kotlin-core y dime qué pasos de Coroutines básicas me faltan en este nivel"