---
name: arquitectura-app-casos-uso-basico
description: Casos de uso · nivel Básico · Arquitectura MVVM y ViewModel. Orquesta las reglas de negocio con casos de uso claros. Objetivo del nivel: Crear casos de uso simples que orquestan el repositorio.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "casos-uso"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Casos de uso — Básico

## Qué hace este skill

Orquesta las reglas de negocio con casos de uso claros. En este nivel se entrega: **Crear casos de uso simples que orquestan el repositorio.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos de uso** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el caso de uso BuscarCanciones
2. Crear el caso de uso ObtenerPlaylist
3. Inyectar los casos de uso en el ViewModel
4. Mantener los casos de uso sin lógica de UI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear casos de uso simples que orquestan el repositorio. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Crear el caso de uso BuscarCanciones · Crear el caso de uso ObtenerPlaylist · Inyectar los casos de uso en el ViewModel · Mantener los casos de uso sin lógica de UI | lista | sí | 3-4 pasos |
| $criterios_clave | Los casos de uso son reutilizables entre pantallas · Los casos de uso no conocen la UI | lista | sí | calidad verificable |
| $prompt_guia | Creá los casos de uso de Ryutify para buscar y cargar playlists, e inyectalos en los ViewModels. | texto | no | "Casos de uso" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los casos de uso son reutilizables entre pantallas
- [ ] Los casos de uso no conocen la UI

## Ejemplos de prompts

- "Creá los casos de uso de Ryutify para buscar y cargar playlists, e inyectalos en los ViewModels."
- "Aplica Casos de uso (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Los casos de uso son reutilizables entre pantallas"
- "Revisa mi arquitectura-app y dime qué pasos de Casos de uso me faltan en este nivel"