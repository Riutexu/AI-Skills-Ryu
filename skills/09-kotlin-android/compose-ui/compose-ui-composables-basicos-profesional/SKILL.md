---
name: compose-ui-composables-basicos-profesional
description: Composables básicos · nivel Profesional · Jetpack Compose: UI declarativa. Primeros pasos con la UI declarativa: text, column, row y botones. Objetivo del nivel: Definir la biblioteca de componentes de UI del producto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "composables-basicos"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Composables básicos — Profesional

## Qué hace este skill

Primeros pasos con la UI declarativa: text, column, row y botones. En este nivel se entrega: **Definir la biblioteca de componentes de UI del producto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Composables básicos** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el sistema de componentes con sus variantes
2. Documentar cada componente con previews
3. Definir la jerarquía de composables por módulo
4. Auditar la consistencia visual entre pantallas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la biblioteca de componentes de UI del producto. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Crear el sistema de componentes con sus variantes · Documentar cada componente con previews · Definir la jerarquía de composables por módulo · Auditar la consistencia visual entre pantallas | lista | sí | 3-4 pasos |
| $criterios_clave | Los componentes del producto tienen previews y documentación · No hay dos implementaciones visuales del mismo elemento | lista | sí | calidad verificable |
| $prompt_guia | Quiero una mini design system en Compose para Ryutify: componentes como FilaCancion, CardAlbum y BotonControl con previews y documentación. Diseñala. | texto | no | "Composables básicos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los componentes del producto tienen previews y documentación
- [ ] No hay dos implementaciones visuales del mismo elemento

## Ejemplos de prompts

- "Quiero una mini design system en Compose para Ryutify: componentes como FilaCancion, CardAlbum y BotonControl con previews y documentación. Diseñala."
- "Aplica Composables básicos (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza Los componentes del producto tienen previews y documentación"
- "Revisa mi compose-ui y dime qué pasos de Composables básicos me faltan en este nivel"