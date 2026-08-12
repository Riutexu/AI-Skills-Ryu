---
name: arquitectura-app-mvvm-capas-avanzado
description: MVVM y capas · nivel Avanzado · Arquitectura MVVM y ViewModel. Separación de responsabilidades: UI, ViewModel, dominio y datos. Objetivo del nivel: Definir la arquitectura por módulos y los contratos entre capas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mvvm-capas"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# MVVM y capas — Avanzado

## Qué hace este skill

Separación de responsabilidades: UI, ViewModel, dominio y datos. En este nivel se entrega: **Definir la arquitectura por módulos y los contratos entre capas.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **MVVM y capas** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar los módulos de datos, dominio y presentación
2. Definir los contratos de cada capa
3. Mover el player detrás de una interfaz
4. Evitar las dependencias circulares entre módulos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Definir la arquitectura por módulos y los contratos entre capas. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Separar los módulos de datos, dominio y presentación · Definir los contratos de cada capa · Mover el player detrás de una interfaz · Evitar las dependencias circulares entre módulos | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo de datos no importa la UI · Las dependencias entre módulos fluyen en una sola dirección | lista | sí | calidad verificable |
| $prompt_guia | Quiero modularizar Ryutify: data, domain y presentation separados con contratos claros y sin dependencias circulares. | texto | no | "MVVM y capas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo de datos no importa la UI
- [ ] Las dependencias entre módulos fluyen en una sola dirección

## Ejemplos de prompts

- "Quiero modularizar Ryutify: data, domain y presentation separados con contratos claros y sin dependencias circulares."
- "Aplica MVVM y capas (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El módulo de datos no importa la UI"
- "Revisa mi arquitectura-app y dime qué pasos de MVVM y capas me faltan en este nivel"