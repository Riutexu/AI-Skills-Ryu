---
name: arquitectura-app-inyeccion-dependencias-avanzado
description: Inyección de dependencias · nivel Avanzado · Arquitectura MVVM y ViewModel. Inyección manual y con contenedor para un grafo claro. Objetivo del nivel: Grafo de dependencias completo y ciclos de vida.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "inyeccion-dependencias"
  nivel: avanzado
  stack: "MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService"
---

# Inyección de dependencias — Avanzado

## Qué hace este skill

Inyección manual y con contenedor para un grafo claro. En este nivel se entrega: **Grafo de dependencias completo y ciclos de vida.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Arquitectura MVVM y ViewModel** (MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección de dependencias** dentro de Arquitectura MVVM y ViewModel.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Organizar el grafo por módulos
2. Definir los scopes de las dependencias
3. Resolver las dependencias del ViewModel
4. Manejar los ciclos de vida con el contenedor

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Grafo de dependencias completo y ciclos de vida. | texto | sí | resultado medible |
| $stack | Arquitectura MVVM y ViewModel | texto | sí | 09-kotlin-android/arquitectura-app |
| $tecnologias | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService | texto | sí | MVVM, ViewModel, StateFlow, SavedStateHandle, repos, inyección manual, PlaybackService |
| $tareas_clave | Organizar el grafo por módulos · Definir los scopes de las dependencias · Resolver las dependencias del ViewModel · Manejar los ciclos de vida con el contenedor | lista | sí | 3-4 pasos |
| $criterios_clave | El grafo respeta los scopes definidos · No hay dependencias duplicadas | lista | sí | calidad verificable |
| $prompt_guia | El contenedor de Ryutify se volvió inmanejable. Organizalo por módulos con scopes claros para las dependencias del player. | texto | no | "Inyección de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El grafo respeta los scopes definidos
- [ ] No hay dependencias duplicadas

## Ejemplos de prompts

- "El contenedor de Ryutify se volvió inmanejable. Organizalo por módulos con scopes claros para las dependencias del player."
- "Aplica Inyección de dependencias (nivel avanzado) a mi trabajo actual con Arquitectura MVVM y ViewModel: prioriza El grafo respeta los scopes definidos"
- "Revisa mi arquitectura-app y dime qué pasos de Inyección de dependencias me faltan en este nivel"