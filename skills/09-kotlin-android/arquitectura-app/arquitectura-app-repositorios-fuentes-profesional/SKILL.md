---
name: arquitectura-app-repositorios-fuentes-profesional
description: Repositorios y fuentes de datos · nivel Profesional · Arquitectura MVVM y ViewModel. Unifica red, cache y base de datos detrás de repositorios. Objetivo del nivel: Diseñar los repositorios del producto con contratos y métricas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "repositorios-fuentes"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Repositorios y fuentes de datos — Profesional

## Qué hace este skill

Unifica red, cache y base de datos detrás de repositorios. En este nivel se entrega: **Diseñar los repositorios del producto con contratos y métricas.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Repositorios y fuentes de datos** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los contratos de todos los repositorios
2. Agregar métricas de hit rate y latencia
3. Aislar las fuentes de datos
4. Testear los repositorios con fuentes simuladas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar los repositorios del producto con contratos y métricas. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir los contratos de todos los repositorios · Agregar métricas de hit rate y latencia · Aislar las fuentes de datos · Testear los repositorios con fuentes simuladas | lista | sí | 3-4 pasos |
| $criterios_clave | Los repositorios están testeados con fuentes simuladas · Las métricas de los repositorios están en la telemetría | lista | sí | calidad verificable |
| $prompt_guia | Quiero repositorios de Ryutify bien diseñados: contratos, métricas de cache y tests con fuentes simuladas. | texto | no | "Repositorios y fuentes de datos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los repositorios están testeados con fuentes simuladas
- [ ] Las métricas de los repositorios están en la telemetría

## Ejemplos de prompts

- "Quiero repositorios de Ryutify bien diseñados: contratos, métricas de cache y tests con fuentes simuladas."
- "Aplica Repositorios y fuentes de datos (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Los repositorios están testeados con fuentes simuladas"
- "Revisa mi arquitectura-app y dime qué pasos de Repositorios y fuentes de datos me faltan en este nivel"