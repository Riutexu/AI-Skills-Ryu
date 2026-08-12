---
name: arquitectura-app-playerviewmodel-ryutify-avanzado
description: PlayerViewModel real de Ryutify · nivel Avanzado · Arquitectura MVVM y ViewModel. El ViewModel que gobierna la reproducción, la cola y la sesión. Objetivo del nivel: Integrar el PlayerViewModel con el servicio y la persistencia.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "playerviewmodel-ryutify"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# PlayerViewModel real de Ryutify — Avanzado

## Qué hace este skill

El ViewModel que gobierna la reproducción, la cola y la sesión. En este nivel se entrega: **Integrar el PlayerViewModel con el servicio y la persistencia.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PlayerViewModel real de Ryutify** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Sincronizar el PlayerViewModel con el servicio de audio
2. Restaurar la cola y la posición al arrancar
3. Manejar la reconexión de la UI
4. Persistir la cola en cada cambio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Integrar el PlayerViewModel con el servicio y la persistencia. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Sincronizar el PlayerViewModel con el servicio de audio · Restaurar la cola y la posición al arrancar · Manejar la reconexión de la UI · Persistir la cola en cada cambio | lista | sí | 3-4 pasos |
| $criterios_clave | El PlayerViewModel se sincroniza con el servicio · La sesión se restaura desde la persistencia | lista | sí | calidad verificable |
| $prompt_guia | El PlayerViewModel de Ryutify no se sincroniza con el servicio de audio. Integralo con la persistencia de la cola y la reconexión de la UI. | texto | no | "PlayerViewModel real de Ryutify" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El PlayerViewModel se sincroniza con el servicio
- [ ] La sesión se restaura desde la persistencia

## Ejemplos de prompts

- "El PlayerViewModel de Ryutify no se sincroniza con el servicio de audio. Integralo con la persistencia de la cola y la reconexión de la UI."
- "Aplica PlayerViewModel real de Ryutify (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El PlayerViewModel se sincroniza con el servicio"
- "Revisa mi arquitectura-app y dime qué pasos de PlayerViewModel real de Ryutify me faltan en este nivel"