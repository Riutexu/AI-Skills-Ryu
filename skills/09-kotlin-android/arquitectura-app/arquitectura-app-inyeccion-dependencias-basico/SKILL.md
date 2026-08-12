---
name: arquitectura-app-inyeccion-dependencias-basico
description: Inyección de dependencias · nivel Básico · Arquitectura MVVM y ViewModel. Inyección manual y con contenedor para un grafo claro. Objetivo del nivel: Aplicar la inyección manual de dependencias.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "inyeccion-dependencias"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Inyección de dependencias — Básico

## Qué hace este skill

Inyección manual y con contenedor para un grafo claro. En este nivel se entrega: **Aplicar la inyección manual de dependencias.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección de dependencias** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar las dependencias de cada clase
2. Pasar las dependencias por constructor
3. Crear el contenedor simple de la app
4. Eliminar los singletons globales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar la inyección manual de dependencias. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Identificar las dependencias de cada clase · Pasar las dependencias por constructor · Crear el contenedor simple de la app · Eliminar los singletons globales | lista | sí | 3-4 pasos |
| $criterios_clave | Las clases reciben sus dependencias por constructor · El contenedor centraliza la creación | lista | sí | calidad verificable |
| $prompt_guia | Ryutify está lleno de singletons globales. Aplicá inyección manual con un contenedor simple y pasá las dependencias por constructor. | texto | no | "Inyección de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las clases reciben sus dependencias por constructor
- [ ] El contenedor centraliza la creación

## Ejemplos de prompts

- "Ryutify está lleno de singletons globales. Aplicá inyección manual con un contenedor simple y pasá las dependencias por constructor."
- "Aplica Inyección de dependencias (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza Las clases reciben sus dependencias por constructor"
- "Revisa mi arquitectura-app y dime qué pasos de Inyección de dependencias me faltan en este nivel"