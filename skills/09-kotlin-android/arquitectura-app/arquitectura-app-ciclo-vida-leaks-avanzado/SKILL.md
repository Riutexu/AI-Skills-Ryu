---
name: arquitectura-app-ciclo-vida-leaks-avanzado
description: Ciclo de vida y leaks · nivel Avanzado · Arquitectura MVVM y ViewModel. Que los ViewModels y los scopes no fugen memoria. Objetivo del nivel: Detectar y corregir leaks de ViewModel y de scopes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "ciclo-vida-leaks"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Ciclo de vida y leaks — Avanzado

## Qué hace este skill

Que los ViewModels y los scopes no fugen memoria. En este nivel se entrega: **Detectar y corregir leaks de ViewModel y de scopes.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ciclo de vida y leaks** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar un detector de leaks en los tests
2. Encontrar los scopes fugados
3. Corregir las coroutines que se escapan del scope
4. Verificar los callbacks del player

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Detectar y corregir leaks de ViewModel y de scopes. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Usar un detector de leaks en los tests · Encontrar los scopes fugados · Corregir las coroutines que se escapan del scope · Verificar los callbacks del player | lista | sí | 3-4 pasos |
| $criterios_clave | El detector no reporta leaks del ViewModel · Los callbacks se desregistran correctamente | lista | sí | calidad verificable |
| $prompt_guia | Ryutify fuga memoria al navegar entre pantallas. Usá un detector de leaks, encontrá los scopes fugados y corregilos. | texto | no | "Ciclo de vida y leaks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El detector no reporta leaks del ViewModel
- [ ] Los callbacks se desregistran correctamente

## Ejemplos de prompts

- "Ryutify fuga memoria al navegar entre pantallas. Usá un detector de leaks, encontrá los scopes fugados y corregilos."
- "Aplica Ciclo de vida y leaks (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El detector no reporta leaks del ViewModel"
- "Revisa mi arquitectura-app y dime qué pasos de Ciclo de vida y leaks me faltan en este nivel"