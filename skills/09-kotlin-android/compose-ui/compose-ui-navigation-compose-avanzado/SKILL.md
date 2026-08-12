---
name: compose-ui-navigation-compose-avanzado
description: Navigation Compose · nivel Avanzado · Jetpack Compose: UI declarativa. Navegación declarativa con argumentos tipados y deep links. Objetivo del nivel: Argumentos tipados, deep links y transiciones.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "navigation-compose"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Navigation Compose — Avanzado

## Qué hace este skill

Navegación declarativa con argumentos tipados y deep links. En este nivel se entrega: **Argumentos tipados, deep links y transiciones.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Navigation Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir argumentos tipados con TypeSafe Navigation
2. Agregar deep links a las rutas
3. Configurar transiciones entre pantallas
4. Manejar la navegación con el estado del player

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Argumentos tipados, deep links y transiciones. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Definir argumentos tipados con TypeSafe Navigation · Agregar deep links a las rutas · Configurar transiciones entre pantallas · Manejar la navegación con el estado del player | lista | sí | 3-4 pasos |
| $criterios_clave | Los deep links abren la pantalla correcta · Las transiciones no rompen el estado de la lista | lista | sí | calidad verificable |
| $prompt_guia | Agregá deep links de ryutify://cancion/ID con TypeSafe Navigation y transiciones suaves entre las pantallas. | texto | no | "Navigation Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los deep links abren la pantalla correcta
- [ ] Las transiciones no rompen el estado de la lista

## Ejemplos de prompts

- "Agregá deep links de ryutify://cancion/ID con TypeSafe Navigation y transiciones suaves entre las pantallas."
- "Aplica Navigation Compose (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Los deep links abren la pantalla correcta"
- "Revisa mi compose-ui y dime qué pasos de Navigation Compose me faltan en este nivel"