---
name: arquitectura-app-mapeo-ui-state-profesional
description: Mapeo a UI state · nivel Profesional · Arquitectura MVVM y ViewModel. Transforma el dominio en el estado exacto que la UI necesita. Objetivo del nivel: Sistema de mapeo del producto: consistencia y reutilización.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mapeo-ui-state"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Mapeo a UI state — Profesional

## Qué hace este skill

Transforma el dominio en el estado exacto que la UI necesita. En este nivel se entrega: **Sistema de mapeo del producto: consistencia y reutilización.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mapeo a UI state** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el patrón de mapeo UiState del proyecto
2. Reutilizar los mappers entre pantallas
3. Testear los mappers con fixtures
4. Documentar el mapeo de cada pantalla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sistema de mapeo del producto: consistencia y reutilización. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir el patrón de mapeo UiState del proyecto · Reutilizar los mappers entre pantallas · Testear los mappers con fixtures · Documentar el mapeo de cada pantalla | lista | sí | 3-4 pasos |
| $criterios_clave | Los mappers se reutilizan entre pantallas · Los mappers están testeados | lista | sí | calidad verificable |
| $prompt_guia | Quiero un sistema de mapeo UiState consistente en Ryutify: patrón definido, mappers reutilizables y tests con fixtures. | texto | no | "Mapeo a UI state" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los mappers se reutilizan entre pantallas
- [ ] Los mappers están testeados

## Ejemplos de prompts

- "Quiero un sistema de mapeo UiState consistente en Ryutify: patrón definido, mappers reutilizables y tests con fixtures."
- "Aplica Mapeo a UI state (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Los mappers se reutilizan entre pantallas"
- "Revisa mi arquitectura-app y dime qué pasos de Mapeo a UI state me faltan en este nivel"