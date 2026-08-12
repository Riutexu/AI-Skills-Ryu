---
name: arquitectura-app-manejo-errores-profesional
description: Manejo de errores en la arquitectura · nivel Profesional · Arquitectura MVVM y ViewModel. Los errores fluyen por las capas sin perderse ni tragarse. Objetivo del nivel: Sistema de errores del producto: visibilidad y mejora.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "manejo-errores"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Manejo de errores en la arquitectura — Profesional

## Qué hace este skill

Los errores fluyen por las capas sin perderse ni tragarse. En este nivel se entrega: **Sistema de errores del producto: visibilidad y mejora.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores en la arquitectura** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar los errores a la telemetría con contexto
2. Definir los mensajes de usuario por error
3. Medir la tasa de errores por flujo
4. Documentar el sistema de errores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sistema de errores del producto: visibilidad y mejora. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Agregar los errores a la telemetría con contexto · Definir los mensajes de usuario por error · Medir la tasa de errores por flujo · Documentar el sistema de errores | lista | sí | 3-4 pasos |
| $criterios_clave | La telemetría muestra la tasa de errores por flujo · El sistema de errores está documentado | lista | sí | calidad verificable |
| $prompt_guia | Quiero un sistema de errores completo para Ryutify: telemetría con contexto, mensajes de usuario por error y medición por flujo. | texto | no | "Manejo de errores en la arquitectura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La telemetría muestra la tasa de errores por flujo
- [ ] El sistema de errores está documentado

## Ejemplos de prompts

- "Quiero un sistema de errores completo para Ryutify: telemetría con contexto, mensajes de usuario por error y medición por flujo."
- "Aplica Manejo de errores en la arquitectura (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La telemetría muestra la tasa de errores por flujo"
- "Revisa mi arquitectura-app y dime qué pasos de Manejo de errores en la arquitectura me faltan en este nivel"