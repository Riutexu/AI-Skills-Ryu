---
name: arquitectura-app-casos-uso-avanzado
description: Casos de uso · nivel Avanzado · Arquitectura MVVM y ViewModel. Orquesta las reglas de negocio con casos de uso claros. Objetivo del nivel: Casos de uso compuestos y reglas de negocio.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "casos-uso"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Casos de uso — Avanzado

## Qué hace este skill

Orquesta las reglas de negocio con casos de uso claros. En este nivel se entrega: **Casos de uso compuestos y reglas de negocio.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos de uso** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Componer casos de uso entre sí
2. Agregar la regla de negocio de la cola
3. Manejar los errores de los casos de uso
4. Testear los casos de uso con repositorios simulados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Casos de uso compuestos y reglas de negocio. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Componer casos de uso entre sí · Agregar la regla de negocio de la cola · Manejar los errores de los casos de uso · Testear los casos de uso con repositorios simulados | lista | sí | 3-4 pasos |
| $criterios_clave | Las reglas de negocio viven en los casos de uso · Los casos de uso tienen tests | lista | sí | calidad verificable |
| $prompt_guia | La regla de Ryutify de no repetir canciones en la cola está en la UI. Movela a un caso de uso y testéala. | texto | no | "Casos de uso" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las reglas de negocio viven en los casos de uso
- [ ] Los casos de uso tienen tests

## Ejemplos de prompts

- "La regla de Ryutify de no repetir canciones en la cola está en la UI. Movela a un caso de uso y testéala."
- "Aplica Casos de uso (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Las reglas de negocio viven en los casos de uso"
- "Revisa mi arquitectura-app y dime qué pasos de Casos de uso me faltan en este nivel"