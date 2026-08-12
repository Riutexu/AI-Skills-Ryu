---
name: arquitectura-app-viewmodel-stateflow-avanzado
description: ViewModel y StateFlow · nivel Avanzado · Arquitectura MVVM y ViewModel. El ViewModel como dueño del estado de la pantalla. Objetivo del nivel: Estados complejos y reducción de emisiones.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "viewmodel-stateflow"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# ViewModel y StateFlow — Avanzado

## Qué hace este skill

El ViewModel como dueño del estado de la pantalla. En este nivel se entrega: **Estados complejos y reducción de emisiones.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ViewModel y StateFlow** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar el estado con data classes inmutables
2. Usar update para cambios atómicos del estado
3. Reducir las emisiones con distinctUntilChanged
4. Manejar las acciones concurrentes del usuario

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Estados complejos y reducción de emisiones. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Modelar el estado con data classes inmutables · Usar update para cambios atómicos del estado · Reducir las emisiones con distinctUntilChanged · Manejar las acciones concurrentes del usuario | lista | sí | 3-4 pasos |
| $criterios_clave | Las actualizaciones del estado son atómicas · Las emisiones innecesarias se filtran | lista | sí | calidad verificable |
| $prompt_guia | El estado del player de Ryutify se actualiza con varios hilos y a veces queda inconsistente. Usá update para cambios atómicos y filtrá las emisiones. | texto | no | "ViewModel y StateFlow" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las actualizaciones del estado son atómicas
- [ ] Las emisiones innecesarias se filtran

## Ejemplos de prompts

- "El estado del player de Ryutify se actualiza con varios hilos y a veces queda inconsistente. Usá update para cambios atómicos y filtrá las emisiones."
- "Aplica ViewModel y StateFlow (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Las actualizaciones del estado son atómicas"
- "Revisa mi arquitectura-app y dime qué pasos de ViewModel y StateFlow me faltan en este nivel"