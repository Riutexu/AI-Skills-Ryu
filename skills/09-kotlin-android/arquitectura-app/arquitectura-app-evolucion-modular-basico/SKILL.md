---
name: arquitectura-app-evolucion-modular-basico
description: Evolución a modular · nivel Básico · Arquitectura MVVM y ViewModel. Evoluciona el monolitio a módulos sin romper la app. Objetivo del nivel: Identificar los módulos candidatos del proyecto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "evolucion-modular"
  nivel: basico
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Evolución a modular — Básico

## Qué hace este skill

Evoluciona el monolitio a módulos sin romper la app. En este nivel se entrega: **Identificar los módulos candidatos del proyecto.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Evolución a modular** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Analizar las dependencias del módulo app
2. Identificar los candidatos: core, data y feature
3. Definir los límites de cada módulo
4. Extraer el módulo core sin cambios de comportamiento

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Identificar los módulos candidatos del proyecto. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Analizar las dependencias del módulo app · Identificar los candidatos: core, data y feature · Definir los límites de cada módulo · Extraer el módulo core sin cambios de comportamiento | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo core se extrae sin romper la app · Los límites de los módulos están documentados | lista | sí | calidad verificable |
| $prompt_guia | El módulo app de Ryutify es gigante. Identificá los módulos candidatos y extraé el core sin cambiar el comportamiento. | texto | no | "Evolución a modular" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo core se extrae sin romper la app
- [ ] Los límites de los módulos están documentados

## Ejemplos de prompts

- "El módulo app de Ryutify es gigante. Identificá los módulos candidatos y extraé el core sin cambiar el comportamiento."
- "Aplica Evolución a modular (nivel basico) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El módulo core se extrae sin romper la app"
- "Revisa mi arquitectura-app y dime qué pasos de Evolución a modular me faltan en este nivel"