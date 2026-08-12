---
name: arquitectura-app-manejo-errores-basico
description: Manejo de errores en la arquitectura · nivel Básico · Arquitectura MVVM y ViewModel. Los errores fluyen por las capas sin perderse ni tragarse. Objetivo del nivel: Propagar los errores del repositorio al estado de la UI.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "manejo-errores"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Manejo de errores en la arquitectura — Básico

## Qué hace este skill

Los errores fluyen por las capas sin perderse ni tragarse. En este nivel se entrega: **Propagar los errores del repositorio al estado de la UI.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores en la arquitectura** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Capturar los errores del repositorio
2. Mapear los errores a estados de la UI
3. Mostrar mensajes según el tipo de error
4. No tragar errores en el ViewModel

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Propagar los errores del repositorio al estado de la UI. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Capturar los errores del repositorio · Mapear los errores a estados de la UI · Mostrar mensajes según el tipo de error · No tragar errores en el ViewModel | lista | sí | 3-4 pasos |
| $criterios_clave | Cada error del repositorio llega a la UI · No hay catch vacíos | lista | sí | calidad verificable |
| $prompt_guia | Los errores de red de Ryutify se tragan en el ViewModel. Propaga cada error al estado de la UI con su mensaje. | texto | no | "Manejo de errores en la arquitectura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada error del repositorio llega a la UI
- [ ] No hay catch vacíos

## Ejemplos de prompts

- "Los errores de red de Ryutify se tragan en el ViewModel. Propaga cada error al estado de la UI con su mensaje."
- "Aplica Manejo de errores en la arquitectura (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Cada error del repositorio llega a la UI"
- "Revisa mi arquitectura-app y dime qué pasos de Manejo de errores en la arquitectura me faltan en este nivel"