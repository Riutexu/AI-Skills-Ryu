---
name: compose-ui-viewmodel-compose-basico
description: ViewModel y Compose · nivel Básico · Jetpack Compose: UI declarativa. Integración de ViewModel con Compose: estado, ciclo de vida y colección. Objetivo del nivel: Obtener el ViewModel en Compose y exponer su estado.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "viewmodel-compose"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# ViewModel y Compose — Básico

## Qué hace este skill

Integración de ViewModel con Compose: estado, ciclo de vida y colección. En este nivel se entrega: **Obtener el ViewModel en Compose y exponer su estado.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ViewModel y Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Obtener el ViewModel con viewModel()
2. Exponer un StateFlow desde el ViewModel
3. Recolectar el estado en la UI
4. Enviar eventos de UI al ViewModel

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Obtener el ViewModel en Compose y exponer su estado. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Obtener el ViewModel con viewModel() · Exponer un StateFlow desde el ViewModel · Recolectar el estado en la UI · Enviar eventos de UI al ViewModel | lista | sí | 3-4 pasos |
| $criterios_clave | La UI refleja el estado del ViewModel · El ViewModel sobrevive a la recomposición | lista | sí | calidad verificable |
| $prompt_guia | Conectá el ViewModel del player de Ryutify con Compose: exponé el estado con StateFlow, recolectalo y enviá los eventos de play y pausa. | texto | no | "ViewModel y Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI refleja el estado del ViewModel
- [ ] El ViewModel sobrevive a la recomposición

## Ejemplos de prompts

- "Conectá el ViewModel del player de Ryutify con Compose: exponé el estado con StateFlow, recolectalo y enviá los eventos de play y pausa."
- "Aplica ViewModel y Compose (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La UI refleja el estado del ViewModel"
- "Revisa mi compose-ui y dime qué pasos de ViewModel y Compose me faltan en este nivel"