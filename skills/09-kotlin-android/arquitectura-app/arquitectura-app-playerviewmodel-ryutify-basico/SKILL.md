---
name: arquitectura-app-playerviewmodel-ryutify-basico
description: PlayerViewModel real de Ryutify · nivel Básico · Arquitectura MVVM y ViewModel. El ViewModel que gobierna la reproducción, la cola y la sesión. Objetivo del nivel: Diseñar el PlayerViewModel con el estado de reproducción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "playerviewmodel-ryutify"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# PlayerViewModel real de Ryutify — Básico

## Qué hace este skill

El ViewModel que gobierna la reproducción, la cola y la sesión. En este nivel se entrega: **Diseñar el PlayerViewModel con el estado de reproducción.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PlayerViewModel real de Ryutify** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el estado de reproducción del PlayerViewModel
2. Conectar la cola con el repositorio
3. Exponer las acciones de play, pausa y skip
4. Reflejar el estado del player en el UiState

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Diseñar el PlayerViewModel con el estado de reproducción. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir el estado de reproducción del PlayerViewModel · Conectar la cola con el repositorio · Exponer las acciones de play, pausa y skip · Reflejar el estado del player en el UiState | lista | sí | 3-4 pasos |
| $criterios_clave | El PlayerViewModel refleja el estado real del player · Las acciones cambian el estado correctamente | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el PlayerViewModel de Ryutify: estado de reproducción, cola y acciones de play, pausa y skip conectadas al player. | texto | no | "PlayerViewModel real de Ryutify" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El PlayerViewModel refleja el estado real del player
- [ ] Las acciones cambian el estado correctamente

## Ejemplos de prompts

- "Diseñá el PlayerViewModel de Ryutify: estado de reproducción, cola y acciones de play, pausa y skip conectadas al player."
- "Aplica PlayerViewModel real de Ryutify (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El PlayerViewModel refleja el estado real del player"
- "Revisa mi arquitectura-app y dime qué pasos de PlayerViewModel real de Ryutify me faltan en este nivel"