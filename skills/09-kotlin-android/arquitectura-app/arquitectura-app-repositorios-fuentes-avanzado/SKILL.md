---
name: arquitectura-app-repositorios-fuentes-avanzado
description: Repositorios y fuentes de datos · nivel Avanzado · Arquitectura MVVM y ViewModel. Unifica red, cache y base de datos detrás de repositorios. Objetivo del nivel: Políticas de cache y sincronización entre fuentes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "repositorios-fuentes"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Repositorios y fuentes de datos — Avanzado

## Qué hace este skill

Unifica red, cache y base de datos detrás de repositorios. En este nivel se entrega: **Políticas de cache y sincronización entre fuentes.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Repositorios y fuentes de datos** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar la política cache primero, red después
2. Sincronizar los favoritos entre red y local
3. Exponer Flow del repositorio
4. Manejar la consistencia ante fallos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Políticas de cache y sincronización entre fuentes. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Implementar la política cache primero, red después · Sincronizar los favoritos entre red y local · Exponer Flow del repositorio · Manejar la consistencia ante fallos | lista | sí | 3-4 pasos |
| $criterios_clave | La política de cache se aplica en el repositorio · Los favoritos se sincronizan sin duplicar | lista | sí | calidad verificable |
| $prompt_guia | El repositorio de Ryutify debe servir cache primero y actualizar de red después. Implementá la política y la sincronización de favoritos. | texto | no | "Repositorios y fuentes de datos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política de cache se aplica en el repositorio
- [ ] Los favoritos se sincronizan sin duplicar

## Ejemplos de prompts

- "El repositorio de Ryutify debe servir cache primero y actualizar de red después. Implementá la política y la sincronización de favoritos."
- "Aplica Repositorios y fuentes de datos (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza La política de cache se aplica en el repositorio"
- "Revisa mi arquitectura-app y dime qué pasos de Repositorios y fuentes de datos me faltan en este nivel"