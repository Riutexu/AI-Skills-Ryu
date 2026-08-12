---
name: compose-ui-navigation-compose-profesional
description: Navigation Compose · nivel Profesional · Jetpack Compose: UI declarativa. Navegación declarativa con argumentos tipados y deep links. Objetivo del nivel: Grafo de navegación del producto con estados y flujos complejos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "navigation-compose"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Navigation Compose — Profesional

## Qué hace este skill

Navegación declarativa con argumentos tipados y deep links. En este nivel se entrega: **Grafo de navegación del producto con estados y flujos complejos.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Navigation Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar el grafo completo y sus argumentos
2. Definir el flujo de navegación del proceso muerto
3. Integrar la navegación con el estado de reproducción
4. Testear el back stack en todos los escenarios

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Grafo de navegación del producto con estados y flujos complejos. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Documentar el grafo completo y sus argumentos · Definir el flujo de navegación del proceso muerto · Integrar la navegación con el estado de reproducción · Testear el back stack en todos los escenarios | lista | sí | 3-4 pasos |
| $criterios_clave | El proceso muerto vuelve a la pantalla correcta · El grafo está documentado y actualizado | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el grafo de navegación completo de Ryutify con el flujo del proceso muerto y la integración con el estado del player, y testealos. | texto | no | "Navigation Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proceso muerto vuelve a la pantalla correcta
- [ ] El grafo está documentado y actualizado

## Ejemplos de prompts

- "Diseñá el grafo de navegación completo de Ryutify con el flujo del proceso muerto y la integración con el estado del player, y testealos."
- "Aplica Navigation Compose (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza El proceso muerto vuelve a la pantalla correcta"
- "Revisa mi compose-ui y dime qué pasos de Navigation Compose me faltan en este nivel"