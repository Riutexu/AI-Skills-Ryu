---
name: arquitectura-app-mapeo-ui-state-avanzado
description: Mapeo a UI state · nivel Avanzado · Arquitectura MVVM y ViewModel. Transforma el dominio en el estado exacto que la UI necesita. Objetivo del nivel: Mapeos complejos y estados derivados.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mapeo-ui-state"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Mapeo a UI state — Avanzado

## Qué hace este skill

Transforma el dominio en el estado exacto que la UI necesita. En este nivel se entrega: **Mapeos complejos y estados derivados.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mapeo a UI state** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Derivar el estado del botón del estado del player
2. Mapear la cola completa al estado de la UI
3. Combinar varios flujos en un solo UiState
4. Evitar el estado muerto en la UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mapeos complejos y estados derivados. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Derivar el estado del botón del estado del player · Mapear la cola completa al estado de la UI · Combinar varios flujos en un solo UiState · Evitar el estado muerto en la UI | lista | sí | 3-4 pasos |
| $criterios_clave | El botón refleja el estado del player · No hay estados que la UI no use | lista | sí | calidad verificable |
| $prompt_guia | El UiState del player de Ryutify no refleja bien el estado del botón y la cola. Rediseñá el mapeo y combiná los flujos. | texto | no | "Mapeo a UI state" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El botón refleja el estado del player
- [ ] No hay estados que la UI no use

## Ejemplos de prompts

- "El UiState del player de Ryutify no refleja bien el estado del botón y la cola. Rediseñá el mapeo y combiná los flujos."
- "Aplica Mapeo a UI state (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El botón refleja el estado del player"
- "Revisa mi arquitectura-app y dime qué pasos de Mapeo a UI state me faltan en este nivel"