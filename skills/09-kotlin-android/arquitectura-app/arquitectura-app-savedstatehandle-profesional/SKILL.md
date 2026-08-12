---
name: arquitectura-app-savedstatehandle-profesional
description: SavedStateHandle · nivel Profesional · Arquitectura MVVM y ViewModel. Sobrevive a la rotación y a la muerte del proceso con SavedStateHandle. Objetivo del nivel: Estrategia de estado persistente del producto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "savedstatehandle"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# SavedStateHandle — Profesional

## Qué hace este skill

Sobrevive a la rotación y a la muerte del proceso con SavedStateHandle. En este nivel se entrega: **Estrategia de estado persistente del producto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **SavedStateHandle** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir qué vive en SavedStateHandle y qué en persistencia
2. Documentar la estrategia de restauración por pantalla
3. Testear la restauración en todos los escenarios
4. Medir el tamaño de lo que se guarda

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de estado persistente del producto. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir qué vive en SavedStateHandle y qué en persistencia · Documentar la estrategia de restauración por pantalla · Testear la restauración en todos los escenarios · Medir el tamaño de lo que se guarda | lista | sí | 3-4 pasos |
| $criterios_clave | La estrategia de restauración está documentada · Los escenarios de proceso muerto están testeados | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de restauración completa para Ryutify: qué se guarda en cada capa y tests de todos los escenarios de proceso muerto. | texto | no | "SavedStateHandle" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La estrategia de restauración está documentada
- [ ] Los escenarios de proceso muerto están testeados

## Ejemplos de prompts

- "Quiero una estrategia de restauración completa para Ryutify: qué se guarda en cada capa y tests de todos los escenarios de proceso muerto."
- "Aplica SavedStateHandle (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La estrategia de restauración está documentada"
- "Revisa mi arquitectura-app y dime qué pasos de SavedStateHandle me faltan en este nivel"