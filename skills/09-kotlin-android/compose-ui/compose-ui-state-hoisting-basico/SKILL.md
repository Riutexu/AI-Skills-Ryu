---
name: compose-ui-state-hoisting-basico
description: State hoisting · nivel Básico · Jetpack Compose: UI declarativa. Sube el estado y baja los eventos: la regla de oro de Compose. Objetivo del nivel: Elevar el estado de los composables al padre.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "state-hoisting"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# State hoisting — Básico

## Qué hace este skill

Sube el estado y baja los eventos: la regla de oro de Compose. En este nivel se entrega: **Elevar el estado de los composables al padre.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State hoisting** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Elevar el estado de un checkbox a su padre
2. Pasar estado y callbacks como parámetros
3. Convertir un composable con estado interno en stateless
4. Aplicar el patrón a la fila de canción favorita

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Elevar el estado de los composables al padre. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Elevar el estado de un checkbox a su padre · Pasar estado y callbacks como parámetros · Convertir un composable con estado interno en stateless · Aplicar el patrón a la fila de canción favorita | lista | sí | 3-4 pasos |
| $criterios_clave | FilaCancion es stateless y recibe estado y eventos · El estado vive arriba y los eventos fluyen hacia abajo | lista | sí | calidad verificable |
| $prompt_guia | Convertí FilaCancion de Ryutify en un composable stateless: el estado de favorito arriba y los callbacks como parámetros. | texto | no | "State hoisting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] FilaCancion es stateless y recibe estado y eventos
- [ ] El estado vive arriba y los eventos fluyen hacia abajo

## Ejemplos de prompts

- "Convertí FilaCancion de Ryutify en un composable stateless: el estado de favorito arriba y los callbacks como parámetros."
- "Aplica State hoisting (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza FilaCancion es stateless y recibe estado y eventos"
- "Revisa mi compose-ui y dime qué pasos de State hoisting me faltan en este nivel"