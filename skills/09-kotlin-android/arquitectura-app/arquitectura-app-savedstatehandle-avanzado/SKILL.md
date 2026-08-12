---
name: arquitectura-app-savedstatehandle-avanzado
description: SavedStateHandle · nivel Avanzado · Arquitectura MVVM y ViewModel. Sobrevive a la rotación y a la muerte del proceso con SavedStateHandle. Objetivo del nivel: Persistencia de estados complejos y restauración del proceso.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "savedstatehandle"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# SavedStateHandle — Avanzado

## Qué hace este skill

Sobrevive a la rotación y a la muerte del proceso con SavedStateHandle. En este nivel se entrega: **Persistencia de estados complejos y restauración del proceso.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SavedStateHandle** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Serializar el estado complejo en el SavedStateHandle
2. Restaurar el estado tras la muerte del proceso
3. Manejar las keys versionadas
4. Combinar con la persistencia en Room

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Persistencia de estados complejos y restauración del proceso. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Serializar el estado complejo en el SavedStateHandle · Restaurar el estado tras la muerte del proceso · Manejar las keys versionadas · Combinar con la persistencia en Room | lista | sí | 3-4 pasos |
| $criterios_clave | El estado se restaura tras la muerte del proceso · La versión de las keys se maneja correctamente | lista | sí | calidad verificable |
| $prompt_guia | Quiero que Ryutify restaure la cola y la posición tras la muerte del proceso. Usá SavedStateHandle con serialización y combiná con Room. | texto | no | "SavedStateHandle" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado se restaura tras la muerte del proceso
- [ ] La versión de las keys se maneja correctamente

## Ejemplos de prompts

- "Quiero que Ryutify restaure la cola y la posición tras la muerte del proceso. Usá SavedStateHandle con serialización y combiná con Room."
- "Aplica SavedStateHandle (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El estado se restaura tras la muerte del proceso"
- "Revisa mi arquitectura-app y dime qué pasos de SavedStateHandle me faltan en este nivel"