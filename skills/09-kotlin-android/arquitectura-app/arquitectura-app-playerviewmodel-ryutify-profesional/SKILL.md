---
name: arquitectura-app-playerviewmodel-ryutify-profesional
description: PlayerViewModel real de Ryutify · nivel Profesional · Arquitectura MVVM y ViewModel. El ViewModel que gobierna la reproducción, la cola y la sesión. Objetivo del nivel: Evolucionar el PlayerViewModel al nivel de producción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "playerviewmodel-ryutify"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# PlayerViewModel real de Ryutify — Profesional

## Qué hace este skill

El ViewModel que gobierna la reproducción, la cola y la sesión. En este nivel se entrega: **Evolucionar el PlayerViewModel al nivel de producción.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PlayerViewModel real de Ryutify** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato público del PlayerViewModel
2. Agregar la telemetría de la sesión
3. Testear todos los escenarios de la reproducción
4. Revisar el rendimiento del estado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Evolucionar el PlayerViewModel al nivel de producción. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir el contrato público del PlayerViewModel · Agregar la telemetría de la sesión · Testear todos los escenarios de la reproducción · Revisar el rendimiento del estado | lista | sí | 3-4 pasos |
| $criterios_clave | El PlayerViewModel tiene contrato documentado · Los escenarios críticos de reproducción están testeados | lista | sí | calidad verificable |
| $prompt_guia | Llevá el PlayerViewModel de Ryutify a nivel producción: contrato público, telemetría de sesión y tests de todos los escenarios de reproducción. | texto | no | "PlayerViewModel real de Ryutify" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El PlayerViewModel tiene contrato documentado
- [ ] Los escenarios críticos de reproducción están testeados

## Ejemplos de prompts

- "Llevá el PlayerViewModel de Ryutify a nivel producción: contrato público, telemetría de sesión y tests de todos los escenarios de reproducción."
- "Aplica PlayerViewModel real de Ryutify (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El PlayerViewModel tiene contrato documentado"
- "Revisa mi arquitectura-app y dime qué pasos de PlayerViewModel real de Ryutify me faltan en este nivel"