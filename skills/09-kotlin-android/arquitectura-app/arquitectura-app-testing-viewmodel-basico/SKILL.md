---
name: arquitectura-app-testing-viewmodel-basico
description: Testing de ViewModel · nivel Básico · Arquitectura MVVM y ViewModel. Tests unitarios de ViewModel con coroutines y repositorios simulados. Objetivo del nivel: Testear el ViewModel con un repositorio simulado.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-viewmodel"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Testing de ViewModel — Básico

## Qué hace este skill

Tests unitarios de ViewModel con coroutines y repositorios simulados. En este nivel se entrega: **Testear el ViewModel con un repositorio simulado.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de ViewModel** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un repositorio falso
2. Testear el estado inicial del ViewModel
3. Testear la acción de búsqueda
4. Verificar el estado de error

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Testear el ViewModel con un repositorio simulado. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Crear un repositorio falso · Testear el estado inicial del ViewModel · Testear la acción de búsqueda · Verificar el estado de error | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests cubren éxito, carga y error · El repositorio falso no toca la red | lista | sí | calidad verificable |
| $prompt_guia | Escribí los tests del ViewModel de búsqueda de Ryutify con un repositorio simulado: éxito, carga y error. | texto | no | "Testing de ViewModel" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests cubren éxito, carga y error
- [ ] El repositorio falso no toca la red

## Ejemplos de prompts

- "Escribí los tests del ViewModel de búsqueda de Ryutify con un repositorio simulado: éxito, carga y error."
- "Aplica Testing de ViewModel (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Los tests cubren éxito, carga y error"
- "Revisa mi arquitectura-app y dime qué pasos de Testing de ViewModel me faltan en este nivel"