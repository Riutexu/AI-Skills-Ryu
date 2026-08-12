---
name: arquitectura-app-viewmodel-stateflow-basico
description: ViewModel y StateFlow · nivel Básico · Arquitectura MVVM y ViewModel. El ViewModel como dueño del estado de la pantalla. Objetivo del nivel: Crear un ViewModel que exponga su estado con StateFlow.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "viewmodel-stateflow"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# ViewModel y StateFlow — Básico

## Qué hace este skill

El ViewModel como dueño del estado de la pantalla. En este nivel se entrega: **Crear un ViewModel que exponga su estado con StateFlow.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ViewModel y StateFlow** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el ViewModel de la pantalla de búsqueda
2. Exponer el estado con StateFlow
3. Actualizar el estado con las acciones del usuario
4. Recolectar el estado en la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un ViewModel que exponga su estado con StateFlow. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Crear el ViewModel de la pantalla de búsqueda · Exponer el estado con StateFlow · Actualizar el estado con las acciones del usuario · Recolectar el estado en la UI | lista | sí | 3-4 pasos |
| $criterios_clave | El estado se actualiza con cada acción · La UI refleja el estado sin lógica | lista | sí | calidad verificable |
| $prompt_guia | Creá el ViewModel de la búsqueda de Ryutify con StateFlow: estado de carga, resultados y error. | texto | no | "ViewModel y StateFlow" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado se actualiza con cada acción
- [ ] La UI refleja el estado sin lógica

## Ejemplos de prompts

- "Creá el ViewModel de la búsqueda de Ryutify con StateFlow: estado de carga, resultados y error."
- "Aplica ViewModel y StateFlow (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El estado se actualiza con cada acción"
- "Revisa mi arquitectura-app y dime qué pasos de ViewModel y StateFlow me faltan en este nivel"