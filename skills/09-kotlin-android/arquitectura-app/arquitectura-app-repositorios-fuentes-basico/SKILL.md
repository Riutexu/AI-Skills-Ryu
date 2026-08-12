---
name: arquitectura-app-repositorios-fuentes-basico
description: Repositorios y fuentes de datos · nivel Básico · Arquitectura MVVM y ViewModel. Unifica red, cache y base de datos detrás de repositorios. Objetivo del nivel: Crear un repositorio que unifique las fuentes de datos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "repositorios-fuentes"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Repositorios y fuentes de datos — Básico

## Qué hace este skill

Unifica red, cache y base de datos detrás de repositorios. En este nivel se entrega: **Crear un repositorio que unifique las fuentes de datos.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Repositorios y fuentes de datos** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la interfaz del repositorio de canciones
2. Implementar con la fuente de red
3. Implementar con la fuente local
4. Seleccionar la fuente según el caso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un repositorio que unifique las fuentes de datos. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir la interfaz del repositorio de canciones · Implementar con la fuente de red · Implementar con la fuente local · Seleccionar la fuente según el caso | lista | sí | 3-4 pasos |
| $criterios_clave | El ViewModel usa el repositorio, no las fuentes · El repositorio decide qué fuente usar | lista | sí | calidad verificable |
| $prompt_guia | Creá el repositorio de canciones de Ryutify que unifique la red y la base local detrás de una interfaz. | texto | no | "Repositorios y fuentes de datos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El ViewModel usa el repositorio, no las fuentes
- [ ] El repositorio decide qué fuente usar

## Ejemplos de prompts

- "Creá el repositorio de canciones de Ryutify que unifique la red y la base local detrás de una interfaz."
- "Aplica Repositorios y fuentes de datos (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El ViewModel usa el repositorio, no las fuentes"
- "Revisa mi arquitectura-app y dime qué pasos de Repositorios y fuentes de datos me faltan en este nivel"