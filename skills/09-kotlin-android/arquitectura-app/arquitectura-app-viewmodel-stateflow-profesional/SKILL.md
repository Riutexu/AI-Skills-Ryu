---
name: arquitectura-app-viewmodel-stateflow-profesional
description: ViewModel y StateFlow · nivel Profesional · Arquitectura MVVM y ViewModel. El ViewModel como dueño del estado de la pantalla. Objetivo del nivel: Diseñar los ViewModels del producto con contrato estable.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "viewmodel-stateflow"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# ViewModel y StateFlow — Profesional

## Qué hace este skill

El ViewModel como dueño del estado de la pantalla. En este nivel se entrega: **Diseñar los ViewModels del producto con contrato estable.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ViewModel y StateFlow** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato de ViewModel y UiState por pantalla
2. Centralizar la creación de los ViewModels
3. Mapear el dominio al estado de UI
4. Testear los ViewModels de todas las pantallas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar los ViewModels del producto con contrato estable. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir el contrato de ViewModel y UiState por pantalla · Centralizar la creación de los ViewModels · Mapear el dominio al estado de UI · Testear los ViewModels de todas las pantallas | lista | sí | 3-4 pasos |
| $criterios_clave | Todos los ViewModels siguen el mismo contrato · Los ViewModels críticos están testeados | lista | sí | calidad verificable |
| $prompt_guia | Estandarizá los ViewModels de Ryutify: contrato ViewModel-UiState por pantalla, mapeo del dominio y tests de todos los críticos. | texto | no | "ViewModel y StateFlow" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todos los ViewModels siguen el mismo contrato
- [ ] Los ViewModels críticos están testeados

## Ejemplos de prompts

- "Estandarizá los ViewModels de Ryutify: contrato ViewModel-UiState por pantalla, mapeo del dominio y tests de todos los críticos."
- "Aplica ViewModel y StateFlow (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Todos los ViewModels siguen el mismo contrato"
- "Revisa mi arquitectura-app y dime qué pasos de ViewModel y StateFlow me faltan en este nivel"