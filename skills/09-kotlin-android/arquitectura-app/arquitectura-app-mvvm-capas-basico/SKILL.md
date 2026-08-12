---
name: arquitectura-app-mvvm-capas-basico
description: MVVM y capas · nivel Básico · Arquitectura MVVM y ViewModel. Separación de responsabilidades: UI, ViewModel, dominio y datos. Objetivo del nivel: Separar la app en las capas de MVVM básicas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mvvm-capas"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# MVVM y capas — Básico

## Qué hace este skill

Separación de responsabilidades: UI, ViewModel, dominio y datos. En este nivel se entrega: **Separar la app en las capas de MVVM básicas.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **MVVM y capas** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar UI, ViewModel y repositorio en el código actual
2. Mover la lógica de la pantalla al ViewModel
3. Mover el acceso a datos al repositorio
4. Conectar las capas con interfaces

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Separar la app en las capas de MVVM básicas. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Identificar UI, ViewModel y repositorio en el código actual · Mover la lógica de la pantalla al ViewModel · Mover el acceso a datos al repositorio · Conectar las capas con interfaces | lista | sí | 3-4 pasos |
| $criterios_clave | Las pantallas no tocan la red ni la base de datos · El ViewModel no conoce vistas concretas | lista | sí | calidad verificable |
| $prompt_guia | La pantalla de búsqueda de Ryutify tiene toda la lógica adentro. Separala en capas: UI, ViewModel y repositorio. | texto | no | "MVVM y capas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las pantallas no tocan la red ni la base de datos
- [ ] El ViewModel no conoce vistas concretas

## Ejemplos de prompts

- "La pantalla de búsqueda de Ryutify tiene toda la lógica adentro. Separala en capas: UI, ViewModel y repositorio."
- "Aplica MVVM y capas (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Las pantallas no tocan la red ni la base de datos"
- "Revisa mi arquitectura-app y dime qué pasos de MVVM y capas me faltan en este nivel"