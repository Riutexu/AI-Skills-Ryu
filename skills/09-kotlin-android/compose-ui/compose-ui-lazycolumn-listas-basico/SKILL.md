---
name: compose-ui-lazycolumn-listas-basico
description: Listas con LazyColumn · nivel Básico · Jetpack Compose: UI declarativa. Listas eficientes y de todo tipo con LazyColumn y LazyGrid. Objetivo del nivel: Mostrar listas de canciones con LazyColumn.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "lazycolumn-listas"
  nivel: basico
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Listas con LazyColumn — Básico

## Qué hace este skill

Listas eficientes y de todo tipo con LazyColumn y LazyGrid. En este nivel se entrega: **Mostrar listas de canciones con LazyColumn.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Listas con LazyColumn** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Reemplazar la lista vieja por LazyColumn
2. Usar items con keys estables
3. Mostrar el estado vacío y el de carga
4. Agregar el header de la playlist

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Mostrar listas de canciones con LazyColumn. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Reemplazar la lista vieja por LazyColumn · Usar items con keys estables · Mostrar el estado vacío y el de carga · Agregar el header de la playlist | lista | sí | 3-4 pasos |
| $criterios_clave | La lista scrollea fluido con 500 canciones · Las keys evitan la pérdida de estado de los ítems | lista | sí | calidad verificable |
| $prompt_guia | Pasá la lista de canciones de la biblioteca de Ryutify a LazyColumn con keys estables y estados de carga y vacío. | texto | no | "Listas con LazyColumn" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La lista scrollea fluido con 500 canciones
- [ ] Las keys evitan la pérdida de estado de los ítems

## Ejemplos de prompts

- "Pasá la lista de canciones de la biblioteca de Ryutify a LazyColumn con keys estables y estados de carga y vacío."
- "Aplica Listas con LazyColumn (nivel basico) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza La lista scrollea fluido con 500 canciones"
- "Revisa mi compose-ui y dime qué pasos de Listas con LazyColumn me faltan en este nivel"