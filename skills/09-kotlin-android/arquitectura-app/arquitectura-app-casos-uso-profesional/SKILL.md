---
name: arquitectura-app-casos-uso-profesional
description: Casos de uso · nivel Profesional · Arquitectura MVVM y ViewModel. Orquesta las reglas de negocio con casos de uso claros. Objetivo del nivel: Diseñar la capa de casos de uso del producto con consistencia.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "casos-uso"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Casos de uso — Profesional

## Qué hace este skill

Orquesta las reglas de negocio con casos de uso claros. En este nivel se entrega: **Diseñar la capa de casos de uso del producto con consistencia.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Casos de uso** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el patrón de casos de uso del proyecto
2. Auditar la lógica de negocio fuera de la capa
3. Documentar los casos de uso por feature
4. Medir la cobertura de los casos de uso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la capa de casos de uso del producto con consistencia. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir el patrón de casos de uso del proyecto · Auditar la lógica de negocio fuera de la capa · Documentar los casos de uso por feature · Medir la cobertura de los casos de uso | lista | sí | 3-4 pasos |
| $criterios_clave | La lógica de negocio vive en la capa de casos de uso · Los casos de uso críticos tienen cobertura | lista | sí | calidad verificable |
| $prompt_guia | Quiero que toda la lógica de negocio de Ryutify viva en casos de uso: auditá lo que está fuera, definí el patrón y documentá por feature. | texto | no | "Casos de uso" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La lógica de negocio vive en la capa de casos de uso
- [ ] Los casos de uso críticos tienen cobertura

## Ejemplos de prompts

- "Quiero que toda la lógica de negocio de Ryutify viva en casos de uso: auditá lo que está fuera, definí el patrón y documentá por feature."
- "Aplica Casos de uso (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La lógica de negocio vive en la capa de casos de uso"
- "Revisa mi arquitectura-app y dime qué pasos de Casos de uso me faltan en este nivel"