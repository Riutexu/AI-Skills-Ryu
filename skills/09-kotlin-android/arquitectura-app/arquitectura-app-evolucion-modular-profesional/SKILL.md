---
name: arquitectura-app-evolucion-modular-profesional
description: Evolución a modular · nivel Profesional · Arquitectura MVVM y ViewModel. Evoluciona el monolitio a módulos sin romper la app. Objetivo del nivel: Estrategia modular del producto con métricas y gobernanza.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "evolucion-modular"
  nivel: profesional
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Evolución a modular — Profesional

## Qué hace este skill

Evoluciona el monolitio a módulos sin romper la app. En este nivel se entrega: **Estrategia modular del producto con métricas y gobernanza.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Evolución a modular** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la estrategia modular con hitos
2. Medir el tiempo de build por módulo
3. Establecer las reglas de dependencias entre módulos
4. Documentar la arquitectura modular final

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia modular del producto con métricas y gobernanza. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Definir la estrategia modular con hitos · Medir el tiempo de build por módulo · Establecer las reglas de dependencias entre módulos · Documentar la arquitectura modular final | lista | sí | 3-4 pasos |
| $criterios_clave | El build incremental mejora con la modularización · Las reglas de dependencias están automatizadas | lista | sí | calidad verificable |
| $prompt_guia | Quiero modularizar Ryutify con una estrategia: hitos, medición de build por módulo y reglas de dependencias automatizadas. | texto | no | "Evolución a modular" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El build incremental mejora con la modularización
- [ ] Las reglas de dependencias están automatizadas

## Ejemplos de prompts

- "Quiero modularizar Ryutify con una estrategia: hitos, medición de build por módulo y reglas de dependencias automatizadas."
- "Aplica Evolución a modular (nivel profesional) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El build incremental mejora con la modularización"
- "Revisa mi arquitectura-app y dime qué pasos de Evolución a modular me faltan en este nivel"