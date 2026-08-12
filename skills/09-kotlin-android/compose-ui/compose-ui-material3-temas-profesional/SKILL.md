---
name: compose-ui-material3-temas-profesional
description: Material 3 y temas · nivel Profesional · Jetpack Compose: UI declarativa. Temas dinámicos y diseño consistente con Material 3. Objetivo del nivel: Sistema de temas del producto y consistencia visual medible.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "material3-temas"
  nivel: profesional
  stack: "Compose, Material 3, state hoisting, Navigation Compose, LazyColumn"
---

# Material 3 y temas — Profesional

## Qué hace este skill

Temas dinámicos y diseño consistente con Material 3. En este nivel se entrega: **Sistema de temas del producto y consistencia visual medible.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Jetpack Compose: UI declarativa** (Compose, Material 3, state hoisting, Navigation Compose, LazyColumn) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Material 3 y temas** dentro de Jetpack Compose: UI declarativa.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Compose, Material 3, state hoisting, Navigation Compose, LazyColumn**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar la paleta y sus variantes
2. Definir tokens de diseño centralizados
3. Auditar el uso de colores hardcodeados
4. Crear pruebas de contraste de accesibilidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Sistema de temas del producto y consistencia visual medible. | texto | sí | resultado medible |
| $stack | Jetpack Compose: UI declarativa | texto | sí | 09-kotlin-android/compose-ui |
| $tecnologias | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn | texto | sí | Compose, Material 3, state hoisting, Navigation Compose, LazyColumn |
| $tareas_clave | Documentar la paleta y sus variantes · Definir tokens de diseño centralizados · Auditar el uso de colores hardcodeados · Crear pruebas de contraste de accesibilidad | lista | sí | 3-4 pasos |
| $criterios_clave | No hay colores hardcodeados fuera del tema · El contraste mínimo de los textos cumple WCAG | lista | sí | calidad verificable |
| $prompt_guia | Auditá el sistema de temas de Ryutify: tokens centralizados, cero colores sueltos y test de contraste para accesibilidad. | texto | no | "Material 3 y temas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay colores hardcodeados fuera del tema
- [ ] El contraste mínimo de los textos cumple WCAG

## Ejemplos de prompts

- "Auditá el sistema de temas de Ryutify: tokens centralizados, cero colores sueltos y test de contraste para accesibilidad."
- "Aplica Material 3 y temas (nivel profesional) a mi trabajo actual con Jetpack Compose: UI declarativa: prioriza No hay colores hardcodeados fuera del tema"
- "Revisa mi compose-ui y dime qué pasos de Material 3 y temas me faltan en este nivel"