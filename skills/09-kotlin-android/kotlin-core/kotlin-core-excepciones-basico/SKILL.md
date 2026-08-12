---
name: kotlin-core-excepciones-basico
description: Excepciones · nivel Básico · Kotlin moderno: fundamentos profesionales. Manejo de errores por excepción: cuándo lanzar, cómo propagar y cómo traducir. Objetivo del nivel: Usar try, catch y finally y las excepciones estándar correctamente.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "excepciones"
  nivel: basico
  stack: "Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17"
---

# Excepciones — Básico

## Qué hace este skill

Manejo de errores por excepción: cuándo lanzar, cómo propagar y cómo traducir. En este nivel se entrega: **Usar try, catch y finally y las excepciones estándar correctamente.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Kotlin moderno: fundamentos profesionales** (Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Excepciones** dentro de Kotlin moderno: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Envolver el parseo JSON de una respuesta en try y catch
2. Usar finally para liberar recursos al fallar el stream
3. Elegir entre check, require y excepciones lanzadas a mano
4. Propagar el mensaje de error útil al log del crash reporter

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar try, catch y finally y las excepciones estándar correctamente. | texto | sí | resultado medible |
| $stack | Kotlin moderno: fundamentos profesionales | texto | sí | 09-kotlin-android/kotlin-core |
| $tecnologias | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 | texto | sí | Kotlin 2.x, Gradle Kotlin DSL, coroutines, JDK 17 |
| $tareas_clave | Envolver el parseo JSON de una respuesta en try y catch · Usar finally para liberar recursos al fallar el stream · Elegir entre check, require y excepciones lanzadas a mano · Propagar el mensaje de error útil al log del crash reporter | lista | sí | 3-4 pasos |
| $criterios_clave | Un JSON corrupto no tumba la app: muestra un estado de error · El recurso del stream se libera también cuando hay excepción | lista | sí | calidad verificable |
| $prompt_guia | El parseo de la respuesta de innertube a veces tira malformed JSON y me crashea. Agregá try y catch con un estado de error en la UI de Ryutify. | texto | no | "Excepciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un JSON corrupto no tumba la app: muestra un estado de error
- [ ] El recurso del stream se libera también cuando hay excepción

## Ejemplos de prompts

- "El parseo de la respuesta de innertube a veces tira malformed JSON y me crashea. Agregá try y catch con un estado de error en la UI de Ryutify."
- "Aplica Excepciones (nivel basico) a mi trabajo actual con Kotlin moderno: fundamentos profesionales: prioriza Un JSON corrupto no tumba la app: muestra un estado de error"
- "Revisa mi kotlin-core y dime qué pasos de Excepciones me faltan en este nivel"