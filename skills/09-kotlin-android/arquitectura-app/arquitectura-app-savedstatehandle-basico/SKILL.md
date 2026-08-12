---
name: arquitectura-app-savedstatehandle-basico
description: SavedStateHandle · nivel Básico · Arquitectura MVVM y ViewModel. Sobrevive a la rotación y a la muerte del proceso con SavedStateHandle. Objetivo del nivel: Guardar y restaurar valores simples con SavedStateHandle.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "savedstatehandle"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# SavedStateHandle — Básico

## Qué hace este skill

Sobrevive a la rotación y a la muerte del proceso con SavedStateHandle. En este nivel se entrega: **Guardar y restaurar valores simples con SavedStateHandle.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SavedStateHandle** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Obtener el SavedStateHandle en el ViewModel
2. Guardar la búsqueda actual
3. Restaurar la búsqueda al recrear el ViewModel
4. Usar los estados con keys tipadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Guardar y restaurar valores simples con SavedStateHandle. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Obtener el SavedStateHandle en el ViewModel · Guardar la búsqueda actual · Restaurar la búsqueda al recrear el ViewModel · Usar los estados con keys tipadas | lista | sí | 3-4 pasos |
| $criterios_clave | La búsqueda se restaura tras la rotación · El SavedStateHandle no guarda objetos grandes | lista | sí | calidad verificable |
| $prompt_guia | La búsqueda de Ryutify se pierde al rotar. Guardala con SavedStateHandle y restáurala al recrear el ViewModel. | texto | no | "SavedStateHandle" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La búsqueda se restaura tras la rotación
- [ ] El SavedStateHandle no guarda objetos grandes

## Ejemplos de prompts

- "La búsqueda de Ryutify se pierde al rotar. Guardala con SavedStateHandle y restáurala al recrear el ViewModel."
- "Aplica SavedStateHandle (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La búsqueda se restaura tras la rotación"
- "Revisa mi arquitectura-app y dime qué pasos de SavedStateHandle me faltan en este nivel"