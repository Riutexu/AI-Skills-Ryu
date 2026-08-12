---
name: compose-ui-state-hoisting-avanzado
description: State hoisting · nivel Avanzado · Jetpack Compose: UI declarativa. Sube el estado y baja los eventos: la regla de oro de Compose. Objetivo del nivel: Combinar hoisting con ViewModel y eventos de UI.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "state-hoisting"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# State hoisting — Avanzado

## Qué hace este skill

Sube el estado y baja los eventos: la regla de oro de Compose. En este nivel se entrega: **Combinar hoisting con ViewModel y eventos de UI.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State hoisting** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Conectar el estado del ViewModel con la UI
2. Enviar eventos de UI hacia el ViewModel
3. Usar el patrón de eventos unidireccionales
4. Manejar eventos one-shot con SharedFlow

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar hoisting con ViewModel y eventos de UI. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Conectar el estado del ViewModel con la UI · Enviar eventos de UI hacia el ViewModel · Usar el patrón de eventos unidireccionales · Manejar eventos one-shot con SharedFlow | lista | sí | 3-4 pasos |
| $criterios_clave | La UI nunca muta el estado directamente · Los eventos one-shot se consumen una sola vez | lista | sí | calidad verificable |
| $prompt_guia | Conectá la pantalla del player de Ryutify con su ViewModel usando hoisting: estado hacia abajo, eventos hacia arriba y eventos one-shot con SharedFlow. | texto | no | "State hoisting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI nunca muta el estado directamente
- [ ] Los eventos one-shot se consumen una sola vez

## Ejemplos de prompts

- "Conectá la pantalla del player de Ryutify con su ViewModel usando hoisting: estado hacia abajo, eventos hacia arriba y eventos one-shot con SharedFlow."
- "Aplica State hoisting (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La UI nunca muta el estado directamente"
- "Revisa mi compose-ui y dime qué pasos de State hoisting me faltan en este nivel"