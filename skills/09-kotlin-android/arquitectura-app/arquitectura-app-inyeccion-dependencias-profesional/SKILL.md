---
name: arquitectura-app-inyeccion-dependencias-profesional
description: Inyección de dependencias · nivel Profesional · Arquitectura MVVM y ViewModel. Inyección manual y con contenedor para un grafo claro. Objetivo del nivel: Evaluar y decidir la estrategia de inyección del producto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "inyeccion-dependencias"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Inyección de dependencias — Profesional

## Qué hace este skill

Inyección manual y con contenedor para un grafo claro. En este nivel se entrega: **Evaluar y decidir la estrategia de inyección del producto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección de dependencias** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Comparar la inyección manual con un framework
2. Evaluar el costo y el beneficio de Hilt
3. Definir la estrategia final con documentación
4. Migrar el contenedor a la estrategia elegida

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Evaluar y decidir la estrategia de inyección del producto. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Comparar la inyección manual con un framework · Evaluar el costo y el beneficio de Hilt · Definir la estrategia final con documentación · Migrar el contenedor a la estrategia elegida | lista | sí | 3-4 pasos |
| $criterios_clave | La estrategia elegida está documentada con su justificación · La migración no rompe los tests | lista | sí | calidad verificable |
| $prompt_guia | El contenedor manual de Ryutify crece sin control. Compará con Hilt, documentá la decisión y migrá si conviene. | texto | no | "Inyección de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La estrategia elegida está documentada con su justificación
- [ ] La migración no rompe los tests

## Ejemplos de prompts

- "El contenedor manual de Ryutify crece sin control. Compará con Hilt, documentá la decisión y migrá si conviene."
- "Aplica Inyección de dependencias (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La estrategia elegida está documentada con su justificación"
- "Revisa mi arquitectura-app y dime qué pasos de Inyección de dependencias me faltan en este nivel"