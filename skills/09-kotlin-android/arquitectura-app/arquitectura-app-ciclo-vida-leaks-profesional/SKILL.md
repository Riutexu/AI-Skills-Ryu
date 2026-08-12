---
name: arquitectura-app-ciclo-vida-leaks-profesional
description: Ciclo de vida y leaks · nivel Profesional · Arquitectura MVVM y ViewModel. Que los ViewModels y los scopes no fugen memoria. Objetivo del nivel: Garantizar cero leaks en el producto con monitoreo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "ciclo-vida-leaks"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Ciclo de vida y leaks — Profesional

## Qué hace este skill

Que los ViewModels y los scopes no fugen memoria. En este nivel se entrega: **Garantizar cero leaks en el producto con monitoreo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ciclo de vida y leaks** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el presupuesto de memoria por pantalla
2. Monitorear los leaks en el release
3. Testear los ciclos de navegación completos
4. Documentar los patrones que fugen

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Garantizar cero leaks en el producto con monitoreo. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir el presupuesto de memoria por pantalla · Monitorear los leaks en el release · Testear los ciclos de navegación completos · Documentar los patrones que fugen | lista | sí | 3-4 pasos |
| $criterios_clave | El monitoreo de leaks está en producción · Una sesión completa de navegación no fuga | lista | sí | calidad verificable |
| $prompt_guia | Quiero monitorear los leaks de Ryutify en producción y un presupuesto de memoria por pantalla con tests de navegación completa. | texto | no | "Ciclo de vida y leaks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El monitoreo de leaks está en producción
- [ ] Una sesión completa de navegación no fuga

## Ejemplos de prompts

- "Quiero monitorear los leaks de Ryutify en producción y un presupuesto de memoria por pantalla con tests de navegación completa."
- "Aplica Ciclo de vida y leaks (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El monitoreo de leaks está en producción"
- "Revisa mi arquitectura-app y dime qué pasos de Ciclo de vida y leaks me faltan en este nivel"