---
name: arquitectura-app-mvvm-capas-profesional
description: MVVM y capas · nivel Profesional · Arquitectura MVVM y ViewModel. Separación de responsabilidades: UI, ViewModel, dominio y datos. Objetivo del nivel: Definir la arquitectura del producto y evaluar su evolución.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mvvm-capas"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# MVVM y capas — Profesional

## Qué hace este skill

Separación de responsabilidades: UI, ViewModel, dominio y datos. En este nivel se entrega: **Definir la arquitectura del producto y evaluar su evolución.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **MVVM y capas** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar la arquitectura con diagramas y decisiones
2. Definir los límites de cada capa con tests de arquitectura
3. Evaluar la evolución a otros patrones si aporta
4. Hacer la revisión de arquitectura en cada release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la arquitectura del producto y evaluar su evolución. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Documentar la arquitectura con diagramas y decisiones · Definir los límites de cada capa con tests de arquitectura · Evaluar la evolución a otros patrones si aporta · Hacer la revisión de arquitectura en cada release | lista | sí | 3-4 pasos |
| $criterios_clave | La arquitectura está documentada y aplicada · Los tests de arquitectura fallan ante violaciones | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la arquitectura de Ryutify esté documentada con diagramas y protegida con tests de arquitectura que fallen ante violaciones de capas. | texto | no | "MVVM y capas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La arquitectura está documentada y aplicada
- [ ] Los tests de arquitectura fallan ante violaciones

## Ejemplos de prompts

- "Quiero que la arquitectura de Ryutify esté documentada con diagramas y protegida con tests de arquitectura que fallen ante violaciones de capas."
- "Aplica MVVM y capas (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La arquitectura está documentada y aplicada"
- "Revisa mi arquitectura-app y dime qué pasos de MVVM y capas me faltan en este nivel"