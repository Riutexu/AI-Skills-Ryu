---
name: arquitectura-app-testing-viewmodel-profesional
description: Testing de ViewModel · nivel Profesional · Arquitectura MVVM y ViewModel. Tests unitarios de ViewModel con coroutines y repositorios simulados. Objetivo del nivel: Estrategia de testing de ViewModel del proyecto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-viewmodel"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Testing de ViewModel — Profesional

## Qué hace este skill

Tests unitarios de ViewModel con coroutines y repositorios simulados. En este nivel se entrega: **Estrategia de testing de ViewModel del proyecto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de ViewModel** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el patrón de tests de ViewModel
2. Centralizar las reglas de test
3. Medir la cobertura de los ViewModels
4. Testear los escenarios de concurrencia

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de testing de ViewModel del proyecto. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir el patrón de tests de ViewModel · Centralizar las reglas de test · Medir la cobertura de los ViewModels · Testear los escenarios de concurrencia | lista | sí | 3-4 pasos |
| $criterios_clave | Todos los ViewModels críticos tienen cobertura · El patrón de tests está documentado | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de testing de ViewModels para Ryutify: patrón común, reglas centralizadas y cobertura de los críticos. | texto | no | "Testing de ViewModel" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todos los ViewModels críticos tienen cobertura
- [ ] El patrón de tests está documentado

## Ejemplos de prompts

- "Quiero una estrategia de testing de ViewModels para Ryutify: patrón común, reglas centralizadas y cobertura de los críticos."
- "Aplica Testing de ViewModel (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Todos los ViewModels críticos tienen cobertura"
- "Revisa mi arquitectura-app y dime qué pasos de Testing de ViewModel me faltan en este nivel"