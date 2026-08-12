---
name: compose-ui-viewmodel-compose-avanzado
description: ViewModel y Compose · nivel Avanzado · Jetpack Compose: UI declarativa. Integración de ViewModel con Compose: estado, ciclo de vida y colección. Objetivo del nivel: Colección con ciclo de vida y estados intermedios.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "viewmodel-compose"
  nivel: avanzado
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# ViewModel y Compose — Avanzado

## Qué hace este skill

Integración de ViewModel con Compose: estado, ciclo de vida y colección. En este nivel se entrega: **Colección con ciclo de vida y estados intermedios.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ViewModel y Compose** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar collectAsStateWithLifecycle
2. Manejar los estados de carga y error en la UI
3. Evitar la pérdida de eventos one-shot
4. Usar viewModelScope correctamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Colección con ciclo de vida y estados intermedios. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Usar collectAsStateWithLifecycle · Manejar los estados de carga y error en la UI · Evitar la pérdida de eventos one-shot · Usar viewModelScope correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | La UI no recolecta en background · Los estados de carga y error se muestran correctamente | lista | sí | calidad verificable |
| $prompt_guia | La pantalla de búsqueda de Ryutify recolecta estado incluso en background. Usá collectAsStateWithLifecycle y manejá los estados de carga y error. | texto | no | "ViewModel y Compose" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI no recolecta en background
- [ ] Los estados de carga y error se muestran correctamente

## Ejemplos de prompts

- "La pantalla de búsqueda de Ryutify recolecta estado incluso en background. Usá collectAsStateWithLifecycle y manejá los estados de carga y error."
- "Aplica ViewModel y Compose (nivel avanzado) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La UI no recolecta en background"
- "Revisa mi compose-ui y dime qué pasos de ViewModel y Compose me faltan en este nivel"