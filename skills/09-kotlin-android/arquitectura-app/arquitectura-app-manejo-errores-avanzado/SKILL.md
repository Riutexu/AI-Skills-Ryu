---
name: arquitectura-app-manejo-errores-avanzado
description: Manejo de errores en la arquitectura · nivel Avanzado · Arquitectura MVVM y ViewModel. Los errores fluyen por las capas sin perderse ni tragarse. Objetivo del nivel: Errores de dominio unificados y políticas de retry por capa.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "manejo-errores"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Manejo de errores en la arquitectura — Avanzado

## Qué hace este skill

Los errores fluyen por las capas sin perderse ni tragarse. En este nivel se entrega: **Errores de dominio unificados y políticas de retry por capa.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores en la arquitectura** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar el modelo de errores de dominio en toda la app
2. Definir la política de retry por capa
3. Manejar los errores de estado del player
4. Diferenciar errores recuperables de los fatales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Errores de dominio unificados y políticas de retry por capa. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Usar el modelo de errores de dominio en toda la app · Definir la política de retry por capa · Manejar los errores de estado del player · Diferenciar errores recuperables de los fatales | lista | sí | 3-4 pasos |
| $criterios_clave | La app usa un solo modelo de errores · La política de retry se respeta en cada capa | lista | sí | calidad verificable |
| $prompt_guia | Ryutify mezcla excepciones de Retrofit, de Room y de innertube. Unificá el modelo de errores y definí la política de retry por capa. | texto | no | "Manejo de errores en la arquitectura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La app usa un solo modelo de errores
- [ ] La política de retry se respeta en cada capa

## Ejemplos de prompts

- "Ryutify mezcla excepciones de Retrofit, de Room y de innertube. Unificá el modelo de errores y definí la política de retry por capa."
- "Aplica Manejo de errores en la arquitectura (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La app usa un solo modelo de errores"
- "Revisa mi arquitectura-app y dime qué pasos de Manejo de errores en la arquitectura me faltan en este nivel"