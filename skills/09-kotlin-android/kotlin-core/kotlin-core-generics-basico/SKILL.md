---
name: kotlin-core-generics-basico
description: Generics · nivel Básico · Kotlin moderno: fundamentos profesionales. Código reutilizable con tipos genéricos, bounds y variantes. Objetivo del nivel: Escribir funciones y clases genéricas para reutilizar lógica de datos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "generics"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Generics — Básico

## Qué hace este skill

Código reutilizable con tipos genéricos, bounds y variantes. En este nivel se entrega: **Escribir funciones y clases genéricas para reutilizar lógica de datos.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generics** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una función genérica que mapee listas de tipos distintos
2. Definir una clase Resultado que guarde dato o error
3. Usar la inferencia de tipos en llamadas reales
4. Aplicar genéricos en un adapter reutilizable de lista de resultados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir funciones y clases genéricas para reutilizar lógica de datos. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Crear una función genérica que mapee listas de tipos distintos · Definir una clase Resultado que guarde dato o error · Usar la inferencia de tipos en llamadas reales · Aplicar genéricos en un adapter reutilizable de lista de resultados | lista | sí | 3-4 pasos |
| $criterios_clave | El adapter reutilizable sirve para canciones y artistas sin duplicar código · Las llamadas con genéricos se escriben sin tipos explícitos | lista | sí | calidad verificable |
| $prompt_guia | Tengo dos adapters casi iguales en Ryutify, uno para canciones y otro para artistas. Hacé un adapter genérico que sirva para ambos y mostralo en uso. | texto | no | "Generics" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El adapter reutilizable sirve para canciones y artistas sin duplicar código
- [ ] Las llamadas con genéricos se escriben sin tipos explícitos

## Ejemplos de prompts

- "Tengo dos adapters casi iguales en Ryutify, uno para canciones y otro para artistas. Hacé un adapter genérico que sirva para ambos y mostralo en uso."
- "Aplica Generics (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza El adapter reutilizable sirve para canciones y artistas sin duplicar código"
- "Revisa mi kotlin-core y dime qué pasos de Generics me faltan en este nivel"