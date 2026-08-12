---
name: arquitectura-app-mapeo-ui-state-basico
description: Mapeo a UI state · nivel Básico · Arquitectura MVVM y ViewModel. Transforma el dominio en el estado exacto que la UI necesita. Objetivo del nivel: Mapear los datos de dominio al estado de la pantalla.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mapeo-ui-state"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Mapeo a UI state — Básico

## Qué hace este skill

Transforma el dominio en el estado exacto que la UI necesita. En este nivel se entrega: **Mapear los datos de dominio al estado de la pantalla.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mapeo a UI state** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el UiState de la pantalla de reproducción
2. Mapear la canción al UiState
3. Agregar el estado de carga y error
4. Consumir el UiState en la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Mapear los datos de dominio al estado de la pantalla. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Crear el UiState de la pantalla de reproducción · Mapear la canción al UiState · Agregar el estado de carga y error · Consumir el UiState en la UI | lista | sí | 3-4 pasos |
| $criterios_clave | La UI consume solo el UiState · El mapeo cubre carga, datos y error | lista | sí | calidad verificable |
| $prompt_guia | Creá el UiState de la pantalla de reproducción de Ryutify y mapeá el dominio a ese estado con carga y error. | texto | no | "Mapeo a UI state" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI consume solo el UiState
- [ ] El mapeo cubre carga, datos y error

## Ejemplos de prompts

- "Creá el UiState de la pantalla de reproducción de Ryutify y mapeá el dominio a ese estado con carga y error."
- "Aplica Mapeo a UI state (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La UI consume solo el UiState"
- "Revisa mi arquitectura-app y dime qué pasos de Mapeo a UI state me faltan en este nivel"