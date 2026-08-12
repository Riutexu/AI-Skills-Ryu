---
name: arquitectura-app-ciclo-vida-leaks-basico
description: Ciclo de vida y leaks · nivel Básico · Arquitectura MVVM y ViewModel. Que los ViewModels y los scopes no fugen memoria. Objetivo del nivel: Entender el ciclo de vida del ViewModel y sus scopes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "ciclo-vida-leaks"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Ciclo de vida y leaks — Básico

## Qué hace este skill

Que los ViewModels y los scopes no fugen memoria. En este nivel se entrega: **Entender el ciclo de vida del ViewModel y sus scopes.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ciclo de vida y leaks** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mapear el ciclo de vida del ViewModel
2. Usar viewModelScope con el ciclo
3. Liberar los recursos en onCleared
4. Verificar que no haya referencias de la vista

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender el ciclo de vida del ViewModel y sus scopes. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Mapear el ciclo de vida del ViewModel · Usar viewModelScope con el ciclo · Liberar los recursos en onCleared · Verificar que no haya referencias de la vista | lista | sí | 3-4 pasos |
| $criterios_clave | Los recursos se liberan en onCleared · El ViewModel no guarda referencias a la vista | lista | sí | calidad verificable |
| $prompt_guia | El ViewModel del player de Ryutify guarda referencias a la vista. Sacalas y liberá los recursos en onCleared. | texto | no | "Ciclo de vida y leaks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los recursos se liberan en onCleared
- [ ] El ViewModel no guarda referencias a la vista

## Ejemplos de prompts

- "El ViewModel del player de Ryutify guarda referencias a la vista. Sacalas y liberá los recursos en onCleared."
- "Aplica Ciclo de vida y leaks (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Los recursos se liberan en onCleared"
- "Revisa mi arquitectura-app y dime qué pasos de Ciclo de vida y leaks me faltan en este nivel"