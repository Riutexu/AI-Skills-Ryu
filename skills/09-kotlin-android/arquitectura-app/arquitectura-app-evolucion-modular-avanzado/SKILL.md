---
name: arquitectura-app-evolucion-modular-avanzado
description: Evolución a modular · nivel Avanzado · Arquitectura MVVM y ViewModel. Evoluciona el monolitio a módulos sin romper la app. Objetivo del nivel: Extraer features a módulos con navegación entre módulos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "evolucion-modular"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Evolución a modular — Avanzado

## Qué hace este skill

Evoluciona el monolitio a módulos sin romper la app. En este nivel se entrega: **Extraer features a módulos con navegación entre módulos.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Evolución a modular** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Extraer el módulo de reproducción
2. Definir la navegación entre módulos
3. Manejar las dependencias entre features
4. Verificar los tiempos de build por módulo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Extraer features a módulos con navegación entre módulos. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Extraer el módulo de reproducción · Definir la navegación entre módulos · Manejar las dependencias entre features · Verificar los tiempos de build por módulo | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo de reproducción compila solo · La navegación entre módulos funciona | lista | sí | calidad verificable |
| $prompt_guia | Extraé el módulo de reproducción de Ryutify con su navegación y verificá que compile de forma independiente. | texto | no | "Evolución a modular" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo de reproducción compila solo
- [ ] La navegación entre módulos funciona

## Ejemplos de prompts

- "Extraé el módulo de reproducción de Ryutify con su navegación y verificá que compile de forma independiente."
- "Aplica Evolución a modular (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El módulo de reproducción compila solo"
- "Revisa mi arquitectura-app y dime qué pasos de Evolución a modular me faltan en este nivel"