---
name: arquitectura-app-testing-viewmodel-avanzado
description: Testing de ViewModel · nivel Avanzado · Arquitectura MVVM y ViewModel. Tests unitarios de ViewModel con coroutines y repositorios simulados. Objetivo del nivel: Tests de flujos, eventos y tiempo virtual.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-viewmodel"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Testing de ViewModel — Avanzado

## Qué hace este skill

Tests unitarios de ViewModel con coroutines y repositorios simulados. En este nivel se entrega: **Tests de flujos, eventos y tiempo virtual.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de ViewModel** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear los flujos del ViewModel
2. Testear los eventos one-shot
3. Usar el tiempo virtual para debounce
4. Testear la cancelación al limpiar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Tests de flujos, eventos y tiempo virtual. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Testear los flujos del ViewModel · Testear los eventos one-shot · Usar el tiempo virtual para debounce · Testear la cancelación al limpiar | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos one-shot se verifican en los tests · El debounce se testea con tiempo virtual | lista | sí | calidad verificable |
| $prompt_guia | Testeá los flujos y eventos del ViewModel del player de Ryutify con tiempo virtual y verificación de cancelación. | texto | no | "Testing de ViewModel" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos one-shot se verifican en los tests
- [ ] El debounce se testea con tiempo virtual

## Ejemplos de prompts

- "Testeá los flujos y eventos del ViewModel del player de Ryutify con tiempo virtual y verificación de cancelación."
- "Aplica Testing de ViewModel (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Los eventos one-shot se verifican en los tests"
- "Revisa mi arquitectura-app y dime qué pasos de Testing de ViewModel me faltan en este nivel"